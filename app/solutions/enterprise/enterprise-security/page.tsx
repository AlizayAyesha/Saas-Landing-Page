"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileCheck, Key, CheckCircle, AlertTriangle } from "lucide-react"

export default function EnterpriseSecurityPage() {
  const securityLayers = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit."
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Role-based access control (RBAC) with fine-grained permissions and MFA."
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring with automated threat detection and response."
    },
    {
      icon: FileCheck,
      title: "Compliance Auditing",
      description: "Comprehensive audit logs and automated compliance reporting."
    }
  ]

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", description: "Security, availability, and confidentiality" },
    { name: "ISO 27001", status: "Certified", description: "Information security management" },
    { name: "GDPR", status: "Compliant", description: "European data protection regulation" },
    { name: "HIPAA", status: "Ready", description: "Healthcare data protection" }
  ]

  const securityFeatures = [
    "End-to-end encryption",
    "Multi-factor authentication",
    "Zero-trust architecture",
    "Automated security patching",
    "Advanced threat detection",
    "Regular security assessments"
  ]

  const threatProtection = [
    "DDoS attack mitigation",
    "SQL injection prevention",
    "Cross-site scripting (XSS) protection",
    "Man-in-the-middle attack prevention",
    "Brute force attack protection",
    "Malware scanning and removal"
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
                Enterprise Security
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Bank-Grade Security for Enterprise Data
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                SOC 2 Type II compliance with end-to-end encryption and advanced threat protection.
                Enterprise-grade security that meets the highest industry standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Overview */}
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
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Layer Security Architecture</h3>
                <p className="text-neutral-400">
                  Defense in depth with multiple security layers protecting your data at every level
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Layers</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Comprehensive protection across all aspects of your infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors"
                >
                  <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                    <layer.icon className="h-6 w-6 text-[#00E699]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{layer.title}</h3>
                  <p className="text-neutral-400">{layer.description}</p>
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
                Meet the strictest regulatory requirements with our certified security framework
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <div className="flex items-center mb-3">
                      <FileCheck className="h-6 w-6 text-[#00E699] mr-3" />
                      <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    </div>
                    <div className="text-sm text-[#00E699] font-medium mb-2">{cert.status}</div>
                    <p className="text-sm text-neutral-400">{cert.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </section>

        {/* Threat Protection */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Threat Protection</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Proactive defense against modern cyber threats and attack vectors
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-[#00E699] mr-3" />
                  <h3 className="text-lg font-semibold text-white">Protected Against:</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {threatProtection.map((threat, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">{threat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Features</h2>
                <p className="text-neutral-400">
                  Enterprise-grade security features that protect your mission-critical applications
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">Secure Your Enterprise</h2>
              <p className="text-neutral-400 mb-6">
                Get enterprise-grade security with SOC 2 compliance and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Secure Enterprise
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
