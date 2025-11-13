import Header from "../../components/header"
import Footer from "../../components/footer"

export default function AboutPage() {
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
                      About Us
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Our Story
                    </h1>
                  </div>

                  <div className="space-y-8 text-lg text-gray-300">
                    <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <p className="text-xl text-white font-medium mb-4">
                        We are a leading provider of serverless PostgreSQL solutions, empowering developers and businesses
                        to build scalable, high-performance applications without the complexity of traditional database management.
                      </p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <p className="text-xl text-white font-medium mb-4">
                        Our mission is to democratize access to enterprise-grade database technology, making it simple,
                        affordable, and accessible to teams of all sizes.
                      </p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <p className="text-xl text-white font-medium">
                        Founded by a team of database experts and engineers, we understand the challenges of modern application
                        development and have built our platform to solve real-world problems.
                      </p>
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
