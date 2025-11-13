"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Database, Zap, Shield, Globe, Clock, BarChart3, CheckCircle, Code, ArrowRight } from "lucide-react"

export default function DatabasePage() {
  const features = [
    {
      icon: Database,
      title: "Auto-Scaling Storage",
      description: "Automatically scale storage from MB to TB without downtime or manual intervention."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized queries with intelligent caching and connection pooling for maximum speed."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, SOC 2 compliance, and advanced access controls."
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Multi-region replication with automatic failover and data consistency."
    },
    {
      icon: Clock,
      title: "Point-in-Time Recovery",
      description: "Restore your database to any point in time with granular backup retention."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Built-in monitoring and analytics to optimize performance and costs."
    }
  ]

  const benefits = [
    "Zero maintenance overhead",
    "Automatic backups and recovery",
    "Horizontal and vertical scaling",
    "ACID compliance guaranteed",
    "REST and GraphQL APIs",
    "Developer-friendly SDKs"
  ]

  const specs = [
    { label: "Storage", value: "Auto-scaling (1GB - Unlimited)" },
    { label: "Connections", value: "10,000+ concurrent" },
    { label: "Latency", value: "< 10ms global average" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Backup Retention", value: "30 days" },
    { label: "Regions", value: "15+ global regions" }
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
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-6">
                Database
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Serverless Postgres Made Simple
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Experience the power of PostgreSQL without the complexity. Automatic scaling,
                backups, and high availability in a fully managed, serverless database.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Free Database
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

        {/* Features Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need for modern application development
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Database?</h2>
                <p className="text-neutral-400">
                  Built for developers who want PostgreSQL without the operational overhead
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

        {/* Technical Specs */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Specifications</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Enterprise-grade performance and reliability
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <div className="text-2xl font-bold text-[#00E699] mb-2">{spec.value}</div>
                    <div className="text-neutral-400">{spec.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Code Example */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
                <p className="text-neutral-400">
                  Connect to your database with our simple connection string
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 text-[#00E699] mr-2" />
                  <span className="text-white font-medium">Connection Example</span>
                </div>
                <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

await client.connect()

// Your queries here
const result = await client.query('SELECT * FROM users')
console.log(result.rows)`}
                  </code>
                </pre>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Database?</h2>
              <p className="text-neutral-400 mb-6">
                Start with our free tier and scale automatically as your application grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Database
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Database Pricing
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
