import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNewArrivals, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
    openCart();
  };

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-product-hover transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <Badge className="bg-badge-new text-white">New Arrival</Badge>
          {discount && <Badge variant="secondary">-{discount}%</Badge>}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon-sm" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
          <Button className="w-full gap-2" disabled={!product.inStock} onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
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
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewArrivals() {
  const newArrivals = getNewArrivals();

  return (
    <>
      <Helmet>
        <title>New Arrivals - Smart WiFi Switches | Suma Surveillance Tech</title>
        <meta name="description" content="Discover our latest smart WiFi switches and home automation products. Shop new arrivals with modern designs and advanced features." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="bg-badge-new text-white mb-4">Just Launched</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">New Arrivals</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our latest collection of smart WiFi switches and home automation products. 
                Be the first to experience cutting-edge technology with modern design.
              </p>
            </div>

            {/* Products Grid */}
            {newArrivals.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No new arrivals at the moment</p>
                <Link to="/shop">
                  <Button variant="outline">Browse All Products</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {newArrivals.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
