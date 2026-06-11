"use client"

import Link from "next/link"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { ThemeToggle } from "@/components/theme-toggle"

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Browse Buttons", href: "#showcase" },
      { label: "Pricing", href: "#comparison" },
      { label: "Request Custom", href: "#contact" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "License", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter / X", href: "#" },
      { label: "GitHub", href: "https://github.com/samay-hash/openbutton" },
      { label: "Discord", href: "#" },
      { label: "Product Hunt", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mt-12 flex flex-col items-center justify-center border-t border-border/45 bg-background pt-16">
      {/* Top section: Grid links */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="font-mono text-lg font-bold">OpenButton</span>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/50">
              Premium micro-UI components for modern web applications. Buy once,
              ship forever.
            </p>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {FOOTER_LINKS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-foreground uppercase">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            if (link.href === "#") return
                            e.preventDefault()
                            const el = document.getElementById(
                              link.href.slice(1)
                            )
                            if (el) {
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              })
                            }
                          }}
                          className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-foreground/40 sm:flex-row">
          <p>© {new Date().getFullYear()} OpenButton. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Crafted in India</span>
            <span className="size-1 rounded-full bg-primary" />
            <span>₹ Pricing</span>
          </div>
        </div>
      </div>

      {/* Bottom section: Hover text */}
      <div className="relative w-full overflow-hidden border-t border-border/45">
        <div className="pointer-events-none absolute inset-0 -top-8 -bottom-8 -z-10 bg-[radial-gradient(ellipse_at_center,var(--primary)/15%,transparent_60%)] opacity-30 blur-2xl" />
        <TextHoverEffect text="OPENBUTTON" />
      </div>
    </footer>
  )
}
