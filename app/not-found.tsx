import React from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Home, BookOpen, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found | HighSoftware99',
  description: 'The requested page could not be located on HighSoftware99.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full text-center space-y-6">
          <span className="text-5xl sm:text-7xl font-extrabold text-blue-600 font-mono tracking-tight block">
            404
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Use the links below to explore our verified guides and services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse Guides</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-sky-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
