import { motion, useMotionValue, useTransform, animate } from "motion/react"
import React, { useEffect } from "react"
import { ease } from "@/components/landing/constants"
import {
  RiArrowRightLine,
  RiCalendarLine,
  RiDownloadCloud2Line,
  RiRocketLine,
  RiGithubFill,
  RiMagicLine,
} from "@remixicon/react"
import { AnimatedPremiumButton } from "@/components/landing/animated-premium-button"

/* ─── Animated counter for social proof ─── */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 1.2,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
      delay: 0.6,
    })
    return controls.stop
  }, [count, target, duration])

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

/* ─── Hero Image Preview ─── */
function HeroImagePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.5 }}
      className="relative mx-auto mt-12 w-full max-w-5xl"
    >
      {/* Ambient glow behind the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, var(--primary), transparent 70%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[24px] border border-border/40 bg-background/40 shadow-2xl backdrop-blur-sm">
        {/* Top bar for macOS look */}
        <div className="flex items-center gap-1.5 border-b border-border/40 bg-background/60 px-4 py-3 backdrop-blur-md">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        
        {/* Image wrapper */}
        <div className="bg-dot-grid w-full">
          <img
            src="/wall.png"
            alt="OpenButton Preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main hero ─── */
export function Hero() {
  return (
    <section className="relative px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:px-12 lg:pt-20 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto flex w-full flex-col items-center gap-8 text-center"
      >
        <div className="flex max-w-5xl flex-col items-center text-center">
          {/* Founder Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <div className="group relative overflow-hidden rounded-[10px] bg-primary/10 p-[1px] transition-all hover:shadow-sm">
              {/* Animated Glow Wrapper (Border light) */}
              <div className="absolute inset-0 z-0 opacity-100">
                <div className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_15%,transparent_30%)]" />
              </div>

              {/* Inner Content Background */}
              <div className="relative z-10 flex items-center gap-2 rounded-[9px] bg-background/95 px-4 py-1.5 text-[11px] font-medium text-foreground/60 backdrop-blur-sm transition-colors group-hover:bg-background/80">
                founder ~{" "}
                <a
                  href="https://github.com/samay-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-all hover:underline"
                >
                  samay-hash 
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-[2rem] leading-[1.06] font-medium tracking-[-0.03em] text-balance sm:text-5xl lg:text-[4.2rem]"
          >
            Click Worthy components,
            <br />
            <span className="relative inline-block whitespace-nowrap">
              <span className="text-primary">out of the</span>
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                {" "}
                box.
              </span>
              <svg
                aria-hidden
                viewBox="0 0 320 12"
                className="absolute -bottom-3.5 left-1/2 h-3 w-[110%] -translate-x-1/2 text-primary"
                fill="none"
              >
                <path
                  d="M2 8 C 80 2, 240 2, 318 8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: 400,
                    animation: "landing-draw 1.4s ease 0.9s forwards",
                  }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-6 max-w-2xl text-[14px] leading-relaxed text-balance text-foreground/60 sm:text-[15px]"
          >
            Stop wrestling with bloated libraries. Discover meticulously
            crafted, accessible, and framework-agnostic components designed for
            modern web applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <AnimatedPremiumButton
              href="#showcase"
              text="Browse Buttons"
              icon={<RiArrowRightLine className="size-4" />}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("showcase")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            />
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[12px] text-foreground/40 sm:gap-6"
          >
            <span className="flex items-center gap-1.5 font-mono">
              <span className="text-foreground/70">
                <AnimatedCounter target={2400} suffix="+" />
              </span>{" "}
              buttons sold
            </span>
            <span className="hidden h-3 w-px bg-border/60 sm:block" />
            <span className="flex items-center gap-1.5 font-mono">
              <span className="text-foreground/70">
                <AnimatedCounter target={890} suffix="+" />
              </span>{" "}
              developers
            </span>
            <span className="hidden h-3 w-px bg-border/60 sm:block" />
            <span className="flex items-center gap-1.5 font-mono">
              <span className="text-foreground/70">4.9</span>
              <span className="text-yellow-400">★</span> avg rating
            </span>
          </motion.div>
        </div>

        {/* Hero image showcase */}
        <div className="w-full">
          <HeroImagePreview />
        </div>
      </motion.div>
    </section>
  )
}
