import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[60vh] sm:min-h-[65vh] md:min-h-[72vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Smart home automation with IOTICS WiFi touch switches"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/55 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-[clamp(2.75rem,8vw,8rem)] max-w-2xl">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-fade-up">
            ⚡ Authorized IOTICS Dealer
          </span>
          <h1
            className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-secondary-foreground mb-3 sm:mb-4 animate-fade-up leading-[1.08] tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Smart Switches
            <br />
            <span className="text-primary">For Every Home</span>
          </h1>
          <p
            className="text-[clamp(0.95rem,2.6vw,1.125rem)] text-secondary-foreground/80 mb-6 sm:mb-8 animate-fade-up max-w-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Control your lights effortlessly with one touch. Easy to install, energy-efficient, and designed to fit seamlessly into your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/shop" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto whitespace-normal">
                Shop Now
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/new-arrivals" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-secondary-foreground/10 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/20 whitespace-normal text-center h-auto py-3"
              >
                🎉 View New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
