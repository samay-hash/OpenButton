"use client"

import { motion } from "motion/react"
import { RiArrowRightUpLine } from "@remixicon/react"
import { ease } from "@/components/landing/constants"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col gap-4 lg:max-w-md"
        >
          <span className="font-mono text-[10px] tracking-[0.24em] text-primary/80 uppercase">
            {"// Custom work"}
          </span>
          <h2 className="text-2xl tracking-tight sm:text-3xl">
            Need a custom component?
          </h2>
          <p className="text-[13px] leading-relaxed text-foreground/58">
            If you need a specific button style, interaction pattern, or
            completely custom micro-UI component for your design system, we take
            commissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease, delay: 0.08 }}
          className="flex flex-col gap-6 rounded-xl border border-border/60 bg-background/40 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-1.5">
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-foreground/45 uppercase">
              How it works
            </h3>
            <p className="text-[13px] leading-relaxed text-foreground/75">
              Email us your design (Figma link or screenshot). We&apos;ll quote
              a price (starting at ₹200) and deliver the React/Vue/HTML source
              code within 48 hours.
            </p>
          </div>
          <div className="h-px bg-border/50" />
          <a
            href="mailto:hello@openbutton.ui"
            className="group flex items-center justify-between rounded-lg border border-border/60 bg-background/50 p-4 transition-colors hover:border-foreground/30 hover:bg-background/80"
          >
            <span className="font-mono text-sm font-semibold tracking-tight text-foreground/85">
              Request custom work
            </span>
            <RiArrowRightUpLine className="size-4 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
