"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"

const SECTION_TITLES: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/components": "UI Components",
  "/dashboard/algorithms": "Algorithm Lab",
  "/dashboard/typography": "Typography & UX",
  "/dashboard/client-guide": "Client Guide",
  "/dashboard/idea-builder": "Idea Builder",
  "/dashboard/image-studio": "Image Studio",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const title = SECTION_TITLES[pathname] || "Dashboard"
  const [userName, setUserName] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string>("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem("user")
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as { name?: string; email?: string }
        setUserName(parsed.name ?? "")
        setUserEmail(parsed.email ?? "")
      } catch {
        // ignore parse errors
      }
    }
  }, [])

  const initials = userName
    ? userName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "?"

  const handleSignOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    document.cookie = "token=; path=/; max-age=0"
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-border/40 bg-background/60 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3 pl-12 lg:pl-0">
        <h1 className="text-sm font-semibold tracking-tight text-foreground">{title}</h1>
        <span className="hidden h-4 w-px bg-border/60 sm:block" />
        <nav className="hidden items-center gap-1 text-[11px] text-foreground/40 sm:flex">
          <Link href="/dashboard" className="transition-colors hover:text-foreground/60">Dashboard</Link>
          {pathname !== "/dashboard" && (
            <>
              <span>/</span>
              <span className="text-foreground/70">{title}</span>
            </>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-2.5">
        <ThemeToggle />
        <span className="hidden h-4 w-px bg-border/60 sm:block" />

        {/* User menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/60 px-2.5 py-1.5 transition-all hover:border-border/80 hover:bg-background/90"
          >
            {/* Avatar */}
            <div className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
              <span className="font-mono text-[10px] font-bold leading-none">{initials}</span>
            </div>
            <div className="hidden flex-col items-start sm:flex">
              <span className="text-[12px] font-semibold leading-none text-foreground">
                {userName || "User"}
              </span>
              {userEmail && (
                <span className="mt-0.5 max-w-[120px] truncate text-[10px] leading-none text-foreground/40">
                  {userEmail}
                </span>
              )}
            </div>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`size-3 text-foreground/40 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-full z-50 mt-1.5 w-52 overflow-hidden rounded-xl border border-border/60 bg-background/95 shadow-xl shadow-black/10 backdrop-blur-xl">
                {/* Profile section */}
                <div className="border-b border-border/40 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <span className="font-mono text-[11px] font-bold">{initials}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-semibold text-foreground">{userName || "User"}</p>
                      <p className="truncate text-[10px] text-foreground/45">{userEmail}</p>
                    </div>
                  </div>
                </div>

                {/* Menu items */}
                <div className="p-1">
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] text-foreground/70 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/components"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] text-foreground/70 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                    </svg>
                    My Components
                  </Link>
                </div>

                <div className="border-t border-border/40 p-1">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] text-destructive/80 transition-colors hover:bg-destructive/[0.06] hover:text-destructive"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
