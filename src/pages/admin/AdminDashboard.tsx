import { useEffect, useState } from "react";
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Link } from "react-router-dom";
import { getDashboardAnalytics, getRecentOrders, getTopProducts } from "@/services/api/analyticsService";
import type { DashboardAnalytics, Order, TopProduct } from "@/services/api/types";

const getStatusColor = (status: string) => {
  switch (status) {
    case "DELIVERED":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "SHIPPED":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "PROCESSING":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "PENDING":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    case "CANCELLED":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<DashboardAnalytics | null>(null);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [analyticsData, ordersData, productsData] = await Promise.all([
          getDashboardAnalytics(),
          getRecentOrders(5),
          getTopProducts(5),
        ]);
        setAnalytics(analyticsData);
        setRecentOrders(ordersData);
        setTopProducts(productsData);
      } catch (err) {
        setError("Failed to load dashboard data. Make sure the backend is running.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <p className="text-destructive mb-2">{error}</p>
        <p className="text-muted-foreground text-sm">
          Ensure your Spring Boot backend is running at http://localhost:8080
        </p>
      </div>
    );
  }

  const stats = [
    {
      title: "Total Revenue",
      value: analytics ? `₹${analytics.totalRevenue.toLocaleString()}` : "₹0",
      change: analytics?.revenueChange ?? "0%",
      trend: analytics?.revenueChange?.startsWith("+") ? "up" : "down",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: analytics?.totalOrders?.toLocaleString() ?? "0",
      change: analytics?.ordersChange ?? "0%",
      trend: analytics?.ordersChange?.startsWith("+") ? "up" : "down",
      icon: ShoppingCart,
    },
    {
      title: "Total Products",
      value: analytics?.totalProducts?.toLocaleString() ?? "0",
      change: analytics?.productsChange ?? "0",
      trend: "up",
      icon: Package,
    },
    {
      title: "Total Customers",
      value: analytics?.totalCustomers?.toLocaleString() ?? "0",
      change: analytics?.customersChange ?? "0%",
      trend: analytics?.customersChange?.startsWith("+") ? "up" : "down",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the current year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analytics?.revenueData ?? []}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders This Week</CardTitle>
            <CardDescription>Daily order count for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics?.ordersData ?? []}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </div>
            <Link
              to="/admin/orders"
              className="text-sm text-primary hover:underline flex items-center"
            >
              View all <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      No orders yet
                    </TableCell>
                  </TableRow>
                ) : (
                  recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.trackingNumber}</TableCell>
                      <TableCell>{order.user?.name ?? "Guest"}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">₹{order.total.toLocaleString()}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best selling products this month</CardDescription>
            </div>
            <Link
              to="/admin/products"
              className="text-sm text-primary hover:underline flex items-center"
            >
              View all <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Sold</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                      No sales data yet
                    </TableCell>
                  </TableRow>
                ) : (
                  topProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">
                        {product.name}
                      </TableCell>
                      <TableCell className="text-right">{product.sold}</TableCell>
                      <TableCell className="text-right">₹{product.revenue.toLocaleString()}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}