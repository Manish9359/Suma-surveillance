import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { label: "Development Boards", href: "/category/development-boards" },
    { label: "Sensors & Modules", href: "/category/sensors-modules" },
    { label: "Motors & Drivers", href: "/category/motors-drivers" },
    { label: "Power Supply", href: "/category/power-supply" },
    { label: "3D Printing", href: "/category/3d-printing" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Track Order", href: "/orders" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
              <p className="text-sm text-secondary-foreground/70">
                Get updates on new products and exclusive offers
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <img src="public/suma logo.png" alt="Suma Logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="text-lg font-bold leading-tight">Suma Surveillance Tech</h2>
                <p className="text-xs text-secondary-foreground/70">Your Home, Our Switches</p>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-4 max-w-sm">
              Your one-stop shop for Home Automation.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:1800-123-4567"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 9011333736
              </a>
              <a
                href="mailto:support@techparts.com"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@sumasurveillance.com
              </a>
              <p className="flex items-center gap-2 text-secondary-foreground/70">
                <MapPin className="h-4 w-4" />
                123 Tech Street, Innovation City
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © 2026 Suma Surveillance Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
