"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out GudReviews",
    features: [
      "Up to 100 reviews per month",
      "Basic analytics",
      "Email support",
      "1 team member",
      "Review widget"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "Best for growing businesses",
    features: [
      "Up to 1,000 reviews per month",
      "Advanced analytics",
      "Priority email support",
      "5 team members",
      "Custom review widget",
      "API access",
      "Remove branding"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "Unlimited reviews",
      "Enterprise analytics",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "Custom feature development",
      "SLA guarantee"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your business
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 bg-white rounded-2xl ${
                plan.highlighted
                  ? "ring-2 ring-green-600 shadow-xl"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-semibold ${
                    plan.highlighted
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-white text-green-600 border border-green-600 hover:bg-green-50"
                  } transition-colors`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 