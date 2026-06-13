"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { BrandLogo } from "@/components/brand-logo"

const SECTIONS = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Components",
    href: "/dashboard/components",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "Pricing",
    href: "/dashboard/pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    label: "Changelog",
    href: "/dashboard/changelog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Upcoming",
    href: "/dashboard/upcoming",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M12 2v20" />
        <path d="m17 5-5-3-5 3" />
      </svg>
    ),
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userName, setUserName] = useState("User")
  const [userEmail, setUserEmail] = useState("Premium Account")
  
  useEffect(() => {
    const raw = localStorage.getItem("user")
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as { name?: string; email?: string }
        if (parsed.name) setUserName(parsed.name)
        if (parsed.email) setUserEmail(parsed.email)
      } catch (err) {
        // Handle parse error silently
      }
    }
  }, [])

  const initials = userName.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname.startsWith(href)
  }

  const navContent = (
    <nav className="flex flex-col gap-1 px-3 py-4">
      {SECTIONS.map((section) => {
        const active = isActive(section.href)
        return (
          <Link
            key={section.href}
            href={section.href}
            onClick={() => setMobileOpen(false)}
            className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 font-mono text-[12px] font-medium tracking-wide transition-all duration-200 ${
              active
                ? "bg-primary/10 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                : "text-foreground/55 hover:bg-foreground/[0.04] hover:text-foreground/80"
            }`}
          >
            <span className={`transition-colors ${active ? "text-primary" : "text-foreground/40 group-hover:text-foreground/60"}`}>
              {section.icon}
            </span>
            {section.label}
            {active && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-[240px] shrink-0 border-r border-border/40 bg-background/60 backdrop-blur-xl lg:block">
        <div className="sticky top-0 flex h-screen flex-col">
          <div className="flex h-14 items-center border-b border-border/40 px-5">
            <BrandLogo href="/dashboard" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {navContent}
          </div>
          <div className="border-t border-border/40 px-4 py-3">
            <div className="flex items-center gap-2 rounded-lg bg-primary/[0.06] px-3 py-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-primary/20 font-mono text-[10px] font-bold text-primary">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-foreground/80">{userName}</p>
                <p className="truncate text-[10px] text-foreground/40">{userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-[60] flex size-10 items-center justify-center rounded-xl border border-border/40 bg-background/80 backdrop-blur-xl lg:hidden"
        aria-label="Toggle sidebar"
      >
        <span className="flex flex-col gap-[5px]">
          <span className="block h-[1.5px] w-5 rounded-full bg-foreground" />
          <span className="block h-[1.5px] w-5 rounded-full bg-foreground" />
          <span className="block h-[1.5px] w-5 rounded-full bg-foreground" />
        </span>
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-[56] h-screen w-[260px] border-r border-border/40 bg-background/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex h-14 items-center border-b border-border/40 px-5">
                <BrandLogo href="/dashboard" />
              </div>
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
