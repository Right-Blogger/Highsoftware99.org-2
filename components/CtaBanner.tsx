import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-[#003B7A] via-[#004994] to-[#0A4D9E] py-14 sm:py-16 text-white relative overflow-hidden">
      {/* Subtle background glow/accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Ready to Improve Your Website?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Tell us about your goals and the support you need.
            </p>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-[#003B7A] bg-white rounded-lg shadow-sm hover:bg-sky-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
