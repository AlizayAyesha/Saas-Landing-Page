"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Building2, Rocket, Code, ShoppingCart, Heart, GraduationCap, ArrowRight } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Scale your organization with enterprise-grade solutions",
      features: [
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees"
      ],
      href: "/solutions/enterprise"
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Launch faster with tools designed for rapid growth",
      features: [
        "Quick setup & deployment",
        "Scalable infrastructure",
        "Cost-effective pricing",
        "Startup-friendly support"
      ],
      href: "/solutions/startups"
    },
    {
      icon: Code,
      title: "Developers",
      description: "Build and deploy applications with powerful APIs",
      features: [
        "REST & GraphQL APIs",
        "SDK libraries",
        "Developer tools",
        "Extensive documentation"
      ],
      href: "/solutions/developers"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Power your online store with reliable infrastructure",
      features: [
        "High-traffic handling",
        "Payment processing",
        "Inventory management",
        "Analytics & reporting"
      ],
      href: "/solutions/ecommerce"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Secure and compliant solutions for healthcare providers",
      features: [
        "HIPAA compliance",
        "Patient data security",
        "Telemedicine support",
        "Regulatory compliance"
      ],
      href: "/solutions/healthcare"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Empower learning with scalable educational platforms",
      features: [
        "LMS integration",
        "Student management",
        "Content delivery",
        "Assessment tools"
      ],
      href: "/solutions/education"
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50ms", label: "Global Latency" },
    { number: "24/7", label: "Support" }
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
                Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Solutions for Every Business
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Discover how our platform adapts to your industry needs. From startups to enterprises,
                we provide tailored solutions that drive growth and innovation.
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

        {/* Solutions Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={solution.href}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-all duration-300 h-full hover:transform hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-[#00E699]/10 rounded-lg mr-4">
                          <solution.icon className="h-6 w-6 text-[#00E699]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-neutral-400 mb-6">{solution.description}</p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
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

        {/* Why Choose Us Section */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Our Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Tailored to Your Industry</h3>
                  <p className="text-neutral-400">Each solution is customized to meet the specific needs and compliance requirements of your industry.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Scalable & Flexible</h3>
                  <p className="text-neutral-400">Grow from startup to enterprise with infrastructure that scales with your business needs.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Security First</h3>
                  <p className="text-neutral-400">Enterprise-grade security with compliance certifications and advanced threat protection.</p>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-white font-semibold mb-3">Expert Support</h3>
                  <p className="text-neutral-400">24/7 dedicated support from our team of experts who understand your industry challenges.</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-neutral-400 mb-6">
                Contact our solutions team to discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-6 py-3 rounded-lg transition-colors">
                    View Pricing
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-6 py-3 rounded-lg transition-colors">
                    Contact Sales
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
