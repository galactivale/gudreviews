"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`rounded-md p-1.5 ${scrolled ? 'bg-green-500' : 'bg-white/10'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            gud<span className="font-black">reviews</span>
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className={`font-semibold uppercase text-sm ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'}`} aria-label="View our features">
            Features
          </Link>
          <Link
            href="#testimonials"
            className={`font-semibold uppercase text-sm ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
            aria-label="Read customer testimonials"
          >
            Testimonials
          </Link>
          <Link
            href="#how-it-works"
            className={`font-semibold uppercase text-sm ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
            aria-label="Learn how GudReviews works"
          >
            How It Works
          </Link>
          <Link href="#faq" className={`font-semibold uppercase text-sm ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'}`} aria-label="View frequently asked questions">
            FAQ
          </Link>
        </nav>
        <Link
          href="#start-free"
          className={`px-6 py-2 font-semibold uppercase text-sm transition-colors ${scrolled ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}
          aria-label="Start your free trial"
        >
          Start Free
        </Link>
      </div>
    </header>
  )
} 