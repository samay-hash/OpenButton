"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const CATEGORIES = ["All", "Buttons", "Cards", "Navbars", "Modals", "Animations", "Forms"]

const COMPONENTS = [
  { id: "1", name: "Premium Glow", category: "Buttons", price: 35, tags: ["React", "Tailwind"], style: "premium-animated", unlocked: true },
  { id: "2", name: "Glass Frost", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "3", name: "Glowing Edge", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glowing-edge", unlocked: false },
  { id: "4", name: "Shadow Rise", category: "Buttons", price: 20, tags: ["HTML", "CSS"], style: "shadow", unlocked: false },
  { id: "5", name: "Border Trace", category: "Buttons", price: 30, tags: ["React", "CSS"], style: "border-trace", unlocked: false },
  { id: "6", name: "Shimmer Fill", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "shimmer", unlocked: false },
  { id: "7", name: "Neon Card", category: "Cards", price: 40, tags: ["React", "CSS"], style: "glass", unlocked: false },
  { id: "8", name: "Glassmorphism Card", category: "Cards", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "9", name: "Floating Navbar", category: "Navbars", price: 45, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "10", name: "Modal Blur", category: "Modals", price: 30, tags: ["React", "CSS"], style: "glass", unlocked: false },
  { id: "11", name: "Spring Bounce", category: "Animations", price: 20, tags: ["React", "Motion"], style: "bounce", unlocked: false },
  { id: "12", name: "Form Glow", category: "Forms", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
]

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? COMPONENTS
    : COMPONENTS.filter((c) => c.category === activeCategory)

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
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M12 2L2 7l10 5 10-5-10-5Z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">UI Components</h1>
            <p className="text-sm text-foreground/50">Browse, preview, and unlock premium components</p>
          </div>
        </div>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-6 flex flex-wrap gap-1.5"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_16px_-4px_var(--primary)]"
                : "border border-border/50 bg-background/50 text-foreground/50 hover:text-foreground/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Component grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((comp, i) => (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-border/80"
            >
              {/* Preview area */}
              <div className={`relative flex h-36 items-center justify-center bg-dot-grid ${!comp.unlocked ? "opacity-40 grayscale" : ""}`}>
                <div className="rounded-xl border border-border/40 bg-background/60 px-5 py-2.5 text-sm font-semibold text-foreground/70">
                  {comp.name}
                </div>
                {!comp.unlocked && (
                  <div className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/40">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="size-3.5">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                )}
                {comp.unlocked && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-emerald-600">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-mono text-[9px] font-bold uppercase">Unlocked</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="border-t border-border/40 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold tracking-tight">{comp.name}</h3>
                  <span className="font-mono text-[14px] font-bold" style={{ color: "var(--gold, var(--primary))" }}>
                    ₹{comp.price}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider text-foreground/40 uppercase">{comp.category}</span>
                  <span className="h-2.5 w-px bg-border/50" />
                  {comp.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-[9px] text-foreground/50">{tag}</span>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={!comp.unlocked}
                  className={`mt-4 w-full rounded-xl py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                    comp.unlocked
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "cursor-not-allowed bg-foreground/[0.06] text-foreground/30"
                  }`}
                >
                  {comp.unlocked ? "View Source" : "Unlock Component"}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
