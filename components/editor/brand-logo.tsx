"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const WORDMARK = "OpenButton"
const WORDMARK_CHARS = WORDMARK.split("")

const wordmarkContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.18 } },
}

const letterVariants = {
  hidden: { y: "60%", opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 28,
      mass: 0.5,
    },
  },
}

type BrandLogoProps = {
  className?: string
  markClassName?: string
  wordmarkClassName?: string
}

export const BrandLogo = React.memo(function BrandLogo({
  className,
  markClassName,
  wordmarkClassName,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex min-w-0 items-center gap-0 select-none", className)}
      aria-label={WORDMARK}
    >
      {/* Wordmark only */}

      <motion.span
        className={cn(
          "inline-flex shrink-0 font-mono text-[20px] leading-none font-medium whitespace-nowrap text-foreground",
          wordmarkClassName
        )}
        initial="hidden"
        animate="visible"
        variants={wordmarkContainerVariants}
        aria-hidden="true"
      >
        {WORDMARK_CHARS.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className="inline-block"
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Link>
  )
})
