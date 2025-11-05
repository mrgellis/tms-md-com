import { Dna, Brain, TrendingUp, Zap } from 'lucide-react'

export default function Education() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Understanding MTHFR & TMS Therapy
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Discover the connection between genetic predisposition and breakthrough treatment options
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - MTHFR Explanation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-100 rounded-full p-3">
                <Dna className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                What is MTHFR?
              </h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                The <strong>MTHFR gene</strong> (methylenetetrahydrofolate reductase) plays a crucial role in processing folate and producing neurotransmitters that regulate mood.
              </p>

              <p>
                Mutations in this gene affect up to <strong>40% of the population</strong> and can impair the body's ability to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Convert folate into its active form (methylfolate)</li>
                <li>Produce adequate serotonin and dopamine</li>
                <li>Regulate homocysteine levels</li>
                <li>Support proper brain function</li>
              </ul>

              <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded-r-lg mt-6">
                <p className="text-sm font-semibold text-accent-900">
                  Result: Individuals with MTHFR mutations are more susceptible to depression, anxiety, and may not respond well to standard antidepressant medications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - TMS Explanation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-100 rounded-full p-3">
                <Brain className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">
                What is TMS Therapy?
              </h3>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Transcranial Magnetic Stimulation (TMS)</strong> is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain.
              </p>

              <p>
                TMS therapy works by:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Activating underactive brain regions</li>
                <li>Promoting neuroplasticity and new neural connections</li>
                <li>Regulating neurotransmitter production</li>
                <li>Reducing symptoms without medication</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg mt-6">
                <p className="text-sm font-semibold text-primary-900">
                  Result: TMS can be highly effective for individuals with MTHFR mutations who have treatment-resistant depression or anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Connection - Full Width */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-10 h-10 text-accent-300" />
              <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                The MTHFR-TMS Connection
              </h3>
            </div>

            <div className="space-y-4 text-primary-50 text-lg">
              <p>
                If you've been diagnosed with an <strong className="text-white">MTHFR gene mutation</strong> and struggle with depression or anxiety, you may have found that traditional antidepressants don't work as expected.
              </p>

              <p>
                TMS therapy offers a <strong className="text-white">drug-free alternative</strong> that directly addresses the neurological underpinnings of mood disorders—regardless of your genetic makeup. By stimulating specific brain circuits, TMS can help restore normal brain function and alleviate symptoms.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-3">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-300">70%+</div>
                  </div>
                  <p className="text-sm text-primary-100">Response rate in clinical studies</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-3">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-300">No Drugs</div>
                  </div>
                  <p className="text-sm text-primary-100">Non-invasive, medication-free</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-3">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-300">FDA OK</div>
                  </div>
                  <p className="text-sm text-primary-100">FDA-approved since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growing Trend */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-full border border-green-200">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">TMS therapy searches are growing 40% year-over-year</span>
          </div>
        </div>
      </div>
    </section>
  )
}
