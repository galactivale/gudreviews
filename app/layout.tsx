import type React from "react"
import "./globals.css"
import { Roboto } from "next/font/google"
import type { Metadata } from "next"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "GudReviews - Effortlessly Get More Google Reviews",
  description:
    "Start crushing your competitors on Google and increase sales with GudReviews - the #1 platform for Google review management.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}



import './globals.css'