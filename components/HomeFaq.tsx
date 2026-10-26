'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What does an SEO service include?",
    answer: "Our SEO services include complete technical crawl audits, keyword intent research, on-page optimization (titles, headings, meta tags, and internal link structure), XML sitemap and robots.txt validation, Core Web Vitals performance review, and transparent monthly progress reporting.",
  },
  {
    question: "Can you improve an existing website?",
    answer: "Yes, absolutely. We frequently audit and optimize established websites to eliminate indexing barriers, fix broken canonical chains, improve mobile responsiveness, and accelerate page load speeds without disrupting your ongoing business operations.",
  },
  {
    question: "How do we report progress?",
    answer: "We provide structured monthly reporting highlighting real metrics: organic search impression trends, keyword ranking trajectories, verified click increases, and lead conversion milestones derived directly from Google Search Console and Google Analytics 4.",
  },
  {
    question: "How can I discuss my project?",
    answer: "You can reach out to our team directly by emailing collab.topagency@gmail.com or by submitting our contact form. We will review your website and reply within 24 business hours with initial diagnostic observations and next steps.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-sky-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-4 sm:py-5 text-left font-medium text-slate-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg text-[#0B1B3D] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-blue-600 transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
