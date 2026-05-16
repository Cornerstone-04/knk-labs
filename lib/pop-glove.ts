export type HandType = "left" | "right";

// Glove colourways (8 total)
export const popGloveColours = [
  {
    id: "01",
    name: "Royal Black / Blue",
    hex: "#080a08",
    accent: "#002743",
    edition: "Signature Pop Royal",
    image: "/images/pop-glove/pop-cyan.jpg",
  },
  {
    id: "02",
    name: "Cognac Tan / Silver",
    hex: "#8a460d",
    accent: "#C0C0C0",
    edition: "Classic Luxury",
    image: "/images/pop-glove/pop-brown.jpg",
  },
  {
    id: "03",
    name: "Redline Crimson / Black",
    hex: "#7a1b06",
    accent: "#101109",
    edition: "Motorsport Inspired",
    image: "/images/pop-glove/pop-black.jpg",
  },
  {
    id: "04",
    name: "Arctic White / Navy",
    hex: "#e5dcd4",
    accent: "#20272d",
    edition: "Modern Clean",
    image: "/images/pop-glove/pop-blue.jpg",
  },
  {
    id: "05",
    name: "Carbon Black / Neon Green",
    hex: "#111111",
    accent: "#9d9a37",
    edition: "Hypercar Energy",
    image: "/images/pop-glove/pop-green.jpg",
  },
  {
    id: "06",
    name: "Slate Grey / Orange",
    hex: "#4d4237",
    accent: "#87430b",
    edition: "Performance Utility",
    image: "/images/pop-glove/pop-orange.jpg",
  },
  {
    id: "07",
    name: "Navy / Gold",
    hex: "#222c36",
    accent: "#ca8a04",
    edition: "Executive Premium",
    image: "/images/pop-glove/pop-pink.jpg",
  },
  {
    id: "08",
    name: "Olive / Matte Black",
    hex: "#2f2c14",
    accent: "#1a1a1a",
    edition: "Tactical Lifestyle",
    image: "/images/pop-glove/pop-olive.jpg",
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

// Key features (7 items)
export const popGloveFeatures = [
  {
    id: "01",
    title: "Dorsal Watch Integration",
    desc: "A built-in structured cradle securely houses the AP Swatch Royal Pop, maintaining visibility and stability at the exact point of the driver's natural line of sight.",
  },
  {
    id: "02",
    title: "Quick-Release System",
    desc: "Detachable watch module for flexible use on or off the glove. The watch transfers between driving and daily wear in seconds.",
  },
  {
    id: "03",
    title: "NFC Authentication Chip",
    desc: "Every P.O.P Glove comes embedded with an NFC chip for instant verification of authenticity and ownership.",
    bullets: [
      "Tap or scan with your phone to authenticate your gloves instantly",
      "Verifies originality and prevents counterfeit products",
      "Secures your purchase with proof of authenticity",
      "Creates a digital record tied to your specific glove",
    ],
  },
  {
    id: "04",
    title: "Premium Leather Craftsmanship",
    desc: "Soft, perforated leather ensures breathability, grip, and long-wear comfort across all sessions.",
  },
  {
    id: "05",
    title: "Ergonomic Performance Fit",
    desc: "Pre-curved fingers and reinforced palm zones for enhanced steering control and reduced fatigue.",
  },
  {
    id: "06",
    title: "Shock-Absorbing Mount",
    desc: "Internal cushioning minimises vibration transfer from the wheel to the timepiece, protecting the watch during aggressive driving.",
  },
  {
    id: "07",
    title: "Touch Function Compatibility",
    desc: "Designed for modern usability. Navigate your dashboard, phone, or infotainment system without removing the glove.",
  },
  {
    id: "08",
    title: "Limited Edition Colourways",
    desc: "Eight exclusive colour combinations inspired by motorsport and luxury design, each with its own unique character.",
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
    "The P.O.P Glove was born from a simple question: what if the glove could tell time? Inspired by the elegance of the AP Swatch Royal Pop, KNK Labs set out to create something like the driving gloves of the golden era. Whether you're gripping the wheel of a golf cart or a supercar, the P.O.P Glove puts time exactly where you need it.",
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
      desc: "Modern driving demands multi-function interaction. Navigate, respond, control, all without removing the glove. Engineered for contemporary mobility.",
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
      desc: "Every seam is hand-finished using traditional techniques. The stitching is both beautiful and functional, reinforced stress points ensure years of reliable performance.",
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
    "The P.O.P Glove is not just beautiful, it's engineered. Every system has been tested, refined, and perfected for real-world driving conditions.",
  specs: [
    {
      title: "Quick-Release Watch Mount",
      desc: "Proprietary locking mechanism holds the Swatch Royal Pop securely during aggressive driving, yet releases smoothly for everyday wear.",
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
      desc: "The Swatch Royal Pop is a horological legend. Paired with the P.O.P Glove, it becomes something greater: a fusion of watchmaking and wearable design.",
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
    desc: "Custom-engineered mounting system secures the Swatch Royal Pop with precision. Shock-absorbing interior prevents movement and protects the timepiece.",
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

// How To Wear Section
export const howToWear = {
  eyebrow: "Designed Around Royal Pop",
  headline: "How To Wear The P.O.P Glove",
  intro:
    "The P.O.P Glove was engineered specifically around the Audemars Piguet x Swatch Royal Pop collection. This is not a glove with a watch attached, it's a unified system where the pocket watch becomes your driving interface.",

  royalPopSpotlight: {
    eyebrow: "The Inspiration",
    headline: "AP x Swatch Royal Pop",
    body: [
      "The Royal Pop collection represents a cultural moment in horology, a collaboration between two horological titans that reimagined what a pocket watch can be. At 40mm, the bioceramic pocket watch carries the legacy of precision watchmaking into a modern, wearable format.",
      "When KNK Labs first encountered the Royal Pop, the vision was clear: this wasn't meant for a pocket or a chain. It belonged on the hand. On the exact point where a driver needs to see time. On the dorsal surface where natural line of sight meets steering control.",
      "The P.O.P Glove is the answer to that vision. A fusion of driving culture, horology, and engineering.",
    ],
  },

  dockingSteps: [
    {
      number: "01",
      title: "Remove the Royal Pop",
      description:
        "Take the pocket watch from its holder or detach from its chain. The Royal Pop is designed for rapid deployment.",
    },
    {
      number: "02",
      title: "Align with the Cradle",
      description:
        "Position the watch face toward the dorsal surface from inside the glove. The precision-engineered cradle guides the 40mm bezel into position seamlessly.",
    },
    {
      number: "03",
      title: "Snap Into Place",
      description:
        "Press the watch firmly into the quick-lock mount. You'll feel the satisfying click as the proprietary mechanism engages.",
    },
    {
      number: "04",
      title: "Secure & Drive",
      description:
        "Verify the watch sits flush against your hand. The shock-absorbing mount now protects the timepiece while delivering perfect visibility.",
    },
  ],

  experiencePoints: [
    {
      title: "Perfect Visibility",
      description:
        "Time appears in your natural line of sight, exactly where your eyes go when hands are on the wheel. No wrist rotation. No dashboard glare. Pure clarity.",
    },
    {
      title: "Unified System",
      description:
        "The glove and watch become one wearable system. Every element from the leather, to the cradle and the quick-release, works in harmony to create a seamless experience.",
    },
    {
      title: "Motorsport Heritage",
      description:
        "Inspired by the golden age of racing, where drivers needed instant time reference without losing focus. Now reimagined for modern luxury driving.",
    },
    {
      title: "Horological Respect",
      description:
        "The Royal Pop isn't compromised. It's elevated. The shock-absorbing mount protects this mechanical masterpiece while transforming it into a performance instrument.",
    },
  ],
};
