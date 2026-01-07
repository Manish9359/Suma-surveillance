import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  OrderResponse,
  CreateOrderRequest,
  UpdateOrderStatusRequest,
  TrackOrderRequest,
  PaginatedResponse,
  PaginationParams,
  OrderStatus,
} from "./types";

export const orderService = {
  /**
   * GET /api/orders
   * Get all orders with pagination (Admin only)
   */
  async getOrders(
    params?: PaginationParams & { status?: OrderStatus }
  ): Promise<PaginatedResponse<OrderResponse>> {
    const queryParams: Record<string, string> = {};
    if (params?.page !== undefined) queryParams.page = String(params.page);
    if (params?.size !== undefined) queryParams.size = String(params.size);
    if (params?.sort) queryParams.sort = params.sort;
    if (params?.direction) queryParams.direction = params.direction;
    if (params?.status) queryParams.status = params.status;

    const response = await apiClient.get<PaginatedResponse<OrderResponse>>(
      API_ENDPOINTS.ORDERS.LIST,
      queryParams
    );
    return response.data;
  },

  /**
   * GET /api/orders/:id
   * Get order by ID
   */
  async getOrder(id: string): Promise<OrderResponse> {
    const response = await apiClient.get<OrderResponse>(
      API_ENDPOINTS.ORDERS.GET(id)
    );
    return response.data;
  },

  /**
   * POST /api/orders
   * Create a new order
   */
  async createOrder(order: CreateOrderRequest): Promise<OrderResponse> {
    const response = await apiClient.post<OrderResponse>(
      API_ENDPOINTS.ORDERS.CREATE,
      order
    );
    return response.data;
  },

  /**
   * PUT /api/orders/:id
   * Update order by ID (Admin only)
   */
  async updateOrder(
    id: string,
    order: Partial<CreateOrderRequest>
  ): Promise<OrderResponse> {
    const response = await apiClient.put<OrderResponse>(
      API_ENDPOINTS.ORDERS.UPDATE(id),
      order
    );
    return response.data;
  },

  /**
   * PATCH /api/orders/:id/status
   * Update order status (Admin only)
   */
  async updateOrderStatus(
    id: string,
    statusUpdate: UpdateOrderStatusRequest
  ): Promise<OrderResponse> {
    const response = await apiClient.patch<OrderResponse>(
      API_ENDPOINTS.ORDERS.UPDATE_STATUS(id),
      statusUpdate
    );
    return response.data;
  },

  /**
   * POST /api/orders/track
   * Track order by tracking number and email
   */
  async trackOrder(trackingData: TrackOrderRequest): Promise<OrderResponse> {
    const response = await apiClient.post<OrderResponse>(
      API_ENDPOINTS.ORDERS.TRACK,
      trackingData
    );
    return response.data;
  },

  /**
   * GET /api/orders/user/:userId
   * Get orders by user ID
   */
  async getOrdersByUser(
    userId: string,
    params?: PaginationParams
  ): Promise<PaginatedResponse<OrderResponse>> {
    const queryParams: Record<string, string> = {};
    if (params?.page !== undefined) queryParams.page = String(params.page);
    if (params?.size !== undefined) queryParams.size = String(params.size);

    const response = await apiClient.get<PaginatedResponse<OrderResponse>>(
      API_ENDPOINTS.ORDERS.BY_USER(userId),
      queryParams
    );
    return response.data;
  },
};
