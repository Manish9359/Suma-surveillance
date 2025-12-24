import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const promos = [
  {
    title: "Arduino Starter Kits",
    subtitle: "Perfect for beginners",
    discount: "Up to 30% Off",
    bg: "from-blue-500 to-blue-700",
    href: "/category/arduino-kits",
  },
  {
    title: "3D Printing Supplies",
    subtitle: "Premium filaments",
    discount: "Buy 2 Get 1 Free",
    bg: "from-purple-500 to-purple-700",
    href: "/category/3d-printing",
  },
  {
    title: "Sensor Bundles",
    subtitle: "Complete sensor packs",
    discount: "Starting ₹299",
    bg: "from-green-500 to-green-700",
    href: "/category/sensors",
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
              {/* Decorative circles */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
