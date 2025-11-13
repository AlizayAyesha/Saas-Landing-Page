"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Code, Zap, Book, Terminal, GitBranch, Layers, CheckCircle, ArrowRight } from "lucide-react"

export default function DevelopersPage() {
  const features = [
    {
      icon: Code,
      title: "Powerful APIs",
      description: "REST and GraphQL APIs with comprehensive documentation, SDKs, and code examples for all major languages."
    },
    {
      icon: Terminal,
      title: "Developer Tools",
      description: "CLI tools, debugging utilities, and development environments designed specifically for modern workflows."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Build and deploy prototypes in minutes with our pre-built templates and one-click deployment."
    },
    {
      icon: Book,
      title: "Extensive Documentation",
      description: "Complete API references, tutorials, and guides with interactive examples and code playgrounds."
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamless integration with Git workflows, automated deployments, and environment management."
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Build scalable applications with our modular components and microservices-ready infrastructure."
    }
  ]

  const benefits = [
    "REST & GraphQL APIs included",
    "SDKs for 10+ programming languages",
    "Interactive API documentation",
    "Code examples and tutorials",
    "Community forums and support",
    "Free tier for development"
  ]

  const tools = [
    { name: "REST API", description: "Complete RESTful API with OpenAPI spec" },
    { name: "GraphQL API", description: "Flexible GraphQL endpoint with schema explorer" },
    { name: "CLI Tools", description: "Command-line tools for deployment and management" },
    { name: "SDK Libraries", description: "Official SDKs for JavaScript, Python, Go, and more" },
    { name: "Code Playground", description: "Interactive environment to test APIs" },
    { name: "API Testing", description: "Built-in tools for API testing and monitoring" }
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
                For Developers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Build Faster with Developer-First Tools
              </h1>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
                Everything developers need to build, test, and deploy applications. From powerful APIs to comprehensive
                documentation, we provide the tools that make development a joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Start Building Free
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    View API Docs
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Developer-Centric Features</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Built by developers, for developers. Tools that integrate seamlessly into your workflow.
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

        {/* Developer Tools */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Developer Toolkit</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                All the tools you need to build production-ready applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold text-[#00E699] mb-2">{tool.name}</h3>
                    <p className="text-neutral-400 text-sm">{tool.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Developers Choose Us</h2>
                <p className="text-neutral-400">
                  Join thousands of developers building the next generation of applications
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

        {/* Code Example */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started in Minutes</h2>
                <p className="text-neutral-400">
                  Simple API integration with comprehensive SDKs
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 text-[#00E699] mr-2" />
                  <span className="text-white font-medium">JavaScript SDK Example</span>
                </div>
                <pre className="bg-black rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-green-400">
{`import { SaaSClient } from '@saas/sdk'

const client = new SaaSClient({
  apiKey: process.env.SAAS_API_KEY
})

// Create a new database
const database = await client.databases.create({
  name: 'my-app-db',
  region: 'us-east-1'
})

// Query your data
const users = await client.databases.query(database.id, {
  table: 'users',
  limit: 10
})

console.log('Users:', users)`}
                  </code>
                </pre>
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
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Building?</h2>
              <p className="text-neutral-400 mb-6">
                Get free access to all developer tools and start building your next big idea today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-[#00E699] hover:bg-[#00E699]/90 text-black font-medium px-8 py-4 rounded-lg transition-colors">
                    Create Developer Account
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-lg transition-colors">
                    Explore API Docs
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
