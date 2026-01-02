import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { label: "Smart Switches", href: "/shop" },
    { label: "Fan Regulators", href: "/shop" },
    { label: "Dimmers", href: "/shop" },
    { label: "Smart Plugs", href: "/shop" },
    { label: "Water Level Controller", href: "/shop" },
  ],
  support: [
    { label: "Help Center", href: "/contact" },
    { label: "Track Order", href: "/orders" },
    { label: "Shipping Info", href: "/contact" },
    { label: "Returns", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/contact#about" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Shop", href: "/shop" },
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
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
              <div className="h-10 w-10 rounded-lg bg-white border border-border shadow-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="/Suma%20logo.png" 
                  alt="Suma Logo" 
                  className="h-full w-full object-contain p-0.5" 
                />
              </div>
              <div>
                <h2 className="text-lg font-bold leading-tight">Suma Surveillance Tech</h2>
                <p className="text-xs text-secondary-foreground/70">Authorized IOTICS Dealer</p>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/70 mb-4 max-w-sm">
              <strong>Suma Surveillance Tech</strong> is an authorized dealer of <strong>IOTICS Smart Switches</strong>. We bring cutting-edge home automation solutions to transform your living spaces with smart, WiFi-enabled switches.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+919011333736"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 9011333736
              </a>
              <a
                href="mailto:sumacctvservices@gmail.com"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@sumasurveillance.com
              </a>
              <a
                href="https://www.google.com/maps/place/Suma+Surveillance+Tech+Pune/@18.6001327,73.813759,661m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2b924c4930dab:0x902a5c7597550e8a!8m2!3d18.6001327!4d73.813759!16s%2Fg%2F11m759zzv_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Pune, Maharashtra, India
              </a>
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
