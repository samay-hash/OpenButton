/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      })
      const data = (await res.json()) as any

      if (data.success) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }))
        document.cookie = `token=${data.token}; path=/; max-age=2592000`
        window.location.href = "/dashboard/components"
      } else {
        setError(data.error || "Signup failed. Please try again.")
      }
    } catch (err) {
      setError("Cannot connect to server. Make sure the backend is running.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* LEFT PANEL — Minimal Branding */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-foreground p-12 lg:flex"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
          }}
        />

        {/* Logo centered */}
        <div className="relative z-10 scale-150">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold text-background">
              Open<span className="text-primary">Button</span>
            </span>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT PANEL — Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2"
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Link href="/" className="text-xl font-bold">
              Open<span className="text-primary">Button</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Welcome to OpenButton. Enter your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold tracking-wider text-foreground/80 uppercase">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="w-full rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold tracking-wider text-foreground/80 uppercase">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold tracking-wider text-foreground/80 uppercase">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
                className="w-full rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10"
                placeholder="Create a strong password"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-500"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative mt-4 w-full overflow-hidden rounded-xl bg-foreground px-4 py-3.5 text-sm font-semibold text-background transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="size-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-foreground hover:text-primary transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
