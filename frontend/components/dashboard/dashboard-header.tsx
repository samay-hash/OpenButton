"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

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
  const title = SECTION_TITLES[pathname] || "Dashboard"

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

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div className="hidden h-4 w-px bg-border/60 sm:block" />
        <span className="hidden text-[12px] font-medium text-foreground/60 sm:block">
          Premium User
        </span>
        <Link
          href="/"
          className="rounded-lg border border-border/60 bg-background/50 px-3 py-1.5 text-[11px] font-semibold text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
        >
          Sign Out
        </Link>
      </div>
    </header>
  )
}
