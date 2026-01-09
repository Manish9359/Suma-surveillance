import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { products, Product } from "@/data/products";

// Use real products from the data source
const featuredProducts = products
  .filter((p) => p.badge === "hot" || p.badge === "new")
  .slice(0, 8);

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  // Use the first color image if available, else default image
  const displayImage = product.colorImages?.["Black"] || product.image;

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-product-hover transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={displayImage}
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
                  : product.badge === "new"
                    ? "bg-badge-new text-white"
                    : "bg-primary text-primary-foreground"
              }
            >
              {product.badge === "sale" ? "Sale" : product.badge === "new" ? "New" : "Hot"}
            </Badge>
          )}
          {discount && <Badge variant="secondary">-{discount}%</Badge>}
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
              className={`h-3.5 w-3.5 ${i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
                }`}
            />
          ))}
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
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
