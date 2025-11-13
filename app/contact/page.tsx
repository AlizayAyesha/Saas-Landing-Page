import Header from "../../components/header"
import Footer from "../../components/footer"

export default function ContactPage() {
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
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="inline-block rounded-full bg-[#00E699]/10 px-4 py-1.5 text-sm text-[#00E699] ring-1 ring-[#00E699]/20 mb-8">
                      Contact
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Get in Touch
                    </h1>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                        <p className="text-gray-300 text-lg mb-6">
                          Have questions about our services? Need technical support? Want to discuss enterprise solutions?
                          We'd love to hear from you.
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#00E699]/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#00E699]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-gray-400">hello@company.com</p>
                          </div>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#00E699]/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#00E699]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Address</p>
                            <p className="text-gray-400">123 Tech Street<br />San Francisco, CA 94105</p>
                          </div>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#00E699]/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#00E699]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Phone</p>
                            <p className="text-gray-400">+1 (555) 123-4567</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold mb-6 text-white">Send us a message</h3>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-800/50 border border-[#00E699]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E699] focus:border-[#00E699] text-white placeholder-gray-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 bg-gray-800/50 border border-[#00E699]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E699] focus:border-[#00E699] text-white placeholder-gray-500"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                          <textarea
                            rows={4}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-[#00E699]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E699] focus:border-[#00E699] text-white placeholder-gray-500 resize-none"
                            placeholder="Your message..."
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-[#00E699] hover:bg-[#00E699]/80 text-black font-medium py-3 px-4 rounded-md transition-colors"
                        >
                          Send Message
                        </button>
                      </form>
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
