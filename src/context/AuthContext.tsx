import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { authService } from "@/services/api/authService";
import { orderService } from "@/services/api/orderService";
import { apiClient } from "@/services/api/client";
import type { OrderResponse, OrderItemResponse } from "@/services/api/types";

export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  orders: Order[];
  isLoading: boolean;
}

interface AuthContextType extends Omit<AuthState, 'isLoading'> {
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  addOrder: (order: Omit<Order, "id" | "date" | "status">) => Promise<{ success: boolean; error?: string }>;
  refreshOrders: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_STORAGE_KEY = "suma-auth-token";

// Helper to map API order response to local Order type
const mapOrderResponseToOrder = (orderResponse: OrderResponse): Order => {
  const statusMap: Record<string, Order["status"]> = {
    PENDING: "pending",
    CONFIRMED: "pending",
    PROCESSING: "processing",
    SHIPPED: "shipped",
    DELIVERED: "delivered",
    CANCELLED: "pending",
  };

  return {
    id: orderResponse.id,
    date: orderResponse.createdAt,
    items: orderResponse.items.map((item: OrderItemResponse) => ({
      productId: item.productId,
      name: item.productName,
      quantity: item.quantity,
      price: item.price,
    })),
    total: orderResponse.total,
    status: statusMap[orderResponse.status] || "pending",
  };
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    orders: [],
    isLoading: true,
  });

  // Initialize auth state from stored token
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
      
      if (storedToken) {
        apiClient.setToken(storedToken);
        
        try {
          // Verify token and get current user from backend
          const userResponse = await authService.getCurrentUser();
          const user: User = {
            id: userResponse.id,
            email: userResponse.email,
            name: userResponse.name,
            role: userResponse.role,
          };
          
          // Fetch user orders from backend
          const ordersResponse = await orderService.getOrdersByUser(user.id);
          const orders: Order[] = ordersResponse.content.map(mapOrderResponseToOrder);
          
          setState({
            user,
            isAuthenticated: true,
            orders,
            isLoading: false,
          });
        } catch (error) {
          // Token is invalid or expired
          console.error("Failed to restore auth session:", error);
          localStorage.removeItem(TOKEN_STORAGE_KEY);
          apiClient.setToken(null);
          setState({
            user: null,
            isAuthenticated: false,
            orders: [],
            isLoading: false,
          });
        }
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await authService.login({ email, password });
      
      if (response.token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, response.token);
      }
      
      const user: User = {
        id: response.user.id,
        email: response.user.email,
        name: response.user.name,
        role: response.user.role,
      };
      
      // Fetch user orders
      let orders: Order[] = [];
      try {
        const ordersResponse = await orderService.getOrdersByUser(user.id);
        orders = ordersResponse.content.map(mapOrderResponseToOrder);
      } catch (orderError) {
        console.error("Failed to fetch orders:", orderError);
      }
      
      setState({
        user,
        isAuthenticated: true,
        orders,
        isLoading: false,
      });
      
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.message || "Invalid email or password";
      return { success: false, error: errorMessage };
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await authService.register({ name, email, password });
      
      if (response.token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, response.token);
      }
      
      const user: User = {
        id: response.user.id,
        email: response.user.email,
        name: response.user.name,
        role: response.user.role,
      };
      
      setState({
        user,
        isAuthenticated: true,
        orders: [],
        isLoading: false,
      });
      
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.message || "Registration failed";
      return { success: false, error: errorMessage };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      apiClient.setToken(null);
      setState({
        user: null,
        isAuthenticated: false,
        orders: [],
        isLoading: false,
      });
    }
  };

  const addOrder = async (orderData: Omit<Order, "id" | "date" | "status">): Promise<{ success: boolean; error?: string }> => {
    if (!state.user) {
      return { success: false, error: "User not authenticated" };
    }

    try {
      const response = await orderService.createOrder({
        userId: state.user.id,
        items: orderData.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        shippingAddress: {
          street: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        },
        paymentMethod: "online",
      });
      
      const newOrder = mapOrderResponseToOrder(response);

      setState((prev) => ({
        ...prev,
        orders: [...prev.orders, newOrder],
      }));
      
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.message || "Failed to create order";
      return { success: false, error: errorMessage };
    }
  };

  const refreshOrders = useCallback(async (): Promise<void> => {
    if (!state.user) return;
    
    try {
      const ordersResponse = await orderService.getOrdersByUser(state.user.id);
      const orders = ordersResponse.content.map(mapOrderResponseToOrder);
      
      setState((prev) => ({ ...prev, orders }));
    } catch (error) {
      console.error("Failed to refresh orders:", error);
    }
  }, [state.user]);

  return (
    <AuthContext.Provider 
      value={{ 
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        orders: state.orders,
        isLoading: state.isLoading,
        login, 
        signup, 
        logout, 
        addOrder,
        refreshOrders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
