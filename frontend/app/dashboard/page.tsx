import { BrandLogo } from "@/components/brand-logo"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLogo />
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground/80">
              Welcome, User
            </span>
            <Link
              href="/"
              className="rounded-lg border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            View and manage your unlocked premium UI components.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example unlocked item */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-dot-grid border border-border/40 bg-background/60">
              <button className="rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]">
                Premium Glow
              </button>
            </div>
            <h3 className="font-semibold tracking-tight">Premium Glow</h3>
            <p className="mt-1 text-sm text-muted-foreground">Unlocked on Jun 11, 2026</p>
            <div className="mt-4 flex items-center gap-3">
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                View Source
              </button>
            </div>
          </div>
          
          {/* More items would go here */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 bg-background/20 p-6 text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
              <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="size-6"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <h3 className="font-semibold tracking-tight">Discover More</h3>
            <p className="mt-1 text-sm text-muted-foreground">Browse the marketplace to unlock more components.</p>
            <Link href="/#showcase" className="mt-4 font-medium text-primary hover:underline">
              Browse Components &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
