"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileCheck, Shield, Lock, Eye, CheckCircle, AlertTriangle } from "lucide-react"

export default function ComplianceReadyPage() {
  const complianceFrameworks = [
    {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      status: "Fully Compliant",
      description: "Comprehensive data protection and privacy regulation for EU citizens."
    },
    {
      name: "HIPAA",
      fullName: "Health Insurance Portability and Accountability Act",
      region: "United States",
      status: "Ready",
      description: "Healthcare data protection and patient privacy standards."
    },
    {
      name: "PCI DSS",
      fullName: "Payment Card Industry Data Security Standard",
      region: "Global",
      status: "Level 1 Compliant",
      description: "Security standards for organizations handling payment card information."
    },
    {
      name: "SOC 2",
      fullName: "System and Organization Controls 2",
      region: "Global",
      status: "Type II Certified",
      description: "Trust services criteria for security, availability, and confidentiality."
    }
  ]

  const features = [
    {
      icon: FileCheck,
      title: "Automated Compliance Monitoring",
      description: "Continuous monitoring and automated reporting for regulatory compliance."
    },
    {
      icon: Shield,
      title: "Data Retention Policies",
      description: "Configurable data retention policies with automatic cleanup and archiving."
    },
    {
      icon: Lock,
      title: "Audit Trail Access",
      description: "Comprehensive audit logs and reporting for compliance verification."
    },
    {
      icon: Eye,
      title: "Compliance Dashboards",
      description: "Real-time compliance monitoring with alerts and detailed reporting."
    }
  ]

  const benefits = [
    "GDPR, HIPAA, PCI DSS compliant",
    "Automated compliance reporting",
    "Regular security assessments",
    "Audit trail access",
    "Data retention controls",
    "Compliance monitoring"
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
                Compliance Ready
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Enterprise Compliance Built-In
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                GDPR, HIPAA, PCI DSS compliant with audit logs, data retention policies, and compliance reporting.
                Meet the strictest regulatory requirements with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <Shield className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Regulatory Compliance Framework</h3>
                <p className="text-neutral-400">
                  Comprehensive compliance across global standards with automated monitoring and reporting
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supported Compliance Frameworks</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Meet regulatory requirements across industries and regions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{framework.name}</h3>
                    <span className="text-sm text-[#00E699] font-medium bg-[#00E699]/10 px-3 py-1 rounded-full">
                      {framework.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-3">{framework.fullName}</p>
                  <p className="text-sm text-neutral-300 mb-3">{framework.description}</p>
                  <div className="text-xs text-neutral-500">Region: {framework.region}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compliance Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Tools and capabilities to maintain ongoing regulatory compliance
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compliance Benefits</h2>
                <p className="text-neutral-400">
                  Reduce compliance overhead and focus on your core business
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

        {/* Risk Assessment */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Continuous Compliance Monitoring</h2>
                <p className="text-neutral-400">
                  Proactive compliance monitoring with automated risk assessment and reporting
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-[#00E699] mr-3" />
                  <h3 className="text-lg font-semibold text-white">Automated Monitoring</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00E699] mb-2">24/7</div>
                    <div className="text-sm text-neutral-400">Continuous monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00E699] mb-2">{"< 5min"}</div>
                    <div className="text-sm text-neutral-400">Alert response time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00E699] mb-2">100%</div>
                    <div className="text-sm text-neutral-400">Automated reporting</div>
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
              <h2 className="text-2xl font-bold text-white mb-4">Get Compliance Ready</h2>
              <p className="text-neutral-400 mb-6">
                Deploy with confidence knowing you're fully compliant with global regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Compliant Deployment
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Compliance Documentation
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
