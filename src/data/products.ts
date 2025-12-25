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
    name: "Arduino Uno R3 Development Board",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    rating: 4.8,
    reviews: 256,
    badge: "sale",
    inStock: true,
    category: "Development Boards",
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header and a reset button.",
    specifications: {
      "Microcontroller": "ATmega328P",
      "Operating Voltage": "5V",
      "Input Voltage": "7-12V",
      "Digital I/O Pins": "14 (6 PWM)",
      "Analog Input Pins": "6",
      "Flash Memory": "32 KB",
      "SRAM": "2 KB",
      "EEPROM": "1 KB",
      "Clock Speed": "16 MHz",
    },
  },
  {
    id: "2",
    name: "Raspberry Pi 4 Model B 8GB",
    price: 4999,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
    ],
    rating: 4.9,
    reviews: 412,
    badge: "hot",
    inStock: true,
    category: "Development Boards",
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity.",
    specifications: {
      "Processor": "Broadcom BCM2711, Quad core Cortex-A72",
      "RAM": "8GB LPDDR4-3200",
      "WiFi": "2.4 GHz and 5.0 GHz 802.11ac",
      "Bluetooth": "5.0, BLE",
      "USB Ports": "2x USB 3.0, 2x USB 2.0",
      "GPIO": "40-pin",
      "Power": "5V DC via USB-C",
    },
  },
  {
    id: "3",
    name: "ESP32 WiFi Bluetooth Module",
    price: 399,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=800&fit=crop",
    ],
    rating: 4.7,
    reviews: 189,
    badge: "new",
    inStock: true,
    category: "Development Boards",
    description: "ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.",
    specifications: {
      "CPU": "Xtensa dual-core 32-bit LX6",
      "Clock Speed": "Up to 240 MHz",
      "WiFi": "802.11 b/g/n",
      "Bluetooth": "v4.2 BR/EDR and BLE",
      "Flash": "4 MB",
      "GPIO Pins": "34",
    },
  },
  {
    id: "4",
    name: "NEMA 17 Stepper Motor",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=800&fit=crop",
    ],
    rating: 4.6,
    reviews: 98,
    badge: "sale",
    inStock: true,
    category: "Motors & Drivers",
    description: "NEMA 17 bipolar stepper motor with 1.8° step angle (200 steps/revolution). Perfect for 3D printers, CNC machines, and robotics.",
    specifications: {
      "Step Angle": "1.8°",
      "Holding Torque": "40 N.cm",
      "Rated Current": "1.7A",
      "Phase Resistance": "1.5Ω",
      "Shaft Diameter": "5mm",
      "Body Length": "40mm",
    },
  },
  {
    id: "5",
    name: "HC-SR04 Ultrasonic Sensor",
    price: 79,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    rating: 4.5,
    reviews: 324,
    inStock: true,
    category: "Sensors & Modules",
    description: "The HC-SR04 ultrasonic sensor uses sonar to determine distance to an object. Excellent for robotics and automation projects.",
    specifications: {
      "Working Voltage": "5V DC",
      "Working Current": "15mA",
      "Measuring Angle": "15°",
      "Ranging Distance": "2cm - 400cm",
      "Resolution": "0.3cm",
      "Trigger Input": "10µS TTL pulse",
    },
  },
  {
    id: "6",
    name: "12V 5A Power Adapter",
    price: 299,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
    ],
    rating: 4.4,
    reviews: 156,
    inStock: false,
    category: "Power Supply",
    description: "High-quality 12V 5A switching power adapter. Perfect for LED strips, Arduino projects, and electronic devices.",
    specifications: {
      "Input": "100-240V AC 50/60Hz",
      "Output": "12V DC 5A",
      "Power": "60W",
      "Connector": "5.5x2.1mm barrel",
      "Protection": "Over-voltage, Over-current, Short-circuit",
    },
  },
  {
    id: "7",
    name: "PLA Filament 1.75mm 1kg",
    price: 899,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&h=800&fit=crop",
    ],
    rating: 4.7,
    reviews: 87,
    badge: "sale",
    inStock: true,
    category: "3D Printing",
    description: "Premium quality PLA filament for 3D printing. Low warping, excellent layer adhesion, and available in multiple colors.",
    specifications: {
      "Material": "PLA (Polylactic Acid)",
      "Diameter": "1.75mm ± 0.02mm",
      "Weight": "1kg",
      "Print Temperature": "190-220°C",
      "Bed Temperature": "50-60°C",
      "Density": "1.24 g/cm³",
    },
  },
  {
    id: "8",
    name: "Brushless DC Motor A2212",
    price: 649,
    image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1597423498219-04418210827d?w=800&h=800&fit=crop",
    ],
    rating: 4.6,
    reviews: 45,
    badge: "new",
    inStock: true,
    category: "Drone Parts",
    description: "A2212 1000KV brushless motor for quadcopters and RC aircraft. High efficiency and reliable performance.",
    specifications: {
      "KV Rating": "1000KV",
      "Max Current": "12A",
      "Max Power": "144W",
      "Shaft Diameter": "3.17mm",
      "Weight": "52g",
      "Prop Size": "8x4.5 to 10x4.5",
    },
  },
  {
    id: "9",
    name: "L298N Motor Driver Module",
    price: 149,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    category: "Motors & Drivers",
    description: "Dual H-bridge motor driver module for controlling DC motors and stepper motors with Arduino.",
    specifications: {
      "Driver Chip": "L298N",
      "Logic Voltage": "5V",
      "Drive Voltage": "5V-35V",
      "Max Current": "2A per channel",
      "Channels": "2",
    },
  },
  {
    id: "10",
    name: "DHT22 Temperature Humidity Sensor",
    price: 199,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 178,
    badge: "new",
    inStock: true,
    category: "Sensors & Modules",
    description: "Digital temperature and humidity sensor with high accuracy and excellent long-term stability.",
    specifications: {
      "Humidity Range": "0-100% RH",
      "Humidity Accuracy": "±2% RH",
      "Temperature Range": "-40°C to 80°C",
      "Temperature Accuracy": "±0.5°C",
      "Operating Voltage": "3.3-6V DC",
    },
  },
  {
    id: "11",
    name: "18650 Battery Holder 4x",
    price: 89,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 92,
    inStock: true,
    category: "Power Supply",
    description: "4-cell 18650 battery holder with wire leads. Perfect for portable electronics projects.",
    specifications: {
      "Cell Type": "18650",
      "Capacity": "4 cells",
      "Output": "14.8V nominal",
      "Wire Length": "150mm",
      "Material": "ABS Plastic",
    },
  },
  {
    id: "12",
    name: "Creality Ender 3 V2 Hotend",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 67,
    badge: "sale",
    inStock: true,
    category: "3D Printing",
    description: "Replacement hotend assembly for Creality Ender 3 V2. Pre-assembled and ready to install.",
    specifications: {
      "Nozzle Size": "0.4mm",
      "Max Temperature": "260°C",
      "Heater Power": "40W",
      "Thermistor": "NTC 100K",
      "Compatible": "Ender 3, Ender 3 Pro, Ender 3 V2",
    },
  },
];

export const categories = [
  "Development Boards",
  "Sensors & Modules",
  "Motors & Drivers",
  "Power Supply",
  "3D Printing",
  "Drone Parts",
  "Tools & Equipment",
  "Cables & Connectors",
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
