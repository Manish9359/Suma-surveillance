import { API_BASE_URL, REQUEST_TIMEOUT, RETRY_CONFIG } from "./config";

// ============= Types =============
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: Record<string, string[]>;
}

type RequestInterceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
type ResponseInterceptor = <T>(response: ApiResponse<T>) => ApiResponse<T> | Promise<ApiResponse<T>>;
type ErrorInterceptor = (error: ApiError) => ApiError | Promise<ApiError>;

interface RequestConfig {
  url: string;
  method: string;
  headers: HeadersInit;
  body?: string;
}

// ============= API Client Class =============
class ApiClient {
  private baseUrl: string;
  private token: string | null = null;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem("auth_token");
  }

  // ============= Token Management =============
  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }
  }

  getToken(): string | null {
    return this.token;
  }

  // ============= Interceptors =============
  addRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);
    return () => {
      const index = this.requestInterceptors.indexOf(interceptor);
      if (index > -1) this.requestInterceptors.splice(index, 1);
    };
  }

  addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
    return () => {
      const index = this.responseInterceptors.indexOf(interceptor);
      if (index > -1) this.responseInterceptors.splice(index, 1);
    };
  }

  addErrorInterceptor(interceptor: ErrorInterceptor) {
    this.errorInterceptors.push(interceptor);
    return () => {
      const index = this.errorInterceptors.indexOf(interceptor);
      if (index > -1) this.errorInterceptors.splice(index, 1);
    };
  }

  // ============= Headers =============
  private getHeaders(): HeadersInit {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // ============= Error Parsing =============
  private async parseError(response: Response): Promise<ApiError> {
    const error: ApiError = {
      message: response.statusText || "An error occurred",
      status: response.status,
    };

    try {
      const errorData = await response.json();
      error.message = errorData.message || errorData.error || error.message;
      error.code = errorData.code;
      error.details = errorData.details || errorData.errors;
    } catch {
      // Response is not JSON, use status text
      switch (response.status) {
        case 400:
          error.message = "Bad request. Please check your input.";
          break;
        case 401:
          error.message = "Unauthorized. Please login again.";
          break;
        case 403:
          error.message = "Access denied. You don't have permission.";
          break;
        case 404:
          error.message = "Resource not found.";
          break;
        case 409:
          error.message = "Conflict. Resource already exists.";
          break;
        case 422:
          error.message = "Validation error. Please check your input.";
          break;
        case 429:
          error.message = "Too many requests. Please try again later.";
          break;
        case 500:
          error.message = "Server error. Please try again later.";
          break;
        case 502:
        case 503:
        case 504:
          error.message = "Service unavailable. Please try again later.";
          break;
      }
    }

    return error;
  }

  // ============= Request with Retry =============
  private async fetchWithRetry(
    config: RequestConfig,
    retries = 0
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const response = await fetch(config.url, {
        method: config.method,
        headers: config.headers,
        body: config.body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Check if we should retry
      if (
        RETRY_CONFIG.retryableStatuses.includes(response.status) &&
        retries < RETRY_CONFIG.maxRetries
      ) {
        const delay = RETRY_CONFIG.retryDelay * Math.pow(2, retries);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.fetchWithRetry(config, retries + 1);
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === "AbortError") {
        throw { message: "Request timeout", status: 408 } as ApiError;
      }

      // Network error - retry if possible
      if (retries < RETRY_CONFIG.maxRetries) {
        const delay = RETRY_CONFIG.retryDelay * Math.pow(2, retries);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.fetchWithRetry(config, retries + 1);
      }

      throw {
        message: "Network error. Please check your connection.",
        status: 0,
      } as ApiError;
    }
  }

  // ============= Response Handler =============
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
      let error = await this.parseError(response);

      // Run error interceptors
      for (const interceptor of this.errorInterceptors) {
        error = await interceptor(error);
      }

      // Handle 401 - clear token
      if (response.status === 401) {
        this.setToken(null);
      }

      throw error;
    }

    // Handle empty responses (204 No Content)
    if (response.status === 204) {
      return { data: null as T, success: true };
    }

    const data = await response.json();
    let result: ApiResponse<T> = { data, success: true };

    // Run response interceptors
    for (const interceptor of this.responseInterceptors) {
      result = await interceptor(result);
    }

    return result;
  }

  // ============= HTTP Methods =============
  async get<T>(
    endpoint: string,
    params?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, value);
        }
      });
    }

    let config: RequestConfig = {
      url: url.toString(),
      method: "GET",
      headers: this.getHeaders(),
    };

    // Run request interceptors
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const response = await this.fetchWithRetry(config);
    return this.handleResponse<T>(response);
  }

  async post<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    let config: RequestConfig = {
      url: `${this.baseUrl}${endpoint}`,
      method: "POST",
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    };

    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const response = await this.fetchWithRetry(config);
    return this.handleResponse<T>(response);
  }

  async put<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    let config: RequestConfig = {
      url: `${this.baseUrl}${endpoint}`,
      method: "PUT",
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    };

    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const response = await this.fetchWithRetry(config);
    return this.handleResponse<T>(response);
  }

  async patch<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    let config: RequestConfig = {
      url: `${this.baseUrl}${endpoint}`,
      method: "PATCH",
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    };

    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const response = await this.fetchWithRetry(config);
    return this.handleResponse<T>(response);
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    let config: RequestConfig = {
      url: `${this.baseUrl}${endpoint}`,
      method: "DELETE",
      headers: this.getHeaders(),
    };

    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    const response = await this.fetchWithRetry(config);
    return this.handleResponse<T>(response);
  }

  // ============= Upload Helper =============
  async upload<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append("file", file);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    const headers: Record<string, string> = {};
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    // Note: Don't set Content-Type for FormData - browser will set it with boundary

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT * 2);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers,
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return this.handleResponse<T>(response);
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }
}

// ============= Export Singleton =============
export const apiClient = new ApiClient(API_BASE_URL);

// ============= Setup Default Interceptors =============
// Log requests in development
if (import.meta.env.DEV) {
  apiClient.addRequestInterceptor((config) => {
    console.log(`[API] ${config.method} ${config.url}`);
    return config;
  });

  apiClient.addErrorInterceptor((error) => {
    console.error(`[API Error] ${error.status}: ${error.message}`);
    return error;
  });
}
