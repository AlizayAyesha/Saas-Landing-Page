"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Users, Zap, Globe, Lock, Headphones, CheckCircle, ArrowRight } from "lucide-react"

export default function EnterprisePage() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 Type II compliance, end-to-end encryption, and advanced threat protection."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 dedicated support team with enterprise account managers and technical specialists."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Guaranteed 99.9% uptime SLA with global CDN, auto-scaling, and performance monitoring."
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment with data residency options and compliance with regional regulations."
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "GDPR, HIPAA, PCI DSS compliant with audit logs, data retention policies, and compliance reporting."
    },
    {
      icon: Headphones,
      title: "Custom Integrations",
      description: "Tailored integrations with your existing systems, APIs, and third-party services."
    }
  ]

  const benefits = [
    "Unlimited storage and compute resources",
    "Custom SLA agreements",
    "Dedicated infrastructure",
    "Advanced analytics and reporting",
    "Priority feature requests",
    "On-premise deployment options"
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
                Enterprise Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Scale Your Organization with Confidence
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Enterprise-grade solutions designed for large organizations. Get dedicated support,
                custom integrations, and the reliability your business demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Contact Sales
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Pricing
                  </button>
                </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need to run mission-critical applications at scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const getSlug = (title: string) => {
                  return title.toLowerCase().replace(/\s+/g, '-')
                }

                return (
                  <Link key={feature.title} href={`/solutions/enterprise/${getSlug(feature.title)}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors cursor-pointer group"
                    >
                      <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                        <feature.icon className="h-6 w-6 text-[#00E699]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00E699] transition-colors">{feature.title}</h3>
                      <p className="text-neutral-400">{feature.description}</p>
                      <div className="mt-4 flex items-center text-[#00E699] text-sm font-medium">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Enterprise?</h2>
                <p className="text-neutral-400">
                  Get the features and support your organization needs to succeed
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

        {/* Case Studies Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Enterprise Leaders</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                See how leading organizations are transforming their operations with our platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-[#00E699] mb-2">500K+</div>
                <div className="text-neutral-400 mb-4">Daily active users</div>
                <p className="text-sm text-neutral-500">
                  "Our platform handles millions of requests daily with zero downtime."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-[#00E699] mb-2">99.99%</div>
                <div className="text-neutral-400 mb-4">Uptime achieved</div>
                <p className="text-sm text-neutral-500">
                  "Reliability that our customers can depend on for critical operations."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-[#00E699] mb-2">24/7</div>
                <div className="text-neutral-400 mb-4">Support coverage</div>
                <p className="text-sm text-neutral-500">
                  "Round-the-clock support ensures we're always here when you need us."
                </p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale?</h2>
              <p className="text-neutral-400 mb-6">
                Let's discuss how our enterprise solutions can help transform your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Schedule Demo
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Enterprise Pricing
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
