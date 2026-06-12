"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const CATEGORIES = ["All", "Gradient", "Mesh", "Abstract", "Dark", "Minimal", "Noise"]

const IMAGES = [
  { id: "1", name: "Aurora Gradient", category: "Gradient", colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"], style: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)" },
  { id: "2", name: "Midnight Mesh", category: "Mesh", colors: ["#0f0c29", "#302b63", "#24243e"], style: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" },
  { id: "3", name: "Sunset Blaze", category: "Gradient", colors: ["#f12711", "#f5af19"], style: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)" },
  { id: "4", name: "Deep Space", category: "Dark", colors: ["#000000", "#0a0a2a", "#1a1a3e"], style: "linear-gradient(135deg, #000000 0%, #0a0a2a 50%, #1a1a3e 100%)" },
  { id: "5", name: "Frosted Glass", category: "Minimal", colors: ["#f5f7fa", "#c3cfe2"], style: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
  { id: "6", name: "Neon Pulse", category: "Abstract", colors: ["#6366f1", "#ec4899", "#f97316"], style: "linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f97316 100%)" },
  { id: "7", name: "Ocean Depths", category: "Gradient", colors: ["#0077B6", "#023E8A", "#03045E"], style: "linear-gradient(135deg, #0077B6 0%, #023E8A 50%, #03045E 100%)" },
  { id: "8", name: "Charcoal Texture", category: "Dark", colors: ["#1a1a2e", "#16213e", "#0f3460"], style: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
  { id: "9", name: "Cotton Candy", category: "Gradient", colors: ["#ffecd2", "#fcb69f"], style: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
  { id: "10", name: "Mesh Violet", category: "Mesh", colors: ["#667eea", "#764ba2"], style: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { id: "11", name: "Static Grain", category: "Noise", colors: ["#2d2d2d", "#3d3d3d"], style: "linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%)" },
  { id: "12", name: "Holographic", category: "Abstract", colors: ["#a8edea", "#fed6e3", "#d299c2"], style: "linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%)" },
]

export default function ImageStudioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeCategory)

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
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-cyan-500/10 text-cyan-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Professional Image Studio</h1>
            <p className="text-sm text-foreground/50">Background effects, gradients & presets for premium dashboards</p>
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

      {/* Image grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-border/80 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* Preview */}
              <div
                className="flex h-40 items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ background: img.style }}
              >
                <span className="rounded-lg bg-white/10 px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider text-white/80 uppercase backdrop-blur-md">
                  Preview
                </span>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between border-t border-border/40 p-4">
                <div>
                  <h3 className="text-[13px] font-semibold tracking-tight">{img.name}</h3>
                  <span className="font-mono text-[10px] tracking-wider text-foreground/40 uppercase">{img.category}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {img.colors.map((color) => (
                    <span
                      key={color}
                      className="size-4 rounded-full border border-border/40 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center border-t border-border/40">
                <button type="button" className="flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-foreground/50 transition-colors hover:bg-primary/[0.06] hover:text-primary">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-3">
                    <path d="M14 10v2.667A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V10" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="4.667 6.667 8 10 11.333 6.667" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="8" y1="10" x2="8" y2="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download
                </button>
                <span className="h-6 w-px bg-border/40" />
                <button type="button" className="flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider text-foreground/50 transition-colors hover:bg-primary/[0.06] hover:text-primary">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-3">
                    <rect x="5" y="2" width="9" height="11" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 5v8a1 1 0 0 0 1 1h8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Copy CSS
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
