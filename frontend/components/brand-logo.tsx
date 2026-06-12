"use client"

import Link from "next/link"

interface BrandLogoProps {
  href?: string
}

export function BrandLogo({ href = "/" }: BrandLogoProps) {
  return (
    <Link href={href} className="font-sans text-xl font-bold tracking-tight">
      Opn<span className="text-primary">Btn</span>
    </Link>
  )
}
