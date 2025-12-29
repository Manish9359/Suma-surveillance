import { Phone, Mail, User, ShoppingCart, Heart, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { SearchBar } from "./SearchBar";

const categories = [
  "Smart Switches",
  "Fan Regulators",
  "Dimmers",
  "Smart Plugs",
  "Water Level Controller",
  "Accessories",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Deals", href: "/deals" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-topbar border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href="tel:+919011333736"
                className="flex items-center gap-1.5 md:gap-2 text-topbar-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+91 9011333736</span>
              </a>
              <a
                href="mailto:sumacctvservices@gmail.com"
                className="flex items-center gap-1.5 md:gap-2 text-topbar-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden md:inline">support@sumasurveillance.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <Link
                to="/orders"
                className="text-topbar-foreground hover:text-primary transition-colors hidden sm:block text-xs md:text-sm"
              >
                Track Order
              </Link>
              <Link
                to={isAuthenticated ? "/account" : "/auth"}
                className="flex items-center gap-1 md:gap-1.5 text-topbar-foreground hover:text-primary transition-colors"
              >
                <User className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-xs md:text-sm">{isAuthenticated ? "My Account" : "Login"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between gap-3 md:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/Suma logo.png" 
                  alt="Suma Surveillance Tech Logo" 
                  className="h-full w-full object-contain p-0.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-primary font-bold text-lg">SST</span>';
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base md:text-lg font-bold text-foreground leading-tight">Suma Surveillance Tech</h1>
                <p className="text-[10px] md:text-xs text-muted-foreground">Your Home, Our Switches</p>
              </div>
            </Link>

            {/* Search bar - Desktop */}
            <SearchBar className="flex-1 max-w-2xl hidden md:block" />

            {/* Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9 md:h-10 md:w-10">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 md:h-10 md:w-10" onClick={openCart}>
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="pb-3 md:hidden">
            <SearchBar isMobile />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            {/* Categories dropdown */}
            <div className="relative">
              <Button
                variant="nav"
                className="h-12 px-4 gap-2 font-medium"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <Menu className="h-4 w-4" />
                All Categories
                <ChevronDown className={`h-4 w-4 transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
              </Button>
              {categoriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-card-hover py-2 animate-fade-in z-50">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/shop?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Nav links */}
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href}>
                <Button variant="nav" className="h-12 px-4 font-medium">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/shop?category=${encodeURIComponent(category)}`}
                    className="block py-1.5 text-sm text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
