import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const WhyReviews = () => {

    
  const [scrolled, setScrolled] = useState(false)
const [currentSlide, setCurrentSlide] = useState(0)
const totalSlides = 5
const autoPlayInterval = useRef<NodeJS.Timeout | null>(null)

// Update scrolled state based on scroll position
useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [scrolled])
    const handleMouseEnter = () => {
        if (autoPlayInterval.current) {
          clearInterval(autoPlayInterval.current)
        }
      }
      
      const handleMouseLeave = () => {
        autoPlayInterval.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 5000)
      }
      
      // Manual navigation
      const goToSlide = (index: number) => {
        setCurrentSlide(index)
      }
      
      const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
      }
      
      const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }
  return (
    <div>
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                  Why Reviews Matter
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-basier">Why Google Reviews Matter</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Google Reviews are more than just feedback—they're a powerful business growth engine that directly impacts your visibility, credibility, and revenue.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  {/* Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg">Revenue Impact</h4>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-green-600">28%</span>
                        <span className="text-gray-500">more revenue</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Businesses with 4.5+ stars earn significantly more than competitors</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg">Consumer Trust</h4>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-blue-600">90%</span>
                        <span className="text-gray-500">read reviews</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Consumers read online reviews before visiting a business</p>
                    </motion.div>
                  </div>
                  
                  {/* Key Points */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-500 text-white p-2 rounded-full mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">SEO Boost</h4>
                        <p className="text-gray-600">Google reviews directly impact your local SEO rankings, making you more visible to potential customers</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-500 text-white p-2 rounded-full mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Social Proof</h4>
                        <p className="text-gray-600">Positive reviews build trust and credibility, making potential customers more likely to choose your business</p>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-500 text-white p-2 rounded-full mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Customer Insights</h4>
                        <p className="text-gray-600">Reviews provide valuable feedback to help you improve your products and services</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Image Carousel with Enhanced Mobile Experience */}
                  <div 
                    className="relative overflow-hidden rounded-xl shadow-xl h-[400px] md:h-[500px]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Carousel Images */}
                        {[
                          { src: "/images/carwash.jpg", alt: "GudReviews dashboard showing review analytics" },
                          { src: "/images/dashboard-1.jpg", alt: "GudReviews mobile app interface" },
                          { src: "/images/dashboard-2.jpg", alt: "GudReviews review management tools" },
                          { src: "/images/dashboard-3.jpg", alt: "GudReviews customer feedback dashboard" },
                          { src: "/images/dashboard-4.jpg", alt: "GudReviews review response templates" }
                        ].map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: currentSlide === index ? 1 : 0,
                              zIndex: currentSlide === index ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              priority={index === 0}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Carousel Navigation Dots - Enhanced for Mobile */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                      {[...Array(totalSlides)].map((_, index) => (
                        <motion.button
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => goToSlide(index)}
                          aria-label={`View slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Carousel Controls - Enhanced for Mobile */}
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black/30 text-white p-2 rounded-r-lg backdrop-blur-sm md:p-3"
                        onClick={goToPrevSlide}
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                      </motion.button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black/30 text-white p-2 rounded-l-lg backdrop-blur-sm md:p-3"
                        onClick={goToNextSlide}
                        aria-label="Next slide"
                      >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                      </motion.button>
                    </div>
                    
                    {/* Slide Counter - New Addition */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm z-10">
                      {currentSlide + 1}/{totalSlides}
                    </div>
                  </div>
                  
                  {/* Infographic Elements - New Addition */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold">4.8/5</div>
                        <div className="text-xs text-gray-500">Average Rating</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold">+127%</div>
                        <div className="text-xs text-gray-500">Review Growth</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Mobile-Only Stats - New Addition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="grid grid-cols-2 gap-4 mt-8 md:hidden"
              >
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <div className="text-2xl font-bold text-green-600">4.8/5</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md text-center">
                  <div className="text-2xl font-bold text-blue-600">+127%</div>
                  <div className="text-sm text-gray-600">Review Growth</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default WhyReviews

