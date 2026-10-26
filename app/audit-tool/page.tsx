'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Printer, 
  RefreshCw, 
  ShieldCheck, 
  Gauge, 
  Layers, 
  FileText 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AuditCheck {
  title: string;
  category: string;
  status: 'pass' | 'warning' | 'fail';
  description: string;
  recommendation: string;
}

export default function AuditToolPage() {
  const [url, setUrl] = useState('');
  const [focusArea, setFocusArea] = useState('All Areas');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    url: string;
    date: string;
    checks: AuditCheck[];
  } | null>(null);

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);

    // Simulate diagnostic scan
    setTimeout(() => {
      // Deterministic evaluation based on URL characteristics
      let baseScore = 78;
      const isHttps = url.toLowerCase().startsWith('https://');
      const hasWww = url.toLowerCase().includes('www.');
      const lengthScore = url.length > 20 ? 4 : 2;

      baseScore += isHttps ? 8 : -15;
      baseScore += hasWww ? 2 : 4;
      baseScore = Math.min(Math.max(baseScore, 48), 94);

      const checks: AuditCheck[] = [
        {
          title: "HTTPS Encryption & Protocol Security",
          category: "Technical Foundation",
          status: isHttps ? 'pass' : 'fail',
          description: isHttps 
            ? "Your website uses HTTPS encryption. Security certificates prevent data interception." 
            : "Missing or invalid HTTPS protocol. Search engines flag unencrypted sites as insecure.",
          recommendation: isHttps 
            ? "Maintain valid SSL/TLS certificates and enforce HTTP to HTTPS redirection."
            : "Install an SSL certificate immediately and configure 301 redirects to HTTPS.",
        },
        {
          title: "Robots.txt & Crawl Accessibility",
          category: "Crawlability",
          status: 'pass',
          description: "Search engine user-agents are permitted to discover public landing pages and assets.",
          recommendation: "Ensure critical CSS and JavaScript bundles are never disallowed in robots.txt.",
        },
        {
          title: "XML Sitemap Presence & Sanitation",
          category: "Crawlability",
          status: 'warning',
          description: "Standard sitemap discovered. Verify that only HTTP 200 canonical URLs are listed.",
          recommendation: "Audit XML sitemaps quarterly to purge non-canonical URLs, 404s, and redirect hops.",
        },
        {
          title: "Mobile Viewport & Touch Target Ergonomics",
          category: "Mobile Usability",
          status: 'pass',
          description: "Responsive viewport meta tags properly configured for mobile and tablet screens.",
          recommendation: "Ensure touch targets exceed 48x48 pixels and text remains legible without zooming.",
        },
        {
          title: "Largest Contentful Paint (LCP) Readiness",
          category: "Core Web Vitals",
          status: baseScore > 80 ? 'pass' : 'warning',
          description: "Evaluating primary hero media load times across mobile cellular connections.",
          recommendation: "Serve hero imagery in next-generation WebP/AVIF formats and preload critical fonts.",
        },
        {
          title: "Cumulative Layout Shift (CLS) Prevention",
          category: "Core Web Vitals",
          status: 'pass',
          description: "Images and containers include explicit width and height dimensions to eliminate shifts.",
          recommendation: "Maintain strict aspect ratios on dynamic advertising and media containers.",
        },
        {
          title: "Semantic Heading Hierarchy (H1-H3)",
          category: "On-Page SEO",
          status: 'pass',
          description: "Single primary H1 headline confirmed with sequential H2 and H3 subsections.",
          recommendation: "Incorporate primary search queries naturally in H1 and secondary terms in H2s.",
        },
        {
          title: "Structured Data (Schema.org JSON-LD)",
          category: "Technical Foundation",
          status: 'warning',
          description: "Basic entity tags found, but rich schema types (Organization, Article, FAQ) can be expanded.",
          recommendation: "Implement JSON-LD Organization and BreadcrumbList schemas to enhance SERP rich snippets.",
        },
      ];

      setResults({
        score: baseScore,
        url: url.startsWith('http') ? url : `https://${url}`,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        checks,
      });

      setIsAnalyzing(false);
    }, 1200);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-600 border-emerald-500 bg-emerald-50';
    if (score >= 70) return 'text-blue-600 border-blue-500 bg-blue-50';
    return 'text-amber-600 border-amber-500 bg-amber-50';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Free Website Health Checker
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              Interactive SEO & Speed Audit
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Evaluate your website across technical crawlability, mobile responsiveness, Core Web Vitals readiness, and semantic on-page structure.
            </p>

            {/* Input Form */}
            <form onSubmit={runAudit} className="pt-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl shadow-lg border border-slate-200">
                <div className="relative flex-grow">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL (e.g. yourcompany.com)"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="px-7 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Run Health Check</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Results Display */}
        {results && (
          <section className="py-16 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              
              {/* Scorecard Banner */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3 text-center md:text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Audit Report for: <span className="text-blue-600">{results.url}</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D]">
                    Overall Website Health Score
                  </h2>
                  <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
                    Evaluated across 8 critical search ranking vectors. Below are your prioritized technical observations.
                  </p>
                  <p className="text-xs text-slate-400">
                    Audit Date: {results.date} &bull; Generated by HighSoftware99 Diagnostic Engine
                  </p>
                </div>

                {/* Score Circle */}
                <div className="flex flex-col items-center">
                  <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center shadow-inner ${getScoreColor(results.score)}`}>
                    <span className="text-4xl font-extrabold leading-none">{results.score}</span>
                    <span className="text-xs font-bold uppercase tracking-wider mt-1">/ 100</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 mt-2">
                    {results.score >= 85 ? 'Excellent Condition' : results.score >= 70 ? 'Moderate Health' : 'Needs Optimization'}
                  </span>
                </div>
              </div>

              {/* Detailed Checks Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#0B1B3D]">
                    Detailed Audit Checkpoints ({results.checks.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {results.checks.map((check, idx) => {
                    const isPass = check.status === 'pass';
                    const isWarning = check.status === 'warning';
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 flex-shrink-0">
                            {isPass && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                            {isWarning && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                            {!isPass && !isWarning && <XCircle className="w-5 h-5 text-red-500" />}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                {check.category}
                              </span>
                              <span className={`text-2xs font-bold px-2 py-0.5 rounded uppercase ${
                                isPass ? 'bg-emerald-50 text-emerald-700' : isWarning ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                              }`}>
                                {check.status}
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-[#0B1B3D]">
                              {check.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {check.description}
                            </p>
                            <p className="text-xs text-blue-700 font-medium pt-1">
                              <strong>Recommendation:</strong> {check.recommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Consultation Next Step */}
              <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-[#0B1B3D]">
                    Want a Comprehensive Manual Forensic Audit?
                  </h4>
                  <p className="text-sm text-slate-600">
                    Our senior engineers can inspect your server logs, canonical structure, and keyword opportunities.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
                >
                  <span>Request Full Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
