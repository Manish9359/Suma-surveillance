export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  badge?: "new" | "sale" | "hot";
  inStock: boolean;
  category: string;
  description?: string;
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "1",
    name: "8 Gang (12 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 8968,
    originalPrice: 11210,
    image: "https://www.iotics.io/cdn/shop/files/8M12S_BK_Side_View.png?v=1756789875&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/8M12S_BK_Side_View.png?v=1756789875&width=533",
      "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-2_360x360.png?v=1756789875",
      "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-3_360x360.png?v=1756789875",
      "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView_360x360.png?v=1756789875"
    ],
    rating: 5.0,
    reviews: 12,
    badge: "new",
    inStock: true,
    category: "Smart Switches",
    description: "Professional 8-gang smart wifi switches providing comprehensive room control. These home automation switches offer 12 lighting zones for complete automation. Retrofittable, wireless, and easy to install with beautifully designed glass panel that is twice as strong as normal glass.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Number of Switches": "12",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant",
      "App Control": "Yes",
      "Operating Voltage": "220-240V AC",
      "Colors Available": "Black, White, Blue, Gray"
    }
  },
  {
    id: "2",
    name: "8 Gang (7 Switch + 1 Fan) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/7S1F-removebg-preview.png?v=1726818362&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/7S1F-removebg-preview.png?v=1726818362&width=533",
      "https://www.iotics.io/cdn/shop/files/Side-2_12_360x360.png?v=1726807715",
      "https://www.iotics.io/cdn/shop/files/Side-3_12_360x360.png?v=1726807714",
      "https://www.iotics.io/cdn/shop/files/Side_21_360x360.png?v=1726807714"
    ],
    rating: 4.8,
    reviews: 24,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Comprehensive smart switches for home with 7 lighting zones plus 1 fan control. This smart switchboard offers maximum lighting automation with integrated fan speed regulator. Control your entire room from a single elegant panel.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "7",
      "Fan Regulator": "1 (5 Speed)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant",
      "Operating Voltage": "220-240V AC"
    }
  },
  {
    id: "3",
    name: "8 Gang IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/8S.png?v=1726807379&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/8S.png?v=1726807379&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_20_360x360.png?v=1747132276",
      "https://www.iotics.io/cdn/shop/files/Side-3_11_360x360.png?v=1747132276",
      "https://www.iotics.io/cdn/shop/files/Side-1_11_360x360.png?v=1747132276"
    ],
    rating: 5.0,
    reviews: 1,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Professional 8-gang smart wifi switches providing comprehensive room control. These home automation switches offer 8 lighting zones for complete automation. Perfect for living rooms and bedrooms requiring multiple light controls.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Number of Switches": "8",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant",
      "Operating Voltage": "220-240V AC"
    }
  },
  {
    id: "4",
    name: "8 Gang (6 Switch + 2 Fan) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/6S2F.png?v=1726808826&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S2F.png?v=1726808826&width=533",
      "https://www.iotics.io/cdn/shop/files/Side-2_13_360x360.png?v=1726808826",
      "https://www.iotics.io/cdn/shop/files/Side-3_13_360x360.png?v=1726808826",
      "https://www.iotics.io/cdn/shop/files/Side_22_360x360.png?v=1726808826"
    ],
    rating: 4.9,
    reviews: 18,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Premium smart wifi switches with extensive lighting control - 6 switches plus 2 fan regulators. Advanced home automation switches for multi-zone environments. Ideal for large rooms with multiple fans.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Fan Regulators": "2 (5 Speed each)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
    }
  },
  {
    id: "5",
    name: "8 Gang (6 Switch + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_0d1207ac-ba28-4400-94ca-c1f1fdc3fd66.png?v=1756790013&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_0d1207ac-ba28-4400-94ca-c1f1fdc3fd66.png?v=1756790013&width=533",
      "https://www.iotics.io/cdn/shop/files/6S1P_Side_View-2_c3b0a82d-6a3a-44d3-9166-e2048a125fe5_360x360.png?v=1756790013",
      "https://www.iotics.io/cdn/shop/files/6S1P_Side_View-3_360x360.png?v=1756790013",
      "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_6746bd99-c168-4fda-a7d2-f69e89f5c633_360x360.png?v=1756790013"
    ],
    rating: 4.7,
    reviews: 9,
    inStock: true,
    category: "Smart Switches",
    description: "Balanced smart switches for home with 6 lighting controls plus 1 smart plug. Versatile touch wifi switch for essential automation needs. Control your lights and a plugged-in appliance from a single panel.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
    }
  },
  {
    id: "6",
    name: "8 Gang (5 Switch + 1 Fan + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533",
      "https://www.iotics.io/cdn/shop/files/5S1F1PSideView-2_360x360.png?v=1756789987",
      "https://www.iotics.io/cdn/shop/files/5S1F1PSideView-3_360x360.png?v=1756789987",
      "https://www.iotics.io/cdn/shop/files/5S1F1PSideView_360x360.png?v=1756789987"
    ],
    rating: 4.8,
    reviews: 15,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Complete room automation with smart wifi switches featuring 5 lighting controls, 1 fan regulator, and 1 smart plug. Comprehensive home automation switches solution for modern homes.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "5",
      "Fan Regulator": "1 (5 Speed)",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "7",
    name: "8 Gang (5 Switch + 1 Dimmer + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533",
      "https://www.iotics.io/cdn/shop/files/5S1D1PSideView-2_360x360.png?v=1756789954",
      "https://www.iotics.io/cdn/shop/files/5S1D1PSideView-3_360x360.png?v=1756789954",
      "https://www.iotics.io/cdn/shop/files/5S1D1PSideView_360x360.png?v=1756789954"
    ],
    rating: 4.6,
    reviews: 7,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Versatile smart switches for home with 5 standard switches, 1 dimmer, and 1 smart plug. Advanced touch wifi switch for customized lighting and appliance control. Create the perfect ambiance with dimmer control.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "5",
      "Dimmer": "1 (Trailing Edge)",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "8",
    name: "4 Gang (4 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 4480,
    originalPrice: 5600,
    image: "https://www.iotics.io/cdn/shop/files/8S.png?v=1726807379&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/8S.png?v=1726807379&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_20_360x360.png?v=1747132276"
    ],
    rating: 4.9,
    reviews: 32,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Compact 4-gang smart wifi switch perfect for smaller rooms. Touch-enabled panel with IR remote and Wi-Fi connectivity. Easy to install and integrate with your smart home ecosystem.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "4",
      "Number of Switches": "4",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
    }
  },
  {
    id: "9",
    name: "6 Gang (6 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 5960,
    originalPrice: 7450,
    image: "https://www.iotics.io/cdn/shop/files/6S2F.png?v=1726808826&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S2F.png?v=1726808826&width=533",
      "https://www.iotics.io/cdn/shop/files/Side-2_13_360x360.png?v=1726808826"
    ],
    rating: 4.7,
    reviews: 21,
    inStock: true,
    category: "Smart Switches",
    description: "Mid-size 6-gang smart switch for medium-sized rooms. Features touch control, IR remote, and Wi-Fi connectivity for seamless smart home integration. Control all your lights from your phone or voice assistant.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "6",
      "Number of Switches": "6",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
    }
  },
  {
    id: "10",
    name: "2 Gang (2 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 2480,
    originalPrice: 3100,
    image: "https://www.iotics.io/cdn/shop/files/7S1F-removebg-preview.png?v=1726818362&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/7S1F-removebg-preview.png?v=1726818362&width=533"
    ],
    rating: 4.8,
    reviews: 45,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Compact 2-gang smart switch ideal for bathrooms, corridors, and small spaces. Elegant glass panel with touch control and smart connectivity. Perfect entry point for home automation.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "2",
      "Number of Switches": "2",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
    }
  },
  {
    id: "11",
    name: "Smart Fan Regulator with Wi-Fi Control",
    price: 1890,
    originalPrice: 2360,
    image: "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533"
    ],
    rating: 4.5,
    reviews: 28,
    badge: "new",
    inStock: true,
    category: "Fan Regulators",
    description: "Standalone smart fan regulator with 5-speed control. Wi-Fi enabled for remote operation through mobile app. Compatible with Alexa and Google Assistant for voice control.",
    specifications: {
      "Control Type": "Touch + Wi-Fi",
      "Speed Settings": "5",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant",
      "Max Load": "400W"
    }
  },
  {
    id: "12",
    name: "Smart Dimmer Switch with Wi-Fi Control",
    price: 2290,
    originalPrice: 2860,
    image: "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533"
    ],
    rating: 4.6,
    reviews: 14,
    badge: "sale",
    inStock: true,
    category: "Dimmers",
    description: "Elegant smart dimmer switch for adjustable lighting ambiance. Trailing edge technology for flicker-free dimming. Works with most LED and incandescent bulbs.",
    specifications: {
      "Control Type": "Touch + Wi-Fi",
      "Dimming Range": "10-100%",
      "Technology": "Trailing Edge",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Compatible": "LED, CFL, Incandescent"
    }
  }
];

export const categories = [
  "Smart Switches",
  "Fan Regulators",
  "Dimmers",
  "Smart Plugs",
  "Accessories"
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.description?.toLowerCase().includes(lowercaseQuery)
  );
}
