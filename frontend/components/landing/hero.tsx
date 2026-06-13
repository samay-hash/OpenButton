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
      className="relative mx-auto mt-6 w-full max-w-5xl px-4 sm:px-6"
    >
      {/* Ambient glow behind the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, var(--primary), transparent 60%)",
        }}
      />

      {/* Premium nested glass wrapper */}
      <div className="relative rounded-[24px] border border-border/60 bg-background/30 p-2 shadow-2xl backdrop-blur-md sm:p-3">
        {/* Inner container with macOS title bar and image */}
        <div className="overflow-hidden rounded-[16px] border border-border/50 bg-background/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {/* Top bar for macOS look */}
          <div className="flex items-center justify-between border-b border-border/40 bg-gradient-to-b from-white/5 to-transparent px-4 py-2.5 dark:from-white/5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
              <span className="size-2.5 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
              <span className="size-2.5 rounded-full bg-[#28c840] ring-1 ring-black/10" />
            </div>
          </div>
          
          {/* Image wrapper */}
          <div className="bg-dot-grid relative w-full">
            <img
              src="/wall.png"
              alt="OpenButton Preview"
              className="w-full h-auto object-cover object-top opacity-95 transition-opacity duration-700 hover:opacity-100"
            />
            {/* Subtle inner shadow over image to blend it nicely */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]" />
          </div>
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
            Premium Button Components
            <br />
            <span className="relative inline-block whitespace-nowrap"> for
              <span className="text-primary"> Developers</span>
              
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
            className="mt-6 max-w-2xl text-[16px] leading-relaxed text-balance text-foreground/60 sm:text-[18px] font-medium"
          >
            Copy. Paste. Ship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <AnimatedPremiumButton
              href="/signup"
              text="Browse Buttons"
              icon={<RiArrowRightLine className="size-4" />}
              onClick={(e) => {
                e.preventDefault()
                window.location.href = "/signup"
              }}
            />
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[13px] text-foreground/50 sm:gap-6 font-medium"
          >
            <span className="flex items-center gap-1.5 font-mono">
              <span className="text-foreground/80">
                <AnimatedCounter target={50} suffix="+" />
              </span>{" "}
              production-ready buttons
            </span>
            <span className="hidden h-3 w-px bg-border/60 sm:block" />
            <span className="flex items-center gap-1.5 font-mono">
              Starting at{" "}
              <span className="text-foreground/80">
                ₹35 / $1
              </span>{" "}
              only
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
