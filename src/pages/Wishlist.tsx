import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { Product } from "@/data/products";

function WishlistCard({ product }: { product: Product }) {
  const { removeItem } = useWishlist();
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
    openCart();
  };

  const handleRemove = () => {
    removeItem(product.id);
    toast({
      title: "Removed from wishlist",
      description: `${product.name} has been removed from your wishlist`,
    });
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
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-destructive hover:text-white"
          onClick={handleRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 left-3">
            <span className="bg-badge-sale text-white text-xs px-2 py-1 rounded-full">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
        <Button 
          className="w-full gap-2" 
          disabled={!product.inStock} 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
}

export default function Wishlist() {
  const { items, clearWishlist } = useWishlist();

  return (
    <>
      <Helmet>
        <title>My Wishlist | Suma Surveillance Tech</title>
        <meta name="description" content="View and manage your saved products" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Banner */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="h-8 w-8" />
                <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
              </div>
              <p className="text-lg md:text-xl opacity-90">
                {items.length} {items.length === 1 ? "item" : "items"} saved for later
              </p>
            </div>
          </section>

          {/* Wishlist Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
                  <p className="text-muted-foreground mb-6">
                    Start adding products you love to your wishlist
                  </p>
                  <Button asChild>
                    <Link to="/shop">Browse Products</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex justify-end mb-6">
                    <Button variant="outline" onClick={clearWishlist}>
                      Clear Wishlist
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {items.map((product) => (
                      <WishlistCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
