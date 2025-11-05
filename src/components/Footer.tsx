import { Brain, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-accent-400" />
              <span className="text-xl font-heading font-bold text-white">TMS.md</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's first comprehensive TMS therapy directory connecting individuals with MTHFR gene mutations to treatment providers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#root" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-accent-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#add-clinic" className="hover:text-accent-400 transition">
                  List Your Clinic
                </a>
              </li>
              <li>
                <a href="#root" className="hover:text-accent-400 transition">
                  About TMS Therapy
                </a>
              </li>
              <li>
                <a href="#root" className="hover:text-accent-400 transition">
                  MTHFR & Mental Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Questions or feedback?</p>
                  <a href="mailto:info@tmsmd.com" className="text-accent-400 hover:text-accent-300 transition">
                    info@tmsmd.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {currentYear} TMS.md. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Medical Disclaimer:</strong> TMS.md is a directory service and does not provide medical advice. Information on this site is for educational purposes only. Consult with a qualified healthcare provider before making any treatment decisions. TMS therapy may not be suitable for everyone. Individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  )
}
