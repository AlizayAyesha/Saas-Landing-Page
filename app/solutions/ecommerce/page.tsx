"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Zap, CreditCard, Package, BarChart3, CheckCircle, TrendingUp } from "lucide-react"

export default function EcommercePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "High-Traffic Handling",
      description: "Handle millions of concurrent users during peak shopping seasons with automatic scaling."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment processing with PCI DSS compliance and multiple payment gateways."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking across multiple warehouses and sales channels."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive e-commerce analytics with conversion tracking and customer insights."
    },
    {
      icon: Zap,
      title: "Fast Checkout",
      description: "Lightning-fast checkout process with cart persistence and guest checkout options."
    },
    {
      icon: TrendingUp,
      title: "Sales Optimization",
      description: "AI-powered recommendations and dynamic pricing to maximize revenue."
    }
  ]

  const benefits = [
    "Handle 100K+ concurrent users",
    "99.99% uptime during sales",
    "PCI DSS Level 1 compliance",
    "Real-time inventory sync",
    "Advanced fraud detection",
    "Multi-channel selling"
  ]

  const useCases = [
    "Flash sales and promotions",
    "Holiday shopping seasons",
    "Product launches",
    "Limited-time offers",
    "International expansion",
    "Mobile commerce"
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/solutions" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to solutions
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-6">
                For E-commerce
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Power Your Online Store
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Reliable infrastructure for modern e-commerce. Handle high traffic, process payments securely,
                and scale your business with confidence during peak seasons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start E-commerce Store
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View E-commerce Pricing
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <ShoppingCart className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Trusted by E-commerce Leaders</h3>
                <p className="text-neutral-400">
                  Powering millions of transactions and handling peak shopping seasons worldwide
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">10M+</div>
                  <div className="text-neutral-400 text-sm">Daily Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">99.99%</div>
                  <div className="text-neutral-400 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">{"< 50ms"}</div>
                  <div className="text-neutral-400 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">500K+</div>
                  <div className="text-neutral-400 text-sm">Peak Concurrent Users</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-commerce Solutions</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need to run a successful online business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors"
                >
                  <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-[#00E699]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect for High-Stakes Moments</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                When your store needs to perform at its absolute best
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <Zap className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                    <span className="text-neutral-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">E-commerce Benefits</h2>
                <p className="text-neutral-400">
                  Scale your online business with enterprise-grade reliability
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Black Friday Demo */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Black Friday Ready</h2>
                <p className="text-neutral-400">
                  See how our platform handles massive traffic spikes
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Peak Performance During Sales</h3>
                  <p className="text-neutral-400 mb-6">
                    Our auto-scaling infrastructure grows with your traffic, ensuring your store stays fast during peak shopping events.
                  </p>
                  <div className="bg-black rounded-lg p-4 text-left max-w-md mx-auto">
                    <div className="text-green-400 text-sm font-mono space-y-1">
                      <div>→ Traffic spike detected: 500K users</div>
                      <div>→ Auto-scaling initiated...</div>
                      <div>→ Resources scaled: 10x capacity</div>
                      <div>→ Response time: Maintained {"<50ms"}</div>
                      <div>→ Orders processed: 50K/hour</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#00E699]/10 to-transparent rounded-2xl p-8 border border-[#00E699]/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Launch Your E-commerce Empire</h2>
              <p className="text-neutral-400 mb-6">
                Start with our e-commerce optimized infrastructure and scale to millions of customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start E-commerce Store
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    E-commerce Guide
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
