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

const INITIAL_COMPONENTS: any[] = []

function ButtonPreview({ comp }: { comp: any }) {
  if (comp.style === 'premium-glow') {
    return <AnimatedPremiumButton href="#" text={comp.name} />
  }
  if (comp.style === 'liquid') {
    return <button className="relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]"><span className="relative z-10">{comp.name}</span></button>
  }
  if (comp.style === 'magnetic') {
    return <button className="px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors shadow-xl shadow-black/50 hover:-translate-y-1">{comp.name}</button>
  }
  if (comp.style === 'aurora') {
    return <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400 text-black font-bold hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5)] transition-all hover:scale-105">{comp.name}</button>
  }
  if (comp.style === 'shine') {
    return <button className="relative overflow-hidden px-6 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-semibold group"><span className="relative z-10">{comp.name}</span><div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" /></button>
  }
  if (comp.style === 'morph') {
    return <button className="px-6 py-3 bg-violet-600 text-white font-bold hover:bg-violet-500 transition-all duration-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[70%_30%_30%_70%/70%_70%_30%_30%]">{comp.name}</button>
  }
  if (comp.style === 'spotlight') {
    return <button className="px-6 py-3 rounded-lg bg-zinc-950 border-t-2 border-primary text-white font-medium shadow-[0_-5px_20px_-10px_var(--primary)] hover:bg-zinc-900 transition-colors">{comp.name}</button>
  }
  if (comp.style === 'glass') {
    return <button className="px-6 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">{comp.name}</button>
  }
  if (comp.style === 'neon-trace') {
    return <button className="px-6 py-3 rounded-lg bg-black border border-pink-500 text-pink-500 font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:bg-pink-500/10 transition-all">{comp.name}</button>
  }
  if (comp.style === 'minimal-dot') {
    return <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 transition-colors"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> {comp.name}</button>
  }
  if (comp.style === 'cyberpunk') {
    return <button className="px-6 py-3 bg-yellow-400 text-black font-black uppercase tracking-widest border-2 border-yellow-400 hover:bg-black hover:text-yellow-400 transition-colors" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}>{comp.name}</button>
  }
  if (comp.style === '3d-push') {
    return <button className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-bold border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all">{comp.name}</button>
  }
  if (comp.style === 'gradient') {
    return <button className="px-6 py-3 rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 text-white font-bold hover:scale-105 transition-transform">{comp.name}</button>
  }
  if (comp.style === 'glitch') {
    return <button className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest border border-white/20 hover:border-red-500 hover:text-red-500 transition-colors">{comp.name}</button>
  }
  if (comp.style === 'ripple') {
    return <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition-all">{comp.name}</button>
  }
  if (comp.style === 'pixel') {
    return <button className="px-6 py-3 bg-white text-black font-mono font-bold border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_#000] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all">{comp.name}</button>
  }
  
  // Default fallback
  return (
    <button className="group/btn relative overflow-hidden rounded-xl border border-border/40 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground/80 transition-all duration-500 hover:border-primary/50 hover:bg-background hover:text-foreground hover:shadow-[0_0_20px_-5px_var(--primary)] hover:scale-105 active:scale-95">
      <span className="relative z-10">{comp.name}</span>
      <div className="absolute inset-0 z-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
    </button>
  )
}

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewSource, setViewSource] = useState<string | null>(null)
  const [darkPreview, setDarkPreview] = useState<Record<string, boolean>>({})
  const [componentsList, setComponentsList] = useState(INITIAL_COMPONENTS)
  const [isLoading, setIsLoading] = useState(true)
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
          setComponentsList(fetchedComponents)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/component`, {
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
          const token = localStorage.getItem("token")
          const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/verify`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
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
            toast.error("Payment verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id)
            setIsProcessing(null)
          }
        },
        prefill: {
          name: JSON.parse(localStorage.getItem("user") ?? "{}")?.name ?? "",
          email: JSON.parse(localStorage.getItem("user") ?? "{}")?.email ?? "",
          contact: ""
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

  const filtered = componentsList.filter((c) => c.category === "Buttons")
  const activeComp = componentsList.find(c => c.id === viewSource)

  const togglePreviewMode = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    e.preventDefault()
    setDarkPreview(prev => ({ ...prev, [id]: !prev[id] }))
  }

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
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Premium Buttons</h1>
            <p className="text-sm text-foreground/50">Browse, preview, and unlock 30+ interactive button components</p>
          </div>
        </div>
      </motion.div>

      {/* Component grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[340px] rounded-[20px] border border-border/40 bg-foreground/[0.02] animate-pulse"
              />
            ))
          ) : (
            filtered.map((comp, i) => {
              const isComingSoon = comp.style !== "premium-glow"
            const isDark = darkPreview[comp.id] ?? false

            return (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className={`group relative overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all hover:shadow-md ${isComingSoon ? "border-gray-100 opacity-60" : "border-gray-200"}`}
            >
              {/* Preview area */}
              <div className={`relative m-2 flex h-[180px] items-center justify-center rounded-[16px] overflow-hidden ${isDark ? 'dark bg-[#0d1117] text-white' : 'bg-[#fafafa] text-black'} transition-colors duration-300`}>
                {/* Simulated dots background using pseudo-element or SVG */}
                <div className={`absolute inset-0 opacity-40 ${isDark ? 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1.5px,transparent_1.5px)]' : 'bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1.5px,transparent_1.5px)]'} bg-[length:16px_16px]`} />

                {!isComingSoon && (
                  <>
                    {/* Top Right Hover Badge */}
                    <div className={`absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium backdrop-blur-md ${isDark ? 'border-gray-700 bg-black/50 text-gray-400' : 'border-gray-200 bg-white/80 text-gray-500'}`}>
                      <span className="size-1.5 rounded-full bg-emerald-500/80" />
                      hover to preview
                    </div>

                    {/* Top Left Dark Mode Toggle */}
                    <button onClick={(e) => togglePreviewMode(e, comp.id)} className={`absolute left-3 top-3 z-10 flex size-7 items-center justify-center rounded-full border backdrop-blur-md transition-colors ${isDark ? 'border-gray-700 bg-black/50 text-gray-400 hover:text-white' : 'border-gray-200 bg-white/80 text-gray-500 hover:text-black'}`}>
                       {isDark ? (
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                       ) : (
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                       )}
                    </button>
                    
                    <div className="relative z-10">
                      <ButtonPreview comp={comp} />
                    </div>
                  </>
                )}

                {isComingSoon && (
                  <div className="relative z-20 flex flex-col items-center justify-center gap-2">
                    <div className="flex size-10 items-center justify-center text-gray-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="font-mono text-[12px] font-bold uppercase tracking-widest text-gray-500">Coming Soon</p>
                      <p className="mt-1 font-mono text-[9px] text-gray-400">In Development</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[16px] font-bold text-black">{comp.name}</h3>
                  <span className="font-sans text-[18px] font-bold text-[#f59e0b]">
                    ₹{comp.price}
                  </span>
                </div>
                
                {/* Badges row */}
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-mono text-gray-400 tracking-wider">ANIMATED</span>
                  <span className="text-gray-300">|</span>
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-500">React</span>
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-gray-500">Tailwind</span>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="flex border-t border-gray-100">
                <button
                  type="button"
                  disabled={isComingSoon}
                  onClick={() => {}}
                  className={`flex flex-1 items-center justify-center gap-2 py-3.5 text-[11px] font-mono tracking-wider transition-colors ${isComingSoon ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  SAVE
                </button>
                <div className="w-px bg-gray-100" />
                {comp.unlocked && !isComingSoon ? (
                  <button
                    type="button"
                    onClick={() => setViewSource(comp.id)}
                    className="flex flex-1 items-center justify-center gap-2 py-3.5 text-[11px] font-mono tracking-wider text-emerald-500 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    GET CODE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={isProcessing === comp.id || isComingSoon}
                    onClick={() => !isComingSoon && handleUnlock(comp)}
                    className={`flex flex-1 items-center justify-center gap-2 py-3.5 text-[11px] font-mono tracking-wider transition-colors ${isComingSoon ? 'text-gray-300 cursor-not-allowed' : 'text-[#ff3333] hover:bg-red-50'}`}
                  >
                    {isProcessing === comp.id ? "PROCESSING..." : "BUY NOW"}
                    {!isProcessing && !isComingSoon && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  </button>
                )}
              </div>
            </motion.div>
              )
            })
          )}
        </AnimatePresence>
      </div>

      {!isLoading && (
        <div className="mt-12 mb-8 rounded-3xl border border-primary/20 bg-primary/[0.03] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Unlock the Ultimate UI Toolkit</h2>
          <p className="mt-3 text-foreground/60 max-w-lg mx-auto">
            Get instant access to all 30 premium components, full source code, and commercial usage rights.
          </p>
          <button onClick={() => router.push('/dashboard/pricing')} className="mt-8 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
            Unlock All Components for ₹299
          </button>
        </div>
      )}

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
              <div className="relative max-h-[55vh] overflow-y-auto">
                <div className={activeComp?.unlocked ? "" : "blur-[8px] opacity-40 select-none pointer-events-none"}>
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

                {!activeComp?.unlocked && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#0d1117]/90 via-transparent to-transparent">
                     <div className="flex flex-col items-center text-center bg-[#161b22] border border-[#30363d] p-8 rounded-2xl shadow-2xl max-w-sm backdrop-blur-md">
                       <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                       </div>
                       <h3 className="text-lg font-bold text-white mb-2">Component Locked</h3>
                       <p className="text-sm text-[#8b949e] mb-6">Unlock {activeComp?.name} to get the full source code and use it in your projects.</p>
                       <button onClick={() => { setViewSource(null); handleUnlock(activeComp); }} className="w-full mb-3 flex justify-center items-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90">
                          Unlock Component (₹{activeComp?.price})
                       </button>
                       <button onClick={() => router.push('/dashboard/pricing')} className="w-full rounded-xl bg-white/[0.04] border border-white/10 py-3 text-sm font-bold text-white transition-all hover:bg-white/[0.08]">
                          Unlock All 30 for ₹299
                       </button>
                     </div>
                  </div>
                )}
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