export const ease = [0.22, 1, 0.36, 1] as const

export const VALUE_PROPS = [
  {
    k: "01",
    t: "Pay per component",
    d: "No subscription. Buy exactly what you need, from ₹20. One button, one price.",
    tone: "primary" as const,
  },
  {
    k: "02",
    t: "Production-ready code",
    d: "Clean React, Vue, and HTML with zero external dependencies. Copy, paste, ship.",
    tone: "matcha" as const,
  },
  {
    k: "03",
    t: "Live preview",
    d: "See hover, focus, active, loading, and disabled states before you buy.",
    tone: "primary" as const,
  },
  {
    k: "04",
    t: "Framework agnostic",
    d: "React, Vue, Svelte, and plain HTML/CSS variants included with every purchase.",
    tone: "matcha" as const,
  },
  {
    k: "05",
    t: "Dark mode built-in",
    d: "Every component adapts to light and dark mode automatically. No extra work.",
    tone: "primary" as const,
  },
  {
    k: "06",
    t: "Lifetime access",
    d: "Buy once, use forever. Free updates to every component you own.",
    tone: "matcha" as const,
  },
]

export const SHOWCASE_BUTTONS = [
  {
    id: "premium-glow",
    name: "Premium Glow",
    price: 35,
    category: "Animated",
    stack: ["React", "Tailwind"],
    style: "premium-animated",
  },
  {
    id: "glass-frost",
    name: "Glass Frost",
    price: 25,
    category: "Glassmorphism",
    stack: ["React", "Tailwind"],
    style: "glass",
  },
  {
    id: "glowing-edge",
    name: "Glowing Edge",
    price: 25,
    category: "Minimal",
    stack: ["React", "Tailwind"],
    style: "glowing-edge",
  },
  {
    id: "shadow-rise",
    name: "Shadow Rise",
    price: 20,
    category: "Minimal",
    stack: ["HTML", "CSS"],
    style: "shadow",
  },
  {
    id: "border-trace",
    name: "Border Trace",
    price: 30,
    category: "Animated",
    stack: ["React", "CSS"],
    style: "border-trace",
  },
  {
    id: "shimmer-fill",
    name: "Shimmer Fill",
    price: 25,
    category: "Animated",
    stack: ["React", "Tailwind"],
    style: "shimmer",
  },
  {
    id: "minimal-dark",
    name: "Minimal Dark",
    price: 20,
    category: "Minimal",
    stack: ["HTML", "CSS"],
    style: "minimal-dark",
  },
  {
    id: "soft-bounce",
    name: "Soft Bounce",
    price: 20,
    category: "Minimal",
    stack: ["HTML", "CSS"],
    style: "bounce",
  },
  {
    id: "subtle-sweep",
    name: "Subtle Sweep",
    price: 25,
    category: "Gradient",
    stack: ["React", "CSS"],
    style: "sweep",
  },
]

export const COMPETITOR_COMPARISONS = [
  {
    competitor: "Open-Source UI Libraries",
    contrast:
      "Many free libraries lack comprehensive accessibility (a11y) support, fail to handle edge-case interaction states, and introduce heavy bundle sizes due to unoptimized dependencies.",
    openbutton:
      "Meticulously engineered components with zero external dependencies. Each element features full keyboard navigation, ARIA labels, and flawless state management.",
  },
  {
    competitor: "Monolithic Frameworks",
    contrast:
      "Adopting a full UI framework often dictates your entire design system architecture, leading to bloated CSS bundles and difficult-to-override styling paradigms.",
    openbutton:
      "A true micro-component architecture. Adopt individual, self-contained elements that seamlessly integrate into your existing tech stack without global side-effects.",
  },
  {
    competitor: "Community Repositories",
    contrast:
      "Community-driven platforms offer volume but lack consistency. Components frequently break across different browsers or fail in native dark-mode implementations.",
    openbutton:
      "Production-grade consistency. Every component undergoes rigorous cross-browser testing and features perceptually uniform dark-mode color scales out-of-the-box.",
  },
] as const

export const FEATURE_MATRIX = [
  {
    feature: "Premium Components Library",
    openbutton: true,
    freeLibs: "varies",
    aceternity: true,
    uiverse: true,
  },
  {
    feature: "Algorithm Lab (UI Patterns)",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Idea-to-Component Builder",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Client Pitch & Strategy Guides",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Typography & Psychology Docs",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Professional Image Studio",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Framework variants",
    openbutton: true,
    freeLibs: false,
    aceternity: false,
    uiverse: false,
  },
  {
    feature: "Zero dependencies",
    openbutton: true,
    freeLibs: "varies",
    aceternity: false,
    uiverse: "varies",
  },
  {
    feature: "Time to integrate",
    openbutton: "2 min",
    freeLibs: "30+ min",
    aceternity: "10 min",
    uiverse: "15+ min",
  },
] as const

export const FAQS = [
  {
    q: "What do I get when I buy a button?",
    a: "You get production-ready source code in React, Vue, and plain HTML/CSS. Every purchase includes all interaction states (hover, focus, active, loading, disabled), dark mode support, and a live preview. The code is clean, dependency-free, and ready to paste into your project.",
  },
  {
    q: "Can I use purchased components in commercial projects?",
    a: "Yes. Every purchase includes a perpetual commercial license. Use the components in unlimited personal and commercial projects — client work, SaaS products, startups, anything you build.",
  },
  {
    q: "What frameworks are supported?",
    a: "Each component comes with React (JSX/TSX), Vue (SFC), and plain HTML/CSS variants. Tailwind CSS versions are available where applicable. Svelte support is coming soon.",
  },
  {
    q: "Do I get updates when components are improved?",
    a: "Yes. When we update a component you own — better animations, accessibility improvements, new framework support — you get the update for free. Lifetime access means lifetime updates.",
  },
  {
    q: "Can I request a custom button?",
    a: "Absolutely. If you need a specific style, animation, or interaction pattern that isn't in our catalog, reach out via email. Custom commissions start at ₹200 and are typically delivered within 48 hours.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, net banking, and international cards via our payment processor. All transactions are processed securely — we never store your payment details.",
  },
  {
    q: "Is there a refund policy?",
    a: "Since you receive the full source code instantly upon purchase, refunds are generally not available. However, if you receive a component that doesn't match its preview or has a defect, contact us within 7 days for a full refund or replacement.",
  },
  {
    q: "Can I see the code before buying?",
    a: "You can preview all interaction states (hover, focus, active, loading, disabled) live on the website. The full source code is delivered after purchase. We don't show raw code previews to protect our work.",
  },
]

export const USE_CASES = [
  {
    title: "SaaS dashboards",
    body: "Premium CTAs for your admin panels, settings pages, and user onboarding flows.",
    meta: "Enterprise",
  },
  {
    title: "Landing pages",
    body: "Hero buttons that convert — gradients, glows, and micro-animations that demand clicks.",
    meta: "Conversion",
  },
  {
    title: "Mobile apps",
    body: "Touch-optimized buttons with haptic-ready interaction patterns for React Native and Flutter.",
    meta: "Mobile",
  },
  {
    title: "Design systems",
    body: "Foundation components you can extend into your own system with consistent token architecture.",
    meta: "Architecture",
  },
]
