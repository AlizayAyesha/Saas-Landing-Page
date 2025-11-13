"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Cloud, Zap, Shield, Globe, CheckCircle } from "lucide-react"

export default function HostingPage() {
  const features = [
    {
      icon: Globe,
      title: "Global CDN",
      description: "Deliver content faster with our worldwide content delivery network."
    },
    {
      icon: Zap,
      title: "Auto-scaling compute",
      description: "Automatically scale your compute resources based on demand."
    },
    {
      icon: Cloud,
      title: "Load balancing",
      description: "Distribute traffic intelligently across multiple servers."
    },
    {
      icon: Shield,
      title: "99.9% uptime SLA",
      description: "Guaranteed high availability with enterprise-grade infrastructure."
    }
  ]

  const benefits = [
    "Global CDN included",
    "Auto-scaling compute resources",
    "Intelligent load balancing",
    "99.9% uptime SLA",
    "SSL certificates included",
    "24/7 monitoring and support"
  ]

  const hostingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: ["1GB RAM", "1 vCPU", "10GB Storage", "Global CDN", "SSL Included"],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      features: ["4GB RAM", "2 vCPUs", "50GB Storage", "Global CDN", "Auto-scaling", "Load Balancing"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: ["16GB RAM", "8 vCPUs", "200GB Storage", "Global CDN", "Auto-scaling", "Advanced Load Balancing", "Dedicated Support"],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/products" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to products
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-6">
                Cloud Hosting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Deploy and Scale Globally
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Launch your applications with our global cloud infrastructure. Experience lightning-fast
                deployment, automatic scaling, and enterprise-grade reliability.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hosting Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need for reliable, scalable application hosting
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

        {/* Pricing Plans */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Scale from startup to enterprise with flexible hosting plans
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {hostingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular ? 'border-[#00E699] ring-2 ring-[#00E699]/20' : 'border-gray-800'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#00E699] text-black px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#00E699]">{plan.price}</span>
                      <span className="text-neutral-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-300">
                        <CheckCircle className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-[#00E699] text-black hover:bg-[#00E699]/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hosting Benefits</h2>
                <p className="text-neutral-400">
                  Why developers choose our cloud hosting platform
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

        {/* CTA Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#00E699]/10 to-transparent rounded-2xl p-8 border border-[#00E699]/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Deploy?</h2>
              <p className="text-neutral-400 mb-6">
                Start with our free tier and scale as your application grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Free Trial
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Documentation
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
