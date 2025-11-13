import Header from "../../components/header"
import Footer from "../../components/footer"

export default function TermsPage() {
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
                      Terms
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00E699] to-[#00E699]/50 bg-clip-text text-transparent">
                      Terms of Service
                    </h1>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                      <p className="text-gray-300 text-lg">
                        By accessing and using our services, you accept and agree to be bound by the terms and provision
                        of this agreement. If you do not agree to abide by the above, please do not use this service.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                      <p className="text-gray-300 text-lg mb-4">
                        Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.
                        This is the grant of a license, not a transfer of title, and under this license you may not:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300 text-lg">
                        <li>modify or copy the materials</li>
                        <li>use the materials for any commercial purpose or for any public display</li>
                        <li>attempt to decompile or reverse engineer any software contained on our platform</li>
                        <li>remove any copyright or other proprietary notations from the materials</li>
                      </ul>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                      <p className="text-gray-300 text-lg">
                        We strive to provide continuous availability of our services but do not guarantee that our services
                        will be uninterrupted or error-free. We reserve the right to modify or discontinue our services
                        at any time without notice.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                      <p className="text-gray-300 text-lg">
                        In no event shall our company or its suppliers be liable for any damages (including, without limitation,
                        damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                        to use our services, even if we have been notified orally or in writing of the possibility of such damage.
                      </p>
                    </section>

                    <section className="bg-black/50 backdrop-blur-sm border border-[#00E699]/10 rounded-2xl p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                      <p className="text-gray-300 text-lg">
                        If you have any questions about these Terms of Service, please contact us at legal@company.com.
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
