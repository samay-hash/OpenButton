import {
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Playfair_Display,
  Roboto,
  Space_Grotesk,
  Outfit,
  Caveat,
  Fira_Code,
  Lora,
  Nunito,
  Raleway,
  Oswald,
  Dancing_Script,
  Doto,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import Script from "next/script"

const siteUrl = new URL("https://openbutton.ui")
const opengraphImageUrl = new URL("/opengraph.png", siteUrl)
const siteTitle = "OpenButton - Premium Micro-UI Components"
const siteDescription =
  "Need one beautiful button? Buy exactly what you need. Premium, production-ready React, Vue, and HTML button components from ₹20."

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "OpenButton",
  title: {
    default: siteTitle,
    template: "%s | OpenButton",
  },
  description: siteDescription,
  keywords: [
    "react components",
    "vue components",
    "tailwind buttons",
    "premium ui",
    "micro ui",
    "button marketplace",
    "web design",
    "ui kit",
    "OpenButton",
  ],
  authors: [{ name: "OpenButton Team" }],
  creator: "OpenButton",
  publisher: "OpenButton",
  category: "Design",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/logo.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "OpenButton",
    images: [
      {
        url: opengraphImageUrl,
        width: 1920,
        height: 1008,
        alt: "OpenButton premium button components",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: opengraphImageUrl,
        width: 1920,
        height: 1008,
        alt: "OpenButton premium button components",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const fontInter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})
const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const fontRoboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })
const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const fontOutfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const fontCaveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const fontFiraCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})
const fontLora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const fontNunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
const fontRaleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })
const fontOswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const fontDancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
})
const fontDoto = Doto({ subsets: ["latin"], variable: "--font-doto" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        fontInter.variable,
        fontPoppins.variable,
        fontPlayfair.variable,
        fontRoboto.variable,
        fontSpaceGrotesk.variable,
        fontOutfit.variable,
        fontCaveat.variable,
        fontFiraCode.variable,
        fontLora.variable,
        fontNunito.variable,
        fontRaleway.variable,
        fontOswald.variable,
        fontDancingScript.variable,
        fontDoto.variable,
        "font-sans"
      )}
    >
      <body>
        <div className="mx-auto max-w-[1800px]">
          <ThemeProvider defaultTheme="light" enableSystem={false}>
            <TooltipProvider delayDuration={150}>
              {children}

              <Toaster position="top-right" />
            </TooltipProvider>
          </ThemeProvider>
        </div>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
