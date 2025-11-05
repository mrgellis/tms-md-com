import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is TMS therapy and how does it work?',
    answer: 'TMS (Transcranial Magnetic Stimulation) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain associated with mood regulation. During treatment, a magnetic coil is placed against your scalp, delivering targeted pulses that activate underactive brain regions. The procedure is painless, requires no anesthesia, and patients can return to normal activities immediately after each session.'
  },
  {
    question: 'How does MTHFR affect my mental health?',
    answer: 'The MTHFR gene mutation affects your body\'s ability to process folate and produce neurotransmitters like serotonin and dopamine. This can lead to increased susceptibility to depression and anxiety, and may reduce the effectiveness of standard antidepressant medications. Approximately 40% of people carry an MTHFR mutation, though not everyone experiences symptoms.'
  },
  {
    question: 'Why is TMS particularly effective for people with MTHFR mutations?',
    answer: 'TMS works independently of your body\'s biochemistry by directly stimulating neural pathways in the brain. Unlike medications that rely on your body\'s ability to produce and process neurotransmitters (which can be impaired by MTHFR mutations), TMS physically activates brain circuits to improve mood and cognitive function. This makes it an excellent option for those who haven\'t responded to traditional antidepressants.'
  },
  {
    question: 'How long does TMS treatment take?',
    answer: 'A typical TMS treatment course consists of 5 sessions per week for 4-6 weeks (20-30 total sessions). Each session lasts approximately 20-40 minutes. Most patients begin to notice improvements after 2-3 weeks of treatment, with optimal results appearing by the end of the full course.'
  },
  {
    question: 'Is TMS therapy covered by insurance?',
    answer: 'Many insurance plans, including Medicare, now cover TMS therapy for treatment-resistant depression. Coverage varies by provider and plan, and typically requires documentation that other treatments have been unsuccessful. Our directory will include insurance information for each clinic to help you find providers that work with your coverage.'
  },
  {
    question: 'What conditions can TMS treat?',
    answer: 'TMS is FDA-approved for major depressive disorder (MDD) and obsessive-compulsive disorder (OCD). It\'s also being used off-label with promising results for anxiety disorders, PTSD, chronic pain, and certain neurological conditions. Clinical research continues to expand the applications of TMS therapy.'
  },
  {
    question: 'Are there any side effects?',
    answer: 'TMS is generally well-tolerated with minimal side effects. The most common side effect is mild scalp discomfort or headache during or after treatment, which typically decreases over time. Unlike medications, TMS has no systemic side effects, no weight gain, no sexual dysfunction, and no cognitive impairment. The treatment does not require anesthesia or sedation.'
  },
  {
    question: 'How do I know if I have an MTHFR mutation?',
    answer: 'You can discover MTHFR mutations through genetic testing, which is available through your healthcare provider or direct-to-consumer genetic testing companies like 23andMe, AncestryDNA, or specialized labs. If you have a history of depression or anxiety that hasn\'t responded well to standard treatments, it may be worth discussing MTHFR testing with your doctor.'
  },
  {
    question: 'How much does TMS therapy cost?',
    answer: 'The cost of TMS therapy varies by location and provider, typically ranging from $400-$500 per session (around $10,000-$15,000 for a full treatment course) without insurance. With insurance coverage, out-of-pocket costs are usually much lower. Our directory will include pricing information to help you compare options and plan accordingly.'
  },
  {
    question: 'When will the TMS.md directory launch?',
    answer: 'We\'re currently building our comprehensive database of TMS clinics worldwide. Sign up for our waitlist to be notified when we launch and get early access to the directory. We\'re committed to providing the most accurate, helpful resource for finding TMS therapy providers.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about TMS therapy and MTHFR
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-primary-50 border border-primary-100 rounded-xl p-8">
          <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Join our waitlist and we'll send you helpful resources about TMS therapy and MTHFR
          </p>
          <a
            href="#root"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
