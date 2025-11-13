"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Database, TrendingUp, Zap, Shield, Clock, CheckCircle } from "lucide-react"

export default function AutoScalingStoragePage() {
  const benefits = [
    "Zero manual intervention required",
    "Scale from MB to TB automatically",
    "No downtime during scaling",
    "Cost-effective resource usage",
    "Predictable performance",
    "Global data consistency"
  ]

  const features = [
    {
      icon: TrendingUp,
      title: "Intelligent Scaling",
      description: "AI-powered algorithms predict and scale storage based on usage patterns and growth trends."
    },
    {
      icon: Zap,
      title: "Instant Provisioning",
      description: "New storage capacity is provisioned instantly without waiting for hardware allocation."
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "All scaling operations maintain data integrity and consistency across all replicas."
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring ensures optimal storage utilization and performance."
    }
  ]

  const metrics = [
    { label: "Scaling Speed", value: "< 30 seconds" },
    { label: "Max Storage", value: "Unlimited TB" },
    { label: "Data Consistency", value: "99.999%" },
    { label: "Uptime During Scaling", value: "100%" }
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
                Auto-Scaling Storage
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Scale Storage Automatically
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Automatically scale storage from MB to TB without downtime or manual intervention.
                Focus on your application while we handle the infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00E699] mb-2">{metric.value}</div>
                  <div className="text-neutral-400 text-sm md:text-base">{metric.label}</div>
                </div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Auto-Scaling Works</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Intelligent scaling that adapts to your application's needs
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
                <p className="text-neutral-400">
                  Never worry about storage limits again
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

        {/* Scaling Demo */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Auto-Scaling in Action</h2>
                <p className="text-neutral-400">
                  Watch how our database automatically scales to handle growing data needs
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="text-center">
                  <Database className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Live Scaling Demo</h3>
                  <p className="text-neutral-400 mb-6">
                    Our auto-scaling storage grows with your data automatically. No manual intervention required.
                  </p>
                  <div className="bg-black rounded-lg p-4 text-left">
                    <div className="text-green-400 text-sm font-mono">
                      <div>→ Storage usage: 45% → Auto-scaling triggered</div>
                      <div>→ Provisioning additional 100GB...</div>
                      <div>→ Scaling complete in 15 seconds</div>
                      <div>→ Data consistency maintained: 100%</div>
                      <div>→ New storage capacity: 500GB</div>
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
              <h2 className="text-2xl font-bold text-white mb-4">Experience Auto-Scaling Storage</h2>
              <p className="text-neutral-400 mb-6">
                Start with any storage size and scale automatically as your application grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Database
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
