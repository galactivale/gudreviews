"use client"

import { motion } from "framer-motion"
import { Star, Users, TrendingUp, ShoppingCart, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Smart Review Collection",
    description: "Automatically collect and manage customer reviews across multiple platforms in one place."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Insights",
    description: "Get valuable insights into customer satisfaction and identify areas for improvement."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Analytics",
    description: "Track your business growth with detailed analytics and performance metrics."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Integration",
    description: "Seamlessly integrate with popular e-commerce platforms and marketplaces."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security and 99.9% uptime guarantee."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Powerful Features for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to collect, manage, and showcase customer reviews effectively.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 