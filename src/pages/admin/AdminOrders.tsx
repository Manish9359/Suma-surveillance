import { useState, useEffect } from "react";
import {
  Search,
  Eye,
  MoreHorizontal,
  Filter,
  Download,
  Truck,
  Package,
  CheckCircle,
  Clock,
  XCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { getOrders, updateOrderStatus } from "@/services/api/orderService";
import type { Order } from "@/services/api/types";

type OrderStatus = "PENDING" | "CONFIRMED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";

const statusConfig: Record<OrderStatus, { icon: React.ElementType; color: string; label: string }> = {
  PENDING: { icon: Clock, color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300", label: "Pending" },
  CONFIRMED: { icon: CheckCircle, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300", label: "Confirmed" },
  PROCESSING: { icon: Package, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300", label: "Processing" },
  SHIPPED: { icon: Truck, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300", label: "Shipped" },
  DELIVERED: { icon: CheckCircle, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300", label: "Delivered" },
  CANCELLED: { icon: XCircle, color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300", label: "Cancelled" },
};

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getOrders();
      setOrders(data.content ?? []);
    } catch (error) {
      toast.error("Failed to load orders. Ensure backend is running.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.trackingNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user?.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailsOpen(true);
  };

  const handleStatusUpdate = async (orderId: string, status: OrderStatus) => {
    try {
      await updateOrderStatus(orderId, status);
      toast.success(`Order status updated to ${status}`);
      fetchOrders();
      if (selectedOrder?.id === orderId) {
        setSelectedOrder({ ...selectedOrder, status });
      }
    } catch (error) {
      toast.error("Failed to update order status");
      console.error(error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusCounts = () => {
    const counts: Record<string, number> = {};
    Object.keys(statusConfig).forEach((status) => {
      counts[status] = orders.filter((o) => o.status === status).length;
    });
    return counts;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const statusCounts = getStatusCounts();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Orders</h2>
          <p className="text-muted-foreground">Manage and track customer orders</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        {(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"] as OrderStatus[]).map(
          (status) => {
            const config = statusConfig[status];
            return (
              <Card key={status}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {config.label}
                  </CardTitle>
                  <config.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{statusCounts[status] ?? 0}</div>
                </CardContent>
              </Card>
            );
          }
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by order ID, customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {Object.entries(statusConfig).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    No orders found
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => {
                  const status = statusConfig[order.status as OrderStatus] ?? statusConfig.PENDING;
                  return (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.trackingNumber}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.user?.name ?? "Guest"}</p>
                          <p className="text-sm text-muted-foreground">{order.user?.email ?? ""}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {order.items?.length ?? 0} item{(order.items?.length ?? 0) > 1 ? "s" : ""}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ₹{order.total.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={status.color}>
                          <status.icon className="mr-1 h-3 w-3" />
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(order.createdAt)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleViewOrder(order)}>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, "PROCESSING")}>
                              Mark as Processing
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, "SHIPPED")}>
                              Mark as Shipped
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusUpdate(order.id, "DELIVERED")}>
                              Mark as Delivered
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => handleStatusUpdate(order.id, "CANCELLED")}
                            >
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              {selectedOrder?.trackingNumber} • {selectedOrder && formatDate(selectedOrder.createdAt)}
            </DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Status:</span>
                <Badge
                  variant="secondary"
                  className={statusConfig[selectedOrder.status as OrderStatus]?.color ?? ""}
                >
                  {statusConfig[selectedOrder.status as OrderStatus]?.label ?? selectedOrder.status}
                </Badge>
              </div>

              <Separator />

              {/* Customer Info */}
              <div>
                <h4 className="font-medium mb-2">Customer Information</h4>
                <div className="text-sm space-y-1">
                  <p>{selectedOrder.user?.name ?? "Guest"}</p>
                  <p className="text-muted-foreground">{selectedOrder.user?.email ?? ""}</p>
                  <p className="text-muted-foreground">{selectedOrder.shippingAddress?.fullAddress ?? ""}</p>
                </div>
              </div>

              <Separator />

              {/* Order Items */}
              <div>
                <h4 className="font-medium mb-2">Order Items</h4>
                <div className="space-y-2">
                  {selectedOrder.items?.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {item.productName} × {item.quantity}
                      </span>
                      <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  )) ?? <p className="text-muted-foreground">No items</p>}
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{selectedOrder.total.toLocaleString()}</span>
                </div>
              </div>

              <Separator />

              {/* Payment Info */}
              <div>
                <h4 className="font-medium mb-2">Payment Information</h4>
                <p className="text-sm text-muted-foreground">
                  Payment Method: {selectedOrder.paymentMethod ?? "N/A"}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
              Close
            </Button>
            <Select
              onValueChange={(value) => {
                if (selectedOrder) {
                  handleStatusUpdate(selectedOrder.id, value as OrderStatus);
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Update Status" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(statusConfig).map(([key, { label }]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}