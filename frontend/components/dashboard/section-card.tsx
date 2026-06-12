"use client"

import { motion } from "motion/react"

interface SectionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  tag?: string
  tagColor?: string
  cta?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export function SectionCard({
  icon,
  title,
  description,
  tag,
  tagColor = "text-primary bg-primary/10",
  cta,
  onClick,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/80 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ${className}`}
    >
      {/* Subtle gradient on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        {/* Icon + Tag row */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-background/80 text-foreground/60 shadow-sm transition-colors group-hover:border-primary/30 group-hover:text-primary">
            {icon}
          </div>
          {tag && (
            <span className={`rounded-md px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider uppercase ${tagColor}`}>
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed text-foreground/50">
          {description}
        </p>

        {/* Custom children slot */}
        {children && <div className="mt-4">{children}</div>}

        {/* CTA */}
        {cta && (
          <button
            type="button"
            onClick={onClick}
            className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase transition-colors hover:text-primary/80"
          >
            {cta}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-3 transition-transform group-hover:translate-x-0.5">
              <path d="M3 8h10m0 0L9 4m4 4-4 4" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  )
}
