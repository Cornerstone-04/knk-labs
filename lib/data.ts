export const site = {
  name: "KNK Labs",
  tagline: "Innovation at Your Fingertips",
  description:
    "Two gloves. Two hands. One seamless system. KNK Labs engineers intelligent wearables that extend human capability. Tek Glove for your left hand, Echo Glove for your right.",
  url: "https://knk.vercel.app",
  email: "hello@knklabs.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  // { href: "/developers", label: "Developers" },
  { href: "/waitlist", label: "Join Waitlist" },
];

export const products = [
  {
    slug: "tek-glove",
    name: "Tek Glove",
    hand: "Left Hand",
    tagline: "Control the Future. Feel the Data.",
    desc: "Tek Glove sits on your left hand, mounting your Smart Watch on the dorsal side for instant visibility without obstructing wrist mobility. With millimetre-accurate gesture tracking, embedded biometrics, and seamless device integration, it turns your dominant data hand into a high-performance command system.",
    images: {
      front: "/images/knk_tekgloves_cutout.png",
      angle: "/images/knk_tekgloves_cutout.png",
      hero: "/images/knk_tekgloves_cutout.png",
      full: "/images/knk_tekgloves.png",
      extra: "/images/knk_tekgloves.png",
    },
    image: "/images/knk_tekgloves_cutout.png",

    tag: "Left Hand",
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
        title: "Dorsal-Side Smart Watch Mount",
        desc: "Tek Glove introduces a precision-moulded Smart Watch mount on the dorsal side of the hand, providing instant visibility without obstructing wrist mobility or grip.",
        bullets: [
          "Secure magnetic + elastic mounting",
          // "Seamless Apple Health + Tek OS syncing",
          "Visible during high-speed activity",
          "Designed for awareness without distraction",
        ],
      },
    ],
    mountReasons: [
      "Clear line-of-sight during motion",
      "No interference with wrist rotation",
      "Ideal for athletes, engineers, and field operators",
      "Stable, ergonomic platform for real-time data",
    ],
  },
  {
    slug: "echo-glove",
    name: "Echo Glove",
    hand: "Right Hand",
    tagline: "Speak Less. Sense More. Work Smarter.",
    desc: "Echo Glove sits on your right hand, purpose-built for communication. Haptic alerts, voice commands, and a built-in Bluetooth headset make it the silent, always-ready communication layer of the KNK system, ideal for environments where clarity and discretion matter.",
    image: "/images/echo_glove_cutout.png",
    images: {
      front: "/images/echo_glove_cutout.png",
      angle: "/images/echo_glove_cutout.png",
      hero: "/images/echo_glove_cutout.png",
      full: "/images/echo_glove.png",
      extra: "/images/echo_glove_cutout.png",
    },
    tag: "Right Hand",
    features: [
      {
        id: "01",
        title: "Silent Alert Intelligence",
        desc: "Receive immediate alerts through controlled vibration patterns designed to communicate information without sound or visual interruption.",
        bullets: [
          "Multi-point vibration signals",
          "Directional cues patterns",
          "Silent notifications during movement",
          "Built for focus-sensitive environments",
        ],
      },
      {
        id: "02",
        title: "Instant Voice Response",
        desc: "Speak, answer, and trigger commands without reaching for a separate device. Echo Glove turns natural hand movement into direct communication.",
        bullets: [
          "Fast voice activation",
          "Hands-free response",
          "Immediate coomunication while moving",
          "Reduced interruption during active tasks",
        ],
      },
      {
        id: "03",
        title: "Discreet Audio Access",
        desc: "A built-in wireless audio module gives you direct listening capability whenever privacy, speed, or clarity is needed.",
        bullets: [
          "Compact integrated audio unit",
          "Fast wireless pairing",
          "Close-range listening clarity",
          "Immediate access without device handling",
        ],
      },
    ],
    mountReasons: [],
  },
];

export const bundle = {
  name: "KNK System",
  tag: "Bundle",
  tagline: "The Complete Hand.",
  desc: "Tek Glove on your left. Echo Glove on your right. Together they form a complete wearable system, with data and control on one hand, communication and awareness on the other. Buy both and get the full KNK experience.",
  image: "/images/knk_dual.png",
  includes: ["Tek Glove (Left Hand)", "Echo Glove (Right Hand)"],
};

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
      desc: "Continuous monitoring of heart rate, motion, and performance metrics, embedded directly into the glove.",
    },
    {
      title: "Personal Security",
      desc: "Secure device integration that reduces theft and loss through a low-profile, stealth-oriented design.",
    },
    {
      title: "Predictive Analytics",
      desc: "Machine learning models that adapt to individual users over time, improving accuracy and anticipating intent.",
    },
    {
      title: "AR/VR Interaction",
      desc: "Seamless input for augmented and virtual reality environments with no controller needed, just your hand.",
    },
    {
      title: "Haptic Communication",
      desc: "Multi-zone vibration feedback that delivers directional cues, silent alerts, and contextual signals through the glove.",
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
