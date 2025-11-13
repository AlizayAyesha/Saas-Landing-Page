"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, Rocket, Settings, Play, CheckCircle, Clock } from "lucide-react"

export default function QuickSetupDeploymentPage() {
  const setupSteps = [
    {
      icon: Settings,
      title: "Choose Your Template",
      description: "Select from pre-built templates for common use cases like e-commerce, SaaS, or APIs."
    },
    {
      icon: Zap,
      title: "Configure Settings",
      description: "Customize your deployment with environment variables, domains, and integrations."
    },
    {
      icon: Play,
      title: "Deploy Instantly",
      description: "Click deploy and watch your application go live in under 2 minutes."
    }
  ]

  const features = [
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy to production with a single click, no complex setup required."
    },
    {
      icon: Clock,
      title: "2-Minute Setup",
      description: "From idea to live application in under 2 minutes with our streamlined process."
    },
    {
      icon: Settings,
      title: "Pre-Built Templates",
      description: "Start with proven templates for blogs, e-commerce, APIs, and more."
    },
    {
      icon: Zap,
      title: "Instant Scaling",
      description: "Built-in auto-scaling ensures your app handles traffic spikes automatically."
    }
  ]

  const benefits = [
    "Deploy in under 2 minutes",
    "No infrastructure setup required",
    "Pre-built application templates",
    "Automatic SSL certificates",
    "Global CDN included",
    "24/7 deployment availability"
  ]

  const templates = [
    "E-commerce Store", "SaaS Application", "Blog/CMS", "API Backend",
    "Mobile App Backend", "Data Dashboard", "Landing Page", "Portfolio Site"
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
                Quick Setup & Deployment
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                From Idea to Production in Minutes
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Get from idea to production in minutes with our one-click deployment and pre-built templates.
                Focus on building your product, not managing infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Setup Process */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">3-Step Setup Process</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Launch your application with our streamlined deployment process
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {setupSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#00E699] rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-2xl font-bold text-[#00E699] mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-neutral-400">{step.description}</p>
                  </motion.div>
                ))}
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deployment Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need for fast, reliable deployments
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
            </div></div>
          </section>
          
        {/* Templates */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pre-Built Templates</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Start with proven templates for common application types
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {templates.map((template, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-medium text-[#00E699] bg-[#00E699]/10 rounded-lg px-3 py-2">
                        {template}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-neutral-400 text-sm">
                    Custom templates available - build once, deploy everywhere
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deployment Benefits</h2>
                <p className="text-neutral-400">
                  Focus on your product, not infrastructure
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

        {/* Performance Metrics */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deployment Speed</h2>
                <p className="text-neutral-400">
                  Lightning-fast deployments that keep you ahead of the competition
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00E699] mb-2">{"< 2min"}</div>
                    <div className="text-sm text-neutral-400">Average deployment time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00E699] mb-2">99.9%</div>
                    <div className="text-sm text-neutral-400">Deployment success rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00E699] mb-2">24/7</div>
                    <div className="text-sm text-neutral-400">Deployment availability</div>
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
              <h2 className="text-2xl font-bold text-white mb-4">Launch Your Startup Today</h2>
              <p className="text-neutral-400 mb-6">
                Get from idea to production in minutes with our quick setup and deployment tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Building Now
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Deployment Guide
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
