import type React from "react"
/**
 * ROOT LAYOUT COMPONENT
 * This is the main layout wrapper for the entire application.
 * It sets up the HTML structure, fonts, and global providers.
 */

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Load Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] })

// Metadata for the application (SEO and browser info)
export const metadata: Metadata = {
  title: "SASS Admin Dashboard",
  description: "A comprehensive admin dashboard built with Next.js and shadcn/ui",
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
        {/* Main application content */}
        {children}
      </body>
    </html>
  )
}
