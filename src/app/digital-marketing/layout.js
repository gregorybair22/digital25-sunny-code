// app/digital-marketing/layout.js
import Script from "next/script";
export const metadata = {
  title: "Digital Marketing Services - Web Marketing & Branding Agency",
  description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
  alternates: {
    canonical: "https://adfinityclarity.com/digital-marketing",
    languages: {
      "en": "https://adfinityclarity.com/digital-marketing",
      "x-default": "https://adfinityclarity.com/digital-marketing",
  },
  },
  openGraph: {
    title: "Digital Marketing Services - Web Marketing & Branding Agency",
    description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
    url: "https://adfinityclarity.com/digital-marketing",
    siteName: "Adfinityclarity.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
        width: 1600,
        height: 720,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services - Web Marketing & Branding Agency",
    description: "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services",
    site: "@adfinityclarity",
    images: [
      "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
    ],
  },
};

export default function DigitalMarketingLayout({ children }) {
  return <>
  
   <Script
  id="digital-breadcrumb-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://adfinityclarity.com/digital-marketing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.adfinityclarity.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Digital Marketing Services",
          "item": "https://adfinityclarity.com/digital-marketing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://adfinityclarity.com/seo-search-engine-optimization"
        }
      ]
    })
  }}
/>

<Script
  id="digital-solutions-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://adfinityclarity.com/digital-marketing#Solutions",
      "name": "Solutions of Digital Marketing Services",
      "description": "We shape our online marketing services around your industry goals and audience needs. Whether your goal is to raise brand awareness, attract more qualified leads, or improve conversion rates, our strategies are built to support measurable growth.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Search Engine Optimization (SEO)",
          "url": "https://adfinityclarity.com/seo-search-engine-optimization",
          "description": "Our SEO services help your business get found on Google and Bing search engine by improving your organic search visibility."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Social Media Marketing (SMM)",
          "url": "https://adfinityclarity.com/digital-marketing",
          "description": "This will help you to know new people and bring back existing ones with smart ad campaigns on platforms like Facebook, LinkedIn, and YouTube."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pay-Per-Click (PPC) Advertising",
          "url": "https://adfinityclarity.com/digital-marketing",
          "description": "Need quick traffic and leads? PPC puts your brand where intent meets action, right when your audience is ready to choose."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Content Marketing",
          "url": "https://adfinityclarity.com/digital-marketing",
          "description": "Content marketing helps people to understand what your business offers, who it's for, and why it's helpful to them."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Email marketing",
          "url": "https://adfinityclarity.com/digital-marketing",
          "description": "Email marketing helps you to stay connected with those people who are already interested in your business."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Affiliate Marketing",
          "url": "https://adfinityclarity.com/digital-marketing",
          "description": "Affiliate marketing lets other people promote your business and earn a small share when they help you to make a sale."
        }
      ]
    })
  }}
/>

<Script
  id="digital-faq-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is my digital marketing working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can see clear signs such as more website traffic, better search rankings, more leads, and higher conversion rates. Tools like Google Analytics, Search Console, and CRM reports can help you track performance."
          }
        },
        {
          "@type": "Question",
          "name": "How can digital marketing help my business grow online efficiently?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing brings in new customers, improves online visibility, and increases sales through targeted channels like SEO, social media, and paid advertising. It seeks to reach the right audience at the right time, offering measurable results."
          }
        },
        {
          "@type": "Question",
          "name": "What should I look for in a digital marketing agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for honest reporting that is easy to digest for a lay person, have a proven track record for success, proven results in the past that relate to your industry, and good communication. A successful agency will align their digital marketing objectives with your goals and will keep within your budget."
          }
        },
        {
          "@type": "Question",
          "name": "How do you improve ROI with digital marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing campaigns target people more precisely than traditional media. Better targeting means less waste in budgets, resulting in better results. Additionally, the ability to utilize tracking tools means you can identify what worked and what didn't in order to make adjustments."
          }
        }
      ]
    })
  }}
/>

<Script
  id="digital-article-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://adfinityclarity.com/digital-marketing#article",
      "isPartOf": {
        "@id": "https://adfinityclarity.com/digital-marketing"
      },
      "author": [
        {
          "@id": "https://adfinityclarity.com/digital-marketing#/schema/"
        }
      ],
      "headline": "Digital Marketing Services",
      "datePublished": "2024-03-01T07:03:00+00:00",
      "dateModified": "2025-07-03T14:42:10+00:00",
      "mainEntityOfPage": {
        "@id": "https://adfinityclarity.com/digital-marketing"
      },
      "wordCount": 1200,
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/>

<Script
  id="digital-website-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/digital-marketing#website",
      "url": "https://adfinityclarity.com/digital-marketing",
      "name": "Digital Marketing Agency",
      "description": "All Digital Marketing Services",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://adfinityclarity.com/digital-marketing"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    })
  }}
/>

<Script
  id="digital-definedterm-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": "https://adfinityclarity.com/digital-marketing#definedterm-digital-marketing",
      "name": "Smart marketing starts with smart execution. Our digital marketing services combine artificial intelligence, performance data, and technical know-how to build systems that are agile, scalable, and results-driven. If your goal is to take your business to new heights, then our digital marketing agency may help you get there quicker than you expected.",
      "inDefinedTermSet": "Marketing"
    })
  }}
/>{children}</>;
}