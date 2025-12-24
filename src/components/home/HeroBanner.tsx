import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Electronic components and circuit boards on workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 md:py-24 lg:py-32 max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 animate-fade-up">
            🎉 New Arrivals Available
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Electronic Components
            <br />
            <span className="text-primary">For Every Project</span>
          </h1>
          <p className="text-lg text-secondary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get every component you need with just one click. From Arduino to sensors, motors to 3D printing parts - we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/shop">
              <Button variant="hero" size="xl" className="gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button variant="outline" size="xl" className="bg-secondary-foreground/10 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/20">
                View New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
