import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSubtractLine,
} from "@remixicon/react"
import { motion } from "motion/react"
import {
  ease,
  COMPETITOR_COMPARISONS,
  FEATURE_MATRIX,
} from "@/components/landing/constants"

type MatrixValue =
  | boolean
  | "varies"
  | "paid"
  | "2 min"
  | "30+ min"
  | "10 min"
  | "15+ min"

function MatrixCell({
  value,
  featured = false,
}: {
  value: MatrixValue
  featured?: boolean
}) {
  if (value === true) {
    return (
      <span className={featured ? "text-primary" : "text-foreground/72"}>
        <RiCheckboxCircleLine className="mx-auto size-4" />
      </span>
    )
  }

  if (value === false) {
    return (
      <span className="text-foreground/28">
        <RiCloseCircleLine className="mx-auto size-4" />
      </span>
    )
  }

  return (
    <span
      className={
        featured
          ? "inline-flex items-center justify-center gap-1 font-mono text-[10px] tracking-widest text-primary uppercase"
          : "inline-flex items-center justify-center gap-1 font-mono text-[10px] tracking-widest text-foreground/45 uppercase"
      }
    >
      <RiSubtractLine className="size-3.5" />
      {value}
    </span>
  )
}

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease }}
        className="mb-10 flex max-w-4xl flex-col gap-4"
      >
        <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
          {"// Why not free?"}
        </span>
        <h2 className="max-w-3xl text-2xl tracking-tight sm:text-3xl lg:text-4xl">
          Free components cost you time.{" "}
          <span className="text-primary">₹20 saves you hours.</span>
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-foreground/58">
          Free libraries are great for prototyping. But when you need
          production-ready buttons with consistent quality, all interaction
          states, and dark mode — the debugging time costs more than ₹20.
        </p>
      </motion.div>

      <div className="grid gap-3 lg:grid-cols-3">
        {COMPETITOR_COMPARISONS.map((item, index) => (
          <motion.div
            key={item.competitor}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: index * 0.05 }}
            className="rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm"
          >
            <div className="grid h-full overflow-hidden rounded-[8px] border border-border/40 bg-background/60">
              <div className="border-b border-border/50 p-5">
                <p className="font-mono text-[10px] tracking-[0.24em] text-foreground/36 uppercase">
                  Versus {item.competitor}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-foreground/54">
                  {item.contrast}
                </p>
              </div>
              <div className="bg-primary/[0.055] p-5">
                <p className="font-mono text-[10px] tracking-[0.24em] text-primary uppercase">
                  OpenButton
                </p>
                <p className="mt-3 text-[14px] leading-relaxed font-medium text-foreground">
                  {item.openbutton}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease, delay: 0.08 }}
        className="mt-5 max-h-[28rem] overflow-auto rounded-md border border-border/70 bg-background/55 backdrop-blur-md sm:max-h-none sm:overflow-visible"
      >
        <div className="grid min-w-[38rem] grid-cols-[minmax(10rem,1.4fr)_repeat(4,minmax(4.5rem,0.55fr))] border-b border-border/60 bg-background/70 text-center font-mono text-[10px] tracking-[0.2em] text-foreground/42 uppercase">
          <div className="px-4 py-3 text-left">Feature</div>
          <div className="bg-primary/[0.07] px-3 py-3 text-primary">
            OpenButton
          </div>
          <div className="px-3 py-3">Free Libs</div>
          <div className="px-3 py-3">Aceternity</div>
          <div className="px-3 py-3">UIverse</div>
        </div>

        {FEATURE_MATRIX.map((row) => (
          <div
            key={row.feature}
            className="grid min-w-[38rem] grid-cols-[minmax(10rem,1.4fr)_repeat(4,minmax(4.5rem,0.55fr))] border-b border-border/45 last:border-b-0"
          >
            <div className="px-4 py-3 text-[13px] font-medium text-foreground/78">
              {row.feature}
            </div>
            <div className="bg-primary/[0.045] px-3 py-3 text-center">
              <MatrixCell value={row.openbutton} featured />
            </div>
            <div className="px-3 py-3 text-center">
              <MatrixCell value={row.freeLibs} />
            </div>
            <div className="px-3 py-3 text-center">
              <MatrixCell value={row.aceternity} />
            </div>
            <div className="px-3 py-3 text-center">
              <MatrixCell value={row.uiverse} />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
