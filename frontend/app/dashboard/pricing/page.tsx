/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ease } from "@/components/landing/constants"
import { CheckCircle2 } from "lucide-react"
import { useGeoPricing, ProductType } from "@/hooks/useGeoPricing"

export default function PricingPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { currency, getPrice, loading } = useGeoPricing()

  const tiers = [
    {
      name: "Single Component",
      type: "component" as ProductType,
      description: "Perfect for a quick project.",
      features: [
        "1 Premium Component",
        "Full Source Code",
        "React & Tailwind Support",
        "Framer Motion Animations",
        "Personal Use License"
      ],
      cta: "Browse Components",
      href: "/dashboard/components",
      popular: false,
      delay: 0,
    },
    {
      name: "V1 Bundle",
      type: "bundle" as ProductType,
      description: "All 30 premium buttons from V1.",
      features: [
        "30 Premium Buttons",
        "Full Source Code",
        "React, Tailwind, TS",
        "Framer Motion Animations",
        "Commercial Use License",
        "Priority Support"
      ],
      cta: "Buy Bundle",
      href: "#buy-bundle",
      popular: true,
      delay: 0.1,
    },
    {
      name: "Lifetime Access",
      type: "lifetime" as ProductType,
      description: "Everything we ever build.",
      features: [
        "All Current Components",
        "All Future Components",
        "Full Source Code",
        "React, Tailwind, TS",
        "Commercial Use License",
        "Priority Support",
        "Request New Components"
      ],
      cta: "Get Lifetime Access",
      href: "#buy-lifetime",
      popular: false,
      delay: 0.2,
    },
  ]

  const handlePurchase = async (type: "bundle" | "lifetime") => {
    if (isProcessing) return
    setIsProcessing(true)
    
    try {
      const token = localStorage.getItem("token")
      const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
      const res = await fetch(`${API_URL}/api/payments/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currency })
      })
      const data = (await res.json()) as any
      
      if (!data.success) throw new Error(data.error)
      
      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "OpenButton",
        description: type === "bundle" ? "OpenButton V1 Bundle" : "Lifetime Access",
        order_id: data.orderId,
        handler: async function (response: any) {
          try {
            await fetch(`${API_URL}/api/payments/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                ...response,
                type
              }),
            })
            alert("Payment successful! Access granted.")
            window.location.reload()
          } catch (err) {
            console.error(err)
            alert("Payment verification failed.")
          }
        },
        theme: {
          color: "#000000",
        },
      }
      
      const rzp = new (window as any).Razorpay(options)
      rzp.on("payment.failed", function (response: any) {
        console.error(response.error)
        alert("Payment failed.")
      })
      rzp.open()
    } catch (err) {
      console.error(err)
      alert("Failed to initiate checkout")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mt-4 text-foreground/60 max-w-xl mx-auto"
        >
          No subscription fees. Pay once, use forever. Upgrade your workflow with our premium interactive components.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => {
          const priceObj = getPrice(tier.type)
          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: tier.delay }}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-sm ${
                tier.popular 
                  ? "border-primary bg-primary/[0.03] shadow-primary/10 shadow-lg" 
                  : "border-border/60 bg-background/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-2 text-sm text-foreground/60 h-10">{tier.description}</p>
              </div>
              
              <div className="mb-6 flex items-baseline gap-1 min-h-[40px]">
                {!loading && (
                  <span className="text-4xl font-bold tracking-tight">
                    {priceObj.symbol}{priceObj.value}
                  </span>
                )}
              </div>
              
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {tier.href.startsWith("#") ? (
                <button
                  onClick={() => handlePurchase(tier.href.includes("bundle") ? "bundle" : "lifetime")}
                  disabled={isProcessing}
                  className={`w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {isProcessing ? "Processing..." : tier.cta}
                </button>
              ) : (
                <a
                  href={tier.href}
                  className={`flex justify-center w-full rounded-xl border py-3 text-sm font-semibold transition-all ${
                    "border-border bg-background hover:bg-foreground/[0.03]"
                  }`}
                >
                  {tier.cta}
                </a>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
