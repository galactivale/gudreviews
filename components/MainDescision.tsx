import { motion } from 'framer-motion'
import { Star, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MainDescision = () => {
  return (
    <>
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
             

              {/* Main Infographic */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-green-500 text-white text-5xl md:text-7xl font-bold px-6 py-4 rounded-xl mb-6"
                      >
                        93%
                      </motion.div>
                      <h4 className="text-2xl md:text-3xl font-bold mb-4">
                        of customers make their purchase decision based on reviews
                      </h4>
                      <p className="text-gray-600 text-lg mb-6">
                        Reviews have become the most influential factor in consumer purchase decisions, outranking
                        price, brand name, and recommendations from friends.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href="#start-free"
                          className="bg-green-500 text-white px-8 py-3 font-semibold uppercase text-sm hover:bg-green-600 transition-colors inline-block rounded-md"
                          aria-label="Start boosting your reviews today"
                        >
                          Boost Your Reviews Today
                        </Link>
                      </motion.div>
                    </div>

                    <div className="relative">
                      <div className="aspect-square relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full max-w-md">
                            <div className="relative w-full h-full">
                              {/* Circular Progress */}
                              <motion.svg
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                viewBox="0 0 100 100"
                                className="w-full h-full"
                              >
                                <circle cx="50" cy="50" r="45" fill="#f3f4f6" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                                <motion.circle
                                  initial={{ strokeDashoffset: 283 }}
                                  whileInView={{ strokeDashoffset: 20 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1.5, delay: 0.3 }}
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  fill="none"
                                  stroke="#22c55e"
                                  strokeWidth="8"
                                  strokeDasharray="283"
                                  strokeDashoffset="20"
                                  transform="rotate(-90 50 50)"
                                />
                              </motion.svg>

                              {/* Icons in Circle */}
                              <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                              >
                                <Star className="h-8 w-8 text-yellow-400" />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                              >
                                <ShoppingCart className="h-8 w-8 text-green-500" />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                              >
                                <TrendingUp className="h-8 w-8 text-blue-500" />
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                              >
                                <Users className="h-8 w-8 text-purple-500" />
                              </motion.div>

                              {/* Center Content */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <div className="text-center">
                                  <div className="text-4xl font-bold text-gray-800">93%</div>
                                  <div className="text-sm text-gray-500">Purchase Decisions</div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                      <div className="text-2xl font-bold text-green-500 mb-1">87%</div>
                      <div className="text-sm">Trust online reviews as much as personal recommendations</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                      <div className="text-2xl font-bold text-green-500 mb-1">68%</div>
                      <div className="text-sm">Form an opinion after reading just 1-6 reviews</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                      <div className="text-2xl font-bold text-green-500 mb-1">3.3x</div>
                      <div className="text-sm">More likely to contact businesses with reviews</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white p-4 rounded-lg shadow-md text-center"
                    >
                      <div className="text-2xl font-bold text-green-500 mb-1">71%</div>
                      <div className="text-sm">More comfortable buying from businesses with reviews</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  )
}

export default MainDescision
