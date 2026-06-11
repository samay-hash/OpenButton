import { motion } from "motion/react"
import { VALUE_PROPS, ease } from "@/components/landing/constants"

const ICONS: Record<string, React.ReactNode> = {
  "01": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
  "02": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
      <path d="M14.5 4l-5 16" />
    </svg>
  ),
  "03": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  ),
  "04": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  ),
  "05": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  ),
  "06": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export function FeatureRow() {
  return (
    <section
      id="features"
      className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mb-12 flex flex-col gap-2">
        <span className="font-mono text-[10px] tracking-widest text-primary/80 uppercase">
          {"// Why OpenButton"}
        </span>
        <h2 className="text-2xl tracking-tight sm:text-3xl">
          The purchasing decision should feel{" "}
          <span className="text-primary">effortless.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {VALUE_PROPS.map((f, i) => (
          <motion.div
            key={f.k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            className="group rounded-[14px] border border-border/60 bg-background/40 p-1.5 backdrop-blur-sm transition-colors hover:border-border/90"
          >
            <div className="flex h-full flex-col gap-4 rounded-[8px] border border-border/40 bg-background/60 p-5 transition-colors group-hover:bg-background/80">
              <span className="text-foreground/50 transition-colors group-hover:text-foreground/80">
                {ICONS[f.k]}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[14px] font-semibold tracking-tight text-foreground">
                  {f.t}
                </h3>
                <p className="text-[13px] leading-relaxed text-foreground/50">
                  {f.d}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
