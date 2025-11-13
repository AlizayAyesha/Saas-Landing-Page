import Header from "../../components/header"
import Footer from "../../components/footer"

export default function PrivacyPage() {
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
                      Privacy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Privacy Policy
                    </h1>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                      <p className="text-gray-300 text-lg mb-4">
                        We collect information you provide directly to us, such as when you create an account, use our services,
                        or contact us for support. This may include your name, email address, and payment information.
                      </p>
                      <p className="text-gray-300 text-lg">
                        We also automatically collect certain information about your use of our services, including IP addresses,
                        browser type, operating system, and usage patterns.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                      <p className="text-gray-300 text-lg mb-4">
                        We use the information we collect to provide, maintain, and improve our services, process transactions,
                        send you technical notices and support messages, and communicate with you about products and services.
                      </p>
                      <p className="text-gray-300 text-lg">
                        Your information helps us understand how our services are used and allows us to develop new features
                        and improve the user experience.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                      <p className="text-gray-300 text-lg">
                        We implement appropriate technical and organizational measures to protect your personal information
                        against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data
                        in transit and at rest, regular security audits, and access controls.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                      <p className="text-gray-300 text-lg">
                        If you have any questions about this Privacy Policy, please contact us at privacy@company.com.
                      </p>
                    </section>
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
