"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Users, Headphones, MessageCircle, Clock, CheckCircle, Phone, Mail, Zap } from "lucide-react"

export default function DedicatedSupportPage() {
  const supportFeatures = [
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal account manager who understands your business and provides proactive support."
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support from our expert engineering team."
    },
    {
      icon: MessageCircle,
      title: "Priority Response Times",
      description: "Guaranteed fast response times for critical issues and urgent requests."
    },
    {
      icon: Clock,
      title: "Onboarding Support",
      description: "Comprehensive onboarding assistance to ensure smooth implementation and adoption."
    }
  ]

  const supportChannels = [
    { icon: Phone, name: "Phone Support", description: "Direct phone line to your account team" },
    { icon: Mail, name: "Email Support", description: "Dedicated email channel with priority routing" },
    { icon: MessageCircle, name: "Live Chat", description: "Real-time chat support with instant responses" },
    { icon: Zap, name: "Emergency Hotline", description: "24/7 emergency support for critical issues" }
  ]

  const benefits = [
    "Dedicated account manager",
    "24/7 phone and chat support",
    "Priority ticket routing",
    "Custom SLA agreements",
    "Proactive system monitoring",
    "Quarterly business reviews"
  ]

  const responseTimes = [
    { priority: "Critical", time: "< 15 minutes", description: "System down, data loss, security breach" },
    { priority: "High", time: "< 1 hour", description: "Major functionality issues" },
    { priority: "Medium", time: "< 4 hours", description: "Feature requests, minor issues" },
    { priority: "Low", time: "< 24 hours", description: "General questions, enhancements" }
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
                Dedicated Support
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                24/7 Dedicated Support for Enterprise Teams
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Enterprise account managers and technical specialists provide personalized support.
                Get the attention and expertise your mission-critical applications deserve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Overview */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8">
                <Users className="h-16 w-16 text-[#00E699] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Your Dedicated Support Team</h3>
                <p className="text-neutral-400">
                  More than just support tickets - a dedicated team that knows your business and anticipates your needs
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Features */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Support Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Comprehensive support designed for enterprise-scale operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {supportFeatures.map((feature, index) => (
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

        {/* Response Times */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Priority Response Times</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Guaranteed fast response times based on issue severity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-neutral-400 font-medium">Priority Level</th>
                        <th className="text-left py-3 px-4 text-neutral-400 font-medium">Response Time</th>
                        <th className="text-left py-3 px-4 text-neutral-400 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {responseTimes.map((level, index) => (
                        <tr key={index} className="border-b border-gray-800">
                          <td className="py-3 px-4 text-white font-medium">{level.priority}</td>
                          <td className="py-3 px-4 text-[#00E699] font-semibold">{level.time}</td>
                          <td className="py-3 px-4 text-neutral-400">{level.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
            </div>
          </section>

        {/* Support Channels */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Multiple Support Channels</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Reach us through your preferred communication method
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <div className="flex items-center mb-3">
                      <channel.icon className="h-6 w-6 text-[#00E699] mr-3" />
                      <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm">{channel.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Support Benefits</h2>
                <p className="text-neutral-400">
                  More than support - a strategic partnership for your success
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
              <h2 className="text-2xl font-bold text-white mb-4">Get Dedicated Enterprise Support</h2>
              <p className="text-neutral-400 mb-6">
                Work with a dedicated account team that understands your business and provides proactive support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Enterprise Support
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Contact Account Team
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
