"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  RiMagicLine,
  RiSearchEyeLine,
  RiArrowRightLine,
  RiLoader4Line,
} from "@remixicon/react"
import { ease } from "@/components/landing/constants"

const ANALYSIS_STEPS = [
  { id: 1, text: "Scanning DOM structure...", duration: 1500 },
  { id: 2, text: "Evaluating visual hierarchy algorithms...", duration: 2000 },
  { id: 3, text: "Checking WCAG color contrast ratios...", duration: 1800 },
  {
    id: 4,
    text: "Analyzing interaction states & affordances...",
    duration: 2200,
  },
  { id: 5, text: "Generating step-by-step upgrade guide...", duration: 1500 },
]

export function AiAuditSection() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  // Mock analysis process
  useEffect(() => {
    if (!isAnalyzing) return

    let timeoutId: NodeJS.Timeout

    const runStep = (index: number) => {
      if (index >= ANALYSIS_STEPS.length) {
        setIsAnalyzing(false)
        setCurrentStepIndex(0)
        // In reality, this would redirect to the report page
        alert("Analysis complete! Backend integration coming soon.")
        return
      }

      setCurrentStepIndex(index)
      timeoutId = setTimeout(() => {
        runStep(index + 1)
      }, ANALYSIS_STEPS[index].duration)
    }

    runStep(0)

    return () => clearTimeout(timeoutId)
  }, [isAnalyzing])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return
    setIsAnalyzing(true)
  }

  return (
    <section
      id="ai-audit"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Left side: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-1 flex-col gap-5"
        >
          <span className="inline-flex w-max items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase">
            <RiMagicLine className="size-3" />
            {"// Coming Soon"}
          </span>
          <h2 className="text-2xl tracking-tight sm:text-3xl lg:text-4xl">
            Not sure what to upgrade? Let our{" "}
            <span className="text-primary">AI audit your UI.</span>
          </h2>
          <p className="text-sm leading-7 text-foreground/58">
            Enter your website URL and our AI engine will perform a deep
            heuristic evaluation. We break down the exact design algorithms,
            identify UX friction points, and provide a step-by-step guide to
            visualize and fix your design.
          </p>

          <ul className="mt-2 flex flex-col gap-3 font-mono text-[11px] text-foreground/70">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Visual hierarchy & spacing
              breakdown
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Color contrast &
              accessibility validation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span> Component-level upgrade
              recommendations
            </li>
          </ul>
        </motion.div>

        {/* Right side: Interactive Input & Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="relative flex-1"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--primary)/20%,transparent_70%)] opacity-50 blur-3xl" />

          <div className="flex flex-col gap-4 rounded-[16px] border border-border/60 bg-background/40 p-2 backdrop-blur-xl">
            {/* Browser-like header */}
            <div className="flex items-center gap-1.5 px-3 pt-2">
              <div className="size-2.5 rounded-full bg-border/80" />
              <div className="size-2.5 rounded-full bg-border/80" />
              <div className="size-2.5 rounded-full bg-border/80" />
            </div>

            <div className="rounded-[10px] border border-border/40 bg-background/80 p-5 shadow-sm">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <div className="pointer-events-none absolute left-3 text-foreground/40">
                  <RiSearchEyeLine className="size-5" />
                </div>
                <input
                  type="url"
                  placeholder="https://your-website.com"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isAnalyzing}
                  className="w-full rounded-lg border border-border/70 bg-background px-10 py-3 text-sm text-foreground transition-colors outline-none placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="absolute right-1.5 rounded-md bg-primary p-2 text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <RiLoader4Line className="size-4 animate-spin" />
                  ) : (
                    <RiArrowRightLine className="size-4" />
                  )}
                </button>
              </form>

              {/* Analysis Console Output */}
              <div className="mt-4 overflow-hidden rounded-lg border border-border/40 bg-[oklch(0.12_0_0)]">
                <div className="border-b border-border/20 bg-[oklch(0.15_0_0)] px-4 py-2 font-mono text-[9px] tracking-widest text-foreground/40 uppercase">
                  Analysis Terminal
                </div>
                <div className="min-h-[120px] p-4 font-mono text-[11px] leading-relaxed text-foreground/60">
                  <AnimatePresence mode="popLayout">
                    {isAnalyzing ? (
                      <motion.div
                        key="analyzing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-2"
                      >
                        {ANALYSIS_STEPS.slice(0, currentStepIndex + 1).map(
                          (step, i) => (
                            <motion.div
                              key={step.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start gap-2"
                            >
                              <span className="mt-0.5 text-primary">{">"}</span>
                              <span
                                className={
                                  i === currentStepIndex
                                    ? "animate-pulse text-foreground"
                                    : "text-foreground/50"
                                }
                              >
                                {step.text}
                              </span>
                            </motion.div>
                          )
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex h-[100px] items-center justify-center text-foreground/30"
                      >
                        Waiting for URL input...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
