import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  UserResponse,
  CreateUserRequest,
  UpdateUserRequest,
  PaginatedResponse,
  PaginationParams,
} from "./types";

export const userService = {
  /**
   * GET /api/users
   * Get all users with pagination (Admin only)
   */
  async getUsers(
    params?: PaginationParams & { role?: string; search?: string }
  ): Promise<PaginatedResponse<UserResponse>> {
    const queryParams: Record<string, string> = {};
    if (params?.page !== undefined) queryParams.page = String(params.page);
    if (params?.size !== undefined) queryParams.size = String(params.size);
    if (params?.sort) queryParams.sort = params.sort;
    if (params?.direction) queryParams.direction = params.direction;
    if (params?.role) queryParams.role = params.role;
    if (params?.search) queryParams.search = params.search;

    const response = await apiClient.get<PaginatedResponse<UserResponse>>(
      API_ENDPOINTS.USERS.LIST,
      queryParams
    );
    return response.data;
  },

  /**
   * GET /api/users/:id
   * Get user by ID (Admin only)
   */
  async getUser(id: string): Promise<UserResponse> {
    const response = await apiClient.get<UserResponse>(
      API_ENDPOINTS.USERS.GET(id)
    );
    return response.data;
  },

  /**
   * POST /api/users
   * Create a new user (Admin only)
   */
  async createUser(user: CreateUserRequest): Promise<UserResponse> {
    const response = await apiClient.post<UserResponse>(
      API_ENDPOINTS.USERS.CREATE,
      user
    );
    return response.data;
  },

  /**
   * PUT /api/users/:id
   * Update user by ID (Admin only)
   */
  async updateUser(id: string, user: UpdateUserRequest): Promise<UserResponse> {
    const response = await apiClient.put<UserResponse>(
      API_ENDPOINTS.USERS.UPDATE(id),
      user
    );
    return response.data;
  },

  /**
   * DELETE /api/users/:id
   * Delete user by ID (Admin only)
   */
  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.USERS.DELETE(id));
  },

  /**
   * PATCH /api/users/:id/role
   * Update user role (Admin only)
   */
  async updateUserRole(
    id: string,
    role: "ADMIN" | "CUSTOMER"
  ): Promise<UserResponse> {
    const response = await apiClient.patch<UserResponse>(
      API_ENDPOINTS.USERS.UPDATE_ROLE(id),
      { role }
    );
    return response.data;
  },
};
