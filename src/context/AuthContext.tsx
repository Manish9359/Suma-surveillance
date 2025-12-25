import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Order {
  id: string;
  date: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  orders: Order[];
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  addOrder: (order: Omit<Order, "id" | "date" | "status">) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "techparts-auth";
const USERS_STORAGE_KEY = "techparts-users";
const ORDERS_STORAGE_KEY = "techparts-orders";

interface StoredUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    orders: [],
  });

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (savedAuth) {
      try {
        const { user } = JSON.parse(savedAuth);
        if (user) {
          const ordersData = localStorage.getItem(`${ORDERS_STORAGE_KEY}-${user.id}`);
          const orders = ordersData ? JSON.parse(ordersData) : [];
          setState({ user, isAuthenticated: true, orders });
        }
      } catch (e) {
        console.error("Failed to load auth from localStorage", e);
      }
    }
  }, []);

  const getUsers = (): StoredUser[] => {
    const usersData = localStorage.getItem(USERS_STORAGE_KEY);
    return usersData ? JSON.parse(usersData) : [];
  };

  const saveUsers = (users: StoredUser[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return { success: false, error: "Invalid email or password" };
    }

    const { password: _, ...userWithoutPassword } = user;
    const ordersData = localStorage.getItem(`${ORDERS_STORAGE_KEY}-${user.id}`);
    const orders = ordersData ? JSON.parse(ordersData) : [];

    setState({ user: userWithoutPassword, isAuthenticated: true, orders });
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: userWithoutPassword }));

    return { success: true };
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const users = getUsers();

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      email,
      name,
      password,
    };

    saveUsers([...users, newUser]);

    const { password: _, ...userWithoutPassword } = newUser;
    setState({ user: userWithoutPassword, isAuthenticated: true, orders: [] });
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ user: userWithoutPassword }));

    return { success: true };
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false, orders: [] });
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const addOrder = (orderData: Omit<Order, "id" | "date" | "status">) => {
    if (!state.user) return;

    const newOrder: Order = {
      ...orderData,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: "pending",
    };

    const updatedOrders = [...state.orders, newOrder];
    setState((prev) => ({ ...prev, orders: updatedOrders }));
    localStorage.setItem(`${ORDERS_STORAGE_KEY}-${state.user.id}`, JSON.stringify(updatedOrders));
  };

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout, addOrder }}>
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
