import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, Heart, ShoppingCart, Star, Grid3X3, List, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products, categories, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "@/hooks/use-toast";
import { SEOHead, generateBreadcrumbSchema } from "@/components/seo/SEOHead";
import { ColorVariants } from "@/components/product/ColorVariants";
import { SmartSwitchFeatures } from "@/components/shop/SmartSwitchFeatures";

function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState("Black");
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedColor}) has been added to your cart`,
    });
    openCart();
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? "Removed from wishlist" : "Added to wishlist",
      description: isInWishlist(product.id)
        ? `${product.name} has been removed from your wishlist`
        : `${product.name} has been added to your wishlist`,
    });
  };

  const displayImage = product.colorImages?.[selectedColor] || product.image;

  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-product-hover transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name} details`}>
          <img
            src={displayImage}
            alt={`${product.name} - ${product.category} by IOTICS`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={300}
            height={300}
          />
        </Link>
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
          {discount && <Badge variant="secondary">-{discount}%</Badge>}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon-sm"
            className={`rounded-full shadow-md ${isInWishlist(product.id) ? "text-red-500" : ""}`}
            onClick={handleToggleWishlist}
            aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} aria-hidden="true" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
          <Button className="w-full gap-2" disabled={!product.inStock} onClick={handleAddToCart} aria-label={product.inStock ? `Add ${product.name} to cart` : "Out of stock"}>
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
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
        <div className="flex items-center gap-1 mb-2" aria-label={`Rating: ${product.rating} out of 5 stars`}>
          <div className="flex items-center" role="img" aria-label={`${product.rating} stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground"
                  }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        {/* Color Swatches */}
        <div className="mb-2" onClick={(e) => e.preventDefault()}>
          <ColorVariants
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            size="sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Filters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  categories,
  maxPrice,
}: {
  selectedCategories: string[];
  setSelectedCategories: (c: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  categories: string[];
  maxPrice: number;
}) {

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="space-y-6" role="region" aria-label="Product filters">
      <div>
        <h3 className="font-semibold mb-3" id="category-filter-heading">Categories</h3>
        <div className="space-y-2" role="group" aria-labelledby="category-filter-heading">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
                aria-label={`Filter by ${category}`}
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3" id="price-filter-heading">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={(v) => setPriceRange(v as [number, number])}
          max={maxPrice}
          step={50}
          className="mb-2"
          aria-labelledby="price-filter-heading"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0].toLocaleString("en-IN")}</span>
          <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox checked={inStockOnly} onCheckedChange={(v) => setInStockOnly(!!v)} aria-label="Show only in-stock products" />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}

const PRODUCTS_PER_PAGE = 8;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const urlSearchQuery = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "";

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    urlCategory ? [urlCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Load products from localStorage if available (synced with Admin changes)
  const productList = useMemo(() => {
    const saved = localStorage.getItem("admin-products");
    return saved ? (JSON.parse(saved) as Product[]) : products;
  }, []);

  // Derive dynamic filters
  const categoriesList = useMemo(() => {
    const cats = new Set(productList.map(p => p.category));
    return Array.from(cats).sort();
  }, [productList]);

  const maxPrice = useMemo(() => {
    return Math.max(...productList.map(p => p.price), 10000); // Default fallback
  }, [productList]);

  // Sync search query and category from URL when it changes
  useEffect(() => {
    if (urlSearchQuery) setSearchQuery(urlSearchQuery);
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlSearchQuery, urlCategory]);

  const filteredProducts = useMemo(() => {
    return productList.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesStock = !inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });
  }, [searchQuery, selectedCategories, priceRange, inStockOnly, productList]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", page.toString());
      setSearchParams(newParams);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange([0, maxPrice]);
    setInStockOnly(false);
    setSearchParams({ page: "1" });
  };

  const hasActiveFilters =
    searchQuery || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < maxPrice || inStockOnly;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
  ]);

  const pageTitle = urlCategory
    ? `${urlCategory} | Smart Switches Shop - Suma Surveillance Tech`
    : "Shop Smart WiFi Switches | Suma Surveillance Tech";

  const pageDescription = urlCategory
    ? `Browse ${urlCategory} - Premium IOTICS smart switches. Touch control, WiFi enabled, voice assistant compatible. Free shipping above ₹500.`
    : "Shop IOTICS smart WiFi switches, fan regulators, dimmers & smart plugs. Touch control, voice assistant compatible. Authorized dealer in Pune.";

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={urlCategory ? `/shop?category=${encodeURIComponent(urlCategory)}` : "/shop"}
        keywords="buy smart switches, IOTICS switches online, WiFi touch switch, smart home products, fan regulator, dimmer switch India"
        structuredData={breadcrumbSchema}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {urlCategory || "All Products"}
                </h1>
                <p className="text-muted-foreground">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                    aria-label="Search products"
                  />
                </div>

                {/* View mode */}
                <div className="hidden md:flex border rounded-lg p-1" role="group" aria-label="View mode">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon-sm"
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    aria-pressed={viewMode === "grid"}
                  >
                    <Grid3X3 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon-sm"
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    aria-pressed={viewMode === "list"}
                  >
                    <List className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>

                {/* Mobile filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden" aria-label="Open filters">
                      <SlidersHorizontal className="h-4 w-4 mr-2" aria-hidden="true" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <Filters
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        inStockOnly={inStockOnly}
                        setInStockOnly={setInStockOnly}
                        categories={categoriesList}
                        maxPrice={maxPrice}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </header>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6" role="region" aria-label="Active filters">
                {selectedCategories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="gap-1">
                    {cat}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSelectedCategories(selectedCategories.filter((c) => c !== cat))}
                      aria-label={`Remove ${cat} filter`}
                    />
                  </Badge>
                ))}
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} aria-label="Clear search" />
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
            )}

            <div className="flex gap-8">
              {/* Desktop filters */}
              <aside className="hidden md:block w-64 shrink-0" aria-label="Filters sidebar">
                <div className="sticky top-32 bg-card border rounded-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">Filters</h2>
                    {hasActiveFilters && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear
                      </Button>
                    )}
                  </div>
                  <Filters
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    inStockOnly={inStockOnly}
                    setInStockOnly={setInStockOnly}
                    categories={categoriesList}
                    maxPrice={maxPrice}
                  />
                </div>
              </aside>

              {/* Products grid */}
              <section className="flex-1" aria-label="Product listing">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No products found matching your criteria</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <>
                    <div
                      className={
                        viewMode === "grid"
                          ? "grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                          : "space-y-4"
                      }
                    >
                      {paginatedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Pagination">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          aria-label="Previous page"
                        >
                          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => goToPage(page)}
                            className="min-w-[40px]"
                            aria-label={`Page ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                          >
                            {page}
                          </Button>
                        ))}

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          aria-label="Next page"
                        >
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </nav>
                    )}
                  </>
                )}
              </section>
            </div>

            {/* Smart Switch Features Section */}
            <SmartSwitchFeatures />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
