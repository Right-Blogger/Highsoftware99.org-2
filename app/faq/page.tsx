'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, HelpCircle, ArrowRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FaqItem[] = [
  // General & Process
  {
    category: "General & Process",
    q: "What does an SEO service include?",
    a: "Our SEO services encompass technical crawl audits, robots.txt and sitemap sanitation, keyword intent mapping, semantic on-page optimization (titles, headings, meta tags, and internal link structure), Core Web Vitals performance review, and transparent monthly progress reporting.",
  },
  {
    category: "General & Process",
    q: "Can you improve an existing website without rebuilding it?",
    a: "Yes. In the majority of client engagements, we audit and optimize established websites in place—resolving crawl roadblocks, speeding up asset delivery, improving mobile responsiveness, and refining content architecture without disrupting your ongoing business operations.",
  },
  {
    category: "General & Process",
    q: "How do we report progress and milestones?",
    a: "We provide structured monthly reporting tracking primary verified metrics: organic search impression trends, keyword ranking trajectories, verified click gains, and lead conversion milestones derived directly from Google Search Console and Google Analytics 4.",
  },
  {
    category: "General & Process",
    q: "How can I discuss my project with HighSoftware99?",
    a: "You can reach out directly via email to collab.topagency@gmail.com or submit our contact consultation form. We will review your website and reply within 24 business hours with initial diagnostic observations.",
  },

  // Technical SEO
  {
    category: "Technical SEO",
    q: "What is crawl budget and why does it matter for my site?",
    a: "Crawl budget is the number of URLs search engine bots can and want to crawl on your domain within a given timeframe. If your site has duplicate parameters, broken redirect chains, or soft 404s, bots waste crawl budget on low-value pages instead of indexing your priority service content.",
  },
  {
    category: "Technical SEO",
    q: "Do you guarantee #1 ranking positions on Google?",
    a: "No ethical agency can guarantee specific ranking positions because search engine algorithms update continuously. We adhere strictly to official search guidelines and proven engineering best practices to give your web pages the highest mathematical probability of ranking competitively.",
  },

  // Web Engineering & Speed
  {
    category: "Web Engineering & Speed",
    q: "Why is website speed considered an SEO ranking factor?",
    a: "Search engines like Google explicitly use Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) as user experience signals. Sluggish websites have higher bounce rates and deliver poor user satisfaction, which negatively influences organic ranking stability.",
  },
  {
    category: "Web Engineering & Speed",
    q: "What modern web frameworks do you utilize for development?",
    a: "We specialize in modern performance-first frameworks including Next.js, React, TypeScript, and Tailwind CSS. These technologies deliver blazing-fast static generation, seamless server-side rendering, and immaculate mobile responsiveness.",
  },

  // Analytics & Privacy
  {
    category: "Analytics & Privacy",
    q: "How do you handle Google Analytics 4 setup and user privacy?",
    a: "We configure custom GA4 event tracking, IP anonymization, and privacy-compliant first-party data capture. We ensure your tracking infrastructure provides accurate business intelligence without collecting personally identifiable information (PII) or violating user trust.",
  },
];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const categories = ['all', 'General & Process', 'Technical SEO', 'Web Engineering & Speed', 'Analytics & Privacy'];

  const filteredFaqs = FAQS.filter(
    (faq) => selectedCategory === 'all' || faq.category === selectedCategory
  );

  const toggle = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Help Center & Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Find clear, straightforward answers to common questions about our SEO methodology, web engineering practices, and reporting standards.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Questions' : cat}
                </button>
              ))}
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openQuestion === faq.q;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.q)}
                      className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#0B1B3D] focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Direct Question Contact Box */}
            <div className="mt-16 p-8 bg-sky-50/60 rounded-3xl border border-sky-100 text-center space-y-4">
              <h3 className="text-xl font-bold text-[#0B1B3D]">
                Have a Question Not Answered Here?
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Reach out to our engineering and consulting team directly. We are happy to review your specific situation.
              </p>
              <div>
                <a
                  href="mailto:collab.topagency@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email collab.topagency@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
