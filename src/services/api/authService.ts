import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UserResponse,
} from "./types";

export const authService = {
  /**
   * POST /api/auth/login
   * Login user with email and password
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  /**
   * POST /api/auth/register
   * Register a new user
   */
  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    const response = await apiClient.post<RegisterResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      userData
    );
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  /**
   * POST /api/auth/logout
   * Logout current user
   */
  async logout(): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    apiClient.setToken(null);
  },

  /**
   * POST /api/auth/refresh
   * Refresh authentication token
   */
  async refreshToken(): Promise<{ token: string }> {
    const response = await apiClient.post<{ token: string }>(
      API_ENDPOINTS.AUTH.REFRESH
    );
    if (response.data.token) {
      apiClient.setToken(response.data.token);
    }
    return response.data;
  },

  /**
   * GET /api/auth/me
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<UserResponse> {
    const response = await apiClient.get<UserResponse>(API_ENDPOINTS.AUTH.ME);
    return response.data;
  },
};
