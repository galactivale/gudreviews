"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What is GudReviews?",
    answer: "GudReviews is a comprehensive review management platform that helps businesses collect, manage, and showcase customer reviews across multiple platforms. It provides tools for automated review collection, analytics, and customer feedback management."
  },
  {
    question: "How does the review collection work?",
    answer: "Our platform automatically collects reviews from various sources including Google, Facebook, Trustpilot, and more. We also provide customizable review request templates and automation tools to help you gather more reviews from your customers."
  },
  {
    question: "Can I respond to reviews from your platform?",
    answer: "Yes! GudReviews provides a centralized dashboard where you can view and respond to all your reviews across different platforms. This helps you maintain consistent communication with your customers and manage your online reputation effectively."
  },
  {
    question: "What analytics and insights do you provide?",
    answer: "We offer comprehensive analytics including sentiment analysis, trend tracking, competitor benchmarking, and detailed performance metrics. These insights help you understand customer satisfaction levels and identify areas for improvement."
  },
  {
    question: "Is there a limit to how many reviews I can collect?",
    answer: "The number of reviews you can collect depends on your plan. Our Starter plan includes up to 100 reviews per month, Pro plan allows up to 1,000 reviews, and Enterprise plan offers unlimited review collection."
  },
  {
    question: "Can I integrate GudReviews with my existing systems?",
    answer: "Yes, GudReviews offers various integration options including API access, webhooks, and direct integrations with popular e-commerce platforms and CRM systems. Custom integrations are available for Enterprise customers."
  }
]

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

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Everything you need to know about GudReviews
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-xl shadow-sm"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 