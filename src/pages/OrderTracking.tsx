import { useState } from "react";
import { Package, Search, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { SEOHead, generateBreadcrumbSchema } from "@/components/seo/SEOHead";
import { z } from "zod";

const trackingSchema = z.object({
  trackingNumber: z.string().trim().min(6, "Tracking number must be at least 6 characters").max(30, "Tracking number too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email too long"),
});

interface OrderStatus {
  id: string;
  status: "processing" | "shipped" | "in-transit" | "delivered";
  estimatedDelivery: string;
  items: { name: string; quantity: number }[];
  timeline: { date: string; status: string; location?: string; completed: boolean }[];
}

const mockOrderStatus: OrderStatus = {
  id: "SST-2024-78945",
  status: "in-transit",
  estimatedDelivery: "January 8, 2026",
  items: [
    { name: "6 Gang Smart Wi-Fi Touch Switch", quantity: 2 },
    { name: "Automatic Water Level Controller", quantity: 1 },
  ],
  timeline: [
    { date: "Jan 3, 2026 - 10:30 AM", status: "Order Placed", completed: true },
    { date: "Jan 3, 2026 - 2:45 PM", status: "Order Confirmed", completed: true },
    { date: "Jan 4, 2026 - 9:00 AM", status: "Shipped", location: "Pune Warehouse", completed: true },
    { date: "Jan 5, 2026 - 11:20 AM", status: "In Transit", location: "Mumbai Hub", completed: true },
    { date: "Jan 8, 2026", status: "Out for Delivery", completed: false },
    { date: "Jan 8, 2026", status: "Delivered", completed: false },
  ],
};

const statusConfig = {
  processing: { label: "Processing", color: "text-yellow-600", bg: "bg-yellow-100" },
  shipped: { label: "Shipped", color: "text-blue-600", bg: "bg-blue-100" },
  "in-transit": { label: "In Transit", color: "text-primary", bg: "bg-primary/10" },
  delivered: { label: "Delivered", color: "text-green-600", bg: "bg-green-100" },
};

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [email, setEmail] = useState("");
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ trackingNumber?: string; email?: string }>({});

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate input
    const result = trackingSchema.safeParse({ trackingNumber, email });
    if (!result.success) {
      const fieldErrors: { trackingNumber?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "trackingNumber") fieldErrors.trackingNumber = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Mock response - in production, this would call an actual API
    if (trackingNumber.toUpperCase().startsWith("SST")) {
      setOrderStatus(mockOrderStatus);
      toast({
        title: "Order found!",
        description: "Your order details are shown below.",
      });
    } else {
      setOrderStatus(null);
      toast({
        title: "Order not found",
        description: "Please check your tracking number and email, or contact support.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Track Order", url: "/orders" },
  ]);

  return (
    <>
      <SEOHead
        title="Track Your Order | Suma Surveillance Tech"
        description="Track your IOTICS smart switch order status. Enter your tracking number and email to get real-time delivery updates."
        canonicalUrl="/orders"
        keywords="track order, order status, delivery tracking, Suma order tracking"
        structuredData={breadcrumbSchema}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Banner */}
          <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Package className="h-8 w-8" aria-hidden="true" />
                <h1 className="text-3xl md:text-4xl font-bold">Track Your Order</h1>
              </div>
              <p className="text-lg md:text-xl opacity-90">
                Enter your tracking number and email to check your order status
              </p>
            </div>
          </header>

          {/* Tracking Form */}
          <section className="py-12" aria-labelledby="tracking-form-heading">
            <div className="container mx-auto px-4 max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle id="tracking-form-heading" className="flex items-center gap-2">
                    <Search className="h-5 w-5" aria-hidden="true" />
                    Find Your Order
                  </CardTitle>
                  <CardDescription>
                    Enter the tracking number from your order confirmation email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTrack} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="trackingNumber">Tracking Number</Label>
                      <Input
                        id="trackingNumber"
                        placeholder="e.g., SST-2024-78945"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className={errors.trackingNumber ? "border-destructive" : ""}
                        aria-invalid={!!errors.trackingNumber}
                        aria-describedby={errors.trackingNumber ? "trackingNumber-error" : undefined}
                      />
                      {errors.trackingNumber && (
                        <p id="trackingNumber-error" className="text-sm text-destructive" role="alert">{errors.trackingNumber}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter the email used for your order"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive" role="alert">{errors.email}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                          Searching...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                          Track Order
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Order Status Result */}
              {orderStatus && (
                <div className="mt-8 space-y-6 animate-fade-in" role="region" aria-label="Order status">
                  {/* Status Card */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Order #{orderStatus.id}</CardTitle>
                          <CardDescription>Estimated Delivery: {orderStatus.estimatedDelivery}</CardDescription>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[orderStatus.status].bg} ${statusConfig[orderStatus.status].color}`}>
                          {statusConfig[orderStatus.status].label}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-medium">Items in this order:</h4>
                        <ul>
                          {orderStatus.items.map((item, idx) => (
                            <li key={idx} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.name}</span>
                              <span className="font-medium">x{item.quantity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Truck className="h-5 w-5" aria-hidden="true" />
                        Shipment Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="relative" aria-label="Order timeline">
                        {orderStatus.timeline.map((event, idx) => (
                          <li key={idx} className="flex gap-4 pb-6 last:pb-0">
                            <div className="flex flex-col items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                event.completed 
                                  ? "bg-primary text-primary-foreground" 
                                  : "bg-muted text-muted-foreground"
                              }`} aria-hidden="true">
                                {event.completed ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : (
                                  <Clock className="h-4 w-4" />
                                )}
                              </div>
                              {idx < orderStatus.timeline.length - 1 && (
                                <div className={`w-0.5 flex-1 mt-2 ${
                                  event.completed ? "bg-primary" : "bg-muted"
                                }`} aria-hidden="true" />
                              )}
                            </div>
                            <div className="flex-1 pb-2">
                              <p className={`font-medium ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>
                                {event.status}
                                <span className="sr-only">{event.completed ? " - completed" : " - pending"}</span>
                              </p>
                              <time className="text-sm text-muted-foreground">{event.date}</time>
                              {event.location && (
                                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                  <MapPin className="h-3 w-3" aria-hidden="true" />
                                  {event.location}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Help Section */}
              <aside className="mt-8 text-center text-sm text-muted-foreground">
                <p>Need help? Contact our support team at</p>
                <a href="mailto:support@sumasurveillance.com" className="text-primary hover:underline">
                  support@sumasurveillance.com
                </a>
                <span className="mx-2">or call</span>
                <a href="tel:+919011333736" className="text-primary hover:underline">
                  +91 9011333736
                </a>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
