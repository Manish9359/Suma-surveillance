// API Services - Clean exports for Spring Boot integration
// 
// SPRING BOOT CORS CONFIGURATION REQUIRED:
// Add this to your Spring Boot application:
//
// @Configuration
// public class CorsConfig implements WebMvcConfigurer {
//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/api/**")
//             .allowedOrigins("http://localhost:5173", "http://localhost:3000", "YOUR_PRODUCTION_URL")
//             .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
//             .allowedHeaders("*")
//             .allowCredentials(true)
//             .maxAge(3600);
//     }
// }
//
// Or use @CrossOrigin annotation on controllers

// Core exports
export { apiClient } from "./client";
export type { ApiResponse, ApiError } from "./client";
export { API_BASE_URL, API_ENDPOINTS, REQUEST_TIMEOUT, RETRY_CONFIG } from "./config";

// Type exports
export type {
  // Auth
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  // User
  UserResponse,
  CreateUserRequest,
  UpdateUserRequest,
  // Product
  ProductResponse,
  CreateProductRequest,
  UpdateProductRequest,
  // Order
  OrderResponse,
  OrderItemResponse,
  CreateOrderRequest,
  UpdateOrderStatusRequest,
  TrackOrderRequest,
  OrderStatus,
  // Address
  AddressRequest,
  AddressResponse,
  // Category
  CategoryResponse,
  CreateCategoryRequest,
  // Analytics
  DashboardAnalytics,
  SalesAnalytics,
  TopProductAnalytics,
  RecentOrderAnalytics,
  // Pagination
  PaginatedResponse,
  PaginationParams,
} from "./types";

// Service exports
export { authService } from "./authService";
export { productService } from "./productService";
export { orderService } from "./orderService";
export { userService } from "./userService";
export { analyticsService } from "./analyticsService";

// ============= API Integration Guide =============
/*
## Quick Setup

1. Create .env file in project root:
   ```
   VITE_API_BASE_URL=http://localhost:8080/api
   ```

2. Start your Spring Boot backend on port 8080

3. Ensure CORS is configured (see above)

## API Endpoints Expected by Frontend

### Authentication
POST   /api/auth/login          - { email, password } -> { token, user }
POST   /api/auth/register       - { name, email, password } -> { token, user }
POST   /api/auth/logout         - {} -> {}
POST   /api/auth/refresh        - {} -> { token }
GET    /api/auth/me             - {} -> User

### Products
GET    /api/products            - Paginated list (page, size, category, search)
GET    /api/products/:id        - Single product
POST   /api/products            - Create (admin)
PUT    /api/products/:id        - Update (admin)
DELETE /api/products/:id        - Delete (admin)
GET    /api/products/categories - List categories
GET    /api/products/search     - Search (q param)

### Orders
GET    /api/orders              - Paginated list (admin)
GET    /api/orders/:id          - Single order
POST   /api/orders              - Create order
PUT    /api/orders/:id          - Update order (admin)
PATCH  /api/orders/:id/status   - Update status (admin)
POST   /api/orders/track        - Track by tracking number
GET    /api/orders/user/:userId - User's orders

### Users (Admin)
GET    /api/users               - Paginated list
GET    /api/users/:id           - Single user
POST   /api/users               - Create user
PUT    /api/users/:id           - Update user
DELETE /api/users/:id           - Delete user
PATCH  /api/users/:id/role      - Update role

### Analytics (Admin)
GET    /api/analytics/dashboard     - Dashboard stats
GET    /api/analytics/sales         - Sales by period
GET    /api/analytics/revenue       - Revenue by date range
GET    /api/analytics/top-products  - Top selling products
GET    /api/analytics/recent-orders - Recent orders

## Response Format Expected

Success:
{
  "data": { ... },     // or array for lists
  "message": "...",    // optional
  "success": true
}

Paginated:
{
  "content": [...],
  "page": 0,
  "size": 10,
  "totalElements": 100,
  "totalPages": 10,
  "first": true,
  "last": false
}

Error:
{
  "message": "Error description",
  "code": "ERROR_CODE",         // optional
  "details": { ... }            // optional, field-level errors
}

## JWT Token

- Stored in localStorage as "auth_token"
- Sent in Authorization header: "Bearer <token>"
- Automatically cleared on 401 response
*/
