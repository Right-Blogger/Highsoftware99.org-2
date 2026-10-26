'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, Tag, BookOpen, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import { ARTICLES, CATEGORIES, Article } from '@/lib/articles-data';

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.categorySlug === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = ARTICLES[0]; // Complete SEO audit checklist

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />

      <main className="flex-grow">
        {/* Blog Header & Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              Articles & Guides &bull; 16 Verified Resources
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight">
              Resources for Better Websites
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              In-depth, thoroughly researched guides on technical SEO, digital marketing ROI, performance engineering, and accurate analytics. Each article verified between 1,500 and 2,500 words.
            </p>

            {/* Live Search Bar */}
            <div className="pt-6 max-w-xl mx-auto">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by topic, keyword, or category..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Navigation */}
        <section className="py-6 border-b border-slate-100 bg-white sticky top-20 z-30 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Categories ({ARTICLES.length})
              </button>

              {CATEGORIES.map((cat) => {
                const count = ARTICLES.filter((a) => a.categorySlug === cat.slug).length;
                const isSelected = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Article (When viewing 'all' and no search query) */}
        {selectedCategory === 'all' && !searchQuery && featuredArticle && (
          <section className="py-12 bg-sky-50/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 group">
                
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt}
                    fill
                    priority
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        Featured Resource
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] leading-tight group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Verified {featuredArticle.wordCount} words
                    </span>

                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-xl font-bold text-[#0B1B3D]">No matching articles found</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Try adjusting your search query or reset your category filter to view all available guides.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Featured Image */}
                      <Link href={`/blog/${article.slug}`} className="block relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          className="object-cover group-hover:scale-103 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </Link>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <Link
                            href={`/blog/category/${article.categorySlug}`}
                            className="font-bold text-blue-600 uppercase tracking-wider hover:underline"
                          >
                            {article.category}
                          </Link>
                          <span className="text-slate-500">{article.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#0B1B3D] leading-snug group-hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>

                        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">
                        {article.wordCount} words
                      </span>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>Read Guide</span>
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
