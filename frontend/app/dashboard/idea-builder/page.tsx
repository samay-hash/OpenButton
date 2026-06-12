"use client"

import { useState } from "react"
import { motion } from "motion/react"

const MOCK_SUBMISSIONS = [
  {
    id: "1",
    idea: "Mujhe ek glassmorphism wala login page chahiye jisme floating particles ho background me aur form ke peeche blur effect ho",
    language: "Hinglish",
    status: "completed" as const,
    date: "Jun 10, 2026",
  },
  {
    id: "2",
    idea: "A dark mode pricing table with neon glow borders that animate on hover, three tiers with a recommended badge",
    language: "English",
    status: "in-progress" as const,
    date: "Jun 11, 2026",
  },
  {
    id: "3",
    idea: "ek animated navbar chahiye jisme scroll krne pe background blur ho jaye aur logo chhota ho jaye smooth animation ke sath",
    language: "Hinglish",
    status: "pending" as const,
    date: "Jun 12, 2026",
  },
]

const STATUS_STYLES = {
  pending: { label: "Pending", color: "text-amber-600 bg-amber-500/10" },
  "in-progress": { label: "In Progress", color: "text-blue-600 bg-blue-500/10" },
  completed: { label: "Completed", color: "text-emerald-600 bg-emerald-500/10" },
}

export default function IdeaBuilderPage() {
  const [idea, setIdea] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!idea.trim()) return
    setSubmitted(true)
    setTimeout(() => {
      setIdea("")
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-pink-500/10 text-pink-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Idea to Component</h1>
            <p className="text-sm text-foreground/50">Describe your idea in any language — we build it into production code</p>
          </div>
        </div>
      </motion.div>

      {/* Input area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-10 overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm"
      >
        <div className="border-b border-border/40 px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground/50 uppercase">
              Describe your component idea
            </span>
            <span className="rounded-md bg-violet-500/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-violet-600 uppercase">
              Any Language
            </span>
          </div>
        </div>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Mujhe ek glassmorphism wala card chahiye jisme hover pe glow effect aaye... or describe in any language you want!"
          rows={5}
          className="w-full resize-none bg-transparent px-5 py-4 text-sm leading-relaxed text-foreground placeholder:text-foreground/30 focus:outline-none"
        />
        <div className="flex items-center justify-between border-t border-border/40 px-5 py-3">
          <span className="text-[11px] text-foreground/35">
            {idea.length > 0 ? `${idea.length} characters` : "Hinglish, English, Hindi — anything works"}
          </span>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!idea.trim() || submitted}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
              submitted
                ? "bg-emerald-500/10 text-emerald-600"
                : idea.trim()
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "cursor-not-allowed bg-foreground/[0.06] text-foreground/30"
            }`}
          >
            {submitted ? (
              <>
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Submitted!
              </>
            ) : (
              <>
                Submit Idea
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-3">
                  <path d="M3 8h10m0 0L9 4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* Previous submissions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="mb-4 font-mono text-[11px] font-semibold tracking-wider text-foreground/50 uppercase">
          Your Submissions
        </h2>
        <div className="flex flex-col gap-3">
          {MOCK_SUBMISSIONS.map((sub, i) => {
            const statusStyle = STATUS_STYLES[sub.status]
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-border/50 bg-background/40 p-4 transition-all hover:border-border/80"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] leading-relaxed text-foreground/70">{sub.idea}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="rounded-md bg-foreground/[0.05] px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-foreground/40 uppercase">
                        {sub.language}
                      </span>
                      <span className="text-[11px] text-foreground/30">{sub.date}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider uppercase ${statusStyle.color}`}>
                    {statusStyle.label}
                  </span>
                </div>
                {sub.status === "completed" && (
                  <div className="mt-3 flex items-center gap-2 border-t border-border/40 pt-3">
                    <button type="button" className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-primary uppercase hover:text-primary/80">
                      View Code
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-3">
                        <path d="M3 8h10m0 0L9 4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
