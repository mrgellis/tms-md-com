import { Brain, MapPin, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify Forms will handle the actual submission
    // We just show a success message
    setSubmitted(true)
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Value Proposition */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-accent-300" />
              <span className="text-xl sm:text-2xl font-heading font-bold">TMS.md</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance leading-tight">
              Find TMS Therapy Clinics Worldwide
            </h1>

            <p className="text-lg sm:text-xl text-primary-100 mb-8 text-balance">
              The world's first comprehensive directory connecting individuals with MTHFR gene mutations to transcranial magnetic stimulation (TMS) therapy providers for depression, anxiety, and mental health treatment.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent-300 flex-shrink-0 mt-0.5" />
                <p className="text-primary-50">Global directory of verified TMS therapy clinics</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent-300 flex-shrink-0 mt-0.5" />
                <p className="text-primary-50">Specialized focus on MTHFR-related mental health conditions</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent-300 flex-shrink-0 mt-0.5" />
                <p className="text-primary-50">Insurance, pricing, and treatment protocol information</p>
              </div>
            </div>
          </div>

          {/* Right Column - Email Capture Form */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              {!submitted ? (
                <>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                    Be the First to Know
                  </h2>
                  <p className="text-primary-100 mb-6">
                    We're launching soon. Join our waitlist to get early access to the most comprehensive TMS therapy directory.
                  </p>

                  <form
                    name="patient-waitlist"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Honeypot field for spam protection */}
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>

                    {/* Required hidden field for Netlify Forms */}
                    <input type="hidden" name="form-name" value="patient-waitlist" />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Your Location (Optional)
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400 transition"
                          placeholder="City, State or Country"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Notify Me When We Launch
                    </button>

                    <p className="text-xs text-primary-200 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-accent-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold mb-2">Thank You!</h3>
                  <p className="text-primary-100">
                    We'll notify you as soon as TMS.md launches. Check your inbox for a confirmation email.
                  </p>
                </div>
              )}
            </div>

            {/* Clinic Owner CTA */}
            <div className="mt-6 text-center">
              <p className="text-primary-100 mb-2">Are you a TMS clinic owner?</p>
              <a
                href="#add-clinic"
                className="inline-flex items-center gap-2 text-accent-300 hover:text-accent-200 font-semibold transition underline underline-offset-4"
              >
                List Your Clinic
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
