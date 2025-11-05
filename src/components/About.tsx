import { Target, Globe, Users, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true)
  }

  return (
    <section id="add-clinic" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To create the world's most comprehensive and accessible directory of TMS therapy providers, with a special focus on serving individuals with MTHFR gene mutations who need alternative treatment options for depression and anxiety.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
              Global Coverage
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive directory spanning clinics worldwide, from major cities to local communities
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
              Verified Information
            </h3>
            <p className="text-gray-600 text-sm">
              Accurate, up-to-date clinic details including insurance, pricing, and treatment protocols
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
              Patient-Focused
            </h3>
            <p className="text-gray-600 text-sm">
              Designed to help patients find the right treatment, understand costs, and make informed decisions
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
              MTHFR Specialized
            </h3>
            <p className="text-gray-600 text-sm">
              First directory connecting genetic testing insights to TMS treatment options
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              Why TMS.md Matters
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                Millions of people discover they have MTHFR gene mutations each year through genetic testing. Many learn that their depression or anxiety may not respond to traditional medications—yet they're given little guidance on what to do next.
              </p>

              <p>
                TMS therapy represents a proven, drug-free alternative, but finding qualified providers can be overwhelming. Most directories are regional, incomplete, or lack the critical details patients need: insurance coverage, treatment protocols, pricing transparency, and outcomes.
              </p>

              <p className="font-semibold text-gray-900">
                TMS.md bridges this gap by creating a single, comprehensive resource that connects genetic insights with treatment solutions—empowering patients and their providers to make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Owner CTA */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                  Are You a TMS Clinic Owner?
                </h3>
                <p className="text-primary-100 mb-6">
                  Join the world's first MTHFR-focused TMS directory. Connect with patients who are actively seeking your services and grow your practice.
                </p>
                <ul className="space-y-2 text-primary-50">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span>Enhanced clinic profile with treatment details</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span>Direct patient inquiries and lead generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span>Reach MTHFR-aware patients nationwide</span>
                  </li>
                </ul>
              </div>

              <div>
                {!submitted ? (
                  <form
                    name="clinic-interest"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6"
                  >
                    {/* Honeypot field */}
                    <p className="hidden">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    <input type="hidden" name="form-name" value="clinic-interest" />

                    <h4 className="text-xl font-heading font-bold mb-4">
                      Express Your Interest
                    </h4>

                    <div className="space-y-4">
                      <input
                        type="text"
                        name="clinic-name"
                        required
                        placeholder="Clinic Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />

                      <input
                        type="text"
                        name="contact-name"
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />

                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />

                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="City, State"
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                      />

                      <button
                        type="submit"
                        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
                      >
                        Get Early Access
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                    <ShieldCheck className="w-12 h-12 text-accent-300 mx-auto mb-3" />
                    <h4 className="text-xl font-heading font-bold mb-2">Thank You!</h4>
                    <p className="text-primary-100">
                      We'll contact you soon with details about joining TMS.md.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
