"use client"

import Link from "next/link"
import { motion } from "motion/react"

const QUICK_SECTIONS = [
  {
    title: "UI Components",
    description: "Browse 30+ premium interactive buttons",
    href: "/dashboard/components",
    count: "30+",
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
    title: "Pricing & Plans",
    description: "Upgrade to bundle or lifetime access",
    href: "/dashboard/pricing",
    count: "Pro",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Changelog",
    description: "See the latest component updates and fixes",
    href: "/dashboard/changelog",
    count: "New",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    gradient: "from-violet-500/10 to-blue-500/10",
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
          Your premium dashboard for high-converting UI components. Explore our world-class component library.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
            <span className="inline-block size-2 rounded-full bg-primary" />
            <span className="font-mono text-[11px] text-foreground/60">Free Tier</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
            <span className="font-mono text-[11px] text-foreground/60">30 Premium Buttons</span>
          </div>
          <Link href="/dashboard/pricing" className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 transition-colors hover:bg-foreground/[0.04]">
            <span className="font-mono text-[11px] font-bold text-primary">Upgrade Plan →</span>
          </Link>
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
