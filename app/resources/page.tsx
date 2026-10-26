import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Gauge, 
  Search, 
  Download, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'Resource Library & SEO Checklists | HighSoftware99',
  description: 'Access curated SEO checklists, technical web performance frameworks, and actionable website audit resources from HighSoftware99.',
  alternates: {
    canonical: 'https://highsoftware99.org/resources',
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Practical Toolkits & Checklists
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              Website Resources & Checklists
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Clear, practical frameworks designed to help developers, marketing teams, and small business owners build faster, more visible, and higher-converting websites.
            </p>
          </div>
        </section>

        {/* Featured Resource Highlight: Interactive Audit Tool */}
        <section className="py-12 bg-sky-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#003B7A] to-[#0A4D9E] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Audit Tool</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Test Your Website Health Score
                </h2>
                <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                  Run an instant interactive health check across technical crawlability, mobile responsiveness, Core Web Vitals readiness, and semantic markup.
                </p>
              </div>

              <div>
                <Link
                  href="/audit-tool"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-[#003B7A] bg-white rounded-xl shadow-md hover:bg-sky-50 transition-colors whitespace-nowrap"
                >
                  <span>Launch SEO Audit Tool</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Item 1: Small Business SEO Audit Checklist */}
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D]">
                    Small Business SEO Audit Checklist
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A prioritized 24-point technical and on-page checklist designed to uncover indexing barriers, title tag issues, and crawl budget waste.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Robots.txt & XML sitemap verification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Canonical tag consistency rules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Heading hierarchy & entity coverage</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/blog/seo-audit-checklist-small-business"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Read Full Audit Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Item 2: Core Web Vitals Reference Standards */}
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D]">
                    Core Web Vitals Thresholds
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Official Google Page Experience thresholds and engineering tactics for achieving passing scores on mobile devices.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Largest Contentful Paint (LCP): &lt; 2.5s</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Interaction to Next Paint (INP): &lt; 200ms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Cumulative Layout Shift (CLS): &lt; 0.1</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/blog/website-speed-and-usability-basics"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Read Optimization Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Item 3: On-Page SEO Blueprint */}
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D]">
                    On-Page Intent Blueprint
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Guidelines for formatting title tags, meta descriptions, semantic headings, and descriptive internal anchor links for human visitors and search crawlers.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span>50-60 character front-loaded titles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span>Single H1 with sequential H2/H3s</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span>Topic clusters & descriptive anchors</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/blog/on-page-seo-practical-starting-point"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Read On-Page Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 16 Guides Hub */}
        <section className="py-16 bg-sky-50/40 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
              Explore Our Full Library of 16 In-Depth Guides
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto">
              Every guide contains 1,500 to 2,500 words of verified technical instruction across technical SEO, digital marketing, modern web development, and analytics.
            </p>
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
              >
                <span>Browse All Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
