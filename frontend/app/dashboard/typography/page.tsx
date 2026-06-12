"use client"

import { motion } from "motion/react"
import { SectionCard } from "@/components/dashboard/section-card"

const TYPOGRAPHY_GUIDES = [
  {
    title: "Font Pairing Masterclass",
    description: "How to combine serif + sans-serif fonts for maximum readability and visual appeal. Learn contrast, mood, and hierarchy.",
    tag: "Typography",
    tagColor: "text-emerald-600 bg-emerald-500/10",
  },
  {
    title: "Visual Hierarchy System",
    description: "Size, weight, color, and spacing — the 4 pillars of hierarchy. Make users read exactly what you want, when you want.",
    tag: "Hierarchy",
    tagColor: "text-blue-600 bg-blue-500/10",
  },
  {
    title: "Spacing & Rhythm",
    description: "Vertical rhythm, line-height ratios, and margin systems that create a sense of order and breathability in your layouts.",
    tag: "Spacing",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Color Psychology in UI",
    description: "Why red converts, blue builds trust, and green means go. The psychology behind every color choice in high-converting UIs.",
    tag: "Psychology",
    tagColor: "text-rose-600 bg-rose-500/10",
  },
  {
    title: "CTA Placement Science",
    description: "Where to place buttons, forms, and CTAs based on eye-tracking research and heat-map data from real users.",
    tag: "Psychology",
    tagColor: "text-rose-600 bg-rose-500/10",
  },
  {
    title: "Attention & Focus Patterns",
    description: "How users scan, skip, and focus. Design for the 3-second rule — capture attention before the user bounces.",
    tag: "Psychology",
    tagColor: "text-rose-600 bg-rose-500/10",
  },
  {
    title: "Responsive Typography Scale",
    description: "Fluid type scales using clamp(), modular ratios, and viewport-aware sizing for pixel-perfect text at every breakpoint.",
    tag: "Typography",
    tagColor: "text-emerald-600 bg-emerald-500/10",
  },
  {
    title: "Whitespace as a Feature",
    description: "Why the most premium designs use 40%+ whitespace. Learn to let your UI breathe and command authority.",
    tag: "Layout",
    tagColor: "text-amber-600 bg-amber-500/10",
  },
]

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-emerald-500/10 text-emerald-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <polyline points="4 7 4 4 20 4 20 7" />
              <line x1="9" y1="20" x2="15" y2="20" />
              <line x1="12" y1="4" x2="12" y2="20" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Typography & User Psychology</h1>
            <p className="text-sm text-foreground/50">Font systems, placement science, and the psychology behind great UI</p>
          </div>
        </div>
      </motion.div>

      {/* Guides grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TYPOGRAPHY_GUIDES.map((guide, i) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <SectionCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[18px]">
                  <polyline points="4 7 4 4 20 4 20 7" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="9" y1="20" x2="15" y2="20" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="4" x2="12" y2="20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title={guide.title}
              description={guide.description}
              tag={guide.tag}
              tagColor={guide.tagColor}
              cta="Read Guide"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
