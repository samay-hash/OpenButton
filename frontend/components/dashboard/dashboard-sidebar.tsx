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
    label: "UI Components",
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
    label: "Algorithm Lab",
    href: "/dashboard/algorithms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
  },
  {
    label: "Typography & UX",
    href: "/dashboard/typography",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    label: "Client Guide",
    href: "/dashboard/client-guide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Idea Builder",
    href: "/dashboard/idea-builder",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="m9 22 3-8 3 8" />
        <circle cx="12" cy="6" r="4" fill="none" />
      </svg>
    ),
  },
  {
    label: "Image Studio",
    href: "/dashboard/image-studio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
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
