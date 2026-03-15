import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Heart, ShoppingCart, Star, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "@/hooks/use-toast";
import { SEOHead, generateProductSchema, generateBreadcrumbSchema } from "@/components/seo/SEOHead";
import { ColorVariants, colorOptions } from "@/components/product/ColorVariants";

function getColorFilter(colorName: string): string {
  switch (colorName) {
    case "White":
      return "brightness(1.6) saturate(0.1)";
    case "Blue":
      return "brightness(0.9) saturate(1.5) hue-rotate(200deg)";
    case "Gray":
      return "brightness(1.1) saturate(0.2)";
    case "Black":
    default:
      return "none";
  }
}

const mockReviews = [
  {
    id: "1",
    user: "Rahul S.",
    rating: 5,
    date: "2024-01-15",
    comment: "Excellent quality! Works perfectly for my robotics project. Fast shipping too.",
  },
  {
    id: "2",
    user: "Priya M.",
    rating: 4,
    date: "2024-01-10",
    comment: "Good product, exactly as described. Would recommend for beginners.",
  },
  {
    id: "3",
    user: "Amit K.",
    rating: 5,
    date: "2024-01-05",
    comment: "Great value for money. The documentation provided was very helpful.",
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const { addItem, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images || [product.image];
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart`,
    });
    openCart();
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist(product.id)
        ? `${product.name} has been removed from your wishlist`
        : `${product.name} has been added to your wishlist`,
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: product.category, url: `/shop?category=${encodeURIComponent(product.category)}` },
    { name: product.name, url: `/product/${product.id}` },
  ]);

  return (
    <>
      <SEOHead
        title={`${product.name} | Buy IOTICS Smart Switch - Suma Surveillance Tech`}
        description={product.description || `Buy ${product.name} at best price. ${product.category} with touch control, WiFi connectivity & voice assistant support. Free shipping above ₹500.`}
        canonicalUrl={`/product/${product.id}`}
        ogType="product"
        ogImage={product.image}
        keywords={`${product.name}, ${product.category}, IOTICS, smart switch, WiFi switch, buy online India`}
        structuredData={[productSchema, breadcrumbSchema]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" className="hover:text-primary" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/shop" className="hover:text-primary" itemProp="item">
                    <span itemProp="name">Shop</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to={`/shop?category=${product.category}`} className="hover:text-primary" itemProp="item">
                    <span itemProp="name">{product.category}</span>
                  </Link>
                  <meta itemProp="position" content="3" />
                </li>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-foreground line-clamp-1" itemProp="name">{product.name}</span>
                  <meta itemProp="position" content="4" />
                </li>
              </ol>
            </nav>

            <article className="grid lg:grid-cols-2 gap-8 mb-12" itemScope itemType="https://schema.org/Product">
              {/* Image Gallery */}
              <section className="space-y-4" aria-label="Product images">
                <div className="relative aspect-square bg-muted rounded-xl overflow-hidden">
                  <img
                    src={product.colorImages?.[selectedColor] || images[selectedImage]}
                    alt={`${product.name} - ${selectedColor} - ${product.category} smart switch by IOTICS`}
                    className="w-full h-full object-cover transition-all duration-300"
                    itemProp="image"
                    loading="eager"
                    style={{
                      filter: !product.colorImages?.[selectedColor] ? getColorFilter(selectedColor) : 'none',
                    }}
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.badge === "new" && (
                        <Badge className="bg-badge-new text-white">New</Badge>
                      )}
                      {product.badge === "sale" && (
                        <Badge className="bg-badge-sale text-white">Sale</Badge>
                      )}
                      {product.badge === "hot" && (
                        <Badge className="bg-primary text-primary-foreground">Hot</Badge>
                      )}
                    </div>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex gap-3" role="group" aria-label="Product image gallery">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === idx ? "border-primary" : "border-transparent"
                        }`}
                        aria-label={`View image ${idx + 1}`}
                        aria-pressed={selectedImage === idx}
                      >
                        <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </section>

              {/* Product Info */}
              <section>
                <h1 className="text-2xl md:text-3xl font-bold mb-2" itemProp="name">{product.name}</h1>
                <p className="text-muted-foreground mb-4" itemProp="category">{product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <div className="flex" role="img" aria-label={`${product.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-muted-foreground"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-medium" itemProp="ratingValue">{product.rating}</span>
                  <span className="text-muted-foreground">(<span itemProp="reviewCount">{product.reviews}</span> reviews)</span>
                  <meta itemProp="bestRating" content="5" />
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span className="text-3xl font-bold text-primary" itemProp="price" content={product.price.toString()}>₹{product.price.toLocaleString("en-IN")}</span>
                  <meta itemProp="priceCurrency" content="INR" />
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <Badge variant="secondary">-{discount}%</Badge>
                    </>
                  )}
                  <link itemProp="availability" href={product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"} />
                </div>

                {/* Stock status */}
                <div className="mb-6">
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">✓ In Stock</span>
                  ) : (
                    <span className="text-red-600 font-medium">✗ Out of Stock</span>
                  )}
                </div>

                {/* Color Variants */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">Color: <span className="text-muted-foreground">{selectedColor}</span></p>
                  <ColorVariants
                    selectedColor={selectedColor}
                    onColorChange={setSelectedColor}
                  />
                </div>

                {/* Description */}
                {product.description && (
                  <p className="text-muted-foreground mb-6" itemProp="description">{product.description}</p>
                )}

                {/* Brand */}
                <meta itemProp="brand" content="IOTICS" />

                {/* Quantity & Add to Cart */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-lg" role="group" aria-label="Quantity selector">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <span className="w-12 text-center font-medium" aria-live="polite">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    className="flex-1 gap-2"
                    disabled={!product.inStock}
                    onClick={handleAddToCart}
                    aria-label={product.inStock ? `Add ${product.name} to cart` : "Out of stock"}
                  >
                    <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-12 w-12 ${isInWishlist(product.id) ? "text-red-500 border-red-500" : ""}`}
                    onClick={handleToggleWishlist}
                    aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={isInWishlist(product.id)}
                  >
                    <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} aria-hidden="true" />
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 border-t pt-6">
                  <div className="text-center">
                    <Truck className="h-6 w-6 mx-auto mb-2 text-primary" aria-hidden="true" />
                    <p className="text-sm font-medium">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">Orders over ₹500</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2 text-primary" aria-hidden="true" />
                    <p className="text-sm font-medium">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">100% Protected</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" aria-hidden="true" />
                    <p className="text-sm font-medium">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">7 Days Return</p>
                  </div>
                </div>
              </section>
            </article>

            {/* Tabs */}
            <Tabs defaultValue="specifications" className="mb-12">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="pt-6">
                {product.specifications ? (
                  <dl className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <dt className="font-medium">{key}</dt>
                        <dd className="text-muted-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-muted-foreground">No specifications available.</p>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <article key={review.id} className="border-b pb-6" itemScope itemType="https://schema.org/Review">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary" aria-hidden="true">
                            {review.user[0]}
                          </div>
                          <div>
                            <p className="font-medium" itemProp="author">{review.user}</p>
                            <div className="flex" role="img" aria-label={`${review.rating} out of 5 stars`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                              <meta itemProp="ratingValue" content={review.rating.toString()} />
                              <meta itemProp="bestRating" content="5" />
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3.5 w-3.5 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-muted-foreground"
                                  }`}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <time className="text-sm text-muted-foreground" dateTime={review.date} itemProp="datePublished">{review.date}</time>
                      </div>
                      <p className="text-muted-foreground" itemProp="reviewBody">{review.comment}</p>
                    </article>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section aria-labelledby="related-products-heading">
                <h2 id="related-products-heading" className="text-2xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="group bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square bg-muted">
                        <img
                          src={p.image}
                          alt={`${p.name} - ${p.category} smart switch`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-primary font-semibold mt-1">₹{p.price.toLocaleString("en-IN")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
