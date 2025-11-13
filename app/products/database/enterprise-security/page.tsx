"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileCheck, Key, CheckCircle } from "lucide-react"

export default function EnterpriseSecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Compliance",
      description: "Regular third-party audits ensure our security controls meet the highest standards."
    },
    {
      icon: Key,
      title: "Advanced Access Controls",
      description: "Role-based access control (RBAC) with fine-grained permissions and audit logging."
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Continuous security monitoring with automated threat detection and response."
    },
    {
      icon: FileCheck,
      title: "Compliance Certifications",
      description: "GDPR, HIPAA, PCI DSS compliant with regular security assessments and reporting."
    }
  ]

  const benefits = [
    "Bank-grade encryption standards",
    "Zero-trust security model",
    "Automated security patching",
    "Comprehensive audit trails",
    "Multi-factor authentication",
    "Regular security assessments"
  ]

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "HIPAA", status: "Ready" },
    { name: "PCI DSS", status: "Level 1" }
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
                Enterprise Security
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Bank-Grade Security for Your Data
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                End-to-end encryption, SOC 2 compliance, and advanced access controls.
                Your data is protected by enterprise-grade security measures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Multiple layers of protection to keep your data safe and compliant
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => (
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

        {/* Certifications */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Meet the highest standards for data security and regulatory compliance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 text-center">
                    <Shield className="h-8 w-8 text-[#00E699] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <span className="text-sm text-[#00E699] font-medium">{cert.status}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Benefits</h2>
                <p className="text-neutral-400">
                  Enterprise-grade protection without the complexity
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
              <h2 className="text-2xl font-bold text-white mb-4">Secure Your Data Today</h2>
              <p className="text-neutral-400 mb-6">
                Get enterprise-grade security with automatic compliance and monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Secure Database
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Security Documentation
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
