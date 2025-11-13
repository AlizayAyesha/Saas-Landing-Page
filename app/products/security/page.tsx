"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  const features = [
    {
      icon: Shield,
      title: "DDoS protection",
      description: "Advanced DDoS protection to keep your applications safe."
    },
    {
      icon: Lock,
      title: "Web application firewall",
      description: "Comprehensive WAF to block malicious traffic and attacks."
    },
    {
      icon: Eye,
      title: "SSL/TLS certificates",
      description: "Free SSL certificates with automatic renewal."
    },
    {
      icon: Shield,
      title: "Security monitoring",
      description: "24/7 security monitoring and threat detection."
    }
  ]

  const benefits = [
    "Advanced DDoS protection",
    "Web application firewall",
    "Free SSL/TLS certificates",
    "Security monitoring",
    "Threat intelligence",
    "Compliance support"
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/products" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to products
            </Link>
          </div>
        </div>

        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-6">
                Security Suite
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Comprehensive Security Tools
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Protect your applications and data with our comprehensive security tools.
                Enterprise-grade security made simple.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced security capabilities to protect your applications
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

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Benefits</h2>
                <p className="text-neutral-400">
                  Why organizations trust our security solutions
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

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#00E699]/10 to-transparent rounded-2xl p-8 border border-[#00E699]/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Secure Your Applications</h2>
              <p className="text-neutral-400 mb-6">
                Protect your applications with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Get Started
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Security Docs
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
