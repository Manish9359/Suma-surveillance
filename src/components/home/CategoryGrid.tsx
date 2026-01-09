import { Link } from "react-router-dom";
import { Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "230V AC Power",
    icon: Zap,
    href: "/shop",
    color: "from-blue-500 to-blue-600",
    description: "Standard Home Voltage",
  },
  {
    name: "Shock Proof",
    icon: ShieldCheck,
    href: "/shop",
    color: "from-green-500 to-green-600",
    description: "Enhanced Electrical Safety",
  },
  {
    name: "App Control",
    imgSrc:
      "https://www.iotics.io/cdn/shop/files/image_17_e9544d98-8654-4bf7-9a47-33b2f9e9a0b5.png?v=1724839225",
    href: "/shop",
    color: "from-purple-500 to-purple-600",
    description: "Control via Mobile App",
  },
  {
    name: "Voice Control",
    imgSrc:
      "https://www.iotics.io/cdn/shop/files/amazon-echo-speaker-sits-wooden-table_1.png?v=1724838508",
    href: "/shop",
    color: "from-orange-500 to-orange-600",
    description: "Alexa & Google Assistant",
  },
  {
    name: "Remote Control",
    imgSrc:
      "https://www.iotics.io/cdn/shop/files/image_18.png?v=1724836212",
    href: "/shop",
    color: "from-cyan-500 to-cyan-600",
    description: "Control from Distance",
  },
  {
    name: "Tempered Glass",
    imgSrc:
      "https://www.iotics.io/cdn/shop/files/image_20_d5b03e71-aea3-4992-aa8d-9e370649894f.png?v=1724839225",
    href: "/shop",
    color: "from-yellow-500 to-yellow-600",
    description: "Durable Glass Panel",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Smart Switch Features
            </h2>
            <p className="text-muted-foreground mt-1">
              Designed for modern, safe, and connected homes
            </p>
          </div>

          <Link
            to="/shop"
            className="text-primary hover:text-primary/80 font-medium transition-colors hidden sm:block"
          >
            Explore Smart Switches →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <Link
              key={feature.name}
              to={feature.href}
              className="group relative bg-card rounded-xl border border-border p-4 md:p-6 text-center hover:border-primary hover:shadow-card-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 p-2`}
              >
                {feature.icon ? (
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                ) : (
                  <img
                    src={feature.imgSrc}
                    alt={feature.name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {feature.name}
              </h3>

              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/shop"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Explore Smart Switches →
          </Link>
        </div>
      </div>
    </section>
  );
}
