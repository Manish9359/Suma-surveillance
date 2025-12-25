import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, Heart, ShoppingCart, Star, Grid3X3, List } from "lucide-react";
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
          <span className="text-lg font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Filters({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
}: {
  selectedCategories: string[];
  setSelectedCategories: (c: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
}) {
  const maxPrice = Math.max(...products.map((p) => p.price));

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={(v) => setPriceRange(v as [number, number])}
          max={maxPrice}
          step={50}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox checked={inStockOnly} onCheckedChange={(v) => setInStockOnly(!!v)} />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesStock = !inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });
  }, [searchQuery, selectedCategories, priceRange, inStockOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    setInStockOnly(false);
  };

  const hasActiveFilters =
    searchQuery || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000 || inStockOnly;

  return (
    <>
      <Helmet>
        <title>Shop Electronics & Components | TechParts</title>
        <meta name="description" content="Browse our wide selection of electronics, development boards, sensors, and components for your projects." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
                <p className="text-muted-foreground">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>

                {/* View mode */}
                <div className="hidden md:flex border rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon-sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon-sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Mobile filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
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
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {selectedCategories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="gap-1">
                    {cat}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setSelectedCategories(selectedCategories.filter((c) => c !== cat))}
                    />
                  </Badge>
                ))}
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
            )}

            <div className="flex gap-8">
              {/* Desktop filters */}
              <aside className="hidden md:block w-64 shrink-0">
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
                  />
                </div>
              </aside>

              {/* Products grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No products found matching your criteria</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                        : "space-y-4"
                    }
                  >
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
