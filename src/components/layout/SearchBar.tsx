import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

interface SearchBarProps {
  className?: string;
  isMobile?: boolean;
}

export function SearchBar({ className = "", isMobile = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description?.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
      setQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        navigate(`/product/${suggestions[selectedIndex].id}`);
        setShowSuggestions(false);
        setQuery("");
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setShowSuggestions(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setShowSuggestions(true)}
          placeholder={isMobile ? "Search..." : "Search for products, categories..."}
          className={`w-full pl-10 ${isMobile ? "h-10 pr-10" : "h-11 pr-24"} rounded-lg border-2 border-border focus:border-primary transition-colors`}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={`absolute ${isMobile ? "right-1" : "right-16"} top-1/2 -translate-y-1/2 h-7 w-7`}
            onClick={() => setQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        {!isMobile && (
          <Button
            size="sm"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8"
            onClick={handleSearch}
          >
            Search
          </Button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in">
          <div className="p-2">
            <p className="text-xs text-muted-foreground px-2 py-1">Suggestions</p>
            {suggestions.map((product, index) => (
              <button
                key={product.id}
                onClick={() => handleSuggestionClick(product.id)}
                className={`w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors ${
                  index === selectedIndex
                    ? "bg-accent"
                    : "hover:bg-accent/50"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-contain rounded bg-muted"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product.category} • ₹{product.price.toLocaleString()}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={handleSearch}
            className="w-full py-2 px-4 text-sm text-primary hover:bg-accent/50 border-t border-border transition-colors"
          >
            See all results for "{query}"
          </button>
        </div>
      )}

      {/* No results message */}
      {showSuggestions && query.trim() && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 p-4 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground">No products found for "{query}"</p>
          <button
            onClick={handleSearch}
            className="text-sm text-primary hover:underline mt-1"
          >
            Search in shop
          </button>
        </div>
      )}
    </div>
  );
}