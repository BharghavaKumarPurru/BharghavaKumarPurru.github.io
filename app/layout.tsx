import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bharghava Kumar Purru - Netflix Style Portfolio",
  description:
    "A modern, interactive portfolio website featuring a Netflix-inspired design with personalized content for different viewer personas.",
  keywords: ["portfolio", "developer", "next.js", "react", "netflix", "bharghava kumar purru"],
  authors: [{ name: "Bharghava Kumar Purru" }],
  creator: "Bharghava Kumar Purru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bharghavakumarpurru.github.io",
    title: "Bharghava Kumar Purru - Netflix Style Portfolio",
    description:
      "A modern, interactive portfolio website featuring a Netflix-inspired design with personalized content for different viewer personas.",
    siteName: "Bharghava Kumar Purru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharghava Kumar Purru - Netflix Style Portfolio",
    description:
      "A modern, interactive portfolio website featuring a Netflix-inspired design with personalized content for different viewer personas.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
