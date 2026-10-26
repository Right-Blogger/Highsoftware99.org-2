import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Megaphone, 
  Code, 
  Gauge, 
  LineChart, 
  FileText, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { getAllServices, getServiceBySlug } from '@/lib/services-data';
import { getArticleBySlug } from '@/lib/articles-data';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | HighSoftware99',
    };
  }

  return {
    title: `${service.title} | HighSoftware99`,
    description: service.subheadline,
    alternates: {
      canonical: `https://highsoftware99.org/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | HighSoftware99`,
      description: service.subheadline,
      url: `https://highsoftware99.org/services/${service.slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related articles
  const relatedArticles = service.relatedArticlesSlugs
    .map((artSlug) => getArticleBySlug(artSlug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Service Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back link */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block">
                  Service Offering &bull; {service.category}
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                  {service.headline}
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {service.subheadline}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors gap-2"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Explore Capabilities
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-[16/11]">
                  <Image
                    src={service.image}
                    alt={`${service.title} specialized engineering and strategy`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Core Capabilities / Features */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                What We Deliver in {service.shortTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1B3D]">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-20 bg-sky-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                Our Proven 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-blue-600/30 font-mono block mb-3">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1B3D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tangible Deliverables */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-sky-50/70 to-white rounded-3xl p-8 sm:p-12 border border-sky-100">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Scope of Work
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-2 mb-4">
                  Tangible Deliverables Included
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  We believe in concrete documentation, actionable playbooks, and transparent verification.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        {service.faqs.length > 0 && (
          <section className="py-20 bg-slate-50/60 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Service FAQs
                </span>
                <h2 className="text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-2">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-lg font-bold text-[#0B1B3D]">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related In-Depth Guides */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                    Knowledge Base
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
                    Related Technical Guides
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Explore all guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col group"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-100">
                      <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {article.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] mt-1 leading-snug group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500">
                        <span>{article.readTime}</span>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          <span>Read Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
