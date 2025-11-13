"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Book, Code, Zap, Shield, Users, Database } from "lucide-react"

export default function DocsPage() {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      items: [
        "Quick Start Guide",
        "Installation",
        "Configuration",
        "First Project"
      ]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples",
      items: [
        "REST API",
        "GraphQL API",
        "SDK Libraries",
        "Authentication"
      ]
    },
    {
      icon: Database,
      title: "Database",
      description: "Database setup, migration, and management",
      items: [
        "Database Setup",
        "Migrations",
        "Backup & Recovery",
        "Performance Tuning"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      description: "Security best practices and compliance",
      items: [
        "Authentication",
        "Authorization",
        "Data Encryption",
        "Compliance"
      ]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimize your application for speed and scale",
      items: [
        "Caching Strategies",
        "Database Optimization",
        "CDN Setup",
        "Monitoring"
      ]
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborate effectively with your team",
      items: [
        "User Roles",
        "Permissions",
        "Team Workspaces",
        "Billing & Usage"
      ]
    }
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
                Documentation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Developer Documentation
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Everything you need to build, deploy, and scale applications with our platform.
                From quick starts to advanced integrations.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder:text-neutral-500 focus:border-[#00E699] focus:ring-[#00E699] focus:outline-none"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                    ⌘K
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-[#00E699]/10 rounded-lg mr-3">
                        <section.icon className="h-6 w-6 text-[#00E699]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                    </div>
                    <p className="text-neutral-400 mb-6">{section.description}</p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="text-sm text-neutral-500 hover:text-[#00E699] cursor-pointer transition-colors">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-[#00E699]/30 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium mb-2">Changelog</h3>
                  <p className="text-sm text-neutral-400">Latest updates and releases</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-[#00E699]/30 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium mb-2">Status Page</h3>
                  <p className="text-sm text-neutral-400">System status and incidents</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-[#00E699]/30 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium mb-2">Community</h3>
                  <p className="text-sm text-neutral-400">Join discussions and get help</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-[#00E699]/30 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium mb-2">Support</h3>
                  <p className="text-sm text-neutral-400">Contact our support team</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-neutral-400 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                  Contact Support
                </button>
                <button className="border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-lg transition-colors">
                  Join Community
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
