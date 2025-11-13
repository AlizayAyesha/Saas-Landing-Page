"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Heart, Shield, Lock, Users, FileCheck, Activity, CheckCircle, Stethoscope } from "lucide-react"

export default function HealthcarePage() {
  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Full HIPAA compliance with secure data handling, audit trails, and regulatory reporting."
    },
    {
      icon: Lock,
      title: "Patient Data Security",
      description: "End-to-end encryption for sensitive patient information with advanced access controls."
    },
    {
      icon: Users,
      title: "Telemedicine Support",
      description: "Real-time communication infrastructure for virtual consultations and remote monitoring."
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting for healthcare regulations worldwide."
    },
    {
      icon: Activity,
      title: "Health Data Analytics",
      description: "Advanced analytics for patient outcomes, treatment effectiveness, and operational insights."
    },
    {
      icon: Heart,
      title: "Critical Care Systems",
      description: "Reliable infrastructure for life-critical applications with 99.999% uptime guarantees."
    }
  ]

  const benefits = [
    "HIPAA and GDPR compliant",
    "End-to-end data encryption",
    "Real-time patient monitoring",
    "Secure telemedicine platform",
    "Advanced health analytics",
    "Regulatory reporting automation"
  ]

  const useCases = [
    "Electronic health records (EHR)",
    "Telemedicine platforms",
    "Medical imaging systems",
    "Patient monitoring apps",
    "Clinical trial management",
    "Healthcare analytics"
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <Link href="/solutions" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to solutions
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
                For Healthcare
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Secure and Compliant Healthcare Solutions
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                HIPAA-compliant infrastructure for healthcare providers. Secure patient data,
                telemedicine support, and regulatory compliance built into every solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Healthcare Solution
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    HIPAA Compliance Guide
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <Stethoscope className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Trusted by Healthcare Providers</h3>
                <p className="text-neutral-400">
                  Powering critical healthcare applications with the highest standards of security and compliance
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">500+</div>
                  <div className="text-neutral-400 text-sm">Healthcare Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">99.999%</div>
                  <div className="text-neutral-400 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">HIPAA</div>
                  <div className="text-neutral-400 text-sm">Fully Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00E699] mb-2">24/7</div>
                  <div className="text-neutral-400 text-sm">Security Monitoring</div>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Healthcare-Grade Security</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Enterprise security features designed specifically for healthcare requirements
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

        {/* Use Cases */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Healthcare Applications</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Critical healthcare systems that require the highest levels of reliability and security
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <Heart className="h-5 w-5 text-[#00E699] mr-3 flex-shrink-0" />
                    <span className="text-neutral-300">{useCase}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Healthcare Benefits</h2>
                <p className="text-neutral-400">
                  Compliant, secure, and reliable infrastructure for patient care
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

        {/* Compliance Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Regulatory Compliance</h2>
                <p className="text-neutral-400">
                  Meet the strictest healthcare regulations with automated compliance monitoring
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-[#00E699] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">HIPAA Compliant</h3>
                    <p className="text-sm text-neutral-400">Full compliance with US healthcare privacy regulations</p>
                  </div>
                  <div className="text-center">
                    <Lock className="h-12 w-12 text-[#00E699] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">GDPR Ready</h3>
                    <p className="text-sm text-neutral-400">European data protection regulation compliance</p>
                  </div>
                  <div className="text-center">
                    <FileCheck className="h-12 w-12 text-[#00E699] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">HITRUST Certified</h3>
                    <p className="text-sm text-neutral-400">Industry-leading security framework certification</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Secure Healthcare Solutions</h2>
              <p className="text-neutral-400 mb-6">
                Start building HIPAA-compliant healthcare applications with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Healthcare Project
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
