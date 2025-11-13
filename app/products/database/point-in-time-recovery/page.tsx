"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, RotateCcw, Shield, Database, CheckCircle, History } from "lucide-react"

export default function PointInTimeRecoveryPage() {
  const features = [
    {
      icon: Clock,
      title: "Granular Recovery",
      description: "Restore your database to any point in time with second-level precision."
    },
    {
      icon: RotateCcw,
      title: "Instant Recovery",
      description: "Recover from accidental deletions, corruption, or human errors instantly."
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "All recovery operations maintain data consistency and referential integrity."
    },
    {
      icon: History,
      title: "Extended Retention",
      description: "Keep backup history for up to 30 days with configurable retention policies."
    }
  ]

  const benefits = [
    "Zero data loss recovery",
    "Point-in-time precision",
    "Automated backup scheduling",
    "Instant recovery testing",
    "Compliance-ready retention",
    "Cost-effective storage"
  ]

  const scenarios = [
    "Accidental data deletion",
    "Application bugs or corruption",
    "Security incidents",
    "Failed deployments",
    "Human error recovery",
    "Regulatory compliance"
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
                Point-in-Time Recovery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Restore Your Data Instantly
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Restore your database to any point in time with granular backup retention.
                Never lose data again with automatic, continuous backups.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Recovery Demo */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <RotateCcw className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Backup & Recovery</h3>
                <p className="text-neutral-400 mb-6">
                  Every change is automatically backed up. Restore to any second in the last 30 days.
                </p>
                <div className="bg-black rounded-lg p-4 text-left max-w-md mx-auto">
                  <div className="text-green-400 text-sm font-mono space-y-1">
                    <div>→ Incident detected at 14:32:15</div>
                    <div>→ Initiating point-in-time recovery...</div>
                    <div>→ Restoring to 14:32:10...</div>
                    <div>→ Recovery complete in 45 seconds</div>
                    <div>→ Data integrity verified: 100%</div>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recovery Capabilities</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Comprehensive backup and recovery features for complete data protection
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

        {/* Recovery Scenarios */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Recovery Scenarios</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Protect against the most common causes of data loss
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scenarios.map((scenario, index) => (
                  <div key={index} className="flex items-center bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <Database className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                    <span className="text-neutral-300">{scenario}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recovery Benefits</h2>
                <p className="text-neutral-400">
                  Peace of mind with comprehensive data protection
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
              <h2 className="text-2xl font-bold text-white mb-4">Never Lose Data Again</h2>
              <p className="text-neutral-400 mb-6">
                Get automatic backups and point-in-time recovery for complete data protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Protected Database
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Backup & Recovery Guide
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
