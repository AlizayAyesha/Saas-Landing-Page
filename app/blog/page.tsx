import Header from "../../components/header"
import Footer from "../../components/footer"

export default function BlogPage() {
  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex-grow">
          <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-40 top-20 w-80 h-80 bg-[#00E699]/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute -left-40 bottom-20 w-80 h-80 bg-[#00E699]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
              </div>
            </div>

            <div className="relative z-10 pt-24 pb-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-8">
                      Blog
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Latest Insights
                    </h1>
                  </div>

                  <div className="space-y-8">
                    <article className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                      <h2 className="text-2xl font-bold mb-4 text-white">Scaling PostgreSQL: Best Practices for High-Traffic Applications</h2>
                      <p className="text-gray-300 mb-6 text-lg">
                        Learn how to optimize your PostgreSQL database for applications serving millions of users and handle massive scale with confidence...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[#00E699]">Published on November 13, 2025</div>
                        <div className="text-sm text-gray-400">5 min read</div>
                      </div>
                    </article>

                    <article className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                      <h2 className="text-2xl font-bold mb-4 text-white">Serverless Databases: The Future of Application Development</h2>
                      <p className="text-gray-300 mb-6 text-lg">
                        Explore how serverless databases are revolutionizing the way we build and deploy applications, eliminating infrastructure management...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[#00E699]">Published on November 10, 2025</div>
                        <div className="text-sm text-gray-400">7 min read</div>
                      </div>
                    </article>

                    <article className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                      <h2 className="text-2xl font-bold mb-4 text-white">Database Security: Protecting Your Data in the Cloud</h2>
                      <p className="text-gray-300 mb-6 text-lg">
                        Essential security measures and best practices for cloud database deployments to keep your data safe and compliant...
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-[#00E699]">Published on November 5, 2025</div>
                        <div className="text-sm text-gray-400">6 min read</div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
