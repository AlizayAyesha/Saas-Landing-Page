"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Rocket, Zap, DollarSign, Users, TrendingUp, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"

export default function StartupsPage() {
  const features = [
    {
      icon: Rocket,
      title: "Quick Setup & Deployment",
      description: "Get from idea to production in minutes with our one-click deployment and pre-built templates."
    },
    {
      icon: Zap,
      title: "Auto-Scaling Infrastructure",
      description: "Scale automatically as your user base grows, without worrying about infrastructure costs."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Pricing",
      description: "Generous free tier and pay-as-you-grow pricing that won't break your startup budget."
    },
    {
      icon: Users,
      title: "Startup Community",
      description: "Join thousands of founders, connect with mentors, and access exclusive startup resources."
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Track your key metrics with built-in analytics to make data-driven growth decisions."
    },
    {
      icon: Lightbulb,
      title: "Innovation Tools",
      description: "Access to cutting-edge tools and APIs to build the next generation of applications."
    }
  ]

  const benefits = [
    "Free tier with $200+ in credits",
    "No long-term contracts",
    "Startup-friendly support",
    "Pre-built integrations",
    "Global infrastructure included",
    "24/7 technical support"
  ]

  const milestones = [
    { step: "01", title: "Sign Up", description: "Create your account in under 2 minutes" },
    { step: "02", title: "Choose Template", description: "Select from pre-built startup templates" },
    { step: "03", title: "Deploy", description: "Launch your app with one click" },
    { step: "04", title: "Scale", description: "Grow automatically as users come in" }
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
                For Startups
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Launch Faster, Scale Smarter
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Built for startups by startup founders. Get the tools, infrastructure, and support
                you need to go from MVP to market leader without breaking the bank.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Your Free Trial
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Startup Pricing
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Startup Success</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Everything you need to launch, grow, and succeed as a startup
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const getSlug = (title: string) => {
                  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                }

                return (
                  <Link key={feature.title} href={`/solutions/startups/${getSlug(feature.title)}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-[#00E699]/30 transition-colors cursor-pointer group"
                    >
                      <div className="p-3 bg-[#00E699]/10 rounded-lg w-fit mb-4">
                        <feature.icon className="h-6 w-6 text-[#00E699]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00E699] transition-colors">{feature.title}</h3>
                      <p className="text-neutral-400">{feature.description}</p>
                      <div className="mt-4 flex items-center text-[#00E699] text-sm font-medium">
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Startups Choose Us</h2>
                <p className="text-neutral-400">
                  Join thousands of startups that have scaled to millions of users
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

        {/* Getting Started Steps */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Idea to IPO</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                We've helped startups at every stage of their journey
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#00E699]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-[#00E699]">{milestone.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-neutral-400 text-sm">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Startup Success Stories</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Real startups that scaled to millions of users with our platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-[#00E699] mb-2">5M+</div>
                <div className="text-neutral-400 mb-4">Users in 6 months</div>
                <p className="text-sm text-neutral-500 mb-4">
                  "From MVP to millions of users in record time. The auto-scaling saved us countless hours of DevOps work."
                </p>
                <div className="text-xs text-neutral-500">- FinTech Startup</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-[#00E699] mb-2">90%</div>
                <div className="text-neutral-400 mb-4">Cost reduction</div>
                <p className="text-sm text-neutral-500 mb-4">
                  "Cut our infrastructure costs by 90% while handling 10x more traffic. Game-changing for our runway."
                </p>
                <div className="text-xs text-neutral-500">- SaaS Platform</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-[#00E699] mb-2">3</div>
                <div className="text-neutral-400 mb-4">Funding rounds</div>
                <p className="text-sm text-neutral-500 mb-4">
                  "Our investors loved how we could demonstrate scalable infrastructure from day one."
                </p>
                <div className="text-xs text-neutral-500">- HealthTech Startup</div>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Startup?</h2>
              <p className="text-neutral-400 mb-6">
                Join thousands of successful startups. Start free and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Free Trial
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View Startup Pricing
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
