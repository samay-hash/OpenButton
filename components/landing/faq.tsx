"use client"

import { motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ease, FAQS } from "@/components/landing/constants"

function FaqColumn({
  items,
  offset = 0,
}: {
  items: typeof FAQS
  offset?: number
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="overflow-hidden rounded-xl border border-border/60"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: (offset + i) * 0.04, ease }}
        >
          <AccordionItem
            value={`item-${offset + i}`}
            className="border-b border-border/60 bg-background/70 px-7 last:border-b-0 data-[state=open]:bg-background"
          >
            <AccordionTrigger className="py-5 text-left text-[15px] font-medium tracking-tight text-foreground/85 hover:text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[13px] leading-relaxed text-foreground/55">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      {/* Desktop: title left, accordion right. Mobile: stacked */}
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
        {/* Left — sticky title */}
        <div className="flex-shrink-0 md:w-64 md:pt-1">
          <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
            {"// FAQ"}
          </span>
          <h2 className="mt-2 text-2xl tracking-tight whitespace-nowrap">
            Common questions
          </h2>
        </div>

        {/* Right — full accordion */}
        <div className="flex-1">
          <FaqColumn items={FAQS} offset={0} />
        </div>
      </div>
    </section>
  )
}
