import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  DashboardAnalytics,
  SalesAnalytics,
  TopProductAnalytics,
  RecentOrderAnalytics,
} from "./types";

export const analyticsService = {
  /**
   * GET /api/analytics/dashboard
   * Get dashboard overview analytics (Admin only)
   */
  async getDashboardAnalytics(): Promise<DashboardAnalytics> {
    const response = await apiClient.get<DashboardAnalytics>(
      API_ENDPOINTS.ANALYTICS.DASHBOARD
    );
    return response.data;
  },

  /**
   * GET /api/analytics/sales
   * Get sales analytics by period (Admin only)
   */
  async getSalesAnalytics(
    period: "daily" | "weekly" | "monthly" | "yearly" = "monthly"
  ): Promise<SalesAnalytics[]> {
    const response = await apiClient.get<SalesAnalytics[]>(
      API_ENDPOINTS.ANALYTICS.SALES,
      { period }
    );
    return response.data;
  },

  /**
   * GET /api/analytics/revenue
   * Get revenue analytics with date range (Admin only)
   */
  async getRevenueAnalytics(
    startDate?: string,
    endDate?: string
  ): Promise<SalesAnalytics[]> {
    const params: Record<string, string> = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    const response = await apiClient.get<SalesAnalytics[]>(
      API_ENDPOINTS.ANALYTICS.REVENUE,
      params
    );
    return response.data;
  },

  /**
   * GET /api/analytics/top-products
   * Get top selling products (Admin only)
   */
  async getTopProducts(limit: number = 5): Promise<TopProductAnalytics[]> {
    const response = await apiClient.get<TopProductAnalytics[]>(
      API_ENDPOINTS.ANALYTICS.TOP_PRODUCTS,
      { limit: String(limit) }
    );
    return response.data;
  },

  /**
   * GET /api/analytics/recent-orders
   * Get recent orders for dashboard (Admin only)
   */
  async getRecentOrders(limit: number = 5): Promise<RecentOrderAnalytics[]> {
    const response = await apiClient.get<RecentOrderAnalytics[]>(
      API_ENDPOINTS.ANALYTICS.RECENT_ORDERS,
      { limit: String(limit) }
    );
    return response.data;
  },
};
