"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Database, Zap, Shield, BarChart3, Cloud, Cpu, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: Database,
      title: "Database",
      description: "Serverless Postgres with automatic scaling, backups, and high availability.",
      features: [
        "Auto-scaling storage",
        "Point-in-time recovery",
        "Multi-region replication",
        "Advanced query optimization"
      ],
      href: "/products/database"
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Deploy and scale applications with our global cloud infrastructure.",
      features: [
        "Global CDN",
        "Auto-scaling compute",
        "Load balancing",
        "99.9% uptime SLA"
      ],
      href: "/products/hosting"
    },
    {
      icon: Zap,
      title: "API Gateway",
      description: "Secure and scalable API management with built-in monitoring and analytics.",
      features: [
        "Rate limiting",
        "Request transformation",
        "Real-time monitoring",
        "API versioning"
      ],
      href: "/products/api-gateway"
    },
    {
      icon: Shield,
      title: "Security Suite",
      description: "Comprehensive security tools to protect your applications and data.",
      features: [
        "DDoS protection",
        "Web application firewall",
        "SSL/TLS certificates",
        "Security monitoring"
      ],
      href: "/products/security"
    },
    {
      icon: BarChart3,
      title: "Analytics Platform",
      description: "Real-time analytics and insights to understand your application performance.",
      features: [
        "Real-time dashboards",
        "Custom metrics",
        "Performance monitoring",
        "Alerting system"
      ],
      href: "/products/analytics"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Run compute workloads closer to your users with our edge network.",
      features: [
        "Global edge locations",
        "Low latency",
        "Serverless functions",
        "Edge caching"
      ],
      href: "/products/edge"
    }
  ]

  const stats = [
    { number: "500M+", label: "API Requests/Month" },
    { number: "<50ms", label: "Global Latency" },
    { number: "99.99%", label: "Platform Uptime" },
    { number: "100+", label: "Integrations" }
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-6">
                Products
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Powerful Products for Modern Applications
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Everything you need to build, deploy, and scale applications. From databases to edge computing,
                our products work seamlessly together to power your next big idea.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00E699] mb-2">{stat.number}</div>
                  <div className="text-neutral-400 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={product.href}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-all duration-300 h-full hover:transform hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-[#00E699]/10 rounded-lg mr-4">
                          <product.icon className="h-6 w-6 text-[#00E699]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      </div>
                      <p className="text-neutral-400 mb-6">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-neutral-500 flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#00E699] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-[#00E699] font-medium group-hover:text-[#00E699]/80 transition-colors">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Products Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Our Products?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Seamlessly Integrated</h3>
                  <p className="text-neutral-400">All products work together out of the box, eliminating integration headaches and reducing development time.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Developer-First</h3>
                  <p className="text-neutral-400">Built by developers for developers with comprehensive APIs, SDKs, and extensive documentation.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Enterprise Ready</h3>
                  <p className="text-neutral-400">Production-ready with enterprise-grade security, compliance, and support for mission-critical applications.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Cost Effective</h3>
                  <p className="text-neutral-400">Pay only for what you use with transparent pricing and no hidden fees or long-term contracts.</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-neutral-400 mb-6">
                Start with a free account and explore all our products. Scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                    Start Free Trial
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-lg transition-colors">
                    View Pricing
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
