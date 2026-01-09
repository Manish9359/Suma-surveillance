import product8m12s from "@/assets/products/8m12s-switch.png";
import product7s1f from "@/assets/products/7s1f-switch.png";
import product8s from "@/assets/products/8s-switch.png";
import product6s2f from "@/assets/products/6s2f-switch.png";
import product6s1p from "@/assets/products/6s1p-switch.png";
import product5s1f1p from "@/assets/products/5s1f1p-switch.png";
import product5s1d1p from "@/assets/products/5s1d1p-switch.png";
import product4s from "@/assets/products/4s-switch.png";
import product6s2d from "@/assets/products/6s2d-switch.png";
import product3s1d1p from "@/assets/products/3s1d1p-switch.png";
import product2p from "@/assets/products/2p-switch.png";
import product12s2p from "@/assets/products/12s2p-switch.png";
import product12m6s2f2p from "@/assets/products/12m-6s2f2p-switch.png";
import product12m7s1f2p from "@/assets/products/12m-7s1f2p-switch.png";
import product12m8s2p from "@/assets/products/12m-8s2p-switch.png";
import product6s from "@/assets/products/6s-switch.png";
import product3s from "@/assets/products/3s-switch.png";
import product1p from "@/assets/products/1p-switch.png";
import product2s from "@/assets/products/2s-switch.png";
import product2m4s from "@/assets/products/2m4s-switch.png";
import product3s1f1p from "@/assets/products/3s1f1p-switch.png";
import product4s1p from "@/assets/products/4s1p-switch.png";
import product2s2p from "@/assets/products/2s2p-switch.png";
import product7s1d from "@/assets/products/7s1d-switch.png";
import product6s1d1f from "@/assets/products/6s1d1f-switch.png";
import productCurtain from "@/assets/products/curtain-switch.png";
import product1s from "@/assets/products/1s-switch.png";
import product1d from "@/assets/products/1d-switch.png";
import productWaterLevel from "@/assets/products/water-level-controller.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  colorImages?: { [key: string]: string };
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
    image: product8m12s,
    images: [product8m12s],
    colorImages: {
      "Black": "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-2.png?v=1756789875&width=1946",
      "White": "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-3.png?v=1756789875&width=1946",
      "Blue": "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView.png?v=1756789875&width=1946",
      "Gray": "https://www.iotics.io/cdn/shop/files/8M12S_BKSideView-1.png?v=1756789875&width=1946"
    },
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
    image: product7s1f,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_12.png?v=1726807715",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_12.png?v=1726807714",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_21.png?v=1726807714",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_12.png?v=1726807714"
    },
    rating: 4.8,
    reviews: 24,
    badge: "sale",
    inStock: true,
    category: "Fan Regulators",
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
    image: product8s,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_20.png?v=1747132276",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_11.png?v=1747132276",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_11.png?v=1747132276",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_11.png?v=1747132276"
    },
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
    image: product6s2f,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_13.png?v=1726808826",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_13.png?v=1726808826",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_22.png?v=1726808826",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_13.png?v=1726808826"
    },
    rating: 4.9,
    reviews: 18,
    badge: "sale",
    inStock: true,
    category: "Fan Regulators",
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
    image: product6s1p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S1P_Side_View-2_c3b0a82d-6a3a-44d3-9166-e2048a125fe5.png?v=1756790013",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S1P_Side_View-3.png?v=1756790013",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S1P_Side_View_6746bd99-c168-4fda-a7d2-f69e89f5c633.png?v=1756790013",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S1P_Side_View-1_cb508cdd-4ed5-440a-b9df-4c7ff02dff29.png?v=1756790013"
    },
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
    image: product5s1f1p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/5S1F1PSideView-2.png?v=1756789987",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/5S1F1PSideView-3.png?v=1756789987",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/5S1F1PSideView.png?v=1756789987",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/5S1F1PSideView-1.png?v=1756789987"
    },
    rating: 4.8,
    reviews: 15,
    badge: "hot",
    inStock: true,
    category: "Fan Regulators",
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
    image: product5s1d1p,
    images: [product5s1d1p],
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
    image: product4s,
    images: [product4s],
    colorImages: {
      "Black": "https://www.iotics.io/cdn/shop/files/Front_4a91ee74-f1cc-48d7-9d37-1235d8cd662d.jpg?v=1742818881&width=1946",
      "White": "https://www.iotics.io/cdn/shop/files/Front_2_a901ed8b-de45-4b98-92f3-4df054bf3175.jpg?v=1742818895&width=1946",
      "Blue": "https://www.iotics.io/cdn/shop/files/Side_2c174502-204b-4f0c-9f11-54a1167250dd.jpg?v=1742818909&width=1946",
      "Gray": "https://www.iotics.io/cdn/shop/files/Front_1_d5001c09-97d2-43d9-b045-5056ee95c58e.jpg?v=1742818925&width=1946"
    },
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
    image: product6s2d,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_19.png?v=1747130832",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_10.png?v=1726806854",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_10.png?v=1747130825",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_10.png?v=1747130825"
    },
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
    image: product3s1d1p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_10.png?v=1726748162",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_9.png?v=1726748162",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_9.png?v=1726748162",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_9.png?v=1726748194"
    },
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
    image: product2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_5.png?v=1726743202",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_5.png?v=1726743202",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_5.png?v=1726743202",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_5.png?v=1726743201"
    },
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
    image: product12s2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12S2P_Side_View_f8113b8d-2f57-458d-af92-7c76afac2e3f.png?v=1756876115",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12S2P_Side_View_1.png?v=1756876115",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12S2P_Side_View_2.png?v=1756876115",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12S2P_Side_View_3.png?v=1756876115"
    },
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
    image: product12m6s2f2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/06bd91_e7829d66ca0b4cc685d92aebe8d46db3_mv2.png?v=1726750763",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/06bd91_75bf7c46ad6441a28babd485769906c5_mv2.png?v=1726750763",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/06bd91_d9d7b2a87545443e874fd97ca345b160_mv2.png?v=1726750763",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/06bd91_2f45ff95b05b40dda8b6735ce8af4dc7_mv2.png?v=1726750763"
    },
    rating: 4.9,
    reviews: 14,
    badge: "hot",
    inStock: true,
    category: "Fan Regulators",
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
    image: product12m7s1f2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-1_2c26f853-64ff-4b9e-a94f-fd6115df6157.png?v=1737531324",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-2_c47a0ad9-44b8-4bfb-8378-8c2c64a422c8.png?v=1737531073",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-3_0264dd73-fc68-41e3-9754-fed6c7252017.png?v=1737531073",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-4_743d7c23-02a9-49d3-a2ca-d8b275362d00.png?v=1737531104"
    },
    rating: 4.8,
    reviews: 19,
    badge: "sale",
    inStock: true,
    category: "Fan Regulators",
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
    image: product12m8s2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-2.png?v=1726744092",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M.png?v=1737531015",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-3.png?v=1737531042",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/12M-4.png?v=1737531073"
    },
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
    image: product6s,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S-BK.png?v=1749446119",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S-WH.png?v=1749446132",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S-BL.png?v=1749446132",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/6S-GY.png?v=1749446132"
    },
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
    image: product3s,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/3S_Black.png?v=1742280014",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/3S_White.png?v=1742280014",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/3S_Blue.png?v=1742280014",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/3S_Grey.png?v=1742280014"
    },
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
    image: product1p,
    images: [product1p],
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
    image: product2s,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_1.png?v=1726729384",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_1.png?v=1726729384",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_1.png?v=1726729384",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_1.png?v=1726729384"
    },
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
    image: product2m4s,
    images: [product2m4s],
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
    image: productCurtain,
    images: [productCurtain],
    rating: 4.9,
    reviews: 31,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
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
    image: product1s,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side.png?v=1726727480",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3.png?v=1726727480",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1.png?v=1726727480",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2.png?v=1726727479"
    },
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
    image: product1d,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/1D-BK.png?v=1749448456",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/1D-WH.png?v=1749448456",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/1D-BL.png?v=1749448456",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/1D-GY.png?v=1749448456"
    },
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
    name: "Water Level Controller",
    price: 7080,
    image: productWaterLevel,
    images: [productWaterLevel],
    rating: 4.9,
    reviews: 42,
    badge: "new",
    inStock: true,
    category: "Water Level Controller",
    isNewArrival: true,
    description: "Automatic water level controller with dry run protection. No need for manual monitoring; the system works on its own. Safeguards your pump from running without water, optimises pump operation, reducing electricity consumption.",
    specifications: {
      "Power Source": "AC 240V 50Hz",
      "Max Load": "Single Phase(1Φ), 1 HP Motor",
      "Self-Consumption": "~1.6W",
      "Operating Temp": "-10°C to +55°C",
      "Dimension": "120mm x 90mm x 38mm",
      "Enclosure Material": "ABS",
      "Net Weight": "0.24kg"
    }
  },
  // Additional products from IOTICS website
  {
    id: "25",
    name: "8 Gang (3 Switch + 1 Fan + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: product3s1f1p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_8.png?v=1726747590",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_8.png?v=1726747590",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_9.png?v=1726747590",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_8.png?v=1726747590"
    },
    rating: 4.8,
    reviews: 20,
    badge: "sale",
    inStock: true,
    category: "Fan Regulators",
    description: "Complete room automation with smart wifi switches featuring 3 lighting controls, 1 fan regulator, and 1 smart plug. Comprehensive home automation switches solution.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "3",
      "Fan Regulator": "1 (5 Speed)",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "26",
    name: "8 Gang (4 Switch + 1 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: product4s1p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_8.png?v=1726746585",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_7.png?v=1726746572",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_7.png?v=1726746572",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_7.png?v=1726746571"
    },
    rating: 5.0,
    reviews: 1,
    badge: "hot",
    inStock: true,
    category: "Smart Switches",
    description: "Balanced smart switches for home with 4 lighting controls plus 1 smart plug. Versatile touch wifi switch for essential automation needs.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "4",
      "Smart Plug": "1 (16A)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "27",
    name: "8 Gang (2 Switch + 2 Plug) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: product2s2p,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_6.png?v=1726744742",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-3_6.png?v=1726744741",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-1_6.png?v=1726744741",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side-2_6.png?v=1726744741"
    },
    rating: 4.7,
    reviews: 15,
    inStock: true,
    category: "Smart Switches",
    description: "Smart switches for home optimized for appliance control - 2 lighting switches plus 2 smart plugs. Ideal touch wifi switch for device-heavy environments.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "2",
      "Smart Plugs": "2 (16A each)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "28",
    name: "8 Gang (7 Switch + 1 Dimmer) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: product7s1d,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_11.png?v=1726806029",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_12.png?v=1726806029",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_14.png?v=1726806029",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_13.png?v=1726806029"
    },
    rating: 4.8,
    reviews: 18,
    badge: "new",
    inStock: true,
    category: "Dimmers",
    description: "Professional smart wifi switches with 7 lighting zones plus 1 dimmer control. Advanced home automation switches for sophisticated lighting management and ambiance.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "7",
      "Dimmer": "1 (Trailing Edge)",
      "Material": "Tempered Glass"
    }
  },
  {
    id: "29",
    name: "8 Gang (6 Switch + 1 Dimmer + 1 Fan) IR Remote & Wi-Fi Touch Switch",
    price: 7960,
    originalPrice: 9950,
    image: product6s1d1f,
    colorImages: {
      "Black": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_15.png?v=1726806440",
      "White": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_18.png?v=1726806440",
      "Blue": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_16.png?v=1726806440",
      "Gray": "https://cdn.shopify.com/s/files/1/0890/5582/2142/files/Side_17.png?v=1726806440"
    },
    rating: 4.9,
    reviews: 22,
    badge: "sale",
    inStock: true,
    category: "Fan Regulators",
    description: "Ultimate smart switches for home combining 6 lighting controls, 1 dimmer, and 1 fan regulator. Complete touch wifi switch solution for comprehensive room automation.",
    specifications: {
      "Switch Type": "Touch + Wi-Fi + IR Remote",
      "Number of Gangs": "8",
      "Switches": "6",
      "Dimmer": "1 (Trailing Edge)",
      "Fan Regulator": "1 (5 Speed)",
      "Material": "Tempered Glass"
    }
  },

];

// Dynamically extract categories from products
export const categories = [...new Set(products.map((p) => p.category))].sort();

export function getDeals(): Product[] {
  return products.filter((p) => p.originalPrice && p.originalPrice > p.price);
}

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
