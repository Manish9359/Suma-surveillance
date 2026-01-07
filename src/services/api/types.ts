// API Types for Spring Boot Backend

// Authentication Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: UserResponse;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: UserResponse;
}

// User Types
export interface UserResponse {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "ADMIN" | "CUSTOMER";
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role?: "ADMIN" | "CUSTOMER";
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  phone?: string;
}

// Product Types
export interface ProductResponse {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviews: number;
  badge?: "new" | "sale" | "hot";
  inStock: boolean;
  stock: number;
  specifications?: Record<string, string>;
  isNewArrival?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  stock: number;
  badge?: "new" | "sale" | "hot";
  specifications?: Record<string, string>;
  isNewArrival?: boolean;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {}

// Order Types
export type OrderStatus = "PENDING" | "CONFIRMED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

export interface OrderItemResponse {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  total: number;
}

export interface OrderResponse {
  id: string;
  trackingNumber: string;
  userId: string;
  userName: string;
  userEmail: string;
  items: OrderItemResponse[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: OrderStatus;
  shippingAddress: AddressResponse;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderRequest {
  userId: string;
  items: { productId: string; quantity: number }[];
  shippingAddress: AddressRequest;
  paymentMethod: string;
  notes?: string;
}

export interface UpdateOrderStatusRequest {
  status: OrderStatus;
  notes?: string;
}

export interface TrackOrderRequest {
  trackingNumber: string;
  email: string;
}

// Address Types
export interface AddressRequest {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface AddressResponse extends AddressRequest {
  id: string;
}

// Category Types
export interface CategoryResponse {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  productCount: number;
}

export interface CreateCategoryRequest {
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

// Analytics Types
export interface DashboardAnalytics {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  revenueChange: number;
  ordersChange: number;
  productsChange: number;
  customersChange: number;
}

export interface SalesAnalytics {
  period: string;
  revenue: number;
  orders: number;
}

export interface TopProductAnalytics {
  productId: string;
  productName: string;
  productImage: string;
  totalSold: number;
  revenue: number;
}

export interface RecentOrderAnalytics {
  id: string;
  trackingNumber: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

// Pagination Types
export interface PaginatedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
  direction?: "asc" | "desc";
}
