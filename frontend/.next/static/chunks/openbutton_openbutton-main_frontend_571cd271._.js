(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/openbutton/openbutton-main/frontend/components/landing/rail-styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RAIL_H_STYLE",
    ()=>RAIL_H_STYLE,
    "RAIL_V_STYLE",
    ()=>RAIL_V_STYLE
]);
const RAIL_V_STYLE = {
    backgroundImage: "repeating-linear-gradient(to bottom, var(--rail) 0px, var(--rail) 6px, transparent 6px, transparent 14px), repeating-linear-gradient(to bottom, var(--rail) 0px, var(--rail) 6px, transparent 6px, transparent 14px)",
    backgroundSize: "1px 100%, 1px 100%",
    backgroundPosition: "left top, right top",
    backgroundRepeat: "no-repeat, no-repeat"
};
const RAIL_H_STYLE = {
    backgroundImage: "repeating-linear-gradient(to right, var(--rail) 0px, var(--rail) 6px, transparent 6px, transparent 14px)",
    backgroundSize: "100% 1px",
    backgroundRepeat: "no-repeat"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/dashed-h.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashedH",
    ()=>DashedH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/rail-styles.ts [app-client] (ecmascript)");
;
;
function DashedH() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "relative h-px",
        style: {
            width: "99.6vw",
            marginLeft: "calc(50% - 50vw)",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_H_STYLE"]
        }
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/dashed-h.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = DashedH;
var _c;
__turbopack_context__.k.register(_c, "DashedH");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPETITOR_COMPARISONS",
    ()=>COMPETITOR_COMPARISONS,
    "FAQS",
    ()=>FAQS,
    "FEATURE_MATRIX",
    ()=>FEATURE_MATRIX,
    "SHOWCASE_BUTTONS",
    ()=>SHOWCASE_BUTTONS,
    "USE_CASES",
    ()=>USE_CASES,
    "VALUE_PROPS",
    ()=>VALUE_PROPS,
    "ease",
    ()=>ease
]);
const ease = [
    0.22,
    1,
    0.36,
    1
];
const VALUE_PROPS = [
    {
        k: "01",
        t: "Pay per component",
        d: "No subscription. Buy exactly what you need, from ₹20. One button, one price.",
        tone: "primary"
    },
    {
        k: "02",
        t: "Production-ready code",
        d: "Clean React, Vue, and HTML with zero external dependencies. Copy, paste, ship.",
        tone: "matcha"
    },
    {
        k: "03",
        t: "Live preview",
        d: "See hover, focus, active, loading, and disabled states before you buy.",
        tone: "primary"
    },
    {
        k: "04",
        t: "Framework agnostic",
        d: "React, Vue, Svelte, and plain HTML/CSS variants included with every purchase.",
        tone: "matcha"
    },
    {
        k: "05",
        t: "Dark mode built-in",
        d: "Every component adapts to light and dark mode automatically. No extra work.",
        tone: "primary"
    },
    {
        k: "06",
        t: "Lifetime access",
        d: "Buy once, use forever. Free updates to every component you own.",
        tone: "matcha"
    }
];
const SHOWCASE_BUTTONS = [
    {
        id: "premium-glow",
        name: "Premium Glow",
        price: 35,
        category: "Animated",
        stack: [
            "React",
            "Tailwind"
        ],
        style: "premium-animated"
    },
    {
        id: "glass-frost",
        name: "Glass Frost",
        price: 25,
        category: "Glassmorphism",
        stack: [
            "React",
            "Tailwind"
        ],
        style: "glass"
    },
    {
        id: "glowing-edge",
        name: "Glowing Edge",
        price: 25,
        category: "Minimal",
        stack: [
            "React",
            "Tailwind"
        ],
        style: "glowing-edge"
    },
    {
        id: "shadow-rise",
        name: "Shadow Rise",
        price: 20,
        category: "Minimal",
        stack: [
            "HTML",
            "CSS"
        ],
        style: "shadow"
    },
    {
        id: "border-trace",
        name: "Border Trace",
        price: 30,
        category: "Animated",
        stack: [
            "React",
            "CSS"
        ],
        style: "border-trace"
    },
    {
        id: "shimmer-fill",
        name: "Shimmer Fill",
        price: 25,
        category: "Animated",
        stack: [
            "React",
            "Tailwind"
        ],
        style: "shimmer"
    },
    {
        id: "minimal-dark",
        name: "Minimal Dark",
        price: 20,
        category: "Minimal",
        stack: [
            "HTML",
            "CSS"
        ],
        style: "minimal-dark"
    },
    {
        id: "soft-bounce",
        name: "Soft Bounce",
        price: 20,
        category: "Minimal",
        stack: [
            "HTML",
            "CSS"
        ],
        style: "bounce"
    },
    {
        id: "subtle-sweep",
        name: "Subtle Sweep",
        price: 25,
        category: "Gradient",
        stack: [
            "React",
            "CSS"
        ],
        style: "sweep"
    }
];
const COMPETITOR_COMPARISONS = [
    {
        competitor: "Open-Source UI Libraries",
        contrast: "Many free libraries lack comprehensive accessibility (a11y) support, fail to handle edge-case interaction states, and introduce heavy bundle sizes due to unoptimized dependencies.",
        openbutton: "Meticulously engineered components with zero external dependencies. Each element features full keyboard navigation, ARIA labels, and flawless state management."
    },
    {
        competitor: "Monolithic Frameworks",
        contrast: "Adopting a full UI framework often dictates your entire design system architecture, leading to bloated CSS bundles and difficult-to-override styling paradigms.",
        openbutton: "A true micro-component architecture. Adopt individual, self-contained elements that seamlessly integrate into your existing tech stack without global side-effects."
    },
    {
        competitor: "Community Repositories",
        contrast: "Community-driven platforms offer volume but lack consistency. Components frequently break across different browsers or fail in native dark-mode implementations.",
        openbutton: "Production-grade consistency. Every component undergoes rigorous cross-browser testing and features perceptually uniform dark-mode color scales out-of-the-box."
    }
];
const FEATURE_MATRIX = [
    {
        feature: "Consistent quality",
        openbutton: true,
        freeLibs: "varies",
        aceternity: true,
        uiverse: false
    },
    {
        feature: "Pay per component",
        openbutton: true,
        freeLibs: true,
        aceternity: false,
        uiverse: true
    },
    {
        feature: "All interaction states",
        openbutton: true,
        freeLibs: "varies",
        aceternity: true,
        uiverse: "varies"
    },
    {
        feature: "Dark mode built-in",
        openbutton: true,
        freeLibs: "varies",
        aceternity: true,
        uiverse: false
    },
    {
        feature: "Framework variants",
        openbutton: true,
        freeLibs: false,
        aceternity: false,
        uiverse: false
    },
    {
        feature: "Zero dependencies",
        openbutton: true,
        freeLibs: "varies",
        aceternity: false,
        uiverse: "varies"
    },
    {
        feature: "Lifetime updates",
        openbutton: true,
        freeLibs: true,
        aceternity: "paid",
        uiverse: true
    },
    {
        feature: "Time to integrate",
        openbutton: "2 min",
        freeLibs: "30+ min",
        aceternity: "10 min",
        uiverse: "15+ min"
    }
];
const FAQS = [
    {
        q: "What do I get when I buy a button?",
        a: "You get production-ready source code in React, Vue, and plain HTML/CSS. Every purchase includes all interaction states (hover, focus, active, loading, disabled), dark mode support, and a live preview. The code is clean, dependency-free, and ready to paste into your project."
    },
    {
        q: "Can I use purchased components in commercial projects?",
        a: "Yes. Every purchase includes a perpetual commercial license. Use the components in unlimited personal and commercial projects — client work, SaaS products, startups, anything you build."
    },
    {
        q: "What frameworks are supported?",
        a: "Each component comes with React (JSX/TSX), Vue (SFC), and plain HTML/CSS variants. Tailwind CSS versions are available where applicable. Svelte support is coming soon."
    },
    {
        q: "Do I get updates when components are improved?",
        a: "Yes. When we update a component you own — better animations, accessibility improvements, new framework support — you get the update for free. Lifetime access means lifetime updates."
    },
    {
        q: "Can I request a custom button?",
        a: "Absolutely. If you need a specific style, animation, or interaction pattern that isn't in our catalog, reach out via email. Custom commissions start at ₹200 and are typically delivered within 48 hours."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept UPI, credit/debit cards, net banking, and international cards via our payment processor. All transactions are processed securely — we never store your payment details."
    },
    {
        q: "Is there a refund policy?",
        a: "Since you receive the full source code instantly upon purchase, refunds are generally not available. However, if you receive a component that doesn't match its preview or has a defect, contact us within 7 days for a full refund or replacement."
    },
    {
        q: "Can I see the code before buying?",
        a: "You can preview all interaction states (hover, focus, active, loading, disabled) live on the website. The full source code is delivered after purchase. We don't show raw code previews to protect our work."
    }
];
const USE_CASES = [
    {
        title: "SaaS dashboards",
        body: "Premium CTAs for your admin panels, settings pages, and user onboarding flows.",
        meta: "Enterprise"
    },
    {
        title: "Landing pages",
        body: "Hero buttons that convert — gradients, glows, and micro-animations that demand clicks.",
        meta: "Conversion"
    },
    {
        title: "Mobile apps",
        body: "Touch-optimized buttons with haptic-ready interaction patterns for React Native and Flutter.",
        meta: "Mobile"
    },
    {
        title: "Design systems",
        body: "Foundation components you can extend into your own system with consistent token architecture.",
        meta: "Architecture"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonSection",
    ()=>ComparisonSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
;
;
;
;
function MatrixCell(param) {
    let { value, featured = false } = param;
    if (value === true) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: featured ? "text-primary" : "text-foreground/72",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCheckboxCircleLine"], {
                className: "mx-auto size-4"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    if (value === false) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-foreground/28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCloseCircleLine"], {
                className: "mx-auto size-4"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: featured ? "inline-flex items-center justify-center gap-1 font-mono text-[10px] tracking-widest text-primary uppercase" : "inline-flex items-center justify-center gap-1 font-mono text-[10px] tracking-widest text-foreground/45 uppercase",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiSubtractLine"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            value
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = MatrixCell;
function ComparisonSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "comparison",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.3
                },
                transition: {
                    duration: 0.65,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                className: "mb-10 flex max-w-4xl flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                        children: "// Why not free?"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "max-w-3xl text-2xl tracking-tight sm:text-3xl lg:text-4xl",
                        children: [
                            "Free components cost you time.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "₹20 saves you hours."
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-7 text-foreground/58",
                        children: "Free libraries are great for prototyping. But when you need production-ready buttons with consistent quality, all interaction states, and dark mode — the debugging time costs more than ₹20."
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 lg:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPETITOR_COMPARISONS"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.5,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                            delay: index * 0.05
                        },
                        className: "rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid h-full overflow-hidden rounded-[8px] border border-border/40 bg-background/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-border/50 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[10px] tracking-[0.24em] text-foreground/36 uppercase",
                                            children: [
                                                "Versus ",
                                                item.competitor
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[13px] leading-relaxed text-foreground/54",
                                            children: item.contrast
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-primary/[0.055] p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[10px] tracking-[0.24em] text-primary uppercase",
                                            children: "OpenButton"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[14px] leading-relaxed font-medium text-foreground",
                                            children: item.openbutton
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, item.competitor, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.25
                },
                transition: {
                    duration: 0.65,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                    delay: 0.08
                },
                className: "mt-5 max-h-[28rem] overflow-auto rounded-md border border-border/70 bg-background/55 backdrop-blur-md sm:max-h-none sm:overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid min-w-[38rem] grid-cols-[minmax(10rem,1.4fr)_repeat(4,minmax(4.5rem,0.55fr))] border-b border-border/60 bg-background/70 text-center font-mono text-[10px] tracking-[0.2em] text-foreground/42 uppercase",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 text-left",
                                children: "Feature"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-primary/[0.07] px-3 py-3 text-primary",
                                children: "OpenButton"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-3",
                                children: "Free Libs"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-3",
                                children: "Aceternity"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-3",
                                children: "UIverse"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURE_MATRIX"].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid min-w-[38rem] grid-cols-[minmax(10rem,1.4fr)_repeat(4,minmax(4.5rem,0.55fr))] border-b border-border/45 last:border-b-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 text-[13px] font-medium text-foreground/78",
                                    children: row.feature
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-primary/[0.045] px-3 py-3 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixCell, {
                                        value: row.openbutton,
                                        featured: true
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-3 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixCell, {
                                        value: row.freeLibs
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-3 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixCell, {
                                        value: row.aceternity
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-3 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixCell, {
                                        value: row.uiverse
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, row.feature, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c1 = ComparisonSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "MatrixCell");
__turbopack_context__.k.register(_c1, "ComparisonSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ContactSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.4
                    },
                    transition: {
                        duration: 0.65,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                    },
                    className: "flex flex-col gap-4 lg:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[10px] tracking-[0.24em] text-primary/80 uppercase",
                            children: "// Custom work"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl tracking-tight sm:text-3xl",
                            children: "Need a custom component?"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] leading-relaxed text-foreground/58",
                            children: "If you need a specific button style, interaction pattern, or completely custom micro-UI component for your design system, we take commissions."
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.4
                    },
                    transition: {
                        duration: 0.5,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                        delay: 0.08
                    },
                    className: "flex flex-col gap-6 rounded-xl border border-border/60 bg-background/40 p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-mono text-[10px] tracking-[0.2em] text-foreground/45 uppercase",
                                    children: "How it works"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] leading-relaxed text-foreground/75",
                                    children: "Email us your design (Figma link or screenshot). We'll quote a price (starting at ₹200) and deliver the React/Vue/HTML source code within 48 hours."
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px bg-border/50"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:hello@openbutton.ui",
                            className: "group flex items-center justify-between rounded-lg border border-border/60 bg-background/50 p-4 transition-colors hover:border-foreground/30 hover:bg-background/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm font-semibold tracking-tight text-foreground/85",
                                    children: "Request custom work"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowRightUpLine"], {
                                    className: "size-4 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureRow",
    ()=>FeatureRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
;
;
;
const ICONS = {
    "01": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v4l3 3"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "02": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 18l6-6-6-6"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 6l-6 6 6 6"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5 4l-5 16"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "03": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12h8"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v8"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "04": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5-10-5z"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "05": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v2"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 20v2"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4.93 4.93 1.41 1.41"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m17.66 17.66 1.41 1.41"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h2"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12h2"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4.93 19.07 1.41-1.41"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m17.66 6.34 1.41-1.41"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    "06": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        className: "size-5",
        stroke: "currentColor",
        strokeWidth: 1.4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5-10-5z"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function FeatureRow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                        children: "// Why OpenButton"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl tracking-tight sm:text-3xl",
                        children: [
                            "The purchasing decision should feel",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "effortless."
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALUE_PROPS"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.5,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                            delay: i * 0.05
                        },
                        className: "group rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm transition-colors hover:border-border/90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full flex-col gap-4 rounded-[8px] border border-border/40 bg-background/60 p-5 transition-colors group-hover:bg-background/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground/50 transition-colors group-hover:text-foreground/80",
                                    children: ICONS[f.k]
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[14px] font-semibold tracking-tight text-foreground",
                                            children: f.t
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] leading-relaxed text-foreground/50",
                                            children: f.d
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, f.k, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c = FeatureRow;
var _c;
__turbopack_context__.k.register(_c, "FeatureRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@radix-ui+react-accordion@1.2.12_@types+react-dom@19.2.3_@types+react@19.2.15__@types+r_33be928af269cbbbde6def3bf40f0ee1/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript) <export * as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Root, {
        "data-slot": "accordion",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full flex-col overflow-hidden rounded-md border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Accordion;
function AccordionItem(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Item, {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("not-last:border-b data-open:bg-muted/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Trigger, {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/accordion-trigger relative flex flex-1 items-start justify-between gap-6 border border-transparent p-2 text-left text-xs/relaxed font-medium transition-all outline-none hover:underline disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowDownSLine"], {
                    "data-slot": "accordion-trigger-icon",
                    className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowUpSLine"], {
                    "data-slot": "accordion-trigger-icon",
                    className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$accordion$40$1$2e$2$2e$12_$40$types$2b$react$2d$dom$40$19$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$15_$5f40$types$2b$r_33be928af269cbbbde6def3bf40f0ee1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Accordion$3e$__["Accordion"].Content, {
        "data-slot": "accordion-content",
        className: "overflow-hidden px-2 text-xs/relaxed data-open:animate-accordion-down data-closed:animate-accordion-up",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-(--radix-accordion-content-height) pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function FaqColumn(param) {
    let { items, offset = 0 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
        type: "single",
        collapsible: true,
        className: "overflow-hidden rounded-xl border border-border/60",
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    margin: "-40px"
                },
                transition: {
                    duration: 0.4,
                    delay: (offset + i) * 0.04,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                    value: "item-".concat(offset + i),
                    className: "border-b border-border/60 bg-background/70 px-7 last:border-b-0 data-[state=open]:bg-background",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                            className: "py-5 text-left text-[15px] font-medium tracking-tight text-foreground/85 hover:text-foreground hover:no-underline",
                            children: item.q
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                            className: "pb-5 text-[13px] leading-relaxed text-foreground/55",
                            children: item.a
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = FaqColumn;
function Faq() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 md:w-64 md:pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                            children: "// FAQ"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 text-2xl tracking-tight whitespace-nowrap",
                            children: "Common questions"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqColumn, {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQS"],
                        offset: 0
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c1 = Faq;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqColumn");
__turbopack_context__.k.register(_c1, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>ArrowRight,
    "CircuitLine",
    ()=>CircuitLine,
    "CornerTick",
    ()=>CornerTick,
    "Crosshair",
    ()=>Crosshair,
    "GithubGlyph",
    ()=>GithubGlyph,
    "ProductHuntGlyph",
    ()=>ProductHuntGlyph,
    "SparkleAsterisk",
    ()=>SparkleAsterisk,
    "StarIcon",
    ()=>StarIcon,
    "TokokinoMark",
    ()=>TokokinoMark,
    "TwitterGlyph",
    ()=>TwitterGlyph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TokokinoMark(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "tokokino-mark",
                    x1: "4",
                    y1: "4",
                    x2: "28",
                    y2: "28",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "currentColor",
                            stopOpacity: "0.95"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "currentColor",
                            stopOpacity: "0.55"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.5",
                y: "4.5",
                width: "23",
                height: "23",
                rx: "6",
                stroke: "url(#tokokino-mark)",
                strokeOpacity: "0.55"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 22V10h2.2l7.6 8V10H22v12h-2.2l-7.6-8v8H10Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22.5",
                cy: "9.5",
                r: "1.4",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TokokinoMark;
function Crosshair(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 0v12M0 6h12",
            stroke: "currentColor",
            strokeWidth: "0.6"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c1 = Crosshair;
function StarIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 1.5 9.8 5.2l4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 1.5Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c2 = StarIcon;
function ArrowRight(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 8h10m0 0L9 4m4 4-4 4",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c3 = ArrowRight;
function SparkleAsterisk(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 1.5v13M1.5 8h13M3.4 3.4l9.2 9.2M12.6 3.4 3.4 12.6",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c4 = SparkleAsterisk;
function GithubGlyph(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.79c.97 0 1.95.13 2.87.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.2.67.8.56A11.52 11.52 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5Z"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c5 = GithubGlyph;
function TwitterGlyph(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c6 = TwitterGlyph;
function ProductHuntGlyph(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10.5",
                stroke: "currentColor",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 7.5h3.4a3 3 0 0 1 0 6H10v3.5M10 7.5v6",
                stroke: "currentColor",
                strokeWidth: "1.3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c7 = ProductHuntGlyph;
function CircuitLine(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 320 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 30 H80 L100 10 H180 L200 50 H300",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: "0.55",
                style: {
                    strokeDasharray: 600,
                    strokeDashoffset: 600,
                    animation: "landing-draw 2.4s ease 0.4s forwards"
                }
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "30",
                r: "2",
                fill: "currentColor",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "200",
                cy: "50",
                r: "2",
                fill: "currentColor",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "300",
                cy: "30",
                r: "2.4",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c8 = CircuitLine;
function CornerTick(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1h6M1 1v6",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_c9 = CornerTick;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "TokokinoMark");
__turbopack_context__.k.register(_c1, "Crosshair");
__turbopack_context__.k.register(_c2, "StarIcon");
__turbopack_context__.k.register(_c3, "ArrowRight");
__turbopack_context__.k.register(_c4, "SparkleAsterisk");
__turbopack_context__.k.register(_c5, "GithubGlyph");
__turbopack_context__.k.register(_c6, "TwitterGlyph");
__turbopack_context__.k.register(_c7, "ProductHuntGlyph");
__turbopack_context__.k.register(_c8, "CircuitLine");
__turbopack_context__.k.register(_c9, "CornerTick");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinalCta",
    ()=>FinalCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const asciiOrnaments = [
    {
        className: "left-[4%] top-[12%] text-foreground/35",
        text: [
            "      n",
            "     nnn",
            "    nnnnn",
            "nnnnnnnnnnn",
            "  nnnnnnn",
            "    nnn",
            "     n"
        ].join("\n")
    },
    {
        className: "right-[7%] top-[16%] text-foreground/35",
        text: [
            "      oo",
            "     oooo",
            "oooo ooooo",
            " ooooooooo",
            "   ooooo",
            "  ooo ooo",
            " oo     oo"
        ].join("\n")
    },
    {
        className: "bottom-[10%] left-[18%] hidden text-foreground/28 sm:block",
        text: [
            "  /\\",
            " /nn\\",
            "/nnnn\\",
            "\\nnnn/",
            " \\nn/",
            "  \\/"
        ].join("\n")
    },
    {
        className: "bottom-[12%] right-[18%] hidden text-foreground/30 md:block",
        text: [
            "+++++",
            "+   +",
            "++ ++",
            " +++",
            "++ ++",
            "+   +",
            "+++++"
        ].join("\n")
    }
];
function FinalCta() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 opacity-65",
                style: {
                    background: "radial-gradient(circle at 50% 42%, color-mix(in oklch, var(--foreground) 7%, transparent), transparent 36%), radial-gradient(circle at 18% 78%, color-mix(in oklch, var(--foreground) 5%, transparent), transparent 26%)"
                }
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            asciiOrnaments.map((ornament, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].pre, {
                    "aria-hidden": "true",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: "-80px"
                    },
                    transition: {
                        duration: 0.5,
                        delay: index * 0.07,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                    },
                    className: "pointer-events-none absolute font-mono text-[9px] leading-[0.82] font-bold tracking-[-0.08em] select-none sm:text-[11px] md:text-[13px] ".concat(ornament.className),
                    children: ornament.text
                }, index, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    margin: "-80px"
                },
                transition: {
                    duration: 0.65,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                className: "relative mx-auto flex max-w-5xl flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] tracking-[0.28em] text-primary/80 uppercase",
                        children: "// Last call"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-5 text-[1.65rem] leading-[1.05] font-medium tracking-[-0.04em] text-balance sm:text-4xl lg:text-[3.75rem]",
                        children: [
                            "Premium buttons,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "ready to ship."
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 max-w-xl text-[14px] leading-relaxed text-balance text-foreground/58 sm:text-[15px]",
                        children: "Stop building basic buttons from scratch. Buy exactly what you need, get the production-ready code instantly, and focus on the rest of your app."
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-9 flex flex-wrap items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#showcase",
                                onClick: (e)=>{
                                    var _document_getElementById;
                                    e.preventDefault();
                                    (_document_getElementById = document.getElementById("showcase")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                },
                                className: "group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_14px_40px_-18px_var(--primary)] transition hover:opacity-95",
                                children: [
                                    "Browse Buttons",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                        className: "size-4 transition-transform group-hover:translate-x-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/samay-hash/openbutton",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/45 px-5 py-2.5 text-sm font-medium text-foreground/70 backdrop-blur-sm transition hover:border-foreground/30 hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiGithubFill"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    "GitHub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = FinalCta;
var _c;
__turbopack_context__.k.register(_c, "FinalCta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextHoverEffect",
    ()=>TextHoverEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TextHoverEffect = (param)=>{
    let { text, duration } = param;
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [maskPosition, setMaskPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cx: "50%",
        cy: "50%"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextHoverEffect.useEffect": ()=>{
            if (svgRef.current && cursor.x !== null && cursor.y !== null) {
                const svgRect = svgRef.current.getBoundingClientRect();
                const cxPercentage = (cursor.x - svgRect.left) / svgRect.width * 100;
                const cyPercentage = (cursor.y - svgRect.top) / svgRect.height * 100;
                setMaskPosition({
                    cx: "".concat(cxPercentage, "%"),
                    cy: "".concat(cyPercentage, "%")
                });
            }
        }
    }["TextHoverEffect.useEffect"], [
        cursor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        width: "100%",
        height: "100%",
        viewBox: "0 0 300 100",
        xmlns: "http://www.w3.org/2000/svg",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onMouseMove: (e)=>setCursor({
                x: e.clientX,
                y: e.clientY
            }),
        className: "select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "textGradient",
                        gradientUnits: "userSpaceOnUse",
                        cx: "50%",
                        cy: "50%",
                        r: "25%",
                        children: hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#eab308"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "25%",
                                    stopColor: "#ef4444"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#3b82f6"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "75%",
                                    stopColor: "#06b6d4"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#8b5cf6"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].radialGradient, {
                        id: "revealMask",
                        gradientUnits: "userSpaceOnUse",
                        r: "20%",
                        initial: {
                            cx: "50%",
                            cy: "50%"
                        },
                        animate: maskPosition,
                        transition: {
                            duration: duration !== null && duration !== void 0 ? duration : 0,
                            ease: "easeOut"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "white"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "black"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "textMask",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            fill: "url(#revealMask)"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50%",
                y: "50%",
                textAnchor: "middle",
                dominantBaseline: "middle",
                strokeWidth: "0.3",
                textLength: "290",
                lengthAdjust: "spacingAndGlyphs",
                className: "fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800",
                style: {
                    opacity: hovered ? 0.7 : 0
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                x: "50%",
                y: "50%",
                textAnchor: "middle",
                dominantBaseline: "middle",
                strokeWidth: "0.3",
                textLength: "290",
                lengthAdjust: "spacingAndGlyphs",
                className: "fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800",
                initial: {
                    strokeDashoffset: 1000,
                    strokeDasharray: 1000
                },
                animate: {
                    strokeDashoffset: 0,
                    strokeDasharray: 1000
                },
                transition: {
                    duration: 4,
                    ease: "easeInOut"
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "50%",
                y: "50%",
                textAnchor: "middle",
                dominantBaseline: "middle",
                stroke: "url(#textGradient)",
                strokeWidth: "0.3",
                mask: "url(#textMask)",
                textLength: "290",
                lengthAdjust: "spacingAndGlyphs",
                className: "fill-transparent font-[helvetica] text-7xl font-bold",
                children: text
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TextHoverEffect, "QWGobPQo8weHrfTz0Xg10GpsNU8=");
_c = TextHoverEffect;
var _c;
__turbopack_context__.k.register(_c, "TextHoverEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle,
    "createAnimation",
    ()=>createAnimation,
    "useThemeToggle",
    ()=>useThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const getPositionCoords = (position)=>{
    switch(position){
        case "top-left":
            return {
                cx: "0",
                cy: "0"
            };
        case "top-right":
            return {
                cx: "40",
                cy: "0"
            };
        case "bottom-left":
            return {
                cx: "0",
                cy: "40"
            };
        case "bottom-right":
            return {
                cx: "40",
                cy: "40"
            };
        case "top-center":
            return {
                cx: "20",
                cy: "0"
            };
        case "bottom-center":
            return {
                cx: "20",
                cy: "40"
            };
        case "bottom-up":
        case "top-down":
        case "left-right":
        case "right-left":
            return {
                cx: "20",
                cy: "20"
            };
        case "center":
        default:
            return {
                cx: "20",
                cy: "20"
            };
    }
};
const generateSVG = (variant, start)=>{
    if (variant === "circle-blur") {
        if (start === "center") {
            return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="20" cy="20" r="18" fill="white" filter="url(%23blur)"/></svg>';
        }
        const positionCoords = getPositionCoords(start);
        const { cx, cy } = positionCoords;
        return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="'.concat(cx, '" cy="').concat(cy, '" r="18" fill="white" filter="url(%23blur)"/></svg>');
    }
    if (start === "center") return "";
    if (variant === "rectangle") return "";
    const positionCoords = getPositionCoords(start);
    const { cx, cy } = positionCoords;
    if (variant === "circle") {
        return 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="'.concat(cx, '" cy="').concat(cy, '" r="20" fill="white"/></svg>');
    }
    return "";
};
const getTransformOrigin = (start)=>{
    switch(start){
        case "top-left":
            return "top left";
        case "top-right":
            return "top right";
        case "bottom-left":
            return "bottom left";
        case "bottom-right":
            return "bottom right";
        case "top-center":
            return "top center";
        case "bottom-center":
            return "bottom center";
        case "bottom-up":
        case "top-down":
        case "left-right":
        case "right-left":
        default:
            return "center";
    }
};
const createAnimation = function(variant) {
    let start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "center", blur = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, url = arguments.length > 3 ? arguments[3] : void 0;
    const svg = generateSVG(variant, start);
    const transformOrigin = getTransformOrigin(start);
    if (variant === "rectangle") {
        const getClipPath = (direction)=>{
            switch(direction){
                case "bottom-up":
                    return {
                        from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "top-down":
                    return {
                        from: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "left-right":
                    return {
                        from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "right-left":
                    return {
                        from: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "top-left":
                    return {
                        from: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "top-right":
                    return {
                        from: "polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "bottom-left":
                    return {
                        from: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                case "bottom-right":
                    return {
                        from: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
                default:
                    return {
                        from: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    };
            }
        };
        const clipPath = getClipPath(start);
        return {
            name: "".concat(variant, "-").concat(start).concat(blur ? "-blur" : ""),
            css: "\n       ::view-transition-group(root) {\n        animation-duration: 0.7s;\n        animation-timing-function: var(--expo-out);\n      }\n            \n      ::view-transition-new(root) {\n        animation-name: reveal-light-".concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: none;\n        z-index: -1;\n      }\n      .dark::view-transition-new(root) {\n        animation-name: reveal-dark-").concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      @keyframes reveal-dark-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: ").concat(clipPath.from, ";\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: ").concat(clipPath.to, ";\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n\n      @keyframes reveal-light-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: ").concat(clipPath.from, ";\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: ").concat(clipPath.to, ";\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n      ")
        };
    }
    if (variant === "circle" && start == "center") {
        return {
            name: "".concat(variant, "-").concat(start).concat(blur ? "-blur" : ""),
            css: "\n       ::view-transition-group(root) {\n        animation-duration: 0.7s;\n        animation-timing-function: var(--expo-out);\n      }\n            \n      ::view-transition-new(root) {\n        animation-name: reveal-light".concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: none;\n        z-index: -1;\n      }\n      .dark::view-transition-new(root) {\n        animation-name: reveal-dark").concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      @keyframes reveal-dark").concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: circle(0% at 50% 50%);\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: circle(150.0% at 50% 50%);\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n\n      @keyframes reveal-light").concat(blur ? "-blur" : "", " {\n        from {\n           clip-path: circle(0% at 50% 50%);\n           ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: circle(150.0% at 50% 50%);\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n      ")
        };
    }
    if (variant === "gif") {
        return {
            name: "".concat(variant, "-").concat(start),
            css: "\n      ::view-transition-group(root) {\n        animation-timing-function: var(--expo-in);\n      }\n\n      ::view-transition-new(root) {\n        mask: url('".concat(url, "') center / 0 no-repeat;\n        animation: scale 3s;\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: scale 3s;\n      }\n\n      @keyframes scale {\n        0% {\n          mask-size: 0;\n        }\n        10% {\n          mask-size: 50vmax;\n        }\n        90% {\n          mask-size: 50vmax;\n        }\n        100% {\n          mask-size: 2000vmax;\n        }\n      }")
        };
    }
    if (variant === "circle-blur") {
        if (start === "center") {
            return {
                name: "".concat(variant, "-").concat(start),
                css: "\n        ::view-transition-group(root) {\n          animation-timing-function: var(--expo-out);\n        }\n\n        ::view-transition-new(root) {\n          mask: url('".concat(svg, "') center / 0 no-repeat;\n          mask-origin: content-box;\n          animation: scale 1s;\n          transform-origin: center;\n        }\n\n        ::view-transition-old(root),\n        .dark::view-transition-old(root) {\n          animation: scale 1s;\n          transform-origin: center;\n          z-index: -1;\n        }\n\n        @keyframes scale {\n          to {\n            mask-size: 350vmax;\n          }\n        }\n        ")
            };
        }
        return {
            name: "".concat(variant, "-").concat(start),
            css: "\n      ::view-transition-group(root) {\n        animation-timing-function: var(--expo-out);\n      }\n\n      ::view-transition-new(root) {\n        mask: url('".concat(svg, "') ").concat(start.replace("-", " "), " / 0 no-repeat;\n        mask-origin: content-box;\n        animation: scale 1s;\n        transform-origin: ").concat(transformOrigin, ";\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: scale 1s;\n        transform-origin: ").concat(transformOrigin, ";\n        z-index: -1;\n      }\n\n      @keyframes scale {\n        to {\n          mask-size: 350vmax;\n        }\n      }\n      ")
        };
    }
    if (variant === "polygon") {
        const getPolygonClipPaths = (position)=>{
            switch(position){
                case "top-left":
                    return {
                        darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
                        darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
                        lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
                        lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)"
                    };
                case "top-right":
                    return {
                        darkFrom: "polygon(150% -71%, 250% 71%, 250% 71%, 150% -71%)",
                        darkTo: "polygon(150% -71%, 250% 71%, 50% 171%, -71% 50%)",
                        lightFrom: "polygon(-71% 50%, 50% 171%, 50% 171%, -71% 50%)",
                        lightTo: "polygon(-71% 50%, 50% 171%, 250% 71%, 150% -71%)"
                    };
                default:
                    return {
                        darkFrom: "polygon(50% -71%, -50% 71%, -50% 71%, 50% -71%)",
                        darkTo: "polygon(50% -71%, -50% 71%, 50% 171%, 171% 50%)",
                        lightFrom: "polygon(171% 50%, 50% 171%, 50% 171%, 171% 50%)",
                        lightTo: "polygon(171% 50%, 50% 171%, -50% 71%, 50% -71%)"
                    };
            }
        };
        const clipPaths = getPolygonClipPaths(start);
        return {
            name: "".concat(variant, "-").concat(start).concat(blur ? "-blur" : ""),
            css: "\n      ::view-transition-group(root) {\n        animation-duration: 0.7s;\n        animation-timing-function: var(--expo-out);\n      }\n            \n      ::view-transition-new(root) {\n        animation-name: reveal-light-".concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: none;\n        z-index: -1;\n      }\n      .dark::view-transition-new(root) {\n        animation-name: reveal-dark-").concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      @keyframes reveal-dark-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: ").concat(clipPaths.darkFrom, ";\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: ").concat(clipPaths.darkTo, ";\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n\n      @keyframes reveal-light-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: ").concat(clipPaths.lightFrom, ";\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: ").concat(clipPaths.lightTo, ";\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n      ")
        };
    }
    if (variant === "circle" && start !== "center") {
        const getClipPathPosition = (position)=>{
            switch(position){
                case "top-left":
                    return "0% 0%";
                case "top-right":
                    return "100% 0%";
                case "bottom-left":
                    return "0% 100%";
                case "bottom-right":
                    return "100% 100%";
                case "top-center":
                    return "50% 0%";
                case "bottom-center":
                    return "50% 100%";
                default:
                    return "50% 50%";
            }
        };
        const clipPosition = getClipPathPosition(start);
        return {
            name: "".concat(variant, "-").concat(start).concat(blur ? "-blur" : ""),
            css: "\n       ::view-transition-group(root) {\n        animation-duration: 1s;\n        animation-timing-function: var(--expo-out);\n      }\n            \n      ::view-transition-new(root) {\n        animation-name: reveal-light-".concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: none;\n        z-index: -1;\n      }\n      .dark::view-transition-new(root) {\n        animation-name: reveal-dark-").concat(start).concat(blur ? "-blur" : "", ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n\n      @keyframes reveal-dark-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          clip-path: circle(0% at ").concat(clipPosition, ");\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: circle(150.0% at ").concat(clipPosition, ");\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n\n      @keyframes reveal-light-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n           clip-path: circle(0% at ").concat(clipPosition, ");\n           ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          clip-path: circle(150.0% at ").concat(clipPosition, ");\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n      ")
        };
    }
    return {
        name: "".concat(variant, "-").concat(start).concat(blur ? "-blur" : ""),
        css: "\n      ::view-transition-group(root) {\n        animation-timing-function: var(--expo-in);\n      }\n      ::view-transition-new(root) {\n        mask: url('".concat(svg, "') ").concat(start.replace("-", " "), " / 0 no-repeat;\n        mask-origin: content-box;\n        animation: scale-").concat(start).concat(blur ? "-blur" : "", " 1s;\n        transform-origin: ").concat(transformOrigin, ";\n        ").concat(blur ? "filter: blur(2px);" : "", "\n      }\n      ::view-transition-old(root),\n      .dark::view-transition-old(root) {\n        animation: scale-").concat(start).concat(blur ? "-blur" : "", " 1s;\n        transform-origin: ").concat(transformOrigin, ";\n        z-index: -1;\n      }\n      @keyframes scale-").concat(start).concat(blur ? "-blur" : "", " {\n        from {\n          ").concat(blur ? "filter: blur(8px);" : "", "\n        }\n        ").concat(blur ? "50% { filter: blur(4px); }" : "", "\n        to {\n          mask-size: 2000vmax;\n          ").concat(blur ? "filter: blur(0px);" : "", "\n        }\n      }\n    ")
    };
};
const useThemeToggle = function() {
    let { variant = "circle", start = "center", blur = false, gifUrl = "" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { theme, setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isDark, setIsDark] = __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useThemeToggle.useEffect": ()=>{
            setIsDark(resolvedTheme === "dark");
        }
    }["useThemeToggle.useEffect"], [
        resolvedTheme
    ]);
    const styleId = "theme-transition-styles";
    const updateStyles = __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useThemeToggle.useCallback[updateStyles]": (css, name)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let styleElement = document.getElementById(styleId);
            if (!styleElement) {
                styleElement = document.createElement("style");
                styleElement.id = styleId;
                document.head.appendChild(styleElement);
            }
            styleElement.textContent = css;
        }
    }["useThemeToggle.useCallback[updateStyles]"], []);
    const toggleTheme = __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useThemeToggle.useCallback[toggleTheme]": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            setIsDark(!isDark);
            const animation = createAnimation(variant, start, blur, gifUrl);
            updateStyles(animation.css, animation.name);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const switchTheme = {
                "useThemeToggle.useCallback[toggleTheme].switchTheme": ()=>{
                    setTheme(theme === "light" ? "dark" : "light");
                }
            }["useThemeToggle.useCallback[toggleTheme].switchTheme"];
            if (!document.startViewTransition) {
                switchTheme();
                return;
            }
            document.startViewTransition(switchTheme);
        }
    }["useThemeToggle.useCallback[toggleTheme]"], [
        theme,
        setTheme,
        variant,
        start,
        blur,
        gifUrl,
        updateStyles,
        isDark,
        setIsDark
    ]);
    return {
        isDark,
        toggleTheme
    };
};
_s(useThemeToggle, "61wODlRoQu7d7htANWwv8vE03OY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
function ThemeToggle(param) {
    let { className = "", variant = "rectangle", start = "top-down", blur = false, gifUrl = "" } = param;
    _s1();
    const { isDark, toggleTheme } = useThemeToggle({
        variant,
        start,
        blur,
        gifUrl
    });
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ThemeToggle.useEffect": ()=>setMounted(true)
    }["ThemeToggle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex size-8 cursor-pointer items-center justify-center rounded-full p-1.5 text-foreground/80 transition-all duration-300 hover:bg-foreground/10 active:scale-95", className),
                    onClick: toggleTheme,
                    "aria-label": "Toggle theme",
                    children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                rotate: -60,
                                opacity: 0
                            },
                            animate: {
                                rotate: 0,
                                opacity: 1
                            },
                            exit: {
                                rotate: 60,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.18,
                                ease: "easeOut"
                            },
                            className: "inline-flex",
                            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMoonLine"], {
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                                lineNumber: 671,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiSunLine"], {
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                                lineNumber: 673,
                                columnNumber: 19
                            }, this)
                        }, isDark ? "moon" : "sun", false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                            lineNumber: 662,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                        lineNumber: 661,
                        columnNumber: 13
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "bottom",
                className: "tabular",
                children: "Theme"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx",
        lineNumber: 649,
        columnNumber: 5
    }, this);
}
_s1(ThemeToggle, "rsgp78VpC7UvGIiDlnNg2geA71E=", false, function() {
    return [
        useThemeToggle
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$text$2d$hover$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/ui/text-hover-effect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            {
                label: "Browse Buttons",
                href: "#showcase"
            },
            {
                label: "Pricing",
                href: "#comparison"
            },
            {
                label: "Request Custom",
                href: "#contact"
            },
            {
                label: "Documentation",
                href: "#"
            }
        ]
    },
    {
        title: "Legal",
        links: [
            {
                label: "Terms of Service",
                href: "#"
            },
            {
                label: "Privacy Policy",
                href: "#"
            },
            {
                label: "Refund Policy",
                href: "#"
            },
            {
                label: "License",
                href: "#"
            }
        ]
    },
    {
        title: "Social",
        links: [
            {
                label: "Twitter / X",
                href: "#"
            },
            {
                label: "GitHub",
                href: "https://github.com/samay-hash/openbutton"
            },
            {
                label: "Discord",
                href: "#"
            },
            {
                label: "Product Hunt",
                href: "#"
            }
        ]
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative mt-12 flex flex-col items-center justify-center border-t border-border/45 bg-background pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 lg:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-lg font-bold",
                                        children: "OpenButton"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-xs text-sm leading-relaxed text-foreground/50",
                                        children: "Premium micro-UI components for modern web applications. Buy once, ship forever."
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3",
                                children: FOOTER_LINKS.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[11px] font-semibold tracking-wider text-foreground uppercase",
                                                children: column.title
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-col gap-3",
                                                children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: link.href.startsWith("#") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            onClick: (e)=>{
                                                                if (link.href === "#") return;
                                                                e.preventDefault();
                                                                const el = document.getElementById(link.href.slice(1));
                                                                if (el) {
                                                                    el.scrollIntoView({
                                                                        behavior: "smooth",
                                                                        block: "start"
                                                                    });
                                                                }
                                                            },
                                                            className: "text-sm text-foreground/60 transition-colors hover:text-foreground",
                                                            children: link.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            target: link.href.startsWith("http") ? "_blank" : undefined,
                                                            rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined,
                                                            className: "text-sm text-foreground/60 transition-colors hover:text-foreground",
                                                            children: link.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, link.label, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, column.title, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-foreground/40 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " OpenButton. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Crafted in India"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-1 rounded-full bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "₹ Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden border-t border-border/45",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 -top-8 -bottom-8 -z-10 bg-[radial-gradient(ellipse_at_center,var(--primary)/15%,transparent_60%)] opacity-30 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$text$2d$hover$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextHoverEffect"], {
                        text: "OPENBUTTON"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedPremiumButton",
    ()=>AnimatedPremiumButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$16$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.6/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
"use client";
;
;
;
function AnimatedPremiumButton(param) {
    let { href, text, icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$16$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
        className: "size-4"
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this), onClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-[13px] bg-border/20 p-[1.5px] shadow-sm transition-all hover:shadow-md dark:bg-border/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100",
                style: {
                    maskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 45%), radial-gradient(circle at 0% 100%, black 0%, transparent 45%)",
                    WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 0%, transparent 45%), radial-gradient(circle at 0% 100%, black 0%, transparent 45%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3b82f6_40%,transparent_80%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_40%,transparent_80%)]"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 rounded-[11px] bg-background/95 backdrop-blur-sm transition-colors hover:bg-background/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    onClick: onClick,
                    className: "flex h-12 items-center justify-center gap-2 rounded-[11px] px-8 text-[15px] font-medium text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex h-4 w-4 items-center justify-center overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute transition-transform duration-500 ease-out group-hover:-translate-y-[150%]",
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-y-0",
                                    children: icon
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = AnimatedPremiumButton;
var _c;
__turbopack_context__.k.register(_c, "AnimatedPremiumButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$animated$2d$premium$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
/* ─── Animated counter for social proof ─── */ function AnimatedCounter(param) {
    let { target, suffix = "", duration = 1.2 } = param;
    _s();
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(count, {
        "AnimatedCounter.useTransform[rounded]": (v)=>Math.round(v).toLocaleString()
    }["AnimatedCounter.useTransform[rounded]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(count, target, {
                duration,
                ease: "easeOut",
                delay: 0.6
            });
            return controls.stop;
        }
    }["AnimatedCounter.useEffect"], [
        count,
        target,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                children: rounded
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AnimatedCounter, "Xwv6a+OUhW4aFeMrSXmDsCTZQqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedCounter;
/* ─── Custom Corner-Lit Buttons (Matches "Browse Buttons" aesthetic) ─── */ const GlassyButton = (param)=>{
    let { label, icon: Icon, colorName } = param;
    const gradientMap = {
        blue: "from-blue-500/20 via-transparent to-transparent dark:from-blue-500/30",
        purple: "from-purple-500/20 via-transparent to-transparent dark:from-purple-500/30",
        emerald: "from-emerald-500/20 via-transparent to-transparent dark:from-emerald-500/30",
        rose: "from-rose-500/20 via-transparent to-transparent dark:from-rose-500/30",
        amber: "from-amber-500/20 via-transparent to-transparent dark:from-amber-500/30",
        silver: "from-neutral-500/15 via-transparent to-transparent dark:from-white/20"
    };
    const textMap = {
        blue: "text-blue-700 dark:text-blue-300",
        purple: "text-purple-700 dark:text-purple-300",
        emerald: "text-emerald-700 dark:text-emerald-300",
        rose: "text-rose-700 dark:text-rose-300",
        amber: "text-amber-700 dark:text-amber-300",
        silver: "text-foreground dark:text-white"
    };
    const borderHighlightMap = {
        blue: "shadow-[inset_2px_-2px_8px_-2px_rgba(59,130,246,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(59,130,246,0.6)]",
        purple: "shadow-[inset_2px_-2px_8px_-2px_rgba(168,85,247,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(168,85,247,0.6)]",
        emerald: "shadow-[inset_2px_-2px_8px_-2px_rgba(16,185,129,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(16,185,129,0.6)]",
        rose: "shadow-[inset_2px_-2px_8px_-2px_rgba(244,63,94,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(244,63,94,0.6)]",
        amber: "shadow-[inset_2px_-2px_8px_-2px_rgba(245,158,11,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(245,158,11,0.6)]",
        silver: "shadow-[inset_2px_-2px_8px_-2px_rgba(115,115,115,0.2)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(255,255,255,0.4)]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border/40 bg-background transition-all duration-300 hover:scale-[1.02] hover:shadow-sm active:scale-95 ".concat(textMap[colorName]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-tr opacity-80 transition-opacity duration-300 group-hover:opacity-100 ".concat(gradientMap[colorName])
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 ".concat(borderHighlightMap[colorName])
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "relative z-10 size-4"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 103,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10 font-semibold",
                children: label
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = GlassyButton;
/* ─── Hero mini-button showcase — live interactive buttons ─── */ const HERO_BUTTONS_DATA = [
    {
        label: "Get Started",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "Get Started",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowRightLine"],
                colorName: "blue"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    },
    {
        label: "Subscribe",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "Subscribe",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMagicLine"],
                colorName: "purple"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    },
    {
        label: "Book Call",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "Book Call",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCalendarLine"],
                colorName: "emerald"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    },
    {
        label: "Download",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "Download",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiDownloadCloud2Line"],
                colorName: "rose"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    },
    {
        label: "Deploy Now",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "Deploy Now",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiRocketLine"],
                colorName: "silver"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    },
    {
        label: "View Source",
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlassyButton, {
                label: "View Source",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiGithubFill"],
                colorName: "amber"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        className: ""
    }
];
function HeroButtonGrid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.96
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 0.8,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
            delay: 0.5
        },
        className: "relative mx-auto mt-10 w-full max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl",
                style: {
                    background: "radial-gradient(ellipse at 30% 40%, var(--primary), transparent 60%), radial-gradient(ellipse at 70% 60%, oklch(0.65 0.2 275 / 50%), transparent 60%)"
                }
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-[20px] border border-border/70 bg-background/40 p-2 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "absolute -top-1.5 -left-1.5 size-3 text-primary/70",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 1h6M1 1v6",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "absolute -top-1.5 -right-1.5 size-3 rotate-90 text-accent-foreground/70",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 1h6M1 1v6",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "absolute -bottom-1.5 -left-1.5 size-3 -rotate-90 text-accent-foreground/70",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 1h6M1 1v6",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "absolute -right-1.5 -bottom-1.5 size-3 rotate-180 text-primary/70",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 1h6M1 1v6",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "square"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-[14px] border border-border/60 bg-gradient-to-b from-background/80 to-background/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-border/50 bg-background/40 px-4 py-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-primary/55"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-accent-foreground/55"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-foreground/15"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] tracking-widest text-foreground/40 uppercase",
                                        children: "preview"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[10px] text-foreground/30",
                                        children: "⌘ K"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-dot-grid relative p-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
                                    children: HERO_BUTTONS_DATA.map((btn, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                duration: 0.4,
                                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                                delay: 0.7 + i * 0.08
                                            },
                                            className: "relative flex items-center justify-center rounded-2xl border border-border/40 bg-background/60 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-background/80",
                                            children: btn.component ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(btn.component, {}, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 272,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: btn.className,
                                                children: btn.label
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, this)
                                        }, btn.label, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c2 = HeroButtonGrid;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:px-12 lg:pt-20 lg:pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 8
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
            },
            className: "mx-auto flex w-full flex-col items-center gap-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex max-w-5xl flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                            },
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    var _document_getElementById;
                                    return (_document_getElementById = document.getElementById("ai-audit")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                },
                                className: "group flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex size-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex size-2 rounded-full bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    "Try our new AI UI/UX Analyzer",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowRightLine"], {
                                        className: "size-3 transition-transform group-hover:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                y: 6
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: 0.05
                            },
                            className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-1 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block size-1.5 animate-pulse rounded-full bg-accent-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground/60",
                                    children: "Micro-UI components, crafted individually"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: 0.1
                            },
                            className: "mt-3 text-[2rem] leading-[1.06] font-medium tracking-[-0.03em] text-balance sm:text-5xl lg:text-[4.2rem]",
                            children: [
                                "Click-worthy components,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-block whitespace-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "out of the"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent",
                                            children: [
                                                " ",
                                                "box."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": true,
                                            viewBox: "0 0 320 12",
                                            className: "absolute -bottom-3.5 left-1/2 h-3 w-[110%] -translate-x-1/2 text-primary",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 8 C 80 2, 240 2, 318 8",
                                                stroke: "currentColor",
                                                strokeWidth: "1.4",
                                                strokeLinecap: "round",
                                                style: {
                                                    strokeDasharray: 400,
                                                    strokeDashoffset: 400,
                                                    animation: "landing-draw 1.4s ease 0.9s forwards"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 345,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: 0.3
                            },
                            className: "mt-6 max-w-2xl text-[14px] leading-relaxed text-balance text-foreground/60 sm:text-[15px]",
                            children: "Stop wrestling with bloated libraries. Discover meticulously crafted, accessible, and framework-agnostic components designed for modern web applications."
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: 0.5
                            },
                            className: "mt-10 flex flex-wrap items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$animated$2d$premium$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedPremiumButton"], {
                                    href: "#showcase",
                                    text: "Browse Buttons",
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowRightLine"], {
                                        className: "size-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                        lineNumber: 394,
                                        columnNumber: 21
                                    }, void 0),
                                    onClick: (e)=>{
                                        var _document_getElementById;
                                        e.preventDefault();
                                        (_document_getElementById = document.getElementById("showcase")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/samay-hash/openbutton",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground/70 backdrop-blur-sm transition hover:border-accent-foreground/40 hover:text-foreground",
                                    children: "View Source"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: 0.7
                            },
                            className: "mt-8 flex flex-wrap items-center justify-center gap-4 text-[12px] text-foreground/40 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 font-mono",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground/70",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                target: 2400,
                                                suffix: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "buttons sold"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden h-3 w-px bg-border/60 sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 font-mono",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground/70",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                target: 890,
                                                suffix: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        "developers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden h-3 w-px bg-border/60 sm:block"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 font-mono",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-foreground/70",
                                            children: "4.9"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400",
                                            children: "★"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        " avg rating"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroButtonGrid, {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
            lineNumber: 292,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
_c3 = Hero;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "GlassyButton");
__turbopack_context__.k.register(_c2, "HeroButtonGrid");
__turbopack_context__.k.register(_c3, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonShowcase",
    ()=>ButtonShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$animated$2d$premium$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/animated-premium-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ─── Button style renderers — each renders a unique interactive button ─── */ const BUTTON_RENDERERS = {
    "premium-animated": (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$animated$2d$premium$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedPremiumButton"], {
            href: "#",
            text: label,
            onClick: (e)=>e.preventDefault()
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    glass: (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/30 hover:bg-white/[0.14] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-8px_rgba(0,0,0,0.3)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    "glowing-edge": (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-[#121212] px-6 text-sm font-medium text-neutral-200 transition-all hover:bg-[#1a1a1a] hover:text-white active:scale-95",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 -top-1/2 mx-auto h-full w-3/4 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 group-hover:via-white/40"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative z-10",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    shadow: (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[0_6px_20px_-6px_oklch(0_0_0/0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_-6px_oklch(0_0_0/0.6)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    "border-trace": (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "group relative overflow-hidden rounded-xl border border-primary/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 before:absolute before:top-0 before:-left-full before:h-full before:w-1/3 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:transition-all before:duration-700 hover:border-primary hover:bg-primary/[0.06] hover:shadow-[0_0_24px_-8px_var(--primary)] hover:before:left-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10",
                children: label
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    shimmer: (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "relative animate-[shimmer_3s_ease-in-out_infinite] overflow-hidden rounded-xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-6px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_-2px_rgba(255,255,255,0.2)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    "minimal-dark": (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "rounded-xl border border-white/10 bg-black px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.1)]",
            children: label
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    bounce: (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "rounded-xl border border-border/80 bg-background px-6 py-3 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:-translate-y-1 hover:bg-muted hover:text-foreground hover:shadow-[0_6px_16px_-6px_oklch(0_0_0/0.2)] active:scale-95",
            children: label
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    },
    sweep: (param)=>{
        let { label } = param;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:scale-[1.03] hover:text-white hover:before:opacity-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10",
                children: label
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    }
};
const CATEGORIES = [
    "All",
    "Animated",
    "Gradient",
    "Glassmorphism",
    "Minimal",
    "3D"
];
function ButtonShowcase() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = activeCategory === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOWCASE_BUTTONS"] : __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHOWCASE_BUTTONS"].filter((b)=>b.category === activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "showcase",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.3
                },
                transition: {
                    duration: 0.65,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                className: "mb-10 flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                        children: "// Showcase"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "max-w-3xl text-2xl tracking-tight sm:text-3xl lg:text-4xl",
                        children: [
                            "Every button is a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "collectible design asset."
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-7 text-foreground/58",
                        children: "Browse, preview, and purchase individually crafted button components. Each one includes all interaction states, dark mode support, and framework variants."
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.5
                },
                transition: {
                    duration: 0.5,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                    delay: 0.05
                },
                className: "mb-8 flex flex-wrap gap-1.5",
                children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActiveCategory(cat),
                        className: "rounded-md px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 ".concat(activeCategory === cat ? "bg-primary text-primary-foreground shadow-[0_0_16px_-4px_var(--primary)]" : "border border-border/60 bg-background/50 text-foreground/50 hover:bg-background/80 hover:text-foreground/70"),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: filtered.map((btn, i)=>{
                        const Renderer = BUTTON_RENDERERS[btn.style];
                        const isHovered = hoveredId === btn.id;
                        const isPremium = btn.name === "Premium Glow";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                scale: 0.96
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.96
                            },
                            transition: {
                                duration: 0.4,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: i * 0.04
                            },
                            className: "group rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm transition-colors hover:border-border/90",
                            onMouseEnter: ()=>setHoveredId(btn.id),
                            onMouseLeave: ()=>setHoveredId(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex h-full flex-col overflow-hidden rounded-[8px] border border-border/40 bg-background/60 transition-colors group-hover:bg-background/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-dot-grid relative flex min-h-[10rem] items-center justify-center p-6 transition-all duration-300 ".concat(!isPremium ? "pointer-events-none select-none opacity-40 grayscale" : ""),
                                        children: [
                                            Renderer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Renderer, {
                                                label: btn.name
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 183,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: isHovered && isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.9
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        scale: 0.9
                                                    },
                                                    transition: {
                                                        duration: 0.15
                                                    },
                                                    className: "absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-background/90 px-2 py-1 font-mono text-[9px] text-foreground/50 ring-1 ring-border/40 backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block size-1.5 rounded-full bg-accent-foreground/60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 27
                                                        }, this),
                                                        "hover to preview"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this),
                                    !isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-3 top-3 z-20 flex size-7 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/40 shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            viewBox: "0 0 24 24",
                                            className: "size-3.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "18",
                                                    height: "11",
                                                    x: "3",
                                                    y: "11",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                            lineNumber: 205,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                        lineNumber: 204,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-t border-border/40 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[13px] font-semibold tracking-tight text-foreground",
                                                        children: btn.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] tracking-wider text-foreground/40 uppercase",
                                                                children: btn.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-2.5 w-px bg-border/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1",
                                                                children: btn.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-[9px] text-foreground/50",
                                                                        children: tech
                                                                    }, tech, false, {
                                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[15px] font-semibold tracking-tight",
                                                    style: {
                                                        color: "var(--gold, var(--primary))"
                                                    },
                                                    children: [
                                                        "₹",
                                                        btn.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                        lineNumber: 221,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-t border-border/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: !isPremium,
                                                className: "flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors ".concat(!isPremium ? "cursor-not-allowed text-foreground/30" : "text-foreground/50 hover:bg-primary/[0.06] hover:text-primary"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 16 16",
                                                        fill: "none",
                                                        className: "size-3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 1.5 9.8 5.2l4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 1.5Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Save"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-6 w-px bg-border/40"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 277,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: !isPremium,
                                                className: "flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors ".concat(!isPremium ? "cursor-not-allowed text-foreground/30" : "text-primary hover:bg-primary/[0.08]"),
                                                children: [
                                                    "Buy Now",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 16 16",
                                                        fill: "none",
                                                        className: "size-3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.4",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 8h10m0 0L9 4m4 4-4 4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                                lineNumber: 278,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this)
                        }, btn.id, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(ButtonShowcase, "h6A0J7RMbjjuEUydacRFq0DvLs4=");
_c = ButtonShowcase;
var _c;
__turbopack_context__.k.register(_c, "ButtonShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiAuditSection",
    ()=>AiAuditSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ANALYSIS_STEPS = [
    {
        id: 1,
        text: "Scanning DOM structure...",
        duration: 1500
    },
    {
        id: 2,
        text: "Evaluating visual hierarchy algorithms...",
        duration: 2000
    },
    {
        id: 3,
        text: "Checking WCAG color contrast ratios...",
        duration: 1800
    },
    {
        id: 4,
        text: "Analyzing interaction states & affordances...",
        duration: 2200
    },
    {
        id: 5,
        text: "Generating step-by-step upgrade guide...",
        duration: 1500
    }
];
function AiAuditSection() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStepIndex, setCurrentStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mock analysis process
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiAuditSection.useEffect": ()=>{
            if (!isAnalyzing) return;
            let timeoutId;
            const runStep = {
                "AiAuditSection.useEffect.runStep": (index)=>{
                    if (index >= ANALYSIS_STEPS.length) {
                        setIsAnalyzing(false);
                        setCurrentStepIndex(0);
                        // In reality, this would redirect to the report page
                        alert("Analysis complete! Backend integration coming soon.");
                        return;
                    }
                    setCurrentStepIndex(index);
                    timeoutId = setTimeout({
                        "AiAuditSection.useEffect.runStep": ()=>{
                            runStep(index + 1);
                        }
                    }["AiAuditSection.useEffect.runStep"], ANALYSIS_STEPS[index].duration);
                }
            }["AiAuditSection.useEffect.runStep"];
            runStep(0);
            return ({
                "AiAuditSection.useEffect": ()=>clearTimeout(timeoutId)
            })["AiAuditSection.useEffect"];
        }
    }["AiAuditSection.useEffect"], [
        isAnalyzing
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!url) return;
        setIsAnalyzing(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ai-audit",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.3
                    },
                    transition: {
                        duration: 0.65,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                    },
                    className: "flex flex-1 flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex w-max items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMagicLine"], {
                                    className: "size-3"
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                "// Coming Soon"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl tracking-tight sm:text-3xl lg:text-4xl",
                            children: [
                                "Not sure what to upgrade? Let our",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "AI audit your UI."
                                }, void 0, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-7 text-foreground/58",
                            children: "Enter your website URL and our AI engine will perform a deep heuristic evaluation. We break down the exact design algorithms, identify UX friction points, and provide a step-by-step guide to visualize and fix your design."
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-2 flex flex-col gap-3 font-mono text-[11px] text-foreground/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        " Visual hierarchy & spacing breakdown"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        " Color contrast & accessibility validation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        " Component-level upgrade recommendations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.3
                    },
                    transition: {
                        duration: 0.7,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                        delay: 0.1
                    },
                    className: "relative flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--primary)/20%,transparent_70%)] opacity-50 blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 rounded-[16px] border border-border/60 bg-background/40 p-2 backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 px-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2.5 rounded-full bg-border/80"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2.5 rounded-full bg-border/80"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "size-2.5 rounded-full bg-border/80"
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[10px] border border-border/40 bg-background/80 p-5 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "relative flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute left-3 text-foreground/40",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiSearchEyeLine"], {
                                                        className: "size-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    placeholder: "https://your-website.com",
                                                    required: true,
                                                    value: url,
                                                    onChange: (e)=>setUrl(e.target.value),
                                                    disabled: isAnalyzing,
                                                    className: "w-full rounded-lg border border-border/70 bg-background px-10 py-3 text-sm text-foreground transition-colors outline-none placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary/50 disabled:opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isAnalyzing,
                                                    className: "absolute right-1.5 rounded-md bg-primary p-2 text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:opacity-50",
                                                    children: isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiLoader4Line"], {
                                                        className: "size-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArrowRightLine"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 overflow-hidden rounded-lg border border-border/40 bg-[oklch(0.12_0_0)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b border-border/20 bg-[oklch(0.15_0_0)] px-4 py-2 font-mono text-[9px] tracking-widest text-foreground/40 uppercase",
                                                    children: "Analysis Terminal"
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-h-[120px] p-4 font-mono text-[11px] leading-relaxed text-foreground/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        mode: "popLayout",
                                                        children: isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            exit: {
                                                                opacity: 0
                                                            },
                                                            className: "flex flex-col gap-2",
                                                            children: ANALYSIS_STEPS.slice(0, currentStepIndex + 1).map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        x: -10
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        x: 0
                                                                    },
                                                                    className: "flex items-start gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mt-0.5 text-primary",
                                                                            children: ">"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: i === currentStepIndex ? "animate-pulse text-foreground" : "text-foreground/50",
                                                                            children: step.text
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, step.id, true, {
                                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, "analyzing", false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            exit: {
                                                                opacity: 0
                                                            },
                                                            className: "flex h-[100px] items-center justify-center text-foreground/30",
                                                            children: "Waiting for URL input..."
                                                        }, "idle", false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(AiAuditSection, "tll6qhldS69KQfqzapJB2zvxOro=");
_c = AiAuditSection;
var _c;
__turbopack_context__.k.register(_c, "AiAuditSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FLOW_STEPS = [
    {
        id: "browse",
        k: "01",
        eyebrow: "Browse",
        title: "Find the perfect button",
        body: "Filter by style, framework, or vibe. Preview hover, focus, active, and loading states live — before you spend a rupee."
    },
    {
        id: "buy",
        k: "02",
        eyebrow: "Buy",
        title: "Pay ₹20–30 instantly",
        body: "No subscription, no account required. Pay via UPI or card. The code is delivered to your inbox and dashboard within seconds."
    },
    {
        id: "ship",
        k: "03",
        eyebrow: "Ship",
        title: "Copy, paste, done",
        body: "Drop the code into your React, Vue, or HTML project. Zero dependencies, zero configuration. Your button is live in under 2 minutes."
    }
];
const STEP_VISUALS = {
    browse: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    "All",
                    "Animated",
                    "Gradient",
                    "Minimal"
                ].map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-md px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase transition-all ".concat(i === 0 ? "bg-primary text-primary-foreground" : "border border-border/60 text-foreground/40"),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full max-w-xs grid-cols-2 gap-2",
                children: [
                    "bg-gradient-to-r from-primary to-[oklch(0.72_0.18_345)]",
                    "border border-white/20 bg-white/[0.07]",
                    "bg-foreground",
                    "border-2 border-primary bg-transparent"
                ].map((style, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-14 items-center justify-center rounded-lg border border-border/40 bg-background/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-md px-3 py-1.5 text-[10px] font-semibold text-white ".concat(style),
                            children: "Button"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, i, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    buy: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex w-full max-w-xs flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[12px] font-medium text-foreground/80",
                        children: "Aurora Glow"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[14px] font-bold",
                        style: {
                            color: "var(--gold, var(--primary))"
                        },
                        children: "₹20"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-px bg-border/40"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5 text-[10px] text-foreground/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ React + Vue + HTML/CSS"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ All interaction states"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ Dark mode included"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✓ Lifetime updates"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 w-full rounded-md bg-primary py-2 text-center text-[11px] font-semibold text-primary-foreground",
                children: "Pay with UPI / Card →"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    ship: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-xs rounded-lg border border-border/60 bg-[oklch(0.12_0_0)] p-3 font-mono text-[10px] leading-5 text-foreground/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-foreground/30",
                children: "// Aurora Glow Button"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[oklch(0.7_0.18_275)]",
                        children: "export function"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[oklch(0.82_0.16_85)]",
                        children: "AuroraButton"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "() {"
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[oklch(0.7_0.18_275)]",
                        children: "return"
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    "("
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-5 text-foreground/40",
                children: '<button className="...">'
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-7 text-foreground/50",
                children: "Get Started"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-5 text-foreground/40",
                children: "</button>"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-3",
                children: ")"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "}"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center gap-1.5 text-accent-foreground/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 16 16",
                        fill: "none",
                        className: "size-3",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13 5L6 12 3 9"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Copied to clipboard"
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
function HowItWorks() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("browse");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.3
                },
                transition: {
                    duration: 0.65,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                className: "mb-10 flex max-w-4xl flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                                children: "// How it works"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "max-w-2xl text-2xl tracking-tight sm:text-3xl lg:text-4xl",
                                children: [
                                    "From browse to build in",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "under 2 minutes."
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-7 text-foreground/58",
                        children: "No account setup. No complex configuration. Just find, buy, and paste."
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-md border border-border/70 bg-background/55 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid min-h-[24rem] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.98
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true,
                                amount: 0.25
                            },
                            transition: {
                                duration: 0.75,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                            },
                            className: "bg-dot-grid relative flex min-h-[20rem] items-center justify-center border-b border-border/60 p-6 sm:p-8 lg:border-r lg:border-b-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.3,
                                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                                },
                                className: "w-full",
                                children: STEP_VISUALS[activeStep]
                            }, activeStep, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col border-border/60",
                            children: FLOW_STEPS.map((step)=>{
                                const isActive = activeStep === step.id;
                                const isLast = step.id === "ship";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveStep(step.id),
                                    className: "group relative bg-background/35 px-5 text-left transition hover:bg-background/65 focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:outline-none sm:px-7 ".concat(isLast ? "border-b-0 py-4" : "border-b border-border/60 py-5"),
                                    "aria-expanded": isActive,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: isActive ? "pt-0.5 font-mono text-xs text-primary" : "pt-0.5 font-mono text-xs text-foreground/28",
                                                children: step.k
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                lineNumber: 199,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: isActive ? "mt-[0.35rem] size-2.5 shrink-0 bg-primary shadow-[0_0_0_7px_oklch(from_var(--primary)_l_c_h_/_0.13)]" : "mt-[0.35rem] size-2.5 shrink-0 bg-foreground/22 group-hover:bg-primary/60"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: isActive ? "font-mono text-[10px] tracking-[0.24em] text-primary uppercase" : "font-mono text-[10px] tracking-[0.24em] text-accent-foreground/78 uppercase",
                                                        children: step.eyebrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: isActive ? "mt-1 text-[17px] font-semibold tracking-tight text-foreground" : "mt-1 text-[17px] font-medium tracking-tight text-foreground/82",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: false,
                                                        animate: {
                                                            height: isActive ? "auto" : 0,
                                                            opacity: isActive ? 1 : 0,
                                                            marginTop: isActive ? 14 : 0
                                                        },
                                                        transition: {
                                                            duration: 0.32,
                                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                                                        },
                                                        className: "overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "max-w-md text-sm leading-6 text-foreground/58",
                                                            children: step.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    rotate: isActive ? 45 : 0
                                                },
                                                transition: {
                                                    duration: 0.25,
                                                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                                                },
                                                className: isActive ? "font-mono text-lg text-primary" : "font-mono text-lg text-foreground/32",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                                lineNumber: 249,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this)
                                }, step.id, false, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(HowItWorks, "fJUvbZjCten/R/+3tBzOHy/HOa0=");
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/brand-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandLogo",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function BrandLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "font-sans text-xl font-bold tracking-tight",
        children: [
            "Open",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-primary",
                children: "Button"
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/brand-logo.tsx",
                lineNumber: 6,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/brand-logo.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = BrandLogo;
var _c;
__turbopack_context__.k.register(_c, "BrandLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/landing-svgs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/brand-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/rail-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/theme-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const links = [
    {
        label: "Browse",
        href: "#showcase"
    },
    {
        label: "Features",
        href: "#features"
    },
    {
        label: "Pricing",
        href: "#comparison"
    },
    {
        label: "FAQ",
        href: "#faq"
    }
];
function scrollToHash(href) {
    var _document_getElementById;
    const id = href.slice(1);
    (_document_getElementById = document.getElementById(id)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function Nav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const toggleTheme = ()=>{
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    opacity: 0,
                    y: -6
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                },
                className: "relative z-50 flex h-12 w-full shrink-0 items-center justify-between px-5 backdrop-blur-xl sm:px-8 lg:px-12",
                style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$brand$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandLogo"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 font-mono text-xs text-foreground/60 xl:flex",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: (e)=>{
                                    e.preventDefault();
                                    scrollToHash(link.href);
                                },
                                className: "rounded px-2.5 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 xl:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "inline-flex items-center gap-1.5 rounded-md border border-border/70 px-3.5 py-1.5 text-[12px] font-medium text-foreground/70 transition hover:border-foreground/40 hover:text-foreground",
                                children: [
                                    "Sign in",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#showcase",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    scrollToHash("#showcase");
                                },
                                className: "group inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-1.5 text-[12px] font-medium text-primary-foreground transition hover:opacity-90",
                                children: [
                                    "Browse Buttons",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                        className: "size-3.5 transition-transform group-hover:translate-x-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(!open),
                        "aria-label": "Toggle menu",
                        className: "relative flex size-9 flex-col items-center justify-center gap-[5px] xl:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-[1.5px] w-5 rounded-full bg-foreground"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-[1.5px] w-5 rounded-full bg-foreground"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-[1.5px] w-5 rounded-full bg-foreground"
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -16
                    },
                    transition: {
                        duration: 0.28,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                    },
                    className: "fixed inset-x-0 top-12 bottom-0 z-40 overflow-y-auto xl:hidden",
                    style: {
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        backgroundColor: "color-mix(in oklch, var(--background) 58%, transparent)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex min-h-full w-[calc(100%-1rem)] max-w-[76rem] flex-col px-5 pt-8 pb-12 sm:w-[calc(100%-2rem)] sm:px-8 md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] lg:px-12",
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex flex-col gap-1",
                                children: links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        transition: {
                                            duration: 0.25,
                                            delay: i * 0.06,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                setOpen(false);
                                                setTimeout(()=>scrollToHash(link.href), 50);
                                            },
                                            className: "block py-1 font-mono text-4xl font-bold tracking-tight text-foreground/80 uppercase transition-colors hover:text-primary sm:text-5xl",
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: 16
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: links.length * 0.06 + 0.05,
                                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                                },
                                className: "mt-auto flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: toggleTheme,
                                        className: "flex w-full items-center justify-between rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-sm font-bold text-foreground/70 uppercase",
                                                children: "Theme"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setOpen(false),
                                        className: "group flex w-full items-center justify-center gap-2 rounded-xl border border-border/70 py-4 font-mono text-lg font-bold text-foreground/70 uppercase transition hover:border-foreground/40 hover:text-foreground",
                                        children: [
                                            "Sign in",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "size-5 transition-transform group-hover:translate-x-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#showcase",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setOpen(false);
                                            setTimeout(()=>scrollToHash("#showcase"), 50);
                                        },
                                        className: "group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-mono text-lg font-bold text-primary-foreground uppercase transition hover:opacity-90",
                                        children: [
                                            "Browse Buttons",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$landing$2d$svgs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "size-5 transition-transform group-hover:translate-x-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Nav, "hqhHT+2auT28DZy4X8w8eMGLoTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ScrollToTop.useEffect": ()=>{
            const onScroll = {
                "ScrollToTop.useEffect.onScroll": ()=>setVisible(window.scrollY > 400)
            }["ScrollToTop.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0,
                y: 12
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 12
            },
            transition: {
                duration: 0.22
            },
            onClick: ()=>window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
            "aria-label": "Scroll to top",
            className: "fixed right-6 bottom-6 z-50 flex size-10 items-center justify-center rounded-md border border-border/60 bg-background/80 text-foreground/60 shadow-md backdrop-blur-sm transition hover:border-foreground/30 hover:text-foreground",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 19V5M5 12l7-7 7 7"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx",
                lineNumber: 27,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ScrollToTop, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UseCasesSection",
    ()=>UseCasesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/@remixicon+react@4.9.0_react@19.2.6/node_modules/@remixicon/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
;
;
;
;
const ICONS = {
    "SaaS dashboards": __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiWindowLine"],
    "Landing pages": __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiRocketLine"],
    "Mobile apps": __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCursorLine"],
    "Design systems": __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiArticleLine"]
};
const PIPELINE = [
    {
        label: "Browse",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiCursorLine"]
    },
    {
        label: "Purchase",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiPresentationLine"]
    },
    {
        label: "Integrate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiRocketLine"]
    }
];
function UseCasesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "use-cases",
        className: "relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 18
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.3
                    },
                    transition: {
                        duration: 0.65,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"]
                    },
                    className: "flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[10px] tracking-widest text-primary/80 uppercase",
                            children: "// Use cases"
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "max-w-xl text-2xl tracking-tight sm:text-3xl lg:text-4xl",
                            children: "Made for the UI details that matter most."
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-lg text-sm leading-7 text-foreground/58",
                            children: "OpenButton helps you upgrade the critical interaction points of your application without spending days building them from scratch."
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 overflow-hidden rounded-md border border-border/70 bg-background/50 backdrop-blur-sm",
                            children: PIPELINE.map((step, index)=>{
                                const Icon = step.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] items-center border-b border-border/55 last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-14 items-center justify-center border-r border-border/55 text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 font-mono text-[10px] tracking-[0.24em] text-foreground/58 uppercase",
                                            children: step.label
                                        }, void 0, false, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-l border-border/55 px-4 text-right font-mono text-[10px] text-foreground/30",
                                            children: [
                                                "0",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step.label, true, {
                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USE_CASES"].map((item, index)=>{
                        const Icon = ICONS[item.title] || __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f40$remixicon$2b$react$40$4$2e$9$2e$0_react$40$19$2e$2$2e$6$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiMegaphoneLine"];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            transition: {
                                duration: 0.5,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                                delay: index * 0.05
                            },
                            className: "group rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm transition-colors hover:border-border/90",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-h-[13rem] flex-col justify-between rounded-[8px] border border-border/40 bg-background/60 p-5 transition-colors group-hover:bg-background/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex size-9 items-center justify-center rounded-md border border-border/60 bg-background/70 text-primary",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[10px] tracking-[0.2em] text-foreground/36 uppercase",
                                                children: item.meta
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[15px] font-semibold tracking-tight text-foreground",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-relaxed text-foreground/52",
                                                children: item.body
                                            }, void 0, false, {
                                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        }, item.title, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = UseCasesSection;
var _c;
__turbopack_context__.k.register(_c, "UseCasesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/components/ui/flickering-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlickeringGrid",
    ()=>FlickeringGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FlickeringGrid = (param)=>{
    let { squareSize = 4, gridGap = 6, flickerChance = 0.3, color = "rgb(0, 0, 0)", width, height, className, maxOpacity = 0.3, ...props } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const memoizedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlickeringGrid.useMemo[memoizedColor]": ()=>{
            const toRGBA = {
                "FlickeringGrid.useMemo[memoizedColor].toRGBA": (color)=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const canvas = document.createElement("canvas");
                    canvas.width = canvas.height = 1;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return "rgba(255, 0, 0,";
                    ctx.fillStyle = color;
                    ctx.fillRect(0, 0, 1, 1);
                    const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
                    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ",");
                }
            }["FlickeringGrid.useMemo[memoizedColor].toRGBA"];
            return toRGBA(color);
        }
    }["FlickeringGrid.useMemo[memoizedColor]"], [
        color
    ]);
    const setupCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[setupCanvas]": (canvas, width, height)=>{
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = "".concat(width, "px");
            canvas.style.height = "".concat(height, "px");
            const cols = Math.ceil(width / (squareSize + gridGap));
            const rows = Math.ceil(height / (squareSize + gridGap));
            const squares = new Float32Array(cols * rows);
            for(let i = 0; i < squares.length; i++){
                squares[i] = Math.random() * maxOpacity;
            }
            return {
                cols,
                rows,
                squares,
                dpr
            };
        }
    }["FlickeringGrid.useCallback[setupCanvas]"], [
        squareSize,
        gridGap,
        maxOpacity
    ]);
    const updateSquares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[updateSquares]": (squares, deltaTime)=>{
            for(let i = 0; i < squares.length; i++){
                if (Math.random() < flickerChance * deltaTime) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }
        }
    }["FlickeringGrid.useCallback[updateSquares]"], [
        flickerChance,
        maxOpacity
    ]);
    const drawGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FlickeringGrid.useCallback[drawGrid]": (ctx, width, height, cols, rows, squares, dpr)=>{
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "transparent";
            ctx.fillRect(0, 0, width, height);
            for(let i = 0; i < cols; i++){
                for(let j = 0; j < rows; j++){
                    const opacity = squares[i * rows + j];
                    ctx.fillStyle = "".concat(memoizedColor).concat(opacity, ")");
                    ctx.fillRect(i * (squareSize + gridGap) * dpr, j * (squareSize + gridGap) * dpr, squareSize * dpr, squareSize * dpr);
                }
            }
        }
    }["FlickeringGrid.useCallback[drawGrid]"], [
        memoizedColor,
        squareSize,
        gridGap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlickeringGrid.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            var _canvas_getContext;
            const ctx = (_canvas_getContext = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d")) !== null && _canvas_getContext !== void 0 ? _canvas_getContext : null;
            let animationFrameId = null;
            let resizeObserver = null;
            let intersectionObserver = null;
            let gridParams = null;
            if (canvas && container && ctx) {
                const updateCanvasSize = {
                    "FlickeringGrid.useEffect.updateCanvasSize": ()=>{
                        const newWidth = width || container.clientWidth;
                        const newHeight = height || container.clientHeight;
                        setCanvasSize({
                            width: newWidth,
                            height: newHeight
                        });
                        gridParams = setupCanvas(canvas, newWidth, newHeight);
                    }
                }["FlickeringGrid.useEffect.updateCanvasSize"];
                updateCanvasSize();
                let lastTime = 0;
                const animate = {
                    "FlickeringGrid.useEffect.animate": (time)=>{
                        if (!isInView || !gridParams) return;
                        const deltaTime = (time - lastTime) / 1000;
                        lastTime = time;
                        updateSquares(gridParams.squares, deltaTime);
                        drawGrid(ctx, canvas.width, canvas.height, gridParams.cols, gridParams.rows, gridParams.squares, gridParams.dpr);
                        animationFrameId = requestAnimationFrame(animate);
                    }
                }["FlickeringGrid.useEffect.animate"];
                resizeObserver = new ResizeObserver({
                    "FlickeringGrid.useEffect": ()=>{
                        updateCanvasSize();
                    }
                }["FlickeringGrid.useEffect"]);
                resizeObserver.observe(container);
                intersectionObserver = new IntersectionObserver({
                    "FlickeringGrid.useEffect": (param)=>{
                        let [entry] = param;
                        setIsInView(entry.isIntersecting);
                    }
                }["FlickeringGrid.useEffect"], {
                    threshold: 0
                });
                intersectionObserver.observe(canvas);
                if (isInView) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            }
            return ({
                "FlickeringGrid.useEffect": ()=>{
                    if (animationFrameId !== null) {
                        cancelAnimationFrame(animationFrameId);
                    }
                    if (resizeObserver) {
                        resizeObserver.disconnect();
                    }
                    if (intersectionObserver) {
                        intersectionObserver.disconnect();
                    }
                }
            })["FlickeringGrid.useEffect"];
        }
    }["FlickeringGrid.useEffect"], [
        setupCanvas,
        updateSquares,
        drawGrid,
        width,
        height,
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full ".concat(className)),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "pointer-events-none",
            style: {
                width: canvasSize.width,
                height: canvasSize.height
            }
        }, void 0, false, {
            fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/flickering-grid.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/openbutton/openbutton-main/frontend/components/ui/flickering-grid.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FlickeringGrid, "7Vndbdt2AFlpSnyPt/Wgdl+/JDY=");
_c = FlickeringGrid;
var _c;
__turbopack_context__.k.register(_c, "FlickeringGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/openbutton/openbutton-main/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/next@15.5.18_@babel+core@7.29.0_@opentelemetry+api@1.9.1_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/dashed-h.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$comparison$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/comparison-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$contact$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/contact-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$feature$2d$row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/feature-row.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/faq.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$final$2d$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/final-cta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$button$2d$showcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/button-showcase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$ai$2d$audit$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/ai-audit-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/how-it-works.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$scroll$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/scroll-to-top.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/rail-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$use$2d$cases$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/landing/use-cases-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$flickering$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/frontend/components/ui/flickering-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openbutton/openbutton-main/node_modules/.pnpm/framer-motion@12.40.0_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const CONTENT_WIDTH = "mx-auto max-w-[76rem] w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] xl:w-full";
function Page() {
    _s();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative isolate min-h-svh bg-background text-foreground",
        style: {
            "--rail": "color-mix(in oklch, var(--foreground) 20%, transparent)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$ui$2f$flickering$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlickeringGrid"], {
                    color: "rgb(255,255,255)",
                    maxOpacity: 0.035,
                    flickerChance: 0.08,
                    squareSize: 3,
                    gridGap: 8,
                    className: "h-full w-full"
                }, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 ".concat(CONTENT_WIDTH),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {}, void 0, false, {
                    fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: shouldReduceMotion ? false : {
                    opacity: 0.72,
                    y: 18,
                    filter: "blur(14px)"
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                },
                transition: {
                    duration: 1.45,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ease"],
                    delay: 0.18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$button$2d$showcase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonShowcase"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$feature$2d$row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureRow"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$comparison$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonSection"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$use$2d$cases$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UseCasesSection"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$ai$2d$audit$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiAuditSection"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorks"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Faq"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$contact$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$final$2d$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinalCta"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$dashed$2d$h$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashedH"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(CONTENT_WIDTH),
                        style: __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$rail$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RAIL_V_STYLE"],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                            fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$1_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$frontend$2f$components$2f$landing$2f$scroll$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToTop"], {}, void 0, false, {
                        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openbutton/openbutton-main/frontend/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Page, "C9xMdslg1Z8O8dPJqeHy1pZYGWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$openbutton$2f$openbutton$2d$main$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$40$2e$0_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=openbutton_openbutton-main_frontend_571cd271._.js.map