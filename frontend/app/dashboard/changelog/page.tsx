"use client"

import { motion } from "motion/react"

const changelog = [
  {
    version: "v1.1.0",
    date: "June 13, 2026",
    title: "Dark Mode Previews & Clean Overlays",
    description: "Added highly requested features for button previews and cleaner UI placeholders.",
    changes: [
      "Added Dark Mode / Light Mode toggle to the Premium Glow button preview box so users can easily test components in both themes.",
      "Reverted to the clean white card layout with distinct preview area for a more professional look.",
      "Improved the 'Coming Soon' overlay to completely cover the preview area, preventing underlying text from bleeding through for a cleaner aesthetic.",
      "Premium Glow component is now prominently displayed at the top of the grid.",
      "Added 30+ component slots in the grid (29 marked as Coming Soon) to show the full scale of the upcoming library.",
    ]
  },
  {
    version: "v1.0.0",
    date: "June 12, 2026",
    title: "Initial Launch: OpenButton V1",
    description: "The first release of OpenButton, focusing exclusively on premium button components.",
    changes: [
      "Pivoted from a multi-product dashboard to a focused Premium UI Component Library.",
      "Launched the 'Premium Glow' component as a free preview item with full source code access.",
      "Introduced ₹35 single-component pricing and ₹299 'Unlock All' bundle.",
      "Integrated secure payment flow for unlocking components.",
      "Added secure backend API to serve locked premium code only to authenticated buyers."
    ]
  }
]

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Changelog</h1>
            <p className="text-sm text-foreground/50">Keep track of the latest updates, features, and improvements.</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-12">
        {changelog.map((release, i) => (
          <motion.div
            key={release.version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-8 sm:pl-32"
          >
            {/* Timeline line */}
            <div className="absolute bottom-0 left-[11px] top-2 w-[2px] bg-border/40 sm:left-[107px]" />
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 size-6 rounded-full border-4 border-background bg-primary sm:left-[96px]" />
            
            {/* Date (desktop) */}
            <div className="hidden sm:block absolute left-0 top-2.5 w-[80px] text-right font-mono text-[11px] font-medium text-foreground/50">
              {release.date}
            </div>

            <div className="rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm sm:p-8">
              {/* Date (mobile) */}
              <div className="mb-2 block font-mono text-[11px] font-medium text-primary sm:hidden">
                {release.date}
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] font-bold text-primary border border-primary/20">
                  {release.version}
                </span>
                <h2 className="text-lg font-bold tracking-tight text-foreground">{release.title}</h2>
              </div>
              
              <p className="mb-6 text-[14px] text-foreground/60">{release.description}</p>
              
              <ul className="space-y-3">
                {release.changes.map((change, j) => (
                  <li key={j} className="flex gap-3 text-[14px] text-foreground/80">
                    <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="size-2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="leading-relaxed">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}







