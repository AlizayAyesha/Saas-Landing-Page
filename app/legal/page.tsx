import Header from "../../components/header"
import Footer from "../../components/footer"

export default function LegalPage() {
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
                      Legal
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Legal Information
                    </h1>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
                      <p className="text-gray-300 text-lg">
                        Our Terms of Service outline the rules and regulations for the use of our platform and services.
                        By accessing and using our services, you accept and agree to be bound by the terms and conditions.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
                      <p className="text-gray-300 text-lg">
                        We are committed to protecting your privacy and personal information. Our Privacy Policy explains
                        how we collect, use, and safeguard your data when you use our services.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use Policy</h2>
                      <p className="text-gray-300 text-lg">
                        Our Acceptable Use Policy defines the permitted and prohibited uses of our platform to ensure
                        a safe and reliable service for all users.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Data Processing Agreement</h2>
                      <p className="text-gray-300 text-lg">
                        For enterprise customers, we offer comprehensive Data Processing Agreements that outline our
                        commitments to data protection and compliance with regulations like GDPR.
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
