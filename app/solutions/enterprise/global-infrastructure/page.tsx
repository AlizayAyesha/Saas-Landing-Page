"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Globe, MapPin, Zap, Shield, CheckCircle, Cloud } from "lucide-react"

export default function GlobalInfrastructurePage() {
  const regions = [
    { name: "North America", locations: ["US East (N. Virginia)", "US West (Oregon)", "Canada Central"], latency: "< 10ms" },
    { name: "Europe", locations: ["EU West (Ireland)", "EU Central (Frankfurt)", "UK South (London)"], latency: "< 15ms" },
    { name: "Asia Pacific", locations: ["Asia East (Singapore)", "Asia Southeast (Sydney)", "Japan East (Tokyo)"], latency: "< 20ms" }
  ]

  const features = [
    {
      icon: Globe,
      title: "Multi-Region Deployment",
      description: "Deploy your applications across multiple geographic regions for maximum availability."
    },
    {
      icon: Zap,
      title: "Global CDN Integration",
      description: "Seamless integration with global content delivery networks for optimal performance."
    },
    {
      icon: Shield,
      title: "Data Residency Compliance",
      description: "Choose specific regions to comply with data residency and sovereignty requirements."
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Support",
      description: "Deploy across multiple cloud providers and on-premises infrastructure."
    }
  ]

  const benefits = [
    "Global low-latency access",
    "99.999% regional availability",
    "Data residency compliance",
    "Automatic regional failover",
    "Multi-cloud deployment",
    "Regulatory compliance"
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/solutions/enterprise" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to enterprise
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
                Global Infrastructure
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Worldwide Infrastructure for Global Scale
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Multi-region deployment with data residency options and compliance with regional regulations.
                Serve your global users with unmatched performance and reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Map */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <div className="text-center mb-8">
                  <Globe className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">25+ Global Regions</h3>
                  <p className="text-neutral-400">
                    Deploy your applications closer to your users for optimal performance worldwide
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {regions.map((region, index) => (
                    <div key={index} className="bg-black rounded-lg p-6 border border-gray-700">
                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-[#00E699] mr-2" />
                        <h4 className="text-lg font-semibold text-white">{region.name}</h4>
                      </div>
                      <div className="text-sm text-[#00E699] font-medium mb-3">Latency: {region.latency}</div>
                      <ul className="text-sm text-neutral-400 space-y-1">
                        {region.locations.map((location, locIndex) => (
                          <li key={locIndex}>• {location}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Global Infrastructure Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced global deployment capabilities for enterprise-scale applications
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Global Benefits</h2>
                <p className="text-neutral-400">
                  Scale globally with confidence and compliance
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

        {/* Compliance Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Data Residency & Compliance</h2>
                <p className="text-neutral-400">
                  Meet regional data residency requirements and compliance standards
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#00E699] mb-4">Regional Compliance</h3>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      <li>• GDPR (European Union)</li>
                      <li>• CCPA (California)</li>
                      <li>• PIPEDA (Canada)</li>
                      <li>• PDPA (Singapore)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00E699] mb-4">Data Sovereignty</h3>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      <li>• Choose data storage regions</li>
                      <li>• Regional data isolation</li>
                      <li>• Compliance reporting</li>
                      <li>• Audit trail access</li>
                    </ul>
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
              <h2 className="text-2xl font-bold text-white mb-4">Deploy Globally Today</h2>
              <p className="text-neutral-400 mb-6">
                Scale your applications worldwide with our global infrastructure and compliance support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Global Deployment
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Global Infrastructure Guide
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
