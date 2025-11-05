import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': 'https://tms.md',
      name: 'TMS.md - Global TMS Therapy Directory',
      description: 'Comprehensive global directory of TMS (Transcranial Magnetic Stimulation) therapy clinics, specializing in connecting individuals with MTHFR gene mutations to mental health treatment providers.',
      url: 'https://tms.md',
      logo: 'https://tms.md/logo.png',
      medicalSpecialty: [
        'Psychiatry',
        'Neurology',
        'Mental Health'
      ],
      serviceType: 'Medical Directory',
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      knowsAbout: [
        'TMS Therapy',
        'Transcranial Magnetic Stimulation',
        'MTHFR Gene Mutation',
        'Depression Treatment',
        'Anxiety Treatment',
        'Treatment-Resistant Depression',
        'Mental Health'
      ],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://tms.md/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }

    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is TMS therapy and how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TMS (Transcranial Magnetic Stimulation) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain associated with mood regulation. The procedure is painless, requires no anesthesia, and patients can return to normal activities immediately after each session.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does MTHFR affect my mental health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The MTHFR gene mutation affects your body\'s ability to process folate and produce neurotransmitters like serotonin and dopamine. This can lead to increased susceptibility to depression and anxiety, and may reduce the effectiveness of standard antidepressant medications.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is TMS therapy covered by insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many insurance plans, including Medicare, now cover TMS therapy for treatment-resistant depression. Coverage varies by provider and plan, and typically requires documentation that other treatments have been unsuccessful.'
          }
        },
        {
          '@type': 'Question',
          name: 'How long does TMS treatment take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical TMS treatment course consists of 5 sessions per week for 4-6 weeks (20-30 total sessions). Each session lasts approximately 20-40 minutes. Most patients begin to notice improvements after 2-3 weeks of treatment.'
          }
        }
      ]
    }

    // Inject structured data into page
    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.text = JSON.stringify(structuredData)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.text = JSON.stringify(faqStructuredData)
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null
}
