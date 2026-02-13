import Script from "next/script";
import HeroSection from "./components/HeroSection";
import ServicesMarquee from "./components/ServicesMarquee";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQSection from "./components/FAQSection";
import Footer3 from "../../components/layout/footer/Footer3";
import SSRVerification from "./components/SSRVerification";




export const metadata = {
  title: "Best SEO & Digital Marketing Agency - Adfinity Clarity",
  description:
    "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
  alternates: {
    canonical: "https://adfinityclarity.com/",
    languages: {
      "en": "https://adfinityclarity.com/",
      "x-default": "https://adfinityclarity.com/",
  },
  },
  openGraph: {
    title: "Best SEO &amp; Digital Marketing Agency - Adfinity Clarity",
    description: "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
    url: "https://adfinityclarity.com/",
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
    title: "Best SEO &amp; Digital Marketing Agency - Adfinity Clarity",
    description: "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
    site: "@adfinityclarity",
    images: [
      "https://adfinityclarity.com/assets/imgs/template/adfinityclarity.png",
    ],
  },
};

  
export default function Home() {
  return (
    <> 
  {/* WebSite Schema #1 */}
 <Script
  id="website-schema-1"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/#website",
      "url": "https://adfinityclarity.com/",
      "name": "Adfinity Clarity",
      "description": "Unlock Your Business Revenue With Internet Marketing Agency",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/>
    
      {/*Local Business Scheam */}
  <Script
  id="local-business-schema"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Adfinity Clarity",
      "description":
        "Adfinity Clarity is a top-rated Digital Marketing Agency focused on SEO, Performance Marketing, Lead Generation, Content Marketing, and Web Design.",
      "url": "https://adfinityclarity.com/",
      "image": "https://adfinityclarity.com/full-logo.webp",
      "telephone": "+1 7906159557",
      "email": "contact@adfinityclarity.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "89 Haight Street, Haight-Ashbury",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94117",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.773972,
        "longitude": -122.431297
      },
      "areaServed": [
        { "@type": "Place", "name": "United States" },
        { "@type": "Place", "name": "Canada" },
        { "@type": "Place", "name": "United Kingdom" },
        { "@type": "Place", "name": "Australia" },
        { "@type": "Place", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/adfinity-clarity/",
        "https://www.facebook.com/adfinityclarity/",
        "https://www.youtube.com/@AdfinityClarity",
        "https://www.instagram.com/adfinityclarity/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services Offered",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Digital Marketing Agency",
            "url": "https://adfinityclarity.com/digital-marketing",
            "description":
              "Digital Marketing Services, like SEO, PPC, Content Marketing, Email and Performance Marketing, Lead Generation with Adfinity Clarity online marketing services."
          },
          {
            "@type": "Service",
            "name": "SEO Company",
            "url": "https://adfinityclarity.com/seo-search-engine-optimization",
            "description":
              "Professional SEO Agency for Traffic & Revenue Generation. Get expert SEO services that boost website ranking and results. Get a free consultation today!"
          }
        ]
      }
    })
  }}
/>

  {/* Organization Schema */}
  <Script
    id="organization-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://adfinityclarity.com/#organization",
        "name": "ADFINITY CLARITY",
        "url": "https://adfinityclarity.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://adfinityclarity.com/#/schema/logo/image/",
          "url": "https://adfinityclarity.com/full-logo.webp",
          "contentUrl": "https://adfinityclarity.com/full-logo.webp",
          "width": 289,
          "height": 76,
          "caption": "Adfinity Clarity"
        },
        "image": {
          "@id": "https://adfinityclarity.com/#/schema/logo/image/"
        },
        "sameAs": [
          "https://www.facebook.com/adfinityclarity/",
          "https://www.youtube.com/@AdfinityClarity",
          "https://www.instagram.com/adfinityclarity/",
          "https://www.linkedin.com/company/adfinity-clarity/"
        ]
      })
    }}
  />

  {/* WebSite Schema #2 (Alternate name variant) */}
  <Script
  id="website-schema-2"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adfinityclarity.com/#website",
      "url": "https://adfinityclarity.com/",
      "name": "adfinityclarity.com",
      "description": "The Authority for All Things Internet Marketing",
      "publisher": {
        "@id": "https://adfinityclarity.com/#organization"
      },
      "inLanguage": "en-US"
    })
  }}
/>

  {/* Breadcrumb Schema */}
  <Script
    id="breadcrumb-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://adfinityclarity.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home"
          }
        ]
      })
    }}
  />

  {/* Article Schema */}
  <Script
    id="article-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://adfinityclarity.com/#article",
        "isPartOf": {
          "@id": "https://adfinityclarity.com/"
        },
        "author": [
          {
            "@id": "https://adfinityclarity.com/#/schema/person/adfinityclarity"
          }
        ],
        "headline": "The Authority for All Things SEO & Digital Marketing",
        "datePublished": "2025-04-16T20:15:48+00:00",
        "dateModified": "2025-07-10T19:23:58+00:00",
        "mainEntityOfPage": {
          "@id": "https://adfinityclarity.com/"
        },
        "wordCount": 6,
        "publisher": {
          "@id": "https://adfinityclarity.com/#organization"
        },
        "inLanguage": "en-US"
      })
    }}
  />

  {/* FAQ Schema */}
  <Script
    id="faq-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an internet marketing agency do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An internet marketing agency helps businesses grow online. It offers services like SEO, online ads, content creation, email marketing, and digital PR. These services work together to attract more visitors, generate leads, and increase sales."
            }
          },
          {
            "@type": "Question",
            "name": "Why is SEO important for my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO improves your website’s visibility in search engines like Google, helping it appear higher in search results. This means more people can find your business when they’re searching online. It’s one of the most affordable ways to get long-term traffic and build trust."
            }
          },
          {
            "@type": "Question",
            "name": "What are digital marketing agency, and how can they help my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing agencies help you promote your business online. They include things like SEO, social media marketing, paid ads, and email campaigns. These tools work together to help you reach more people, get new leads, and increase your sales by sharing the right message with the right audience."
            }
          }
        ]
      })
    }}
  />

  {/* ImageObject Schema (Logo) */}
  <Script
    id="logo-image-schema"
    type="application/ld+json"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "ImageObject",
        "contentUrl": "https://adfinityclarity.com/full-logo.webp",
        "height": 263,
        "width": 327,
        "url": "https://adfinityclarity.com/full-logo.webp"
      })
    }}
  />
      {/* Page-level schemas or scripts if needed */}

      <HeroSection />
      <ServicesMarquee />
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
      <ExpertiseSection />
      <FAQSection />
      <Footer3 />
      <SSRVerification />
    </>
  );
}
