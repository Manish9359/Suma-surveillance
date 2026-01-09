import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const promos = [
  {
    title: "Smart Wi-Fi Touch Switches",
    subtitle: "Control lights & appliances remotely",
    discount: "Starting ₹2000",
    bg: "from-blue-500 to-blue-700",
    href: "/shop",
  },
  {
    title: "Automatic Water Level Controller",
    subtitle: "Save water & energy effortlessly",
    discount: "Up to 20% Off",
    bg: "from-purple-500 to-purple-700",
    href: "/shop",
  },
  {
    title: "Home Automation Solutions",
    subtitle: "App & voice control for smart living",
    discount: "Bundle Offers Available",
    bg: "from-green-500 to-green-700",
    href: "/shop",
  },
];

export function PromoBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {promos.map((promo, index) => (
            <Link
              key={promo.title}
              to={promo.href}
              className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br ${promo.bg} text-white animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <p className="text-white/80 text-sm mb-1">{promo.subtitle}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-lg font-semibold text-white/90 mb-4">{promo.discount}</p>
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 group-hover:gap-3 transition-all"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
