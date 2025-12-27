import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

/* ==============================
   METADATA (SEO)
============================== */
export const metadata: Metadata = {
  title: "Vishal | Cybersecurity Portfolio",
  description:
    "Cinematic cybersecurity portfolio showcasing skills, projects, research, and experience in cyber defense and security operations.",
}

/* ==============================
   VIEWPORT (MOBILE FIX)
============================== */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-black
          text-white
          antialiased
          overflow-x-hidden
        `}
      >
        {/* Global Header (hidden automatically on Home) */}
        <Header />

        {/* Page Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
