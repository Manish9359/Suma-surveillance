// API Configuration for Spring Boot Backend
// Change this URL to match your Spring Boot server
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

// Request timeout in milliseconds
export const REQUEST_TIMEOUT = 30000;

// Retry configuration
export const RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000, // Base delay in ms (will be multiplied for exponential backoff)
  retryableStatuses: [408, 429, 500, 502, 503, 504],
};

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    ME: "/auth/me",
  },
  
  // Products
  PRODUCTS: {
    LIST: "/products",
    GET: (id: string) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
    DELETE: (id: string) => `/products/${id}`,
    CATEGORIES: "/products/categories",
    SEARCH: "/products/search",
  },
  
  // Orders
  ORDERS: {
    LIST: "/orders",
    GET: (id: string) => `/orders/${id}`,
    CREATE: "/orders",
    UPDATE: (id: string) => `/orders/${id}`,
    UPDATE_STATUS: (id: string) => `/orders/${id}/status`,
    TRACK: "/orders/track",
    BY_USER: (userId: string) => `/orders/user/${userId}`,
  },
  
  // Users
  USERS: {
    LIST: "/users",
    GET: (id: string) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
    UPDATE_ROLE: (id: string) => `/users/${id}/role`,
  },
  
  // Analytics
  ANALYTICS: {
    DASHBOARD: "/analytics/dashboard",
    SALES: "/analytics/sales",
    REVENUE: "/analytics/revenue",
    TOP_PRODUCTS: "/analytics/top-products",
    RECENT_ORDERS: "/analytics/recent-orders",
  },
  
  // Categories
  CATEGORIES: {
    LIST: "/categories",
    GET: (id: string) => `/categories/${id}`,
    CREATE: "/categories",
    UPDATE: (id: string) => `/categories/${id}`,
    DELETE: (id: string) => `/categories/${id}`,
  },
};
