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
  isNewArrival?: boolean;
}

export const products: Product[] = [
  // Page 1 Products
  {
    id: "1",
    name: "8 Gang (12 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 8968,
    originalPrice: 11210,
    image: "https://www.iotics.io/cdn/shop/files/8M12S_BK_Side_View.png?v=1756789875&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/8M12S_BK_Side_View.png?v=1756789875&width=533",
      "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-2_360x360.png?v=1756789875",
      "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-3_360x360.png?v=1756789875"
    ],
    rating: 5.0,
    reviews: 12,
    badge: "new",
    inStock: true,
    category: "Smart Switches",
    isNewArrival: true,
    description: "Professional 8-gang smart wifi switches providing comprehensive room control. These home automation switches offer 12 lighting zones for complete automation.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Number of Switches": "12",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz",
      "Voice Control": "Alexa, Google Assistant"
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
      "https://www.iotics.io/cdn/shop/files/Side-2_12_360x360.png?v=1726807715"
    ],
    rating: 4.8,
    reviews: 24,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Comprehensive smart switches for home with 7 lighting zones plus 1 fan control. This smart switchboard offers maximum lighting automation with integrated fan speed regulator.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "7",
      "Fan Regulator": "1 (5 Speed)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
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
      "https://www.iotics.io/cdn/shop/files/Side_20_360x360.png?v=1747132276"
    ],
    rating: 5.0,
    reviews: 1,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Professional 8-gang smart wifi switches providing comprehensive room control. These home automation switches offer 8 lighting zones for complete automation.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Number of Switches": "8",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
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
      "https://www.iotics.io/cdn/shop/files/Side-2_13_360x360.png?v=1726808826"
    ],
    rating: 4.9,
    reviews: 18,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Premium smart wifi switches with extensive lighting control - 6 switches plus 2 fan regulators. Advanced home automation switches for multi-zone environments.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Fan Regulators": "2 (5 Speed each)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "5",
    name: "8 Gang (6 Switch + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_0d1207ac-ba28-4400-94ca-c1f1fdc3fd66.png?v=1756790013&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S1P_Side_View_0d1207ac-ba28-4400-94ca-c1f1fdc3fd66.png?v=1756790013&width=533"
    ],
    rating: 4.7,
    reviews: 9,
    inStock: true,
    category: "Smart Switches",
    description: "Balanced smart switches for home with 6 lighting controls plus 1 smart plug. Versatile touch wifi switch for essential automation needs.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "6",
    name: "8 Gang (5 Switch + 1 Fan + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1F1P_Side_View.png?v=1756789987&width=533"
    ],
    rating: 4.8,
    reviews: 15,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    isNewArrival: true,
    description: "Complete room automation with smart wifi switches featuring 5 lighting controls, 1 fan regulator, and 1 smart plug.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "5",
      "Fan Regulator": "1 (5 Speed)",
      "Smart Plug": "1 (16A)"
    }
  },
  {
    id: "7",
    name: "8 Gang (5 Switch + 1 Dimmer + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 8496,
    originalPrice: 10620,
    image: "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/5S1D1P_Side_View.png?v=1756789954&width=533"
    ],
    rating: 4.6,
    reviews: 7,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Versatile smart switches for home with 5 standard switches, 1 dimmer, and 1 smart plug.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "5",
      "Dimmer": "1 (Trailing Edge)",
      "Smart Plug": "1 (16A)"
    }
  },
  {
    id: "8",
    name: "4 Gang (4 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 4480,
    originalPrice: 5600,
    image: "https://www.iotics.io/cdn/shop/files/4S.png?v=1726807379&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/4S.png?v=1726807379&width=533"
    ],
    rating: 4.9,
    reviews: 32,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Compact 4-gang smart wifi switch perfect for smaller rooms. Touch-enabled panel with IR remote and Wi-Fi connectivity.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "4",
      "Number of Switches": "4",
      "Material": "Tempered Glass"
    }
  },
  // Page 2 Products
  {
    id: "9",
    name: "8 Gang (6 Switch + 2 Dimmer) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/6S2D.png?v=1726806854&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S2D.png?v=1726806854&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_19_360x360.png?v=1747130832"
    ],
    rating: 4.8,
    reviews: 22,
    badge: "hot",
    inStock: true,
    category: "Dimmers",
    isNewArrival: true,
    description: "Advanced smart wifi switches with 6 standard switches plus 2 dimmers. Professional home automation switches for sophisticated lighting control and ambiance creation.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Dimmers": "2 (Trailing Edge)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "10",
    name: "8 Gang (3 Switch + 1 Dimmer + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/3S1D1P.png?v=1726748162&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/3S1D1P.png?v=1726748162&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_10_360x360.png?v=1726748162"
    ],
    rating: 4.7,
    reviews: 16,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Versatile smart switches for home with 3 standard switches, 1 dimmer, and 1 smart plug. Advanced touch wifi switch for customized lighting and appliance control.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "3",
      "Dimmer": "1",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "11",
    name: "8 Gang (2 Plugs) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: "https://www.iotics.io/cdn/shop/files/2P.png?v=1726743201&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/2P.png?v=1726743201&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_5_360x360.png?v=1726743202"
    ],
    rating: 4.6,
    reviews: 11,
    inStock: true,
    category: "Smart Plugs",
    description: "Specialized smart wifi switches focused on appliance control with 2 smart plugs. Ideal home automation switches for device-heavy environments and charging stations.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Smart Plugs": "2 (16A each)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "12",
    name: "12 Gang (12 Switch + 2 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 11328,
    originalPrice: 14160,
    image: "https://www.iotics.io/cdn/shop/files/12S2P_Side_View_05ab91ce-ab35-4cb5-bb32-049c174e10d7.png?v=1756876115&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/12S2P_Side_View_05ab91ce-ab35-4cb5-bb32-049c174e10d7.png?v=1756876115&width=533",
      "https://www.iotics.io/cdn/shop/files/12S2P_Side_View_f8113b8d-2f57-458d-af92-7c76afac2e3f_360x360.png?v=1756876115"
    ],
    rating: 5.0,
    reviews: 8,
    badge: "new",
    inStock: true,
    category: "Smart Switches",
    isNewArrival: true,
    description: "Premium smart switches for home with 12 lighting controls plus 2 smart plugs. This smart switchboard delivers maximum lighting automation with appliance control.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "12",
      "Switches": "12",
      "Smart Plugs": "2 (16A each)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "13",
    name: "12 Gang (6 Switch + 2 Fan + 2 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 10808,
    originalPrice: 13511,
    image: "https://www.iotics.io/cdn/shop/files/06bd91_7fa79afa8f924069840adf30d9306eb0_mv2.png?v=1726750763&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/06bd91_7fa79afa8f924069840adf30d9306eb0_mv2.png?v=1726750763&width=533",
      "https://www.iotics.io/cdn/shop/files/06bd91_e7829d66ca0b4cc685d92aebe8d46db3_mv2_360x360.png?v=1726750763"
    ],
    rating: 4.9,
    reviews: 14,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Ultimate smart switchboard with 12-gang configuration - 6 switches, 2 fan controllers, and 2 smart plugs. The most comprehensive wifi switches for home automation available.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "12",
      "Switches": "6",
      "Fan Regulators": "2",
      "Smart Plugs": "2",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "14",
    name: "12 Gang (7 Switch + 1 Fan + 2 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 10808,
    originalPrice: 13511,
    image: "https://www.iotics.io/cdn/shop/files/06bd91_9ef27f245cb54561bbf982f710ebca85_mv2.png?v=1737531324&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/06bd91_9ef27f245cb54561bbf982f710ebca85_mv2.png?v=1737531324&width=533",
      "https://www.iotics.io/cdn/shop/files/12M-1_2c26f853-64ff-4b9e-a94f-fd6115df6157_360x360.png?v=1737531324"
    ],
    rating: 4.8,
    reviews: 19,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Comprehensive smart wifi switches with 7 lighting controls, 1 fan regulator, and 2 smart plugs. Advanced home automation switches for complete room management.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "12",
      "Switches": "7",
      "Fan Regulator": "1",
      "Smart Plugs": "2",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "15",
    name: "12 Gang (8 Switch + 2 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 10808,
    originalPrice: 13511,
    image: "https://www.iotics.io/cdn/shop/files/12M-1.png?v=1726744092&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/12M-1.png?v=1726744092&width=533"
    ],
    rating: 4.7,
    reviews: 13,
    inStock: true,
    category: "Smart Switches",
    description: "High-capacity smart switches with 8 lighting controls and 2 smart plugs. Professional-grade home automation solution.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "12",
      "Switches": "8",
      "Smart Plugs": "2",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "16",
    name: "6 Gang (6 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 5960,
    originalPrice: 7450,
    image: "https://www.iotics.io/cdn/shop/files/6S.png?v=1726808826&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/6S.png?v=1726808826&width=533"
    ],
    rating: 4.7,
    reviews: 21,
    inStock: true,
    category: "Smart Switches",
    description: "Mid-size 6-gang smart switch for medium-sized rooms. Features touch control, IR remote, and Wi-Fi connectivity for seamless smart home integration.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "6",
      "Number of Switches": "6",
      "Material": "Tempered Glass"
    }
  },
  // Page 3 Products
  {
    id: "17",
    name: "3 Gang IR Remote & Wi-Fi Touch Switch",
    price: 6136,
    originalPrice: 7670,
    image: "https://www.iotics.io/cdn/shop/files/3S.png?v=1742280014&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/3S.png?v=1742280014&width=533",
      "https://www.iotics.io/cdn/shop/files/3S_Black_360x360.png?v=1742280014"
    ],
    rating: 4.8,
    reviews: 28,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "Compact smart switches for home with 3-zone control. Essential touch wifi switch for smaller spaces requiring reliable automation and elegant design.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "3",
      "Number of Switches": "3",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "18",
    name: "3 Gang (1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 6136,
    originalPrice: 7670,
    image: "https://www.iotics.io/cdn/shop/files/1P.png?v=1742281736&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/1P.png?v=1742281736&width=533",
      "https://www.iotics.io/cdn/shop/files/1P_Black_360x360.png?v=1742281736"
    ],
    rating: 4.6,
    reviews: 17,
    inStock: true,
    category: "Smart Plugs",
    isNewArrival: true,
    description: "Versatile smart Wi-Fi switches with 1 smart plug. Compact home automation switches for appliance control.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "3",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "19",
    name: "2 Gang IR Remote & Wi-Fi Touch Switch",
    price: 5192,
    originalPrice: 6490,
    image: "https://www.iotics.io/cdn/shop/files/2S_1.png?v=1726729384&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/2S_1.png?v=1726729384&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_1_360x360.png?v=1726729384"
    ],
    rating: 4.8,
    reviews: 45,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Essential smart wifi switches with dual-zone control. Reliable home automation switches for smaller spaces requiring basic automation with premium aesthetics.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "2",
      "Number of Switches": "2",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "20",
    name: "2 Gang (4 Switch) IR Remote & Wi-Fi Touch Switch",
    price: 5664,
    originalPrice: 7080,
    image: "https://www.iotics.io/cdn/shop/files/2M4S.png?v=1749447039&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/2M4S.png?v=1749447039&width=533",
      "https://www.iotics.io/cdn/shop/files/2M4S-BK_360x360.png?v=1749447053"
    ],
    rating: 4.7,
    reviews: 23,
    badge: "new",
    inStock: true,
    category: "Smart Switches",
    isNewArrival: true,
    description: "Compact smart switches for home with 4-zone control in 2-gang format. Efficient touch wifi switch maximizing automation in minimal space.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "2",
      "Number of Switches": "4",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "21",
    name: "2 Gang (Curtain Controller) IR Remote & Wi-Fi Touch Switch",
    price: 5192,
    originalPrice: 6490,
    image: "https://www.iotics.io/cdn/shop/files/Curtain.png?v=1726732021&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/Curtain.png?v=1726732021&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_dbe44e11-4853-4666-84db-33e41c280a05_360x360.png?v=1726731989"
    ],
    rating: 4.9,
    reviews: 31,
    badge: "hot",
    inStock: true,
    category: "Accessories",
    isNewArrival: true,
    description: "Specialized smart Wi-Fi switches with integrated curtain control. Unique home automation switches for automated window treatments.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "2",
      "Control Type": "Curtain Controller",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "22",
    name: "1 Gang 16 Amps IR Remote & Wi-Fi Touch Switch",
    price: 4720,
    originalPrice: 5900,
    image: "https://www.iotics.io/cdn/shop/files/1S.png?v=1726727480&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/1S.png?v=1726727480&width=533",
      "https://www.iotics.io/cdn/shop/files/Side_360x360.png?v=1726727480"
    ],
    rating: 4.5,
    reviews: 19,
    badge: "sale",
    inStock: true,
    category: "Smart Switches",
    description: "High-capacity smart switches for home with 16-amp rating. Powerful single-gang touch wifi switch for heavy-duty appliances and high-power devices.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "1",
      "Amperage": "16A",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "23",
    name: "1 Gang (1 Dimmer) IR Remote & Wi-Fi Touch Switch",
    price: 4720,
    originalPrice: 5900,
    image: "https://www.iotics.io/cdn/shop/files/1D.png?v=1749448456&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/1D.png?v=1749448456&width=533"
    ],
    rating: 4.6,
    reviews: 14,
    inStock: true,
    category: "Dimmers",
    description: "Elegant smart dimmer switch for adjustable lighting ambiance. Trailing edge technology for flicker-free dimming.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "1",
      "Dimmer": "1 (Trailing Edge)",
      "Material": "Tempered Glass",
      "Connectivity": "Wi-Fi 2.4GHz"
    }
  },
  {
    id: "24",
    name: "Smart Fan Regulator with Wi-Fi Control",
    price: 1890,
    originalPrice: 2360,
    image: "https://www.iotics.io/cdn/shop/files/Fan_Regulator.png?v=1726789987&width=533",
    images: [
      "https://www.iotics.io/cdn/shop/files/Fan_Regulator.png?v=1726789987&width=533"
    ],
    rating: 4.5,
    reviews: 28,
    badge: "new",
    inStock: true,
    category: "Fan Regulators",
    isNewArrival: true,
    description: "Standalone smart fan regulator with 5-speed control. Wi-Fi enabled for remote operation through mobile app.",
    specifications: {
      "Control Type": "Touch + Wi-Fi",
      "Speed Settings": "5",
      "Material": "Tempered Glass",
      "Max Load": "400W"
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

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
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
