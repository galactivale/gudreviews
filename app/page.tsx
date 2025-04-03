"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import { motion } from "framer-motion"
import { useState } from "react"
import { Play, ChevronLeft, ChevronRight, Users, ShoppingCart, TrendingUp, Star, Plus, Minus } from "lucide-react"
import WhyReviews from "@/components/WhyReviews"
import MainDescision from "@/components/MainDescision"

// FAQ Item component with animation
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 px-4 text-left font-medium focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <Minus className="h-5 w-5 text-green-500" /> : <Plus className="h-5 w-5 text-green-500" />}
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-4"
      >
        <p className="text-gray-600 pb-4">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MainDescision />
      <WhyReviews />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      </main>
  )
}

