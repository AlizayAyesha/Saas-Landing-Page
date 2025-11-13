"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, BarChart3, TrendingUp, Activity, Eye, Zap, CheckCircle, PieChart } from "lucide-react"

export default function RealTimeAnalyticsPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Live Dashboards",
      description: "Real-time dashboards with automatic updates and customizable visualizations."
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Monitor query performance, throughput, and latency in real-time."
    },
    {
      icon: Activity,
      title: "Usage Analytics",
      description: "Track database usage patterns, growth trends, and optimization opportunities."
    },
    {
      icon: Eye,
      title: "Custom Metrics",
      description: "Define and monitor custom business metrics with flexible alerting."
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get immediate insights into database performance and user behavior."
    },
    {
      icon: PieChart,
      title: "Advanced Reporting",
      description: "Generate detailed reports with historical data and trend analysis."
    }
  ]

  const benefits = [
    "Real-time performance monitoring",
    "Automated alerting system",
    "Custom dashboard creation",
    "Historical data analysis",
    "Performance optimization insights",
    "Cost monitoring and alerts"
  ]

  const metrics = [
    { label: "Dashboard Updates", value: "Real-time" },
    { label: "Alert Response", value: "< 30 seconds" },
    { label: "Data Retention", value: "90 days" },
    { label: "Custom Metrics", value: "Unlimited" }
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
                Real-Time Analytics
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Monitor & Optimize in Real-Time
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Built-in monitoring and analytics to optimize performance and costs.
                Get instant insights into your database operations and user behavior.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Analytics Dashboard Preview */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="text-center mb-8">
                  <BarChart3 className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">Live Analytics Dashboard</h3>
                  <p className="text-neutral-400">
                    Monitor your database performance with real-time metrics and insights
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black rounded-lg p-4 border border-gray-700">
                    <div className="text-[#00E699] text-sm font-medium mb-2">Queries/sec</div>
                    <div className="text-2xl font-bold text-white">1,247</div>
                    <div className="text-green-400 text-sm">↑ 12% from last hour</div>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-gray-700">
                    <div className="text-[#00E699] text-sm font-medium mb-2">Avg Response Time</div>
                    <div className="text-2xl font-bold text-white">23ms</div>
                    <div className="text-green-400 text-sm">↓ 5% from last hour</div>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-gray-700">
                    <div className="text-[#00E699] text-sm font-medium mb-2">Active Connections</div>
                    <div className="text-2xl font-bold text-white">89</div>
                    <div className="text-yellow-400 text-sm">→ Stable</div>
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytics Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Comprehensive monitoring and analytics capabilities
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytics Benefits</h2>
                <p className="text-neutral-400">
                  Make data-driven decisions with comprehensive insights
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

        {/* Use Cases */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Use Cases</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                How teams use real-time analytics to improve their applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#00E699] mb-3">Performance Monitoring</h3>
                  <p className="text-neutral-400 text-sm">Track query performance and identify bottlenecks in real-time.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#00E699] mb-3">Cost Optimization</h3>
                  <p className="text-neutral-400 text-sm">Monitor usage patterns and optimize costs based on real data.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#00E699] mb-3">User Behavior Analysis</h3>
                  <p className="text-neutral-400 text-sm">Understand how users interact with your application data.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-[#00E699] mb-3">Automated Alerting</h3>
                  <p className="text-neutral-400 text-sm">Get notified instantly when performance issues arise.</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Unlock Real-Time Insights</h2>
              <p className="text-neutral-400 mb-6">
                Get comprehensive analytics and monitoring built into your database.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Analytics Database
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Analytics Documentation
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
