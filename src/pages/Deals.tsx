import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Percent, Tag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDeals, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

function DealCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

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
        <div className="absolute top-3 left-3">
          <Badge className="bg-badge-sale text-white text-lg px-3 py-1">
            <Percent className="h-4 w-4 mr-1" />
            {discount}% OFF
          </Badge>
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
        <div className="flex items-center gap-1 mb-3">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">₹{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600">
            Save ₹{savings}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default function Deals() {
  const deals = useMemo(() => getDeals(), []);

  // Sort deals by discount percentage
  const sortedDeals = useMemo(() => {
    return [...deals].sort((a, b) => {
      const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
      const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
      return discountB - discountA;
    });
  }, [deals]);

  const totalSavings = useMemo(() => {
    return deals.reduce((sum, p) => sum + (p.originalPrice ? p.originalPrice - p.price : 0), 0);
  }, [deals]);

  return (
    <>
      <Helmet>
        <title>Deals & Offers | Suma Surveillance Tech</title>
        <meta name="description" content="Grab the best deals on IOTICS Smart Switches. Limited time offers with up to 25% off!" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Banner */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Tag className="h-8 w-8" />
                <h1 className="text-3xl md:text-4xl font-bold">Hot Deals & Offers</h1>
              </div>
              <p className="text-lg md:text-xl opacity-90 mb-4">
                Limited time discounts on premium IOTICS Smart Switches
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-2">
                <Percent className="h-5 w-5" />
                <span className="font-semibold">{deals.length} products on sale • Potential savings up to ₹{totalSavings}</span>
              </div>
            </div>
          </section>

          {/* Deals Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {sortedDeals.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No deals available at the moment</p>
                  <Button asChild>
                    <Link to="/shop">Browse All Products</Link>
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {sortedDeals.map((product) => (
                    <DealCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
