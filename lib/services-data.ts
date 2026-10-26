// HighSoftware99 Services Data

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  headline: string;
  subheadline: string;
  image: string;
  icon: string;
  colorTheme: string;
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedArticlesSlugs: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "seo-services",
    title: "Search Engine Optimization Services",
    shortTitle: "SEO Services",
    category: "SEO Services",
    description: "Keyword research, on-page SEO and technical improvements to grow qualified organic visibility.",
    headline: "Ethical, Data-Driven Search Engine Optimization",
    subheadline: "We engineer sustainable organic search visibility through granular keyword research, comprehensive technical audits, semantic content optimization, and structured crawl management.",
    image: "/images/services/seo-services.jpg",
    icon: "Search",
    colorTheme: "blue",
    features: [
      {
        title: "Comprehensive Technical SEO Audits",
        description: "We identify and eliminate crawl errors, canonical tag loops, robots.txt misconfigurations, and indexing bottlenecks that prevent search bots from discovering your key assets.",
      },
      {
        title: "Strategic Keyword & Intent Research",
        description: "Uncover commercial, transactional, and high-value informational search queries that your target audience actually uses when seeking specialized services.",
      },
      {
        title: "Semantic On-Page Content Optimization",
        description: "We optimize title tags, heading hierarchies, entity-based copy, and contextual internal linking structures to maximize topical relevance without keyword stuffing.",
      },
      {
        title: "Search Console Performance Diagnostics",
        description: "Continuous monitoring of impression curves, click-through rates, average ranking positions, and crawl frequency to protect and grow your search footprint.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Crawl",
        description: "We perform a forensic crawl of your entire domain to map existing indexation, crawl errors, status codes, and structural assets.",
      },
      {
        step: "02",
        title: "Intent-Driven Keyword Mapping",
        description: "We map target keyword clusters and search intent to existing URLs or identify content gaps requiring new authoritative guides.",
      },
      {
        step: "03",
        title: "On-Page & Technical Remediation",
        description: "Our team implements clean semantic markup, optimizes metadata, fixes redirect chains, and refines internal link architecture.",
      },
      {
        step: "04",
        title: "Monitoring & Reporting",
        description: "We deliver transparent monthly reporting tracking organic impressions, qualified click gains, and conversion actions.",
      },
    ],
    deliverables: [
      "Full technical crawl & site architecture audit report",
      "Prioritized keyword intent matrix & opportunity gap analysis",
      "On-page metadata & heading recommendations",
      "XML sitemap & robots.txt hygiene review",
      "Monthly search console diagnostics & ranking performance summary",
    ],
    faqs: [
      {
        question: "What does SEO by HighSoftware99 typically include?",
        answer: "Our SEO services cover full-spectrum technical SEO audits, on-page optimization, keyword intent mapping, internal linking architecture, XML sitemap validation, and ongoing search performance reporting tailored to your specific business goals.",
      },
      {
        question: "How long does it take to see tangible organic search results?",
        answer: "Technical crawlability and indexation improvements often reflect within 2 to 4 weeks. Meaningful organic traffic growth and keyword ranking improvements typically compound over 3 to 6 months of steady execution.",
      },
      {
        question: "Do you guarantee first-position Google rankings?",
        answer: "No ethical SEO agency guarantees specific ranking positions, as search algorithms update constantly. We follow official search engine quality guidelines and proven engineering practices to give your website the highest competitive probability of top placement.",
      },
    ],
    relatedArticlesSlugs: [
      "seo-audit-checklist-small-business",
      "on-page-seo-practical-starting-point",
      "technical-seo-crawlability-indexing-guide",
      "modern-keyword-research-search-intent",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Strategy & Execution",
    shortTitle: "Digital Marketing",
    category: "Digital Marketing",
    description: "Campaign planning and strategies to grow your brand, market reach, and qualified inbound inquiries.",
    headline: "Targeted Digital Marketing Built Around Clear ROI",
    subheadline: "We help forward-thinking businesses build multi-channel acquisition funnels, authoritative B2B content programs, and localized visibility strategies that convert clicks into clients.",
    image: "/images/services/digital-marketing.jpg",
    icon: "Megaphone",
    colorTheme: "emerald",
    features: [
      {
        title: "Multi-Channel Acquisition Planning",
        description: "Align your organic search, content distribution, and paid touchpoints into a unified customer acquisition funnel designed for sustainable profitability.",
      },
      {
        title: "B2B Content Marketing & Lead Nurturing",
        description: "Develop in-depth technical guides, case studies, and lead magnets that establish domain authority and educate senior decision-makers.",
      },
      {
        title: "Local SEO & Geographic Optimization",
        description: "Dominate regional search queries with optimized Google Business Profiles, structured local citations, and localized landing pages.",
      },
      {
        title: "Marketing ROI Modeling & Attribution",
        description: "Eliminate vanity metrics with clear calculation of customer acquisition cost (CAC), customer lifetime value (LTV), and channel attribution.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audience & Competitor Research",
        description: "We analyze your ideal customer profile, buyer journey touchpoints, and the competitive positioning within your market.",
      },
      {
        step: "02",
        title: "Campaign & Content Strategy",
        description: "We draft an actionable 90-day editorial and promotional roadmap tailored to your high-margin service offerings.",
      },
      {
        step: "03",
        title: "Execution & Funnel Integration",
        description: "We build conversion-optimized landing pages, publish authoritative articles, and configure conversion tracking.",
      },
      {
        step: "04",
        title: "Performance Review & Iteration",
        description: "Transparent analytics reviews ensure budget is continuously reallocated toward the highest-performing acquisition vectors.",
      },
    ],
    deliverables: [
      "90-Day Digital Growth & Campaign Strategy Blueprint",
      "Target audience persona & buyer journey documentation",
      "B2B editorial calendar & content cluster roadmap",
      "Local citation & Google Business Profile audit",
      "Blended marketing ROI dashboard & monthly executive report",
    ],
    faqs: [
      {
        question: "How do you measure digital marketing return on investment?",
        answer: "We track qualified business leads, form completions, and direct email inquiries against the total investment in media, development, and strategy, calculating exact customer acquisition costs.",
      },
      {
        question: "Is digital marketing suitable for service-based businesses?",
        answer: "Yes. Service-based businesses benefit immensely from high-intent search capture, educational content marketing, and targeted local optimization where client contract values are high.",
      },
    ],
    relatedArticlesSlugs: [
      "digital-marketing-roi-framework",
      "content-strategy-b2b-lead-generation",
      "local-seo-and-google-business-optimization",
    ],
  },
  {
    slug: "web-development",
    title: "Modern Web Development & Engineering",
    shortTitle: "Web Development",
    category: "Web Development",
    description: "Responsive, fast and usable websites engineered for accessibility, search visibility, and growth.",
    headline: "High-Performance Modern Web Engineering",
    subheadline: "We build clean, responsive, and accessible web applications using modern frameworks like Next.js, React, and TypeScript to ensure lightning-fast page delivery and impeccable code quality.",
    image: "/images/services/web-development.jpg",
    icon: "Code",
    colorTheme: "indigo",
    features: [
      {
        title: "Performance-First Frontend Engineering",
        description: "We craft lean, modular codebases with minimal bundle overhead, server-side rendering (SSR), and instant static generation (SSG).",
      },
      {
        title: "Modern Responsive CSS Architecture",
        description: "Fluid typography, CSS Grid, and mobile-first container systems that look stunning across phones, tablets, laptops, and ultra-wide monitors.",
      },
      {
        title: "W3C Accessibility & Semantic Markup",
        description: "Full compliance with WCAG standards, proper ARIA labeling, keyboard navigation, and high-contrast typography hierarchy.",
      },
      {
        title: "Technical SEO Integration by Design",
        description: "Built-in dynamic sitemaps, structured Schema.org JSON-LD, OpenGraph cards, and canonical tag management out of the box.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Architectural Planning & Wireframes",
        description: "We map component hierarchies, routing structures, database schemas, and UX interaction flows before writing code.",
      },
      {
        step: "02",
        title: "Modular Component Development",
        description: "We build reusable, type-safe TypeScript components styled with utility-first CSS and verified accessibility standards.",
      },
      {
        step: "03",
        title: "Cross-Device Testing & Verification",
        description: "Rigorous testing across mobile viewports, tablet resolutions, and desktop browsers to eliminate layout glitches and overflows.",
      },
      {
        step: "04",
        title: "Production Deployment & CDN Tuning",
        description: "Optimized production builds deployed to modern global edge networks with aggressive caching and automated compression.",
      },
    ],
    deliverables: [
      "Clean, production-ready TypeScript/Next.js source code",
      "Full responsive layout verification across mobile, tablet, and desktop",
      "Pre-configured JSON-LD structured data and dynamic sitemaps",
      "Accessible form inputs with client/server validation",
      "Production build documentation & environment variable setup",
    ],
    faqs: [
      {
        question: "Can you redesign or improve an existing website?",
        answer: "Yes. We frequently modernize legacy websites by refactoring slow codebases, migrating to high-performance frameworks like Next.js, and preserving all valuable existing SEO URLs via 301 redirects.",
      },
      {
        question: "Will the website be mobile-friendly and fast?",
        answer: "Every website we engineer is built mobile-first and optimized to achieve top-tier Core Web Vitals performance on real-world cellular connections.",
      },
    ],
    relatedArticlesSlugs: [
      "performance-first-web-development-principles",
      "responsive-design-and-modern-css-architecture",
      "headless-cms-and-nextjs-seo-benefits",
    ],
  },
  {
    slug: "website-optimization",
    title: "Website Speed & Usability Optimization",
    shortTitle: "Website Optimization",
    category: "Website Optimization",
    description: "Improve speed, structure and user experience for better conversion rates and search rankings.",
    headline: "Speed, Core Web Vitals & Conversion Tuning",
    subheadline: "We diagnose and eliminate the technical bottlenecks that cause slow loading, layout shifts, high mobile bounce rates, and lost lead inquiries.",
    image: "/images/services/website-optimization.jpg",
    icon: "Gauge",
    colorTheme: "amber",
    features: [
      {
        title: "Core Web Vitals Optimization",
        description: "Target Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for peak performance scores.",
      },
      {
        title: "Asset Compression & Modern Image Delivery",
        description: "Convert bulky PNGs and JPEGs into next-generation WebP formats with responsive srcsets and lazy loading below the fold.",
      },
      {
        title: "Script Deferral & Main-Thread Unblocking",
        description: "Eliminate render-blocking JavaScript and CSS to allow browsers to paint content instantly on mobile networks.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Streamline contact flows, refine visual call-to-actions, and remove checkout or inquiry friction points.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Synthetic & Field Data Diagnostics",
        description: "We measure real-user monitoring (RUM) and lab benchmarks to isolate the exact scripts, assets, or server lags causing delays.",
      },
      {
        step: "02",
        title: "Critical Rendering Path Engineering",
        description: "We inline critical CSS, preload primary font assets, and defer third-party analytics tags to free the main thread.",
      },
      {
        step: "03",
        title: "Layout Stability & Dimension Enforcement",
        description: "We add explicit aspect ratios and reserved containers to completely eliminate disruptive layout shifts during page loading.",
      },
      {
        step: "04",
        title: "Post-Optimization Verification",
        description: "We run regression audits across multiple device profiles to confirm that performance gains remain stable over time.",
      },
    ],
    deliverables: [
      "Before-and-after Core Web Vitals diagnostic benchmark report",
      "Optimized asset bundles and compressed media library",
      "Main-thread JavaScript profiling & execution reduction plan",
      "Conversion flow usability assessment & UX recommendations",
      "Continuous performance monitoring guidelines",
    ],
    faqs: [
      {
        question: "Does website speed directly impact Google rankings?",
        answer: "Yes. Google uses Core Web Vitals as an explicit page experience ranking factor. Fast, responsive websites are prioritized over sluggish alternatives with high bounce rates.",
      },
      {
        question: "What is Cumulative Layout Shift and why does it matter?",
        answer: "Cumulative Layout Shift (CLS) measures visual stability. When buttons or text jump unexpectedly as images load, visitors become frustrated and may accidentally click the wrong element, increasing site abandonment.",
      },
    ],
    relatedArticlesSlugs: [
      "website-speed-and-usability-basics",
      "conversion-rate-optimization-for-service-websites",
      "mobile-page-speed-optimization-techniques",
    ],
  },
  {
    slug: "analytics-and-tracking",
    title: "Analytics, Search Console & Performance Tracking",
    shortTitle: "Analytics & Tracking",
    category: "Analytics and Tracking",
    description: "Accurate tracking, GA4 event implementation, and Search Console diagnostics for data-backed growth.",
    headline: "Accurate Tracking, Actionable Growth Intelligence",
    subheadline: "We establish clean, privacy-compliant measurement infrastructures that give business leaders absolute visibility into their organic traffic and conversion funnels.",
    image: "/images/services/analytics-and-tracking.jpg",
    icon: "LineChart",
    colorTheme: "sky",
    features: [
      {
        title: "Google Analytics 4 Custom Event Architecture",
        description: "Move beyond default pageviews to track high-value business interactions such as form submissions, downloads, and button clicks.",
      },
      {
        title: "Google Search Console Performance Audits",
        description: "Identify indexing drops, crawl anomalies, coverage warnings, and keyword opportunity gaps ranking just off the first page.",
      },
      {
        title: "Privacy-First First-Party Data Capture",
        description: "Implement reliable server-side tagging and UTM parameter conventions resilient against browser cookie restrictions.",
      },
      {
        title: "Executive Growth Dashboards & Reporting",
        description: "Clear, scannable monthly reports connecting organic search metrics directly to qualified business inquiry volume.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Tracking Audit & Taxonomy Mapping",
        description: "We review existing tags, identify duplicate tracking scripts, and define a consistent event naming taxonomy.",
      },
      {
        step: "02",
        title: "GA4 & Tag Manager Implementation",
        description: "We configure Google Tag Manager with custom triggers and parameters to capture key user milestones.",
      },
      {
        step: "03",
        title: "Search Console & Sitemap Sync",
        description: "We verify property ownership, submit XML sitemaps, and diagnose indexing coverage reports.",
      },
      {
        step: "04",
        title: "Verification & Reporting Dashboard",
        description: "We validate event firing in debug mode and establish automated reporting templates for ongoing monitoring.",
      },
    ],
    deliverables: [
      "Custom GA4 event tracking blueprint and documentation",
      "Google Tag Manager container setup with clean triggers",
      "Search Console indexation & query performance report",
      "Standardized UTM parameter campaign tagging guide",
      "Executive monthly KPI reporting template",
    ],
    faqs: [
      {
        question: "Why are my Google Analytics numbers different from Search Console?",
        answer: "Google Analytics tracks user sessions and browser interactions, which can be affected by ad blockers or cookie preferences. Search Console records raw search engine result impressions and clicks before the user reaches your server.",
      },
      {
        question: "How do you ensure user privacy while tracking conversions?",
        answer: "We configure IP anonymization, utilize cookieless first-party tracking where appropriate, and ensure no personally identifiable information (PII) is transmitted to analytics properties.",
      },
    ],
    relatedArticlesSlugs: [
      "google-analytics-4-event-tracking-mastery",
      "search-console-performance-diagnostics",
      "marketing-attribution-and-data-accuracy",
    ],
  },
];

export function getAllServices(): ServiceDetail[] {
  return SERVICES;
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
