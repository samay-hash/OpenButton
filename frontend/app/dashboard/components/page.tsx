/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useRouter } from "next/navigation"
import { AnimatedPremiumButton } from "@/components/landing/animated-premium-button"
import { toast } from "sonner"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const PREMIUM_CODE = `"use client"

import React from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface AnimatedPremiumButtonProps {
  href: string
  text: string
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
}

export function AnimatedPremiumButton({
  href,
  text,
  icon = <Calendar className="size-4" />,
  onClick,
}: AnimatedPremiumButtonProps) {
  return (
    <div className="group relative overflow-hidden rounded-[13px] bg-border/20 p-[1.5px] shadow-sm transition-all hover:shadow-md dark:bg-border/40">
      {/* Animated Glow Wrapper */}
      <div
        className="absolute inset-0 z-0 opacity-80 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          maskImage:
            "radial-gradient(circle at 100% 0%, black 0%, transparent 45%), radial-gradient(circle at 0% 100%, black 0%, transparent 45%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, black 0%, transparent 45%), radial-gradient(circle at 0% 100%, black 0%, transparent 45%)",
        }}
      >
        <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#3b82f6_40%,transparent_80%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_40%,transparent_80%)]" />
      </div>

      {/* Inner Button Background */}
      <div className="relative z-10 rounded-[11px] bg-background/95 backdrop-blur-sm transition-colors hover:bg-background/80">
        <Link
          href={href}
          onClick={onClick}
          className="flex h-12 items-center justify-center gap-2 rounded-[11px] px-8 text-[15px] font-medium text-foreground"
        >
          {/* Animated Icon Sliding Effect */}
          <div className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
            <div className="absolute transition-transform duration-500 ease-out group-hover:-translate-y-[150%]">
              {icon}
            </div>
            <div className="absolute translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-y-0">
              {icon}
            </div>
          </div>
          <span>{text}</span>
        </Link>
      </div>
    </div>
  )
}`

const CATEGORIES = ["All", "Buttons", "Cards", "Navbars", "Modals", "Animations", "Forms"]

const INITIAL_COMPONENTS = [
  { id: "1", name: "Premium Glow", category: "Buttons", price: 35, tags: ["React", "Tailwind"], style: "premium-animated", unlocked: false, hasPayment: true },
  { id: "2", name: "Glass Frost", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glass", unlocked: false, hasPayment: false },
  { id: "3", name: "Glowing Edge", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glowing-edge", unlocked: false, hasPayment: false },
  { id: "4", name: "Shadow Rise", category: "Buttons", price: 20, tags: ["HTML", "CSS"], style: "shadow", unlocked: false, hasPayment: false },
  { id: "5", name: "Border Trace", category: "Buttons", price: 30, tags: ["React", "CSS"], style: "border-trace", unlocked: false, hasPayment: false },
  { id: "6", name: "Shimmer Fill", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "shimmer", unlocked: false, hasPayment: false },
  { id: "7", name: "Neon Card", category: "Cards", price: 40, tags: ["React", "CSS"], style: "glass", unlocked: false, hasPayment: false },
  { id: "8", name: "Glassmorphism Card", category: "Cards", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false, hasPayment: false },
  { id: "9", name: "Floating Navbar", category: "Navbars", price: 45, tags: ["React", "Tailwind"], style: "glass", unlocked: false, hasPayment: false },
  { id: "10", name: "Modal Blur", category: "Modals", price: 30, tags: ["React", "CSS"], style: "glass", unlocked: false, hasPayment: false },
  { id: "11", name: "Spring Bounce", category: "Animations", price: 20, tags: ["React", "Motion"], style: "bounce", unlocked: false, hasPayment: false },
  { id: "12", name: "Form Glow", category: "Forms", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false, hasPayment: false },
]

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewSource, setViewSource] = useState<string | null>(null)
  const [componentsList, setComponentsList] = useState(INITIAL_COMPONENTS)
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/login")
          return
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/components`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        const data = (await res.json()) as any
        if (data && data.data) {
          const fetchedComponents = data.data
          const merged = INITIAL_COMPONENTS.map(c => {
            const fetched = fetchedComponents.find((fc: any) => fc.id === c.id)
            return fetched ? { ...c, unlocked: fetched.unlocked } : c
          })
          setComponentsList(merged)
        }
      } catch (err) {
        console.error(err)
      }
    }
    void fetchComponents()
  }, [router])

  const handleUnlock = async (comp: typeof INITIAL_COMPONENTS[0]) => {
    if (comp.unlocked) {
      setViewSource(comp.id)
      return
    }

    try {
      setIsProcessing(comp.id)
      const token = localStorage.getItem("token")
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/create-order`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ componentId: comp.id })
      })
      const data = (await res.json()) as any
      
      if (!data.success) {
        toast.error("Failed to initiate payment")
        setIsProcessing(null)
        return
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "OpenButton",
        description: `Unlock ${data.component.name}`,
        order_id: data.orderId,
        handler: async function (response: any) {
          const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              componentId: comp.id
            })
          })
          const verifyData = (await verifyRes.json()) as any
          if (verifyData.success) {
            toast.success("Payment successful! Component unlocked.")
            setComponentsList(prev => prev.map(c => c.id === comp.id ? { ...c, unlocked: true } : c))
            setViewSource(comp.id)
            setIsProcessing(null)
          } else {
            toast.error("Payment verification failed.")
            setIsProcessing(null)
          }
        },
        prefill: {
          name: "Samay Samrat",
          email: "samay@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3b82f6"
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(null)
          }
        }
      }
      
      const rzp = new (window as any).Razorpay(options)
      rzp.on("payment.failed", function (response: any) {
        toast.error(response.error.description)
        setIsProcessing(null)
      })
      rzp.open()
      
    } catch (err) {
      toast.error("Something went wrong.")
      setIsProcessing(null)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PREMIUM_CODE)
    setCopied(true)
    toast.success("Code copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const filtered = activeCategory === "All"
    ? componentsList
    : componentsList.filter((c) => c.category === activeCategory)

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/40 bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M12 2L2 7l10 5 10-5-10-5Z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">UI Components</h1>
            <p className="text-sm text-foreground/50">Browse, preview, and unlock premium components</p>
          </div>
        </div>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-6 flex flex-wrap gap-1.5"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_16px_-4px_var(--primary)]"
                : "border border-border/50 bg-background/50 text-foreground/50 hover:text-foreground/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Component grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((comp, i) => (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-border/80"
            >
              {/* Coming Soon overlay for components without payment */}
              {!comp.hasPayment && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-2xl bg-background/85 backdrop-blur-[2px]">
                  <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground/60">Coming Soon</p>
                    <p className="mt-0.5 font-mono text-[9px] text-foreground/35">In Development</p>
                  </div>
                </div>
              )}

              {/* Preview area */}
              <div className="relative flex h-36 items-center justify-center bg-dot-grid">
                {comp.hasPayment ? (
                  <>
                    {comp.style === "premium-animated" ? (
                      <AnimatedPremiumButton href="#" text={comp.name} />
                    ) : (
                      <div className="rounded-xl border border-border/40 bg-background/60 px-5 py-2.5 text-sm font-semibold text-foreground/70">
                        {comp.name}
                      </div>
                    )}
                    {!comp.unlocked && (
                      <div className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/40">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="size-3.5">
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                    )}
                    {comp.unlocked && (
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-emerald-600">
                        <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="size-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-[9px] font-bold uppercase">Unlocked</span>
                      </div>
                    )}
                  </>
                ) : null}
              </div>

              {/* Info */}
              <div className="border-t border-border/40 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold tracking-tight">{comp.name}</h3>
                  <span className="font-mono text-[14px] font-bold" style={{ color: "var(--gold, var(--primary))" }}>
                    ₹{comp.price}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider text-foreground/40 uppercase">{comp.category}</span>
                  <span className="h-2.5 w-px bg-border/50" />
                  {comp.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-[9px] text-foreground/50">{tag}</span>
                  ))}
                </div>
                {comp.hasPayment ? (
                  <button
                    type="button"
                    disabled={isProcessing === comp.id}
                    onClick={() => void handleUnlock(comp)}
                    className={`mt-4 w-full rounded-xl py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                      comp.unlocked
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "bg-foreground/[0.06] text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {isProcessing === comp.id ? "Processing..." : comp.unlocked ? "View Source" : "Unlock Component"}
                  </button>
                ) : (
                  <div className="mt-4 w-full rounded-xl border border-dashed border-border/50 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-foreground/30">
                    Coming Soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Premium Source Code Modal */}
      <AnimatePresence>
        {viewSource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setViewSource(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)]"
            >
              {/* Terminal header bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-5 py-3.5">
                <div className="flex items-center gap-3">
                  {/* Mac-style traffic lights */}
                  <div className="flex items-center gap-1.5">
                    <div className="size-3 rounded-full bg-[#ff5f57]" />
                    <div className="size-3 rounded-full bg-[#febc2e]" />
                    <div className="size-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5 text-[#58a6ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                    <span className="font-mono text-[11px] font-medium text-[#8b949e]">AnimatedPremiumButton.tsx</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Dependencies badge */}
                  <div className="flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-2.5 py-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3 text-[#58a6ff]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7-9-4-9 4m18 0-9 4m9-4v10l-9 4m0-14L3 7m9 4v10M3 7v10l9 4" />
                    </svg>
                    <span className="font-mono text-[9px] text-[#8b949e]">lucide-react · motion</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setViewSource(null)}
                    className="flex size-7 items-center justify-center rounded-lg bg-white/[0.04] text-[#8b949e] transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Install command bar */}
              <div className="border-b border-white/[0.06] bg-[#0d1117] px-5 py-2.5">
                <div className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#161b22] px-3 py-2">
                  <span className="font-mono text-[11px] text-[#3fb950]">$</span>
                  <code className="font-mono text-[11px] text-[#8b949e]">
                    pnpm add lucide-react motion
                  </code>
                  <button
                    type="button"
                    onClick={() => {
                      void navigator.clipboard.writeText("pnpm add lucide-react motion")
                      toast.success("Install command copied!")
                    }}
                    className="ml-auto flex items-center gap-1 rounded border border-[#30363d] bg-[#21262d] px-2 py-0.5 font-mono text-[9px] text-[#8b949e] transition-colors hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-2.5">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    copy
                  </button>
                </div>
              </div>

              {/* Syntax-highlighted code */}
              <div className="max-h-[55vh] overflow-y-auto">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: "20px 24px",
                    background: "#0d1117",
                    fontSize: "12.5px",
                    lineHeight: "1.7",
                    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                  }}
                  showLineNumbers
                  lineNumberStyle={{
                    color: "#484f58",
                    minWidth: "2.5em",
                    paddingRight: "16px",
                    userSelect: "none",
                  }}
                >
                  {PREMIUM_CODE}
                </SyntaxHighlighter>
              </div>

              {/* Footer action bar */}
              <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#161b22] px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex size-5 items-center justify-center rounded bg-emerald-500/10 text-emerald-500">
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-[#8b949e]">Premium Glow · React + Tailwind CSS</span>
                </div>
                <button
                  type="button"
                  onClick={() => void handleCopy()}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                    copied
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-[#238636] text-white hover:bg-[#2ea043]"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="size-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}