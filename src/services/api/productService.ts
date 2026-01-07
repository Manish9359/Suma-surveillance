import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  ProductResponse,
  CreateProductRequest,
  UpdateProductRequest,
  CategoryResponse,
  PaginatedResponse,
  PaginationParams,
} from "./types";

export const productService = {
  /**
   * GET /api/products
   * Get all products with pagination
   */
  async getProducts(
    params?: PaginationParams & { category?: string; search?: string }
  ): Promise<PaginatedResponse<ProductResponse>> {
    const queryParams: Record<string, string> = {};
    if (params?.page !== undefined) queryParams.page = String(params.page);
    if (params?.size !== undefined) queryParams.size = String(params.size);
    if (params?.sort) queryParams.sort = params.sort;
    if (params?.direction) queryParams.direction = params.direction;
    if (params?.category) queryParams.category = params.category;
    if (params?.search) queryParams.search = params.search;

    const response = await apiClient.get<PaginatedResponse<ProductResponse>>(
      API_ENDPOINTS.PRODUCTS.LIST,
      queryParams
    );
    return response.data;
  },

  /**
   * GET /api/products/:id
   * Get product by ID
   */
  async getProduct(id: string): Promise<ProductResponse> {
    const response = await apiClient.get<ProductResponse>(
      API_ENDPOINTS.PRODUCTS.GET(id)
    );
    return response.data;
  },

  /**
   * POST /api/products
   * Create a new product (Admin only)
   */
  async createProduct(product: CreateProductRequest): Promise<ProductResponse> {
    const response = await apiClient.post<ProductResponse>(
      API_ENDPOINTS.PRODUCTS.CREATE,
      product
    );
    return response.data;
  },

  /**
   * PUT /api/products/:id
   * Update product by ID (Admin only)
   */
  async updateProduct(
    id: string,
    product: UpdateProductRequest
  ): Promise<ProductResponse> {
    const response = await apiClient.put<ProductResponse>(
      API_ENDPOINTS.PRODUCTS.UPDATE(id),
      product
    );
    return response.data;
  },

  /**
   * DELETE /api/products/:id
   * Delete product by ID (Admin only)
   */
  async deleteProduct(id: string): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.PRODUCTS.DELETE(id));
  },

  /**
   * GET /api/products/categories
   * Get all product categories
   */
  async getCategories(): Promise<CategoryResponse[]> {
    const response = await apiClient.get<CategoryResponse[]>(
      API_ENDPOINTS.PRODUCTS.CATEGORIES
    );
    return response.data;
  },

  /**
   * GET /api/products/search
   * Search products by query
   */
  async searchProducts(
    query: string,
    params?: PaginationParams
  ): Promise<PaginatedResponse<ProductResponse>> {
    const queryParams: Record<string, string> = { q: query };
    if (params?.page !== undefined) queryParams.page = String(params.page);
    if (params?.size !== undefined) queryParams.size = String(params.size);

    const response = await apiClient.get<PaginatedResponse<ProductResponse>>(
      API_ENDPOINTS.PRODUCTS.SEARCH,
      queryParams
    );
    return response.data;
  },
};
