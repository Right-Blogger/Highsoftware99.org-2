import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 columns on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-9">
                <Image
                  src="/images/brand/logo.png"
                  alt="HighSoftware99 Logo"
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </div>
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              We provide SEO, digital marketing and web development services to help businesses grow online.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:collab.topagency@gmail.com"
                  className="hover:text-blue-600 transition-colors font-medium underline underline-offset-4"
                >
                  collab.topagency@gmail.com
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Professional inquiry response within 24 business hours.
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/seo-services" className="hover:text-blue-600 transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-blue-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-blue-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-optimization" className="hover:text-blue-600 transition-colors">
                  Website Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/analytics-and-tracking" className="hover:text-blue-600 transition-colors">
                  Analytics & Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Guides & Articles
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-600 transition-colors">
                  SEO Checklist
                </Link>
              </li>
              <li>
                <Link href="/audit-tool" className="hover:text-blue-600 transition-colors">
                  SEO Audit Tool
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} HighSoftware99. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-800 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
