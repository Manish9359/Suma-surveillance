import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: "new" | "sale" | "hot";
  inStock: boolean;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Arduino Uno R3 Development Board",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 256,
    badge: "sale",
    inStock: true,
  },
  {
    id: "2",
    name: "Raspberry Pi 4 Model B 8GB",
    price: 4999,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 412,
    badge: "hot",
    inStock: true,
  },
  {
    id: "3",
    name: "ESP32 WiFi Bluetooth Module",
    price: 399,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "new",
    inStock: true,
  },
  {
    id: "4",
    name: "NEMA 17 Stepper Motor",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 98,
    badge: "sale",
    inStock: true,
  },
  {
    id: "5",
    name: "HC-SR04 Ultrasonic Sensor",
    price: 79,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 324,
    inStock: true,
  },
  {
    id: "6",
    name: "12V 5A Power Adapter",
    price: 299,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 156,
    inStock: false,
  },
  {
    id: "7",
    name: "PLA Filament 1.75mm 1kg",
    price: 899,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 87,
    badge: "sale",
    inStock: true,
  },
  {
    id: "8",
    name: "Brushless DC Motor A2212",
    price: 649,
    image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 45,
    badge: "new",
    inStock: true,
  },
];

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-product-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge === "new" && (
            <Badge className="bg-badge-new text-white">New</Badge>
          )}
          {product.badge === "sale" && (
            <Badge className="bg-badge-sale text-white">Sale</Badge>
          )}
          {product.badge === "hot" && (
            <Badge className="bg-primary text-primary-foreground">Hot</Badge>
          )}
          {discount && (
            <Badge variant="secondary">-{discount}%</Badge>
          )}
        </div>
        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon-sm" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        {/* Add to cart overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
          <Button
            className="w-full gap-2"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground mt-1">
              Handpicked items for your next project
            </p>
          </div>
          <Link
            to="/shop"
            className="text-primary hover:text-primary/80 font-medium transition-colors hidden sm:block"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
