"use client"

import { motion } from "motion/react"
import { SectionCard } from "@/components/dashboard/section-card"

const ALGORITHMS = [
  {
    title: "Golden Ratio Layout",
    description: "Apply 1.618 proportions for naturally balanced UI compositions that feel harmonious to the human eye.",
    tag: "Layout",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Z-Pattern Reading",
    description: "Design pages that follow the natural Z-shaped eye scanning pattern for maximum content absorption.",
    tag: "Layout",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "F-Pattern Scanning",
    description: "Optimize text-heavy pages using the F-shaped reading behavior most users naturally follow.",
    tag: "Layout",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Fitts\u2019s Law",
    description: "Size and position interactive elements based on the mathematical model of human motor movement.",
    tag: "Interaction",
    tagColor: "text-blue-600 bg-blue-500/10",
  },
  {
    title: "60-30-10 Color Rule",
    description: "Master the classic interior design principle adapted for digital UI — dominant, secondary, accent color ratios.",
    tag: "Color",
    tagColor: "text-emerald-600 bg-emerald-500/10",
  },
  {
    title: "Responsive Breakpoint Strategy",
    description: "Content-first breakpoint systems that adapt fluidly instead of rigid device-based media queries.",
    tag: "Responsive",
    tagColor: "text-amber-600 bg-amber-500/10",
  },
  {
    title: "Micro-Animation Timing",
    description: "Spring physics, easing curves, and duration guidelines that make animations feel natural and premium.",
    tag: "Animation",
    tagColor: "text-pink-600 bg-pink-500/10",
  },
  {
    title: "Visual Weight Balance",
    description: "Distribute visual weight across layouts using size, color, contrast, and whitespace for equilibrium.",
    tag: "Layout",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Accessibility Color Contrast",
    description: "WCAG-compliant contrast ratios and color combinations that ensure readability for all users.",
    tag: "Accessibility",
    tagColor: "text-teal-600 bg-teal-500/10",
  },
  {
    title: "Grid Systems & Spacing Scale",
    description: "8px base grid, spacing tokens, and modular scale systems for consistent, predictable layouts.",
    tag: "Layout",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
  {
    title: "Hick\u2019s Law for UI",
    description: "Reduce decision time by minimizing choices — applied to navigation, forms, and action menus.",
    tag: "Interaction",
    tagColor: "text-blue-600 bg-blue-500/10",
  },
  {
    title: "Dark Mode Color Science",
    description: "Proper dark mode palettes using reduced luminance, desaturated accents, and elevated surfaces.",
    tag: "Color",
    tagColor: "text-emerald-600 bg-emerald-500/10",
  },
]

export default function AlgorithmsPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-violet-500/10 text-violet-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Algorithm Lab</h1>
            <p className="text-sm text-foreground/50">UI patterns, layout algorithms & design systems that stay updated</p>
          </div>
        </div>
      </motion.div>

      {/* Algorithm grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALGORITHMS.map((algo, i) => (
          <motion.div
            key={algo.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <SectionCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[18px]">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title={algo.title}
              description={algo.description}
              tag={algo.tag}
              tagColor={algo.tagColor}
              cta="Explore"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
