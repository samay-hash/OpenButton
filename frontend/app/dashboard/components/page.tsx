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
  { id: "1", name: "Premium Glow", category: "Buttons", price: 35, tags: ["React", "Tailwind"], style: "premium-animated", unlocked: false },
  { id: "2", name: "Glass Frost", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "3", name: "Glowing Edge", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "glowing-edge", unlocked: false },
  { id: "4", name: "Shadow Rise", category: "Buttons", price: 20, tags: ["HTML", "CSS"], style: "shadow", unlocked: false },
  { id: "5", name: "Border Trace", category: "Buttons", price: 30, tags: ["React", "CSS"], style: "border-trace", unlocked: false },
  { id: "6", name: "Shimmer Fill", category: "Buttons", price: 25, tags: ["React", "Tailwind"], style: "shimmer", unlocked: false },
  { id: "7", name: "Neon Card", category: "Cards", price: 40, tags: ["React", "CSS"], style: "glass", unlocked: false },
  { id: "8", name: "Glassmorphism Card", category: "Cards", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "9", name: "Floating Navbar", category: "Navbars", price: 45, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
  { id: "10", name: "Modal Blur", category: "Modals", price: 30, tags: ["React", "CSS"], style: "glass", unlocked: false },
  { id: "11", name: "Spring Bounce", category: "Animations", price: 20, tags: ["React", "Motion"], style: "bounce", unlocked: false },
  { id: "12", name: "Form Glow", category: "Forms", price: 35, tags: ["React", "Tailwind"], style: "glass", unlocked: false },
]

import { toast } from "sonner"

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewSource, setViewSource] = useState<string | null>(null)
  const [componentsList, setComponentsList] = useState(INITIAL_COMPONENTS)
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
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
          // Merge db components state with frontend INITIAL_COMPONENTS
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
    fetchComponents()
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
              className="group overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm transition-all hover:border-border/80"
            >
              {/* Preview area */}
              <div className="relative flex h-36 items-center justify-center bg-dot-grid">
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
                <button
                  type="button"
                  disabled={isProcessing === comp.id}
                  onClick={() => handleUnlock(comp)}
                  className={`mt-4 w-full rounded-xl py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                    comp.unlocked
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-foreground/[0.06] text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {isProcessing === comp.id ? "Processing..." : comp.unlocked ? "View Source" : "Unlock Component"}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Source Code Modal */}
      <AnimatePresence>
        {viewSource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setViewSource(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border/40 bg-muted/30 px-6 py-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                  Premium Glow - React / Tailwind
                </h3>
                <button
                  type="button"
                  onClick={() => setViewSource(null)}
                  className="rounded-full bg-foreground/5 p-1.5 text-foreground/50 transition-colors hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-6">
                <pre className="rounded-xl bg-[#0d1117] p-5 text-sm">
                  <code className="font-mono text-[13px] leading-relaxed text-[#c9d1d9] whitespace-pre-wrap">
                    {PREMIUM_CODE}
                  </code>
                </pre>
              </div>
              <div className="border-t border-border/40 bg-muted/30 px-6 py-4 flex justify-between items-center">
                <p className="text-xs text-foreground/50">Install lucide-react and motion/react</p>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(PREMIUM_CODE)
                    alert("Copied to clipboard!")
                  }}
                  className="rounded-lg bg-primary px-4 py-2 font-mono text-[11px] font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Copy Code
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}