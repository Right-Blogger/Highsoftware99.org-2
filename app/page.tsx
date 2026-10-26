import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Megaphone, 
  Code, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ClipboardList, 
  Settings, 
  LineChart, 
  Sparkles 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import HomeFaq from '@/components/HomeFaq';

export const metadata = {
  title: 'SEO, Digital Marketing and Web Development | HighSoftware99',
  description: 'HighSoftware99 provides SEO audits, keyword research, website optimization, digital marketing, and web development services to help businesses grow online.',
  alternates: {
    canonical: 'https://highsoftware99.org/',
  },
  openGraph: {
    title: 'SEO, Digital Marketing and Web Development | HighSoftware99',
    description: 'HighSoftware99 provides ethical SEO, digital marketing, and web development tailored to your business goals.',
    url: 'https://highsoftware99.org/',
    siteName: 'HighSoftware99',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 md:py-24 bg-gradient-to-b from-sky-50/40 via-white to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="inline-block text-xs sm:text-sm font-bold text-blue-600 tracking-wider uppercase">
                  Digital Growth Services
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0B1B3D] tracking-tight leading-[1.12]">
                  Build a Stronger<br className="hidden sm:inline" /> Online Presence
                </h1>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                  Ethical SEO, digital marketing and web development tailored to your business goals.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/services/seo-services"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0052cc] rounded-lg shadow-sm hover:bg-[#0042a6] transition-colors gap-2"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src="/images/home/hero-growth.png"
                      alt="Digital specialist reviewing growth analytics and search optimization metrics on a laptop"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                Services Built Around Your Goals
              </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: SEO Services */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-105 transition-transform">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-3">
                    SEO Services
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Keyword research, on-page SEO and technical improvements.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services/seo-services"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Digital Marketing */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-105 transition-transform">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-3">
                    Digital Marketing
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Campaign planning and strategies to grow your brand and reach.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services/digital-marketing"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Web Development */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-105 transition-transform">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-3">
                    Web Development
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Responsive, fast and usable websites for your business.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Website Optimization */}
              <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-105 transition-transform">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3D] mb-3">
                    Website Optimization
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Improve speed, structure and user experience for better results.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services/website-optimization"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

            {/* Additional 5th Category Feature Highlight */}
            <div className="mt-8 bg-sky-50/60 rounded-2xl p-6 sm:p-8 border border-sky-100/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-xs flex-shrink-0">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1B3D]">
                    Looking for Analytics and Tracking?
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    We configure accurate Google Analytics 4, Search Console diagnostics, and reliable attribution.
                  </p>
                </div>
              </div>
              <Link
                href="/services/analytics-and-tracking"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-white rounded-lg border border-blue-200 hover:bg-sky-50 transition-colors flex-shrink-0 shadow-2xs"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS / A CLEAR, PRACTICAL PROCESS */}
        <section className="py-20 bg-sky-50/30 border-y border-slate-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                A Clear, Practical Process
              </h2>
            </div>

            {/* 3 Step Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-xs relative z-10">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    1
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-2">
                  Review
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  We understand your current website and goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-xs relative z-10">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    2
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-2">
                  Plan
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  We prioritize the most relevant improvements.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-xs relative z-10">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#0052cc] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    3
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-2">
                  Improve
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  We implement the changes and review progress.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ABOUT HIGH SOFTWARE99 / PRACTICAL SUPPORT, CLEAR COMMUNICATION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Left Column Image */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[16/11]">
                  <Image
                    src="/images/home/about-consulting.png"
                    alt="Laptop on desk with website performance charts and practical consulting materials"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block">
                  About High Software99
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                  Practical Support,<br />Clear Communication
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  We provide tailored digital solutions to help your business grow online. Our focus is on ethical SEO methods, effective marketing strategies and reliable web development, with transparent reporting at every step.
                </p>

                {/* 3 Bullet Points */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-slate-800">
                      Tailored recommendations
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-slate-800">
                      Clear action plans
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-slate-800">
                      Progress reporting
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Read more about our approach</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* RESOURCES / RESOURCES FOR BETTER WEBSITES */}
        <section className="py-20 bg-sky-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Resources
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                Resources for Better Websites
              </h2>
            </div>

            {/* 3 Featured Guides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/home/resource-audit-checklist.png"
                    alt="SEO audit checklist document for small business websites"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                      Resource
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                      SEO Audit Checklist for Small Business Websites
                    </h3>
                  </div>
                  <div>
                    <Link
                      href="/blog/seo-audit-checklist-small-business"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/home/resource-onpage-seo.png"
                    alt="Laptop on desk with on-page SEO strategy diagrams"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                      Resource
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                      On-Page SEO: A Practical Starting Point
                    </h3>
                  </div>
                  <div>
                    <Link
                      href="/blog/on-page-seo-practical-starting-point"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/home/resource-website-speed.png"
                    alt="Laptop with website performance speed gauge and Core Web Vitals basics"
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                      Resource
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mt-2 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                      Website Speed and Usability Basics
                    </h3>
                  </div>
                  <div>
                    <Link
                      href="/blog/website-speed-and-usability-basics"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors gap-1.5"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* View All Guides Link */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>Browse All 16 Verified Guides</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </Link>
            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <HomeFaq />

        {/* PRE-FOOTER CTA */}
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
