import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ChevronRight, Clock, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { CATEGORIES, getArticlesByCategory } from '@/lib/articles-data';

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found | HighSoftware99',
    };
  }

  return {
    title: `${category.name} Articles & Guides | HighSoftware99`,
    description: category.description,
    alternates: {
      canonical: `https://highsoftware99.org/blog/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | HighSoftware99`,
      description: category.description,
      url: `https://highsoftware99.org/blog/category/${category.slug}`,
      type: 'website',
    },
  };
}

export default async function CategoryArchivePage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categorySlug);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Category Header */}
        <section className="py-16 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-medium">
                {category.name}
              </span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                Category Archive &bull; {articles.length} In-Depth Guides
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
                {category.name}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {category.description}
              </p>
            </div>

          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#0B1B3D]">No articles in this category yet.</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <Link href={`/blog/${article.slug}`} className="block relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </Link>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h2 className="text-lg font-bold text-[#0B1B3D] leading-snug group-hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h2>

                        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {article.wordCount} words
                      </span>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
