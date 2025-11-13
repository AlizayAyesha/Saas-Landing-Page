import Header from "../../components/header"
import Footer from "../../components/footer"

export default function CareersPage() {
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
                      Careers
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Join Our Team
                    </h1>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <p className="text-xl text-white font-medium">
                        Join our team of passionate engineers, designers, and innovators who are building the future of database technology.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white">Open Positions</h2>

                      <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">Senior Backend Engineer</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Full-time</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Remote</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">San Francisco, CA</span>
                        </div>
                        <p className="text-gray-300 text-lg">
                          We're looking for an experienced backend engineer to help scale our PostgreSQL platform and build the next generation of database solutions.
                        </p>
                      </div>

                      <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">DevOps Engineer</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Full-time</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Remote</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">New York, NY</span>
                        </div>
                        <p className="text-gray-300 text-lg">
                          Help us build and maintain our cloud infrastructure and deployment pipelines for maximum reliability and performance.
                        </p>
                      </div>

                      <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8 hover:border-[#00E699]/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-white">Product Designer</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Full-time</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">Remote</span>
                          <span className="bg-[#00E699]/20 text-[#00E699] px-3 py-1 rounded-full text-sm">London, UK</span>
                        </div>
                        <p className="text-gray-300 text-lg">
                          Design intuitive interfaces for our database management platform and create exceptional user experiences.
                        </p>
                      </div>
                    </div>
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
