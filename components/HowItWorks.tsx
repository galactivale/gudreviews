"use client"

import { motion } from "framer-motion"
import { Star, MessageSquare, ChartBar, Share2 } from "lucide-react"

const steps = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Collect Reviews",
    description: "Automatically gather customer reviews from various platforms and sources."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Manage Feedback",
    description: "Organize and respond to customer feedback in one centralized dashboard."
  },
  {
    icon: <ChartBar className="w-8 h-8" />,
    title: "Analyze Insights",
    description: "Get detailed analytics and insights to understand customer satisfaction."
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Showcase Success",
    description: "Display your best reviews and ratings to build trust with potential customers."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            How GudReviews Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Simple steps to transform your customer reviews into business growth
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>

            {/* Steps */}
            <div className="relative space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-semibold mb-4">
                    {index + 1}
                  </div>

                  {/* Step content */}
                  <div className="text-center">
                    <div className="flex justify-center text-green-600 mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 