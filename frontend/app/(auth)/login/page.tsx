"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { BrandLogo } from "@/components/brand-logo"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth
    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[50%] w-[50%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <BrandLogo />
          <h1 className="mt-6 text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your credentials to access your premium assets.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-wider text-foreground/80 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-semibold tracking-wider text-foreground/80 uppercase"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative mt-6 w-full overflow-hidden rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="size-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
            <div className="absolute inset-0 -top-1/2 mx-auto h-full w-3/4 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_50%)]" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Create one
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
