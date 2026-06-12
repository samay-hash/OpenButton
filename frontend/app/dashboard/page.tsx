"use client"

import Link from "next/link"
import { motion } from "motion/react"

const QUICK_SECTIONS = [
  {
    title: "UI Components",
    description: "Browse premium buttons, cards, modals & more",
    href: "/dashboard/components",
    count: "48+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    gradient: "from-rose-500/10 to-orange-500/10",
  },
  {
    title: "Algorithm Lab",
    description: "UI patterns & layout algorithms",
    href: "/dashboard/algorithms",
    count: "12+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-blue-500/10",
  },
  {
    title: "Typography & UX",
    description: "Font systems, user psychology & hierarchy",
    href: "/dashboard/typography",
    count: "8+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Client Guide",
    description: "Approach strategies & pitch frameworks",
    href: "/dashboard/client-guide",
    count: "6+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    gradient: "from-amber-500/10 to-yellow-500/10",
  },
  {
    title: "Idea Builder",
    description: "Describe ideas in any language, get code",
    href: "/dashboard/idea-builder",
    count: "New",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    title: "Image Studio",
    description: "Professional backgrounds & effect presets",
    href: "/dashboard/image-studio",
    count: "24+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
]

export default function DashboardOverview() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 rounded-2xl border border-border/40 bg-gradient-to-br from-primary/[0.06] via-background to-background p-6 sm:p-8"
      >
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome back 👋
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/55">
          Your premium dashboard for UI components, design algorithms, client strategies, and creative tools. Explore each section below.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
            <span className="inline-block size-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] text-foreground/60">Pro Plan Active</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
            <span className="font-mono text-[11px] text-foreground/60">48+ Components</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
            <span className="font-mono text-[11px] text-foreground/60">All Sections Unlocked</span>
          </div>
        </div>
      </motion.div>

      {/* Section grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {QUICK_SECTIONS.map((section, i) => (
          <motion.div
            key={section.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            <Link
              href={section.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border/80 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* Gradient bg */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-background/80 text-foreground/50 shadow-sm transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    {section.icon}
                  </div>
                  <span className="rounded-md bg-foreground/[0.06] px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-foreground/50 uppercase">
                    {section.count}
                  </span>
                </div>
                <h3 className="mb-1 text-[14px] font-semibold tracking-tight text-foreground">
                  {section.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-foreground/45">
                  {section.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-primary uppercase transition-colors">
                  Explore
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-3 transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8h10m0 0L9 4m4 4-4 4" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
