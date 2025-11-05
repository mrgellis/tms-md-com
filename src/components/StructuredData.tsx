import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    // Organization + Medical Business Schema
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'MedicalBusiness', 'WebSite'],
      '@id': 'https://tmsmd.com/#organization',
      name: 'TMS.md',
      alternateName: 'TMS Directory',
      url: 'https://tmsmd.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://tmsmd.com/#logo',
        url: 'https://tmsmd.com/logo.png',
        contentUrl: 'https://tmsmd.com/logo.png',
        caption: 'TMS.md Logo'
      },
      description: 'The world\'s first comprehensive TMS (Transcranial Magnetic Stimulation) therapy directory connecting individuals with MTHFR gene mutations to treatment providers worldwide.',
      foundingDate: '2025-11-05',
      medicalSpecialty: [
        {
          '@type': 'MedicalSpecialty',
          name: 'Psychiatry'
        },
        {
          '@type': 'MedicalSpecialty',
          name: 'Neurology'
        },
        {
          '@type': 'MedicalSpecialty',
          name: 'Mental Health'
        }
      ],
      serviceType: 'Medical Directory',
      areaServed: {
        '@type': 'Place',
        '@id': 'https://tmsmd.com/#areaServed',
        name: 'Worldwide'
      },
      knowsAbout: [
        {
          '@type': 'MedicalProcedure',
          name: 'Transcranial Magnetic Stimulation',
          alternateName: 'TMS Therapy'
        },
        {
          '@type': 'MedicalCondition',
          name: 'MTHFR Gene Mutation',
          description: 'Genetic mutation affecting methylation and neurotransmitter production'
        },
        {
          '@type': 'MedicalCondition',
          name: 'Treatment-Resistant Depression'
        },
        {
          '@type': 'MedicalCondition',
          name: 'Anxiety Disorders'
        },
        {
          '@type': 'MedicalCondition',
          name: 'Major Depressive Disorder'
        }
      ],
      sameAs: [
        'https://github.com/mrgellis/tms-md-com'
      ],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://tmsmd.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }

    // WebPage Schema
    const webPageData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://tmsmd.com/#webpage',
      url: 'https://tmsmd.com/',
      name: 'TMS.md - Global TMS Therapy Directory',
      description: 'Find transcranial magnetic stimulation (TMS) therapy clinics worldwide. Comprehensive directory connecting patients with MTHFR gene mutations to TMS treatment providers.',
      isPartOf: {
        '@id': 'https://tmsmd.com/#organization'
      },
      about: {
        '@type': 'MedicalProcedure',
        name: 'Transcranial Magnetic Stimulation',
        alternateName: 'TMS Therapy',
        description: 'FDA-approved, non-invasive treatment using magnetic pulses to stimulate brain regions for depression and anxiety'
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': 'https://tmsmd.com/#primaryimage',
        url: 'https://tmsmd.com/og-image.jpg',
        contentUrl: 'https://tmsmd.com/og-image.jpg'
      },
      datePublished: '2025-11-05',
      dateModified: '2025-11-05',
      inLanguage: 'en-US'
    }

    // Medical Condition (MTHFR) Schema
    const mthfrConditionData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      '@id': 'https://tmsmd.com/#mthfr-condition',
      name: 'MTHFR Gene Mutation',
      alternateName: 'Methylenetetrahydrofolate Reductase Gene Mutation',
      description: 'Genetic mutation affecting the body\'s ability to process folate and produce neurotransmitters, increasing susceptibility to depression and anxiety',
      associatedAnatomy: {
        '@type': 'AnatomicalStructure',
        name: 'Brain'
      },
      possibleTreatment: {
        '@type': 'MedicalTherapy',
        name: 'Transcranial Magnetic Stimulation (TMS)',
        description: 'Non-invasive brain stimulation therapy effective for treatment-resistant depression in individuals with MTHFR mutations'
      },
      epidemiology: 'Affects approximately 40% of the population',
      riskFactor: [
        {
          '@type': 'MedicalRiskFactor',
          name: 'Depression',
          description: 'Increased risk of major depressive disorder'
        },
        {
          '@type': 'MedicalRiskFactor',
          name: 'Anxiety',
          description: 'Increased susceptibility to anxiety disorders'
        },
        {
          '@type': 'MedicalRiskFactor',
          name: 'Treatment Resistance',
          description: 'Reduced effectiveness of standard antidepressant medications'
        }
      ]
    }

    // TMS Therapy Procedure Schema
    const tmsTherapyData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      '@id': 'https://tmsmd.com/#tms-therapy',
      name: 'Transcranial Magnetic Stimulation',
      alternateName: ['TMS Therapy', 'rTMS', 'Repetitive Transcranial Magnetic Stimulation'],
      description: 'FDA-approved, non-invasive medical treatment using magnetic pulses to stimulate specific areas of the brain to treat depression, anxiety, and other mental health conditions',
      procedureType: {
        '@type': 'MedicalProcedureType',
        name: 'Therapeutic Procedure'
      },
      bodyLocation: {
        '@type': 'AnatomicalStructure',
        name: 'Brain',
        description: 'Prefrontal cortex and other mood-regulating brain regions'
      },
      preparation: 'No anesthesia or sedation required',
      howPerformed: 'Magnetic coil placed against scalp delivers targeted magnetic pulses to stimulate brain neurons',
      status: 'Approved',
      medicineSystem: 'Evidence-Based Medicine',
      recognizingAuthority: {
        '@type': 'Organization',
        name: 'U.S. Food and Drug Administration (FDA)',
        description: 'FDA-approved since 2008 for treatment-resistant depression'
      },
      relevantSpecialty: [
        'Psychiatry',
        'Neurology',
        'Mental Health'
      ],
      followup: 'Typical course: 20-30 sessions over 4-6 weeks'
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
    const scripts: HTMLScriptElement[] = []

    const dataObjects = [
      organizationData,
      webPageData,
      mthfrConditionData,
      tmsTherapyData,
      faqStructuredData
    ]

    dataObjects.forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(data)
      document.head.appendChild(script)
      scripts.push(script)
    })

    return () => {
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      })
    }
  }, [])

  return null
}
