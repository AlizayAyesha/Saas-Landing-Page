"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, Settings, Code, Database, CheckCircle, Plug } from "lucide-react"

export default function CustomIntegrationsPage() {
  const integrationTypes = [
    {
      icon: Database,
      title: "Database Integrations",
      description: "Connect with existing databases, data warehouses, and analytics platforms."
    },
    {
      icon: Code,
      title: "API Integrations",
      description: "REST and GraphQL API integrations with custom authentication and webhooks."
    },
    {
      icon: Settings,
      title: "System Integrations",
      description: "Integrate with ERP, CRM, and other enterprise systems via custom connectors."
    },
    {
      icon: Plug,
      title: "Third-Party Services",
      description: "Connect with payment processors, shipping providers, and other business services."
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Pre-Built Connectors",
      description: "Ready-to-use connectors for popular enterprise systems and services."
    },
    {
      icon: Code,
      title: "Custom API Development",
      description: "Custom API development and integration services tailored to your needs."
    },
    {
      icon: Settings,
      title: "Data Mapping & Transformation",
      description: "Advanced data mapping and transformation capabilities for complex integrations."
    },
    {
      icon: Database,
      title: "Real-Time Data Sync",
      description: "Real-time data synchronization with conflict resolution and error handling."
    }
  ]

  const benefits = [
    "Seamless system integration",
    "Reduced development time",
    "Automated data flows",
    "Custom API endpoints",
    "Real-time synchronization",
    "Scalable integration architecture"
  ]

  const supportedSystems = [
    "Salesforce", "SAP", "Oracle", "Microsoft Dynamics",
    "AWS Services", "Google Cloud", "Azure Services",
    "Stripe", "PayPal", "Shippo", "Twilio"
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
                Custom Integrations
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Tailored Integrations for Your Systems
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Custom integrations with your existing systems, APIs, and third-party services.
                Connect everything seamlessly with enterprise-grade integration capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Integration Overview */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <Plug className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Integration Hub</h3>
                <p className="text-neutral-400">
                  Connect all your systems, applications, and services in one unified platform
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integration Capabilities</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Comprehensive integration options for every type of system and service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {integrationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors"
                >
                  <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                    <type.icon className="h-6 w-6 text-[#00E699]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-neutral-400">{type.description}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integration Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Advanced integration capabilities designed for enterprise complexity
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

        {/* Supported Systems */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supported Systems & Services</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Pre-built connectors and integrations for popular enterprise systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {supportedSystems.map((system, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-medium text-[#00E699] bg-[#00E699]/10 rounded-lg px-3 py-2">
                        {system}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-neutral-400 text-sm">
                    And many more - custom integrations available for any system
                  </p>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integration Benefits</h2>
                <p className="text-neutral-400">
                  Streamline your operations with seamless system integrations
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

        {/* Integration Process */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integration Process</h2>
                <p className="text-neutral-400">
                  Our streamlined process ensures smooth, secure integrations
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                    <p className="text-sm text-neutral-400">Analyze your systems and integration requirements</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                    <p className="text-sm text-neutral-400">Design integration architecture and data flows</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                    <p className="text-sm text-neutral-400">Build and test custom integration solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Deployment</h3>
                    <p className="text-sm text-neutral-400">Deploy and monitor production integrations</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Connect Your Systems</h2>
              <p className="text-neutral-400 mb-6">
                Get custom integrations that seamlessly connect all your enterprise systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Integration Project
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Integration Documentation
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
