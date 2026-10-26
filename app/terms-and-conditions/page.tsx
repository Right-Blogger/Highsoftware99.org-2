import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | HighSoftware99',
  description: 'Review the terms of service governing the use of HighSoftware99 and our consulting engagements.',
  alternates: {
    canonical: 'https://highsoftware99.org/terms-and-conditions',
  },
};

export default function TermsPage() {
  const lastUpdated = 'October 26, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
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
              Terms of Service
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2 mb-3">
              Terms and Conditions
            </h1>
            <p className="text-sm text-slate-500">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">1. Agreement to Terms</h2>
              <p>
                By accessing or using the HighSoftware99 website (<code>https://highsoftware99.org/</code>) or engaging our digital growth, web development, and search engine optimization consulting services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of the website immediately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">2. Intellectual Property Rights</h2>
              <p>
                All editorial articles, guides, software architectures, logos, visual graphics, and code frameworks created and published by HighSoftware99 are protected by copyright, trademark, and applicable intellectual property laws. Content published on this site is provided for informational and business evaluation purposes. Unauthorized reproduction, scraping, or commercial republication without prior written consent is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">3. Professional Services Scope & Disclaimers</h2>
              <p>
                HighSoftware99 provides professional digital advisory services, technical SEO audits, web development engineering, and digital marketing strategy. While we adhere strictly to official search engine webmaster guidelines and current engineering best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Search engine ranking algorithms are third-party systems subject to autonomous updates outside our direct control. We do not provide false guarantees of specific ranking positions or overnight results.
                </li>
                <li>
                  Client outcomes depend upon timely implementation of recommended technical fixes, server hosting reliability, competitive market shifts, and ongoing content maintenance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">4. Acceptable Website Use</h2>
              <p>
                You agree not to use the website for any unlawful purpose, including attempting to interfere with server integrity, injecting malicious payloads, scraping private endpoints, or submitting deceptive or fraudulent inquiries through our contact systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B1B3D]">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, HighSoftware99 and its team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or implementation of informational guidance provided herein.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-8">
              <h2 className="text-xl font-bold text-[#0B1B3D]">6. Contact & Inquiries</h2>
              <p>
                If you have questions regarding these Terms and Conditions, please contact our team via:
              </p>
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 inline-block text-slate-800">
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
