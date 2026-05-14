// Glove colourways (8 total)
export const popGloveColours = [
  {
    id: "01",
    name: "Royal Black / Blue",
    hex: "#1a1a2e",
    accent: "#3b82f6",
    edition: "Signature Pop Royal",
    image: "/images/pop-glove/royal-black-blue.jpg",
  },
  {
    id: "02",
    name: "Cognac Tan / Silver",
    hex: "#8B6343",
    accent: "#C0C0C0",
    edition: "Classic Luxury",
    image: "/images/pop-glove/cognac-tan-silver.jpg",
  },
  {
    id: "03",
    name: "Redline Crimson / Black",
    hex: "#DC2626",
    accent: "#0a0a0a",
    edition: "Motorsport",
    image: "/images/pop-glove/redline-crimson-black.jpg",
  },
  {
    id: "04",
    name: "Arctic White / Navy",
    hex: "#F5F5F5",
    accent: "#1e3a5f",
    edition: "Modern Clean",
    image: "/images/pop-glove/arctic-white-navy-2.jpg",
  },
  {
    id: "05",
    name: "Carbon Black / Neon Green",
    hex: "#111111",
    accent: "#22c55e",
    edition: "Hypercar Energy",
    image: "/images/pop-glove/carbon-black-neon-green.jpg",
  },
  {
    id: "06",
    name: "Slate Grey / Orange",
    hex: "#64748b",
    accent: "#f97316",
    edition: "Performance Utility",
    image: "/images/pop-glove/slate-grey-orange.jpg",
  },
  {
    id: "07",
    name: "Navy / Gold",
    hex: "#1e3a5f",
    accent: "#ca8a04",
    edition: "Executive Premium",
    image: "/images/pop-glove/navy-gold.jpg",
  },
  {
    id: "08",
    name: "Olive / Matte Black",
    hex: "#4a5329",
    accent: "#1a1a1a",
    edition: "Tactical Lifestyle",
    image: "/images/pop-glove/olive-matte-black.jpg",
  },
  {
    id: "09",
    name: "Stealth Black",
    hex: "#1A1A1A",
    accent: "#444444",
    edition: "Fingerless Edition",
    image: "/images/pop-glove/fingerless-black.jpg",
  },
] as const;

// Watch orientation rule: IDs 01 and 02 = sideways clock face, 03–08 = upright
export const SIDEWAYS_IDS = ["01", "02"] as const;
export const sidewaysIdSet = new Set<string>(SIDEWAYS_IDS);

// Hand selector data
export const handOptions = {
  left: {
    label: "Left Hand",
    description:
      "Standard full-finger driver glove with upright dorsal watch mount.",
    availableColourIds: ["01", "02"], // only 2 colourways for left hand
    style: "Full Finger",
  },
  right: {
    label: "Right Hand",
    description:
      "Six colourways available. Full-finger construction with precision cradle.",
    availableColourIds: ["03", "04", "05", "06", "07", "08"], // 6 colourways
    style: "Full Finger",
  },
  fingerless: {
    label: "Fingerless",
    description: "Half-finger performance edition with dual-hand construction.",
    availableColourIds: ["09"],
    style: "Half Finger",
  },
} as const;

// Glove styles
export const gloveStyles = [
  {
    id: "full-finger",
    label: "Full Finger",
    note: "Available in all 8 colourways",
  },
  {
    id: "half-finger",
    label: "Half Finger",
    note: "Black only — double-handed set",
  },
];

// Key features (6 items)
export const popGloveFeatures = [
  {
    id: "01",
    title: "Dorsal Watch Integration",
    desc: "A built-in structured cradle securely houses the AP Swatch Pop Royal, maintaining visibility and stability at the exact point of the driver's natural line of sight.",
  },
  {
    id: "02",
    title: "Quick-Release System",
    desc: "Detachable watch module for flexible use on or off the glove. The watch transfers between driving and daily wear in seconds.",
  },
  {
    id: "03",
    title: "Premium Leather Craftsmanship",
    desc: "Soft, perforated leather ensures breathability, grip, and long-wear comfort across all sessions.",
  },
  {
    id: "04",
    title: "Ergonomic Performance Fit",
    desc: "Pre-curved fingers and reinforced palm zones for enhanced steering control and reduced fatigue.",
  },
  {
    id: "05",
    title: "Shock-Absorbing Mount",
    desc: "Internal cushioning minimises vibration transfer from the wheel to the timepiece — protecting the watch during aggressive driving.",
  },
  {
    id: "06",
    title: "Touch Function Compatibility",
    desc: "Designed for modern usability — navigate your dashboard, phone, or infotainment system without removing the glove.",
  },
];

// Pre-order discount (used in CTA)
export const preorderDiscount = 20; // percent off

// History / Why section
export const popGloveHistory = {
  eyebrow: "The Origin",
  headline: "Why the P.O.P Glove?",
  body: [
    "The driving glove has always been more than protection, it is a statement. From the perforated leather of classic motorsport to the padded palms of modern racing, every great glove has served both function and identity.",
    "The P.O.P Glove was born from a simple question: what if the glove could tell time? Inspired by the elegance of the AP Swatch Pop Royal, KNK Labs set out to create something like the driving gloves of the golden era. Whether you're gripping the wheel of a golf cart or a supercar, the P.O.P Glove puts time exactly where you need it.",
    "P.O.P = Time at the point you need it most. Not on your wrist. Not on the dashboard. On your hand, in your line of sight, always.",
  ],
};

// Driving Experience section
export const drivingExperience = {
  eyebrow: "The P.O.P Philosophy",
  headline: "Your Hand. Your Time. Your Drive.",
  intro:
    "The P.O.P Glove fundamentally changes how you interact with time while driving. No glances to the dashboard. No wrist twist. Just natural, intuitive visibility of every second.",
  benefits: [
    {
      title: "Ergonomic Precision",
      desc: "Pre-curved fingers align with the steering wheel's contours. Every movement is natural, every grip is confident. The watch becomes an extension of your hand, not a distraction.",
    },
    {
      title: "Visibility Perfected",
      desc: "Time appears exactly in your natural line of sight when hands are on the wheel. No arm rotation required. No dashboard glare. Just perfect clarity.",
    },
    {
      title: "Luxury Performance",
      desc: "Built for the driver who demands both elegance and function. Whether it's a Sunday cruise or track conditions, the P.O.P Glove delivers championship-level comfort and control.",
    },
    {
      title: "Touch Compatibility",
      desc: "Modern driving demands multi-function interaction. Navigate, respond, control — all without removing the glove. Engineered for contemporary mobility.",
    },
  ],
};

// Materials & Craftsmanship section
export const materialsAndCraft = {
  eyebrow: "Built to Last",
  headline: "Craftsmanship in Every Stitch",
  intro:
    "Every detail of the P.O.P Glove reflects obsessive attention to quality. Premium leather, precision engineering, and hand-finished construction combine to create a product that rewards repeated use.",
  materials: [
    {
      name: "Premium Leather",
      desc: "Soft, breathable, and durable. Each pair is sourced from the finest leather suppliers, selected for suppleness and longevity.",
    },
    {
      name: "Perforated Design",
      desc: "Strategically placed perforations improve airflow while maintaining structural integrity. A balance of form and function that defines luxury driving wear.",
    },
    {
      name: "Precision Stitching",
      desc: "Every seam is hand-finished using traditional techniques. The stitching is both beautiful and functional — reinforced stress points ensure years of reliable performance.",
    },
    {
      name: "Shock-Absorbing Mount",
      desc: "The watch cradle uses advanced cushioning to protect your timepiece from vibration and impact. Driving durability meets luxury craftsmanship.",
    },
  ],
};

// Technical Innovation section
export const technicalInnovation = {
  eyebrow: "Engineering Excellence",
  headline: "Innovation Meets Precision",
  intro:
    "The P.O.P Glove is not just beautiful — it's engineered. Every system has been tested, refined, and perfected for real-world driving conditions.",
  specs: [
    {
      title: "Quick-Release Watch Mount",
      desc: "Proprietary locking mechanism holds the Swatch Pop Royal securely during aggressive driving, yet releases smoothly for everyday wear.",
    },
    {
      title: "Shock Absorption System",
      desc: "Internal elastomer dampening minimizes vibration transfer. Your watch stays protected, your driving uncompromised.",
    },
    {
      title: "Ergonomic Finger Shaping",
      desc: "Pre-curved finger design follows the natural resting position on the steering wheel. Reduces fatigue. Improves control.",
    },
    {
      title: "Palm Reinforcement Zones",
      desc: "Strategic leather layering in high-stress areas extends glove life. Designed to handle thousands of miles.",
    },
    {
      title: "Touch-Sensitive Fingertips",
      desc: "Compatible with modern touchscreen interfaces. Control your vehicle or device without removing the glove.",
    },
  ],
};

// Lifestyle & Identity section
export const lifestyle = {
  eyebrow: "Status & Style",
  headline: "A Collector's Object",
  intro:
    "The P.O.P Glove is more than an accessory. It's a statement about your relationship with luxury, design, and the culture of driving.",
  pillars: [
    {
      title: "Luxury Driving Heritage",
      desc: "Inspired by the golden age of motorsport, reimagined for the modern driver. A tribute to the classics that never goes out of style.",
    },
    {
      title: "Design Icon Status",
      desc: "Limited editions. Exclusive colourways. Each P.O.P Glove is a collectible. When you own one, you're part of a select community.",
    },
    {
      title: "Modern Horology",
      desc: "The Swatch Pop Royal is a horological legend. Paired with the P.O.P Glove, it becomes something greater — a fusion of watchmaking and wearable design.",
    },
    {
      title: "Performance Identity",
      desc: "For the driver who demands more. Who appreciates both speed and style. Who refuses to choose between luxury and functionality.",
    },
  ],
};

// Product breakdown / anatomy
export const productAnatomy = [
  {
    label: "Dorsal Watch Cradle",
    desc: "Custom-engineered mounting system secures the Swatch Pop Royal with precision. Shock-absorbing interior prevents movement and protects the timepiece.",
  },
  {
    label: "Premium Leather Upper",
    desc: "Soft, supple leather with strategic perforations for breathability. Dyed and finished in eight exclusive colourways.",
  },
  {
    label: "Reinforced Palm Zone",
    desc: "Double-layered leather provides durability in high-friction areas. Enhanced grip and extended lifespan.",
  },
  {
    label: "Ergonomic Finger Design",
    desc: "Pre-curved shaping follows the natural resting position on the wheel. Reduces strain over long drives.",
  },
  {
    label: "Quick-Release Mechanism",
    desc: "Proprietary locking system allows the watch to be removed in seconds. Transfer between driving and daily wear effortlessly.",
  },
  {
    label: "Adjustable Wrist Strap",
    desc: "Premium materials and precision stitching create a secure fit that adapts to your wrist size. Reinforced snap closures for reliability.",
  },
];
