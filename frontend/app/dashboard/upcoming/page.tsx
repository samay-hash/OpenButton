"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const UPCOMING_ITEMS = [
  {
    id: "landing",
    title: "Premium Landing Pages",
    category: "TEMPLATES",
    status: "Q3 2026",
    description: "Ready-to-use, highly converting landing page templates built exclusively with our premium interactive components.",
  },
  {
    id: "typography",
    title: "Typography & UX Guide",
    category: "RESOURCE",
    status: "Q3 2026",
    description: "A deep dive into visual hierarchy, font pairings, and psychological principles behind high-converting interfaces.",
  },
  {
    id: "algorithm",
    title: "Algorithm Lab",
    category: "SANDBOX",
    status: "Q4 2026",
    description: "A sandbox environment to test complex animations, generative algorithms, and dynamic background canvas effects.",
  },
  {
    id: "discovery",
    title: "Client Discovery",
    category: "FRAMEWORK",
    status: "Q4 2026",
    description: "A comprehensive guide on how to pitch these premium components to your freelance clients and close bigger deals.",
  }
]

export default function UpcomingPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M12 2v20" />
              <path d="m17 5-5-3-5 3" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Upcoming Releases</h1>
            <p className="text-sm text-foreground/50">A sneak peek at the future of the OpenButton ecosystem</p>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {UPCOMING_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[20px] border border-border/40 bg-background/50 shadow-sm transition-all hover:border-primary/30 hover:bg-background hover:shadow-md"
          >
            {/* Top area imitating component preview */}
            <div className="relative m-2 flex h-[140px] flex-col justify-center rounded-[16px] overflow-hidden bg-dot-grid border border-border/40 transition-colors duration-300">
              <div className="absolute top-4 left-4 rounded-md bg-background px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-primary border border-primary/20">
                {item.category}
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/50 border border-border/60">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-orange-500"></span>
                </span>
                In Development
              </div>
              
              <div className="text-center font-mono text-sm tracking-widest text-foreground/30 uppercase opacity-50 transition-opacity group-hover:opacity-100 group-hover:text-primary/40">
                {item.id}
              </div>
            </div>

            {/* Bottom Info area */}
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[16px] font-bold tracking-tight text-foreground">{item.title}</h3>
                  <div className="mt-2 flex gap-2">
                    <span className="rounded-md bg-foreground/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/60">
                      ETA: {item.status}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-foreground/20 transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-foreground/60">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 rounded-[24px] border border-primary/20 bg-primary/[0.03] p-8 text-center sm:p-12"
      >
        <h2 className="text-xl font-bold sm:text-2xl">Shape the future of OpenButton</h2>
        <p className="mx-auto mt-3 max-w-lg text-[14px] text-foreground/60 leading-relaxed">
          We build what our community wants. If there's a specific component, guide, or template you'd like to see, let us know!
        </p>
        <button className="mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
          Request a Feature
        </button>
      </motion.div>
    </div>
  )
}
