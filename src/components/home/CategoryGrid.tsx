import { Link } from "react-router-dom";
import { Cpu, Zap, Settings, Battery, Printer, Plane } from "lucide-react";

const categories = [
  {
    name: "Development Boards",
    icon: Cpu,
    href: "/category/development-boards",
    color: "from-blue-500 to-blue-600",
    count: 250,
  },
  {
    name: "Sensors & Modules",
    icon: Zap,
    href: "/category/sensors-modules",
    color: "from-green-500 to-green-600",
    count: 180,
  },
  {
    name: "Motors & Drivers",
    icon: Settings,
    href: "/category/motors-drivers",
    color: "from-orange-500 to-orange-600",
    count: 120,
  },
  {
    name: "Power Supply",
    icon: Battery,
    href: "/category/power-supply",
    color: "from-yellow-500 to-yellow-600",
    count: 95,
  },
  {
    name: "3D Printing",
    icon: Printer,
    href: "/category/3d-printing",
    color: "from-purple-500 to-purple-600",
    count: 75,
  },
  {
    name: "Drone Parts",
    icon: Plane,
    href: "/category/drone-parts",
    color: "from-cyan-500 to-cyan-600",
    count: 60,
  },
];

export function CategoryGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-muted-foreground mt-1">
              Find exactly what you need for your next project
            </p>
          </div>
          <Link
            to="/categories"
            className="text-primary hover:text-primary/80 font-medium transition-colors hidden sm:block"
          >
            View All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative bg-card rounded-xl border border-border p-4 md:p-6 text-center hover:border-primary hover:shadow-card-hover transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${category.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.count}+ Products
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            to="/categories"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
