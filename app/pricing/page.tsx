"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardHoverEffect } from "@/components/card-hover-effect"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="relative py-24 md:py-32">
          {/* Grid Background */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 230, 153, 0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 230, 153, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="container relative z-10 px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 max-w-3xl mx-auto"
              >
                <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20">
                  Pricing
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Simple, Usage-Based Pricing
                </h1>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                  Start for free and scale as you grow. Pay only for what you use with our transparent pricing model.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-xl h-full">
                  <h3 className="text-xl font-bold text-white mb-2">Hobby</h3>
                  <p className="text-4xl font-bold text-white mb-4">Free</p>
                  <p className="text-neutral-400 mb-6">Perfect for getting started</p>
                  <ul className="space-y-3 text-neutral-400 mb-8 flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      1GB Storage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Shared Resources
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Community Support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Basic Analytics
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
                  >
                    Get Started Free
                  </Button>
                </CardHoverEffect>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/20 rounded-xl h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00E699] px-3 py-1 text-sm text-black font-medium">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                  <p className="text-4xl font-bold text-white mb-4">
                    ₵199<span className="text-lg font-normal text-neutral-400">/month</span>
                  </p>
                  <p className="text-neutral-400 mb-6">Best for growing teams</p>
                  <ul className="space-y-3 text-neutral-400 mb-8 flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      10GB Storage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Dedicated Resources
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Priority Support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Advanced Analytics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      API Access
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
                  >
                    Start Pro Trial
                  </Button>
                </CardHoverEffect>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <CardHoverEffect className="relative p-8 bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-xl h-full">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-4xl font-bold text-white mb-4">Custom</p>
                  <p className="text-neutral-400 mb-6">Tailored for large organizations</p>
                  <ul className="space-y-3 text-neutral-400 mb-8 flex-grow">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Unlimited Storage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Custom Resources
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      24/7 Dedicated Support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      Custom Integrations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00E699] rounded-full mr-3"></span>
                      SLA Guarantee
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-6 text-lg rounded-lg"
                  >
                    Contact Sales
                  </Button>
                </CardHoverEffect>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6 text-left">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-neutral-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-neutral-400">Yes, all paid plans come with a 14-day free trial. No credit card required to start.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-neutral-400">We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
