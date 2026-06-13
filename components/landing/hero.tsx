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

/* ─── Custom Corner-Lit Buttons (Matches "Browse Buttons" aesthetic) ─── */
const GlassyButton = ({
  label,
  icon: Icon,
  colorName,
}: {
  label: string
  icon: React.ElementType
  colorName: string
}) => {
  const gradientMap: Record<string, string> = {
    blue: "from-blue-500/20 via-transparent to-transparent dark:from-blue-500/30",
    purple:
      "from-purple-500/20 via-transparent to-transparent dark:from-purple-500/30",
    emerald:
      "from-emerald-500/20 via-transparent to-transparent dark:from-emerald-500/30",
    rose: "from-rose-500/20 via-transparent to-transparent dark:from-rose-500/30",
    amber:
      "from-amber-500/20 via-transparent to-transparent dark:from-amber-500/30",
    silver:
      "from-neutral-500/15 via-transparent to-transparent dark:from-white/20",
  }

  const textMap: Record<string, string> = {
    blue: "text-blue-700 dark:text-blue-300",
    purple: "text-purple-700 dark:text-purple-300",
    emerald: "text-emerald-700 dark:text-emerald-300",
    rose: "text-rose-700 dark:text-rose-300",
    amber: "text-amber-700 dark:text-amber-300",
    silver: "text-foreground dark:text-white",
  }

  const borderHighlightMap: Record<string, string> = {
    blue: "shadow-[inset_2px_-2px_8px_-2px_rgba(59,130,246,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(59,130,246,0.6)]",
    purple:
      "shadow-[inset_2px_-2px_8px_-2px_rgba(168,85,247,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(168,85,247,0.6)]",
    emerald:
      "shadow-[inset_2px_-2px_8px_-2px_rgba(16,185,129,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(16,185,129,0.6)]",
    rose: "shadow-[inset_2px_-2px_8px_-2px_rgba(244,63,94,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(244,63,94,0.6)]",
    amber:
      "shadow-[inset_2px_-2px_8px_-2px_rgba(245,158,11,0.3)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(245,158,11,0.6)]",
    silver:
      "shadow-[inset_2px_-2px_8px_-2px_rgba(115,115,115,0.2)] dark:shadow-[inset_2px_-2px_8px_-2px_rgba(255,255,255,0.4)]",
  }

  return (
    <button
      className={`group relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border/40 bg-background transition-all duration-300 hover:scale-[1.02] hover:shadow-sm active:scale-95 ${textMap[colorName]}`}
    >
      {/* Corner light gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${gradientMap[colorName]}`}
      />

      {/* Left and Bottom Inner Border Glow */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${borderHighlightMap[colorName]}`}
      />

      {Icon && <Icon className="relative z-10 size-4" />}
      <span className="relative z-10 font-semibold">{label}</span>
    </button>
  )
}

/* ─── Hero mini-button showcase — live interactive buttons ─── */
const HERO_BUTTONS_DATA = [
  {
    label: "Get Started",
    component: () => (
      <GlassyButton
        label="Get Started"
        icon={RiArrowRightLine}
        colorName="blue"
      />
    ),
    className: "",
  },
  {
    label: "Subscribe",
    component: () => (
      <GlassyButton label="Subscribe" icon={RiMagicLine} colorName="purple" />
    ),
    className: "",
  },
  {
    label: "Book Call",
    component: () => (
      <GlassyButton
        label="Book Call"
        icon={RiCalendarLine}
        colorName="emerald"
      />
    ),
    className: "",
  },
  {
    label: "Download",
    component: () => (
      <GlassyButton
        label="Download"
        icon={RiDownloadCloud2Line}
        colorName="rose"
      />
    ),
    className: "",
  },
  {
    label: "Deploy Now",
    component: () => (
      <GlassyButton label="Deploy Now" icon={RiRocketLine} colorName="silver" />
    ),
    className: "",
  },
  {
    label: "View Source",
    component: () => (
      <GlassyButton label="View Source" icon={RiGithubFill} colorName="amber" />
    ),
    className: "",
  },
]

function HeroButtonGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.5 }}
      className="relative mx-auto mt-10 w-full max-w-3xl"
    >
      {/* Ambient glow behind the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, var(--primary), transparent 60%), radial-gradient(ellipse at 70% 60%, oklch(0.65 0.2 275 / 50%), transparent 60%)",
        }}
      />

      <div className="relative rounded-[20px] border border-border/70 bg-background/40 p-2 backdrop-blur-md">
        {/* Corner ticks */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -top-1.5 -left-1.5 size-3 text-primary/70"
          aria-hidden
        >
          <path
            d="M1 1h6M1 1v6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -top-1.5 -right-1.5 size-3 rotate-90 text-accent-foreground/70"
          aria-hidden
        >
          <path
            d="M1 1h6M1 1v6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -bottom-1.5 -left-1.5 size-3 -rotate-90 text-accent-foreground/70"
          aria-hidden
        >
          <path
            d="M1 1h6M1 1v6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="absolute -right-1.5 -bottom-1.5 size-3 rotate-180 text-primary/70"
          aria-hidden
        >
          <path
            d="M1 1h6M1 1v6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>

        <div className="overflow-hidden rounded-[14px] border border-border/60 bg-gradient-to-b from-background/80 to-background/40">
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-border/50 bg-background/40 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-primary/55" />
              <span className="size-2.5 rounded-full bg-accent-foreground/55" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-foreground/40 uppercase">
              preview
            </span>
            <span className="font-mono text-[10px] text-foreground/30">
              ⌘ K
            </span>
          </div>

          {/* Button grid area */}
          <div className="bg-dot-grid relative p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {HERO_BUTTONS_DATA.map((btn, i) => (
                <motion.div
                  key={btn.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease,
                    delay: 0.7 + i * 0.08,
                  }}
                  className="relative flex items-center justify-center rounded-2xl border border-border/40 bg-background/60 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-background/80"
                >
                  {btn.component ? (
                    <btn.component />
                  ) : (
                    <button type="button" className={btn.className}>
                      {btn.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
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
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("ai-audit")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/10"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </span>
              Try our new AI UI/UX Analyzer
              <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-1 font-mono text-[10px] tracking-widest uppercase backdrop-blur-sm"
          >
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-accent-foreground" />
            <span className="text-foreground/60">
              Micro-UI components, crafted individually
            </span>
          </motion.span>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-3 text-[2rem] leading-[1.06] font-medium tracking-[-0.03em] text-balance sm:text-5xl lg:text-[4.2rem]"
          >
            Premium micro interactions,
            <br />
            <span className="relative inline-block whitespace-nowrap"> for
              <span className="text-primary">modern websites</span>
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
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
            <a
              href="https://github.com/samay-hash/openbutton"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border/70 bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground/70 backdrop-blur-sm transition hover:border-accent-foreground/40 hover:text-foreground"
            >
              View Source
            </a>
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

        {/* Hero button showcase grid */}
        <div className="w-full max-w-6xl">
          <HeroButtonGrid />
        </div>
      </motion.div>
    </section>
  )
}
