"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ease, SHOWCASE_BUTTONS } from "@/components/landing/constants"
import { AnimatedPremiumButton } from "@/components/landing/animated-premium-button"

/* ─── Button style renderers — each renders a unique interactive button ─── */
const BUTTON_RENDERERS: Record<
  string,
  (props: { label: string }) => React.ReactNode
> = {
  "premium-animated": ({ label }) => (
    <AnimatedPremiumButton
      href="#"
      text={label}
      onClick={(e) => e.preventDefault()}
    />
  ),
  glass: ({ label }) => (
    <button
      type="button"
      className="rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/30 hover:bg-white/[0.14] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
    >
      {label}
    </button>
  ),
  "glowing-edge": ({ label }) => (
    <button className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-[#121212] px-6 text-sm font-medium text-neutral-200 transition-all hover:bg-[#1a1a1a] hover:text-white active:scale-95">
      <div className="absolute inset-0 -top-1/2 mx-auto h-full w-3/4 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 group-hover:via-white/40" />
      <span className="relative z-10">{label}</span>
    </button>
  ),
  shadow: ({ label }) => (
    <button
      type="button"
      className="rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-[0_6px_20px_-6px_oklch(0_0_0/0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_-6px_oklch(0_0_0/0.6)]"
    >
      {label}
    </button>
  ),
  "border-trace": ({ label }) => (
    <button
      type="button"
      className="group relative overflow-hidden rounded-xl border border-primary/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 before:absolute before:top-0 before:-left-full before:h-full before:w-1/3 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:transition-all before:duration-700 hover:border-primary hover:bg-primary/[0.06] hover:shadow-[0_0_24px_-8px_var(--primary)] hover:before:left-full"
    >
      <span className="relative z-10">{label}</span>
    </button>
  ),
  shimmer: ({ label }) => (
    <button
      type="button"
      className="relative animate-[shimmer_3s_ease-in-out_infinite] overflow-hidden rounded-xl bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-6px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_-2px_rgba(255,255,255,0.2)]"
    >
      {label}
    </button>
  ),
  "minimal-dark": ({ label }) => (
    <button
      type="button"
      className="rounded-xl border border-white/10 bg-black px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.1)]"
    >
      {label}
    </button>
  ),
  bounce: ({ label }) => (
    <button
      type="button"
      className="rounded-xl border border-border/80 bg-background px-6 py-3 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:-translate-y-1 hover:bg-muted hover:text-foreground hover:shadow-[0_6px_16px_-6px_oklch(0_0_0/0.2)] active:scale-95"
    >
      {label}
    </button>
  ),
  sweep: ({ label }) => (
    <button
      type="button"
      className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:scale-[1.03] hover:text-white hover:before:opacity-100"
    >
      <span className="relative z-10">{label}</span>
    </button>
  ),
}

const CATEGORIES = [
  "All",
  "Animated",
  "Gradient",
  "Glassmorphism",
  "Minimal",
  "3D",
]

export function ButtonShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered =
    activeCategory === "All"
      ? SHOWCASE_BUTTONS
      : SHOWCASE_BUTTONS.filter((b) => b.category === activeCategory)

  return (
    <section
      id="showcase"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease }}
        className="mb-10 flex flex-col gap-5"
      >
        <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
          {"// Showcase"}
        </span>
        <h2 className="max-w-3xl text-2xl tracking-tight sm:text-3xl lg:text-4xl">
          Every button is a{" "}
          <span className="text-primary">collectible design asset.</span>
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-foreground/58">
          Browse, preview, and purchase individually crafted button components.
          Each one includes all interaction states, dark mode support, and
          framework variants.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="mb-8 flex flex-wrap gap-1.5"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-md px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_16px_-4px_var(--primary)]"
                : "border border-border/60 bg-background/50 text-foreground/50 hover:bg-background/80 hover:text-foreground/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Button grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((btn, i) => {
            const Renderer = BUTTON_RENDERERS[btn.style]
            const isHovered = hoveredId === btn.id
            const isPremium = btn.name === "Premium Glow"

            return (
              <motion.div
                key={btn.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                className="group rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm transition-colors hover:border-border/90"
                onMouseEnter={() => setHoveredId(btn.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[8px] border border-border/40 bg-background/60 transition-colors group-hover:bg-background/80">
                  {/* Live button preview area */}
                  <div
                    className={`bg-dot-grid relative flex min-h-[10rem] items-center justify-center p-6 transition-all duration-300 ${
                      !isPremium
                        ? "pointer-events-none select-none opacity-40 grayscale"
                        : ""
                    }`}
                  >
                    {Renderer && <Renderer label={btn.name} />}

                    {/* Hover state indicator */}
                    <AnimatePresence>
                      {isHovered && isPremium && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-background/90 px-2 py-1 font-mono text-[9px] text-foreground/50 ring-1 ring-border/40 backdrop-blur-sm"
                        >
                          <span className="inline-block size-1.5 rounded-full bg-accent-foreground/60" />
                          hover to preview
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Minimal Lock Icon for Non-Premium Buttons */}
                  {!isPremium && (
                    <div className="absolute right-3 top-3 z-20 flex size-7 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/40 shadow-sm">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        className="size-3.5"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  )}

                  {/* Card info */}
                  <div className="flex items-center justify-between border-t border-border/40 px-4 py-3">
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold tracking-tight text-foreground">
                        {btn.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="font-mono text-[10px] tracking-wider text-foreground/40 uppercase">
                          {btn.category}
                        </span>
                        <span className="h-2.5 w-px bg-border/50" />
                        <div className="flex items-center gap-1">
                          {btn.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-[9px] text-foreground/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Price */}
                      <span
                        className="font-mono text-[15px] font-semibold tracking-tight"
                        style={{ color: "var(--gold, var(--primary))" }}
                      >
                        ₹{btn.price}
                      </span>
                    </div>
                  </div>

                    {/* Disabled Action bar for non-premium */}
                  <div className="flex items-center border-t border-border/40">
                    <button
                      type="button"
                      disabled={!isPremium}
                      className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                        !isPremium
                          ? "cursor-not-allowed text-foreground/30"
                          : "text-foreground/50 hover:bg-primary/[0.06] hover:text-primary"
                      }`}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="size-3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d="M8 1.5 9.8 5.2l4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L8 1.5Z" />
                      </svg>
                      Save
                    </button>
                    <span className="h-6 w-px bg-border/40" />
                    <button
                      type="button"
                      disabled={!isPremium}
                      className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                        !isPremium
                          ? "cursor-not-allowed text-foreground/30"
                          : "text-primary hover:bg-primary/[0.08]"
                      }`}
                    >
                      Buy Now
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="size-3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8h10m0 0L9 4m4 4-4 4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
