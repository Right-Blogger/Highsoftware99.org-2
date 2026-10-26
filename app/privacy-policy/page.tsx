import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | HighSoftware99',
  description: 'Review the HighSoftware99 Privacy Policy detailing how we collect, handle, and protect user data.',
  alternates: {
    canonical: 'https://highsoftware99.org/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 26, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="border-b border-slate-100 pb-8 mb-10">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Legal & Data Protection
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2 mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">1. Introduction and Overview</h2>
              <p>
                At HighSoftware99 (accessible via <code>https://highsoftware99.org/</code>), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how it is utilized, and the safeguards implemented to maintain data security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">2. Information We Collect</h2>
              <p>
                We only collect information that is genuinely necessary to fulfill your requests and provide our digital marketing, web engineering, and search engine optimization consulting services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Information You Voluntarily Provide:</strong> When you complete our contact or consultation inquiry forms, or email us directly, we collect your name, email address, website URL, and project notes.
                </li>
                <li>
                  <strong>Technical Browsing Data:</strong> Standard server logs record basic non-personally identifiable request headers, browser user-agents, referring URLs, and timestamps to ensure server stability, prevent abuse, and optimize responsive delivery.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">3. How We Use Collected Information</h2>
              <p>
                We use the information collected exclusively for the following operational purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To evaluate your website and deliver customized project proposals or audit findings.</li>
                <li>To communicate with you directly regarding project milestones, inquiries, and technical deliverables.</li>
                <li>To maintain the security, uptime, and performance of our web infrastructure.</li>
                <li>To comply with applicable legal obligations and enforce our Terms of Service.</li>
              </ul>
              <p>
                <strong>We do not sell, rent, trade, or monetize your contact information or personal data to third-party brokers or advertisers.</strong>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">4. Cookies and Web Analytics</h2>
              <p>
                Our website utilizes minimal, essential session identifiers and standard aggregate analytics to monitor site performance and navigation paths. You can configure your browser to reject cookies or notify you when a cookie is placed. Rejecting cookies will not impede your ability to browse our content or submit contact inquiries.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">5. Data Security and Retention</h2>
              <p>
                We maintain appropriate administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, misuse, or alteration. Inquiries submitted via our contact channels are retained only as long as necessary to facilitate ongoing business communication and satisfy administrative requirements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">6. Your Privacy Rights</h2>
              <p>
                Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request the deletion of your contact records. To exercise any of these rights, please contact us using the information below.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-[#0B1B3D]">7. Contact for Privacy Questions</h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy or our data handling practices, please contact us at our official email address:
              </p>
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 inline-block text-slate-800">
                <span className="font-semibold block text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Privacy Inquiries:
                </span>
                <a
                  href="mailto:collab.topagency@gmail.com"
                  className="text-blue-600 font-bold hover:underline"
                >
                  collab.topagency@gmail.com
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
