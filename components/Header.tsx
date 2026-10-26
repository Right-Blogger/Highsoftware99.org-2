'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-44 h-8 sm:w-48 sm:h-9">
              <Image
                src="/images/brand/logo.png"
                alt="HighSoftware99 Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 180px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            <Link
              href="/"
              className={`relative py-2 transition-colors ${
                isActive('/') && pathname === '/'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
              {isActive('/') && pathname === '/' && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </Link>

            {/* SEO Services Link */}
            <Link
              href="/services/seo-services"
              className={`py-2 transition-colors ${
                pathname === '/services/seo-services'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SEO Services
            </Link>

            {/* Digital Marketing Link */}
            <Link
              href="/services/digital-marketing"
              className={`py-2 transition-colors ${
                pathname === '/services/digital-marketing'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Digital Marketing
            </Link>

            {/* Web Development Link */}
            <Link
              href="/services/web-development"
              className={`py-2 transition-colors ${
                pathname === '/services/web-development'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web Development
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 py-2 transition-colors ${
                  isActive('/blog') || isActive('/resources') || isActive('/faq') || isActive('/audit-tool')
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-expanded={resourcesDropdownOpen}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {resourcesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                      <Link
                        href="/blog"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-sky-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-medium block">Articles & Guides</span>
                        <span className="text-xs text-slate-500">In-depth SEO & engineering articles</span>
                      </Link>
                      <Link
                        href="/resources"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-sky-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-medium block">Resource Library</span>
                        <span className="text-xs text-slate-500">Checklists & best practices</span>
                      </Link>
                      <Link
                        href="/audit-tool"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-sky-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-medium block">SEO Audit Tool</span>
                        <span className="text-xs text-slate-500">Interactive website health checker</span>
                      </Link>
                      <Link
                        href="/faq"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-sky-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="font-medium block">FAQ</span>
                        <span className="text-xs text-slate-500">Common questions answered</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`py-2 transition-colors ${
                pathname === '/contact'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0B1B3D]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              <Link
                href="/services/seo-services"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/services/seo-services' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                SEO Services
              </Link>
              <Link
                href="/services/digital-marketing"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/services/digital-marketing' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Digital Marketing
              </Link>
              <Link
                href="/services/web-development"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/services/web-development' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Web Development
              </Link>
              <Link
                href="/services/website-optimization"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/services/website-optimization' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Website Optimization
              </Link>
              <Link
                href="/blog"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive('/blog') ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Articles & Guides
              </Link>
              <Link
                href="/resources"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/resources' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Resource Library
              </Link>
              <Link
                href="/audit-tool"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/audit-tool' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                SEO Audit Tool
              </Link>
              <Link
                href="/faq"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/faq' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                FAQs
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/about' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  pathname === '/contact' ? 'bg-sky-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4 px-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
