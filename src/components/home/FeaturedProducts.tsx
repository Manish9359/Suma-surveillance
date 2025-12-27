import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Product type
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: "new" | "sale";
  inStock: boolean;
}

// Featured Smart Wi‑Fi Switches
const featuredProducts: Product[] = [
  {
    id: "sw1",
    name: "3S1F1P Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 4999,
    originalPrice: 5999,
    image: "https://www.iotics.io/cdn/shop/files/3S1F1P.png?v=1726747590&width=533",
    rating: 4.6,
    reviews: 12,
    badge: "new",
    inStock: true,
  },
  {
    id: "sw2",
    name: "4S1P Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 5699,
    originalPrice: 6999,
    image: "https://www.iotics.io/cdn/shop/files/4S1P.png?v=1726746572&width=533",
    rating: 4.7,
    reviews: 18,
    badge: "sale",
    inStock: true,
  },
  {
    id: "sw3",
    name: "5S1D1P Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 6799,
    originalPrice: 7999,
    image: "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533",
    rating: 4.8,
    reviews: 25,
    badge: "sale",
    inStock: true,
  },
  {
    id: "sw4",
    name: "6S1P Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 7499,
    originalPrice: 8999,
    image: "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_360x360.png?v=1756790013&width=533",
    rating: 4.7,
    reviews: 20,
    badge: "new",
    inStock: true,
  },
  {
    id: "sw5",
    name: "7S1F Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 8499,
    originalPrice: 9999,
    image: "https://www.iotics.io/cdn/shop/files/7S1F-removebg-preview.png?v=1726818362&width=533",
    rating: 4.9,
    reviews: 32,
    badge: "new",
    inStock: true,
  },
  {
    id: "sw6",
    name: "8M12S_BK Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 8968,
    originalPrice: 11210,
    image: "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView_360x360.png?v=1756789875&width=533",
    rating: 4.8,
    reviews: 24,
    badge: "sale",
    inStock: true,
  },
{
    id: "sw7",
    name: "2P Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/Side-3_5.png?v=1726743202",
    rating: 4.7,
    reviews: 15,
    badge: "new",
    inStock: true,
  },
  {
    id: "sw8",
    name: "Curtain Controller Smart Wi‑Fi Switch",
    category: "Smart Switch",
    price: 5192,
    originalPrice: 6490,
    image: "https://www.iotics.io/cdn/shop/files/Side_dbe44e11-4853-4666-84db-33e41c280a05.png?v=1726731989&width=324",
    rating: 4.9,
    reviews: 10,
    badge: "sale",
    inStock: true,
  },
];

function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-product-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <Badge
              className={
                product.badge === "sale"
                  ? "bg-badge-sale text-white"
                  : "bg-badge-new text-white"
              }
            >
              {product.badge === "sale" ? "Sale" : "New"}
            </Badge>
          )}
          <Badge variant="secondary">-{discount}%</Badge>
        </div>

        {/* Quick action */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon-sm" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to cart */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
          <Button className="w-full gap-2" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>

        <div className="flex items-center gap-1 mb-2">
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
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Featured Smart Wi‑Fi Switches
            </h2>
            <p className="text-muted-foreground mt-1">
              Top smart switches for home automation
            </p>
          </div>
          <Link
            to="/shop"
            className="text-primary hover:text-primary/80 font-medium transition-colors hidden sm:block"
          >
            View All Switches →
          </Link>
        </div>

        {/* Products grid */}
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

        {/* Call to action */}
        <div className="mt-8 text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Switches
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
