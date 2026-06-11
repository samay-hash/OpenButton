"use client"

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
}
