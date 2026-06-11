"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ease } from "@/components/landing/constants"

type StepId = "browse" | "buy" | "ship"

const FLOW_STEPS = [
  {
    id: "browse" as StepId,
    k: "01",
    eyebrow: "Browse",
    title: "Find the perfect button",
    body: "Filter by style, framework, or vibe. Preview hover, focus, active, and loading states live — before you spend a rupee.",
  },
  {
    id: "buy" as StepId,
    k: "02",
    eyebrow: "Buy",
    title: "Pay ₹20–30 instantly",
    body: "No subscription, no account required. Pay via UPI or card. The code is delivered to your inbox and dashboard within seconds.",
  },
  {
    id: "ship" as StepId,
    k: "03",
    eyebrow: "Ship",
    title: "Copy, paste, done",
    body: "Drop the code into your React, Vue, or HTML project. Zero dependencies, zero configuration. Your button is live in under 2 minutes.",
  },
]

const STEP_VISUALS: Record<StepId, React.ReactNode> = {
  browse: (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {["All", "Animated", "Gradient", "Minimal"].map((cat, i) => (
          <span
            key={cat}
            className={`rounded-md px-2.5 py-1 font-mono text-[9px] tracking-wider uppercase transition-all ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "border border-border/60 text-foreground/40"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="grid w-full max-w-xs grid-cols-2 gap-2">
        {[
          "bg-gradient-to-r from-primary to-[oklch(0.72_0.18_345)]",
          "border border-white/20 bg-white/[0.07]",
          "bg-foreground",
          "border-2 border-primary bg-transparent",
        ].map((style, i) => (
          <div
            key={i}
            className="flex h-14 items-center justify-center rounded-lg border border-border/40 bg-background/50"
          >
            <span
              className={`rounded-md px-3 py-1.5 text-[10px] font-semibold text-white ${style}`}
            >
              Button
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
  buy: (
    <div className="mx-auto flex w-full max-w-xs flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-foreground/80">
          Aurora Glow
        </span>
        <span
          className="font-mono text-[14px] font-bold"
          style={{ color: "var(--gold, var(--primary))" }}
        >
          ₹20
        </span>
      </div>
      <div className="h-px bg-border/40" />
      <div className="flex flex-col gap-1.5 text-[10px] text-foreground/40">
        <span>✓ React + Vue + HTML/CSS</span>
        <span>✓ All interaction states</span>
        <span>✓ Dark mode included</span>
        <span>✓ Lifetime updates</span>
      </div>
      <div className="mt-1 w-full rounded-md bg-primary py-2 text-center text-[11px] font-semibold text-primary-foreground">
        Pay with UPI / Card →
      </div>
    </div>
  ),
  ship: (
    <div className="mx-auto w-full max-w-xs rounded-lg border border-border/60 bg-[oklch(0.12_0_0)] p-3 font-mono text-[10px] leading-5 text-foreground/70">
      <div className="text-foreground/30">{"// Aurora Glow Button"}</div>
      <div>
        <span className="text-[oklch(0.7_0.18_275)]">{"export function"}</span>{" "}
        <span className="text-[oklch(0.82_0.16_85)]">AuroraButton</span>
        {"() {"}
      </div>
      <div className="pl-3">
        <span className="text-[oklch(0.7_0.18_275)]">return</span> {"("}
      </div>
      <div className="pl-5 text-foreground/40">
        {'<button className="...">'}
      </div>
      <div className="pl-7 text-foreground/50">{"Get Started"}</div>
      <div className="pl-5 text-foreground/40">{"</button>"}</div>
      <div className="pl-3">{")"}</div>
      <div>{"}"}</div>
      <div className="mt-2 flex items-center gap-1.5 text-accent-foreground/60">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-3"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M13 5L6 12 3 9" />
        </svg>
        Copied to clipboard
      </div>
    </div>
  ),
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<StepId>("browse")

  return (
    <section
      id="how-it-works"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease }}
        className="mb-10 flex max-w-4xl flex-col gap-5"
      >
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
            {"// How it works"}
          </span>
          <h2 className="max-w-2xl text-2xl tracking-tight sm:text-3xl lg:text-4xl">
            From browse to build in{" "}
            <span className="text-primary">under 2 minutes.</span>
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-foreground/58">
          No account setup. No complex configuration. Just find, buy, and paste.
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-md border border-border/70 bg-background/55 backdrop-blur-md">
        <div className="grid min-h-[24rem] lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
          {/* Visual preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease }}
            className="bg-dot-grid relative flex min-h-[20rem] items-center justify-center border-b border-border/60 p-6 sm:p-8 lg:border-r lg:border-b-0"
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="w-full"
            >
              {STEP_VISUALS[activeStep]}
            </motion.div>
          </motion.div>

          {/* Steps accordion */}
          <div className="flex flex-col border-border/60">
            {FLOW_STEPS.map((step) => {
              const isActive = activeStep === step.id
              const isLast = step.id === "ship"

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative bg-background/35 px-5 text-left transition hover:bg-background/65 focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:outline-none sm:px-7 ${
                    isLast
                      ? "border-b-0 py-4"
                      : "border-b border-border/60 py-5"
                  }`}
                  aria-expanded={isActive}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={
                        isActive
                          ? "pt-0.5 font-mono text-xs text-primary"
                          : "pt-0.5 font-mono text-xs text-foreground/28"
                      }
                    >
                      {step.k}
                    </span>
                    <span
                      className={
                        isActive
                          ? "mt-[0.35rem] size-2.5 shrink-0 bg-primary shadow-[0_0_0_7px_oklch(from_var(--primary)_l_c_h_/_0.13)]"
                          : "mt-[0.35rem] size-2.5 shrink-0 bg-foreground/22 group-hover:bg-primary/60"
                      }
                    />
                    <div className="min-w-0 flex-1">
                      <p
                        className={
                          isActive
                            ? "font-mono text-[10px] tracking-[0.24em] text-primary uppercase"
                            : "font-mono text-[10px] tracking-[0.24em] text-accent-foreground/78 uppercase"
                        }
                      >
                        {step.eyebrow}
                      </p>
                      <h3
                        className={
                          isActive
                            ? "mt-1 text-[17px] font-semibold tracking-tight text-foreground"
                            : "mt-1 text-[17px] font-medium tracking-tight text-foreground/82"
                        }
                      >
                        {step.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 14 : 0,
                        }}
                        transition={{ duration: 0.32, ease }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-md text-sm leading-6 text-foreground/58">
                          {step.body}
                        </p>
                      </motion.div>
                    </div>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.25, ease }}
                      className={
                        isActive
                          ? "font-mono text-lg text-primary"
                          : "font-mono text-lg text-foreground/32"
                      }
                    >
                      +
                    </motion.span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
