"use client"

import { motion } from "motion/react"
import { SectionCard } from "@/components/dashboard/section-card"

const GUIDES = [
  {
    title: "Discovery Call Framework",
    description: "The exact questions to ask in your first call. Uncover pain points, budget, timeline, and decision makers in 15 minutes.",
    tag: "Step 1",
    tagColor: "text-amber-600 bg-amber-500/10",
  },
  {
    title: "UI Showcase Pitch Deck",
    description: "How to present your UI components as a solution, not a product. Build decks that sell outcomes, not features.",
    tag: "Step 2",
    tagColor: "text-amber-600 bg-amber-500/10",
  },
  {
    title: "Live Demo Strategy",
    description: "Set up interactive demos that wow clients. Show before/after transformations and let them interact with premium UI live.",
    tag: "Step 3",
    tagColor: "text-amber-600 bg-amber-500/10",
  },
  {
    title: "Pricing Psychology",
    description: "Anchor pricing, bundle strategies, and tiered packages that maximize perceived value and close rates.",
    tag: "Strategy",
    tagColor: "text-blue-600 bg-blue-500/10",
  },
  {
    title: "Objection Handling",
    description: "The top 10 client objections and word-for-word responses. Handle \"too expensive\", \"we have a designer\", and more.",
    tag: "Closing",
    tagColor: "text-rose-600 bg-rose-500/10",
  },
  {
    title: "Portfolio Showcase Template",
    description: "Structure your portfolio to tell a story. Case study format, metrics display, and before/after layouts that convert.",
    tag: "Assets",
    tagColor: "text-violet-600 bg-violet-500/10",
  },
]

export default function ClientGuidePage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-amber-500/10 text-amber-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Client Approach Guide</h1>
            <p className="text-sm text-foreground/50">Strategies to pitch, showcase, and close deals with premium UI</p>
          </div>
        </div>
      </motion.div>

      {/* Steps banner */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-8 flex flex-wrap items-center gap-3 rounded-xl border border-border/40 bg-gradient-to-r from-amber-500/[0.04] to-transparent p-4"
      >
        {["Discovery", "Pitch", "Demo", "Close"].map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-amber-500/10 font-mono text-[10px] font-bold text-amber-600">
              {i + 1}
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground/60 uppercase">{step}</span>
            {i < 3 && (
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3 text-foreground/20">
                <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </motion.div>

      {/* Guides grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide, i) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <SectionCard
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-[18px]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
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
