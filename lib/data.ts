export const site = {
  name: "KNK Labs",
  tagline: "Innovation at Your Fingertips",
  description:
    "Advanced wearable technology engineered to enhance performance, elevate safety, and redefine human–machine interaction.",
  url: "https://knk.vercel.app",
  email: "hello@knklabs.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/developers", label: "Developers" },
  { href: "/waitlist", label: "Join Waitlist" },
];

export const products = [
  {
    slug: "tek-glove",
    name: "Tek Glove",
    tagline: "Control the Future. Feel the Data.",
    desc: "An advanced smart glove designed for athletes, engineers, creators, operators, and innovators. With millimetre-accurate gesture tracking, embedded biometrics, and seamless device integration, Tek Glove turns your hand into a high-performance command system.",
    image: "/images/tekglove-front.jpg",
    tag: "Flagship",
    features: [
      {
        id: "01",
        title: "Gesture Intelligence",
        desc: "Tek Glove detects micro-movements with precision, translating gestures into real-time commands for apps, robots, tools, and training systems.",
        bullets: [
          "Adaptive machine-learning gesture engine",
          "Robotics and equipment control",
          "Custom gesture creation (Developer Mode)",
          "Low-latency response",
        ],
      },
      {
        id: "02",
        title: "Biometric Performance Tracking",
        desc: "Stay connected to your body while you work or train.",
        bullets: [
          "Heart rate monitoring",
          "Motion analytics",
          "Sports & training mode",
          "BRB App integrated performance metrics",
        ],
      },
      {
        id: "03",
        title: "Dorsal-Side Apple Watch Dock",
        desc: "Tek Glove introduces a precision-moulded Apple Watch mount on the dorsal side of the hand, providing instant visibility without obstructing wrist mobility or grip.",
        bullets: [
          "Secure magnetic + elastic docking",
          "Seamless Apple Health + Tek OS syncing",
          "Visible during high-speed activity",
          "Designed for awareness without distraction",
        ],
      },
    ],
    dockReasons: [
      "Clear line-of-sight during motion",
      "No interference with wrist rotation",
      "Ideal for athletes, engineers, and field operators",
      "Stable, ergonomic platform for real-time data",
    ],
  },
  {
    slug: "echo-glove",
    name: "Echo Glove",
    tagline: "Speak Less. Sense More. Work Smarter.",
    desc: "A haptic-intelligent communication glove built for environments where clarity, awareness, and precision matter. Whether you're on a shop floor, in the field, or in a high-security environment, Echo Glove delivers alerts and communication silently and instantly.",
    image: "/images/echo-glove-placeholder.jpg",
    tag: "New",
    features: [
      {
        id: "01",
        title: "Haptic Feedback System",
        desc: "Receive instructions and alerts through vibration patterns built around your hand's natural sensitivity.",
        bullets: [
          "Multi-zone haptics",
          "Directional cues",
          "Silent mode alerts",
          "Ideal for noisy or restricted environments",
        ],
      },
      {
        id: "02",
        title: "Voice Assist Connectivity",
        desc: "Operate hands-free with instant voice input and response.",
        bullets: [
          "Low-latency voice commands",
          "Integrated assistant",
          "Alerts + audio feedback capability",
        ],
      },
      {
        id: "03",
        title: "Bluetooth Headset Dock",
        desc: "Echo Glove includes a sleek micro Bluetooth headset dock, allowing you to store, charge, and auto-pair your headset directly inside the glove.",
        bullets: [
          "Built-in charging cradle",
          "Instant pairing with Echo OS",
          "Discreet communication",
          "Perfect for security staff, engineers, and field operatives",
        ],
      },
    ],
    dockReasons: [],
  },
];

export const about = {
  headline: "Who We Are",
  desc: "KNK Labs is an innovation studio focused on next-generation wearable engineering. We merge AI, robotics, human ergonomics, and advanced materials to create wearables that think, sense, and act with you.",
  mission:
    "To extend human capability through intelligent design and seamless machine integration.",
  expertise: [
    {
      title: "Gesture Recognition",
      desc: "Millimetre-accurate detection of hand and finger movements, translated into real-time commands for any connected system.",
    },
    {
      title: "Biometric Tracking",
      desc: "Continuous monitoring of heart rate, motion, and performance metrics — embedded directly into the glove.",
    },
    {
      title: "Robotics Interfacing",
      desc: "Direct control of robotic systems and equipment through natural hand gestures, with low-latency response.",
    },
    {
      title: "Predictive Analytics",
      desc: "Machine learning models that adapt to individual users over time, improving accuracy and anticipating intent.",
    },
    {
      title: "AR/VR Interaction",
      desc: "Seamless input for augmented and virtual reality environments — no controller needed, just your hand.",
    },
    {
      title: "Haptic Communication",
      desc: "Multi-zone vibration feedback that delivers directional cues, silent alerts, and contextual signals through the glove.",
    },
    {
      title: "Integrated Device Docking",
      desc: "Precision-engineered mounts for Apple Watch and Bluetooth headsets — keeping your devices secure, visible, and accessible.",
    },
  ],
};

export const developers = {
  headline: "Build With the KNK Ecosystem",
  desc: "Unlock gesture APIs, haptic libraries, device SDKs, and firmware tools designed for builders and innovators.",
  tools: [
    {
      label: "API Documentation",
      desc: "Full reference for gesture, biometric, and haptic APIs.",
    },
    {
      label: "SDK Downloads",
      desc: "Native SDKs for iOS, Android, and embedded systems.",
    },
    {
      label: "Sample Code Libraries",
      desc: "Ready-to-use examples across common use cases.",
    },
    {
      label: "Robotics Integration",
      desc: "Guides for interfacing Tek Glove with robotic platforms.",
    },
    {
      label: "Developer Forum",
      desc: "Connect with the KNK builder community.",
    },
  ],
};

export const waitlist = {
  headline: "Be First. Be Ahead.",
  subheadline:
    "Tek Glove and Echo Glove launch soon. Join the priority waitlist to secure early access.",
  body: "Early production units will be available in small batches. Joining the waitlist gives you priority access, exclusive updates, early pricing, and the first opportunity to pre-order.",
  reassurance:
    "We'll only contact you with important updates and pre-order invitations.",
  note: "No payment required. No commitment. Just first-in-line access.",
};
