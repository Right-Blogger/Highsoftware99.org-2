import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Mail, ArrowRight, Target, Compass, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'About Us | HighSoftware99 - SEO, Digital Marketing & Web Development',
  description: 'Learn about HighSoftware99, our ethical approach to search engine optimization, reliable web engineering, and transparent client communication.',
  alternates: {
    canonical: 'https://highsoftware99.org/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              About HighSoftware99
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              Practical Support, Clear Communication
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We provide tailored digital solutions to help businesses grow online. Our focus is on ethical SEO methods, effective marketing strategies and reliable web development, with transparent reporting at every step.
            </p>
          </div>
        </section>

        {/* Narrative Section with Image */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[16/11]">
                  <Image
                    src="/images/pages/about-hero.jpg"
                    alt="Digital strategy team collaborating on technical website audit and web development roadmap"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                  Our Mission & Operating Philosophy
                </h2>
                
                <p className="text-slate-600 text-base leading-relaxed">
                  In an industry often clouded by opaque jargon, speculative shortcuts, and inflated vanity metrics, HighSoftware99 was founded to offer a grounded, transparent alternative. We believe that sustainable digital visibility is built on engineering rigor, factual research, and genuine user value.
                </p>

                <p className="text-slate-600 text-base leading-relaxed">
                  Whether we are executing a forensic technical SEO audit, building a performance-first Next.js web application, or constructing an intent-driven content strategy, our work is guided by verifiable data and official web standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100/60">
                    <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm mb-1">
                      <Target className="w-4 h-4" />
                      <span>Goal-Oriented</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every task is directly linked to qualified leads, organic visibility, and user retention.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100/60">
                    <div className="flex items-center gap-2.5 text-blue-700 font-bold text-sm mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Ethical Methods</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Zero manipulative schemes or black-hat tactics; 100% compliance with search engine guidelines.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Commitments */}
        <section className="py-16 bg-sky-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                What Sets Us Apart
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                Our Core Principles in Action
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D]">
                  Tailored Recommendations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We reject one-size-fits-all packages. Every website possesses unique architectures, competitive realities, and business constraints. We customize our roadmap to what truly moves your needle.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D]">
                  Clear Action Plans
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You will never wonder what was worked on or why. We deliver prioritized, step-by-step technical playbooks that clearly outline engineering requirements, estimated impact, and timelines.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D]">
                  Progress Reporting
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Transparent reporting backed by primary data from Google Search Console, Google Analytics 4, and server response logs. We celebrate real business victories and openly discuss strategic refinements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Outreach Callout */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
              Direct Communication, Zero Intermediaries
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
              When you collaborate with HighSoftware99, you communicate directly with skilled specialists dedicated to your digital success.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-sky-50 rounded-xl border border-sky-100 text-slate-800">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-sm">Direct Contact:</span>
              <a
                href="mailto:collab.topagency@gmail.com"
                className="text-blue-600 font-bold hover:underline"
              >
                collab.topagency@gmail.com
              </a>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
