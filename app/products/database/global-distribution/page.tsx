"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Globe, Zap, Shield, Clock, CheckCircle, MapPin } from "lucide-react"

export default function GlobalDistributionPage() {
  const regions = [
    { name: "North America", locations: ["US East", "US West", "Canada"] },
    { name: "Europe", locations: ["EU West", "EU Central", "UK South"] },
    { name: "Asia Pacific", locations: ["Asia East", "Asia Southeast", "Japan East"] }
  ]

  const features = [
    {
      icon: Globe,
      title: "Multi-Region Replication",
      description: "Automatic data replication across multiple geographic regions for high availability."
    },
    {
      icon: Zap,
      title: "Automatic Failover",
      description: "Instant failover to healthy regions during outages with zero data loss."
    },
    {
      icon: Clock,
      title: "Low Latency Access",
      description: "Serve users from the closest region for optimal performance worldwide."
    },
    {
      icon: Shield,
      title: "Data Consistency",
      description: "Strong consistency guarantees across all regions with conflict resolution."
    }
  ]

  const benefits = [
    "99.999% uptime SLA globally",
    "Sub-50ms latency worldwide",
    "Automatic regional failover",
    "Data residency compliance",
    "Global CDN integration",
    "Multi-region backup"
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/products/database" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to database
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
                Global Distribution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Worldwide Data Distribution
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Multi-region replication with automatic failover and data consistency.
                Serve your global users with unmatched performance and reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Global Map Visualization */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <Globe className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">15+ Global Regions</h3>
                <p className="text-neutral-400">
                  Your data is automatically replicated across multiple continents for maximum availability
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regions.map((region, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <MapPin className="h-6 w-6 text-[#00E699] mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-3">{region.name}</h4>
                    <ul className="text-sm text-neutral-400 space-y-1">
                      {region.locations.map((location, locIndex) => (
                        <li key={locIndex}>• {location}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Global Distribution Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced replication and failover capabilities for global scale
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
                  Scale globally with confidence and performance
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
              <h2 className="text-2xl font-bold text-white mb-4">Go Global Today</h2>
              <p className="text-neutral-400 mb-6">
                Deploy your database worldwide with automatic replication and failover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Global Database
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Global Distribution Guide
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
