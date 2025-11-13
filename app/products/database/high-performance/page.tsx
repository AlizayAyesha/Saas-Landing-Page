"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, Cpu, Database, BarChart3, CheckCircle, TrendingUp } from "lucide-react"

export default function HighPerformancePage() {
  const optimizations = [
    {
      icon: Cpu,
      title: "Query Optimization",
      description: "Advanced query planning and execution with intelligent indexing and caching strategies."
    },
    {
      icon: Database,
      title: "Connection Pooling",
      description: "Efficient connection management with automatic pooling and load balancing."
    },
    {
      icon: BarChart3,
      title: "Intelligent Caching",
      description: "Multi-level caching system with predictive algorithms for frequently accessed data."
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "Real-time performance metrics and automated optimization recommendations."
    }
  ]

  const benefits = [
    "Sub-millisecond query response times",
    "99.9% query success rate",
    "Automatic performance optimization",
    "Intelligent resource allocation",
    "Real-time performance insights",
    "Predictive scaling capabilities"
  ]

  const metrics = [
    { label: "Average Query Time", value: "< 5ms" },
    { label: "Throughput", value: "100K QPS" },
    { label: "Cache Hit Rate", value: "95%" },
    { label: "Concurrent Users", value: "10,000+" }
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
                High Performance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Lightning Fast Performance
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Optimized queries with intelligent caching and connection pooling for maximum speed.
                Experience sub-millisecond response times at any scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
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

        {/* Optimization Features */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Performance Optimizations</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced techniques that deliver exceptional database performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {optimizations.map((optimization, index) => (
                <motion.div
                  key={optimization.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors"
                >
                  <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                    <optimization.icon className="h-6 w-6 text-[#00E699]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{optimization.title}</h3>
                  <p className="text-neutral-400">{optimization.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Performance Benefits</h2>
                <p className="text-neutral-400">
                  Experience unmatched speed and reliability
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

        {/* Performance Comparison */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Performance Comparison</h2>
                <p className="text-neutral-400">
                  See how our database outperforms traditional solutions
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-neutral-400 font-medium">Metric</th>
                        <th className="text-center py-3 px-4 text-neutral-400 font-medium">Our Database</th>
                        <th className="text-center py-3 px-4 text-neutral-400 font-medium">Traditional RDBMS</th>
                        <th className="text-center py-3 px-4 text-neutral-400 font-medium">NoSQL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Query Response Time</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">{"< 5ms"}</td>
                        <td className="py-3 px-4 text-center text-neutral-400">50-200ms</td>
                        <td className="py-3 px-4 text-center text-neutral-400">10-50ms</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Concurrent Connections</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">10,000+</td>
                        <td className="py-3 px-4 text-center text-neutral-400">100-500</td>
                        <td className="py-3 px-4 text-center text-neutral-400">1,000-5,000</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Auto-Scaling</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">✓ Instant</td>
                        <td className="py-3 px-4 text-center text-neutral-400">Manual</td>
                        <td className="py-3 px-4 text-center text-neutral-400">Limited</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Setup Time</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">2 minutes</td>
                        <td className="py-3 px-4 text-center text-neutral-400">2-4 weeks</td>
                        <td className="py-3 px-4 text-center text-neutral-400">1-2 days</td>
                      </tr>
                    </tbody>
                  </table>
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
              <h2 className="text-2xl font-bold text-white mb-4">Experience High Performance</h2>
              <p className="text-neutral-400 mb-6">
                Get lightning-fast queries and unmatched reliability for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Database
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Performance Guide
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
