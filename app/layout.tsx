import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "X6AA - Professional Xbox Optimization Services",
  description:
    "Enhance Xbox with professional optimization services. Boost followers, secure rare gamertags, and elevate your gaming presence with trusted tools.",
  generator: "X6AA",
  keywords: "Xbox, gaming, followers, gamertags, Discord bots, GTA cash, Forza credits, Xbox optimization",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
