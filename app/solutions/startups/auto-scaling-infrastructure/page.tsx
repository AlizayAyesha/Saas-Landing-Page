"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, TrendingUp, Cpu, BarChart3, CheckCircle, Activity } from "lucide-react"

export default function AutoScalingInfrastructurePage() {
  const scalingFeatures = [
    {
      icon: TrendingUp,
      title: "Automatic Scaling",
      description: "Scale resources up or down automatically based on real-time demand and traffic patterns."
    },
    {
      icon: Cpu,
      title: "Intelligent Resource Allocation",
      description: "AI-powered resource allocation that predicts demand and optimizes performance."
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of application performance and resource utilization."
    },
    {
      icon: Activity,
      title: "Load Balancing",
      description: "Intelligent load balancing across multiple instances for optimal performance."
    }
  ]

  const benefits = [
    "Zero-downtime scaling",
    "Cost optimization through efficient resource use",
    "Automatic performance optimization",
    "Handle traffic spikes seamlessly",
    "Pay only for what you use",
    "Global load distribution"
  ]

  const scalingMetrics = [
    { label: "Scale-up Time", value: "< 30s" },
    { label: "Concurrent Users", value: "Unlimited" },
    { label: "Global Regions", value: "25+" },
    { label: "Uptime SLA", value: "99.9%" }
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/solutions/startups" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to startups
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
                Auto-Scaling Infrastructure
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Scale Automatically as You Grow
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Scale automatically as your user base grows, without worrying about infrastructure costs.
                Handle millions of users while keeping costs predictable and performance optimal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scaling Metrics */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {scalingMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00E699] mb-2">{metric.value}</div>
                  <div className="text-neutral-400 text-sm md:text-base">{metric.label}</div>
                </div>
              ))}
            </motion.div>
            </div>
          </section>

        {/* Scaling Features */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intelligent Auto-Scaling</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced scaling capabilities that grow with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {scalingFeatures.map((feature, index) => (
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

        {/* Scaling Process */}
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
                Intelligent scaling that happens automatically behind the scenes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Activity className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Monitor</h3>
                  <p className="text-neutral-400">Continuous monitoring of traffic, CPU, memory, and response times</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scale</h3>
                  <p className="text-neutral-400">Automatically add or remove resources based on demand patterns</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Optimize</h3>
                  <p className="text-neutral-400">AI-powered optimization ensures cost-effective resource allocation</p>
                </motion.div>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scaling Benefits</h2>
                <p className="text-neutral-400">
                  Grow without limits while keeping costs under control
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scaling Performance</h2>
                <p className="text-neutral-400">
                  See how our auto-scaling compares to traditional infrastructure
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-neutral-400 font-medium">Feature</th>
                        <th className="text-center py-3 px-4 text-neutral-400 font-medium">Auto-Scaling</th>
                        <th className="text-center py-3 px-4 text-neutral-400 font-medium">Manual Scaling</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Response Time</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">30s</td>
                        <td className="py-3 px-4 text-center text-neutral-400">Hours/Days</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Downtime</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">Zero</td>
                        <td className="py-3 px-4 text-center text-neutral-400">Minutes/Hours</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white">Cost Efficiency</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">95%</td>
                        <td className="py-3 px-4 text-center text-neutral-400">60%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-white">Maintenance</td>
                        <td className="py-3 px-4 text-center text-[#00E699] font-semibold">Automatic</td>
                        <td className="py-3 px-4 text-center text-neutral-400">Manual</td>
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
              <h2 className="text-2xl font-bold text-white mb-4">Scale Without Limits</h2>
              <p className="text-neutral-400 mb-6">
                Start with our auto-scaling infrastructure and grow to millions of users seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Scaling Now
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Scaling Documentation
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
