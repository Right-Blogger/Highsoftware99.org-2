import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Tag, 
  CheckCircle, 
  ChevronRight, 
  BookOpen, 
  Share2, 
  User 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import ArticleRenderer from '@/components/ArticleRenderer';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles-data';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | HighSoftware99',
    };
  }

  return {
    title: `${article.metaTitle}`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://highsoftware99.org/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://highsoftware99.org/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: `https://highsoftware99.org${article.image}`,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.categorySlug, 3);

  // Extract H2 headings for Table of Contents
  const headings = article.body
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { text, id };
    });

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: [`https://highsoftware99.org${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'HighSoftware99',
      url: 'https://highsoftware99.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HighSoftware99',
      logo: {
        '@type': 'ImageObject',
        url: 'https://highsoftware99.org/images/brand/logo.png',
      },
    },
    description: article.metaDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://highsoftware99.org/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow">
        {/* Article Header & Breadcrumbs */}
        <div className="bg-slate-50/70 border-b border-slate-100 py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <Link
                href={`/blog/category/${article.categorySlug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {article.category}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Title Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/blog/category/${article.categorySlug}`}
                className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors"
              >
                {article.category}
              </Link>

              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>

              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                Verified {article.wordCount} words
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0B1B3D] tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              {article.excerpt}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-slate-500 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-slate-700">{article.author}</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.date}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <p className="text-xs text-slate-400 italic text-center mt-2.5">
            {article.imageAlt}
          </p>
        </div>

        {/* Main Content Layout with Table of Contents */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Table of Contents Box */}
            {headings.length > 0 && (
              <div className="mb-12 p-6 sm:p-8 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-4">
                <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-base sm:text-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2">
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#${h.id}`}
                      className="block text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all"
                    >
                      &rarr; {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Article Content */}
            <ArticleRenderer content={article.body} />

            {/* Tags */}
            <div className="mt-14 pt-8 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
                Article Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                  >
                    <Tag className="w-3 h-3 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* In-Article Consulting Callout */}
            <div className="mt-12 p-8 bg-gradient-to-r from-sky-50 via-white to-sky-50 rounded-2xl border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-[#0B1B3D]">
                  Need Help Implementing These Recommendations?
                </h3>
                <p className="text-sm text-slate-600">
                  Discuss your website&apos;s technical audit and growth strategy with HighSoftware99.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-slate-50/70 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                  Related Guides
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
                  Continue Reading on {article.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <Link href={`/blog/${rel.slug}`} className="block relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.imageAlt}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </Link>
                      <div className="p-6 space-y-3">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                          {rel.category}
                        </span>
                        <h3 className="text-base font-bold text-[#0B1B3D] leading-snug group-hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{rel.wordCount} words</span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
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
