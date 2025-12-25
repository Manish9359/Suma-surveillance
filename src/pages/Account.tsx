import { useNavigate, Link } from "react-router-dom";
import { User, Package, LogOut, ShoppingBag, Calendar, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

export default function Account() {
  const navigate = useNavigate();
  const { user, isAuthenticated, orders, logout } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please login to view your account</h1>
            <Link to="/auth">
              <Button>Login / Sign Up</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    toast({ title: "Logged out", description: "You have been logged out successfully" });
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "processing":
        return "bg-blue-500";
      case "shipped":
        return "bg-purple-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-muted";
    }
  };

  return (
    <>
      <Helmet>
        <title>My Account | TechParts</title>
        <meta name="description" content="View and manage your TechParts account, orders, and settings." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-8">My Account</h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg">{user.name}</h2>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>

                  <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <Package className="h-4 w-4" />
                      Order History
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                      <User className="h-4 w-4" />
                      Profile Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </nav>
                </div>
              </div>

              {/* Main content */}
              <div className="md:col-span-2">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order History
                    </h2>
                    <Badge variant="secondary">{orders.length} orders</Badge>
                  </div>

                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
                      <Link to="/shop">
                        <Button>Browse Products</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((order) => (
                          <div
                            key={order.id}
                            className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="text-sm">
                                  <p className="font-medium">Order #{order.id.slice(0, 8).toUpperCase()}</p>
                                  <p className="text-muted-foreground flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {new Date(order.date).toLocaleDateString("en-IN", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </p>
                                </div>
                              </div>
                              <Badge className={`${getStatusColor(order.status)} text-white capitalize`}>
                                {order.status}
                              </Badge>
                            </div>

                            <div className="space-y-2">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    {item.quantity}x {item.name}
                                  </span>
                                  <span>₹{item.price * item.quantity}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between mt-3 pt-3 border-t">
                              <span className="font-semibold">Total</span>
                              <span className="font-semibold text-primary">₹{order.total.toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
