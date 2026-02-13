"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
});

const SERVICES = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "SEO", href: "/seo-search-engine-optimization" },
  { name: "Email Marketing", href: "/digital-marketing" },
  { name: "Wordpress SEO", href: "/seo-search-engine-optimization" },
  { name: "Shopify SEO", href: "/seo-search-engine-optimization" },
  { name: "Google Ads", href: "/digital-marketing" },
  { name: "Facebook Ads", href: "/digital-marketing" },
  { name: "Social Media Marketing", href: "/digital-marketing" },
  { name: "PPC", href: "/digital-marketing" },
  { name: "Search Engine Optimization", href: "/seo-search-engine-optimization" },
  { name: "SEO Services", href: "/seo-search-engine-optimization" },
  { name: "AI SEO", href: "/seo-search-engine-optimization" },
  { name: "Ecommerce SEO", href: "/seo-search-engine-optimization" },
  { name: "Local SEO Services", href: "/seo-search-engine-optimization" },
  { name: "Instagram Ads", href: "/digital-marketing" },
  { name: "LinkedIn Ads", href: "/digital-marketing" },
];

function ServiceItem({ service, index }) {
  return (
    <li className="carouselTicker__item">
      <Link href={service.href}>
        <span>{service.name}</span>
        <svg
          width={38}
          height={38}
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z"
            fill="true"
          />
          <path
            d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z"
            fill="true"
          />
        </svg>
      </Link>
    </li>
  );
}

export default function ServicesMarquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="section-box box-partners box-partners-small">
      <div className="container-partner">
        <div
          className="carouselTicker6 carouselTicker_vertical"
          id="slide-partners"
        >
          {mounted ? (
            <Marquee
              pauseOnHover={true}
              direction="left"
              className="carouselTicker__list list-partners"
            >
              {SERVICES.map((service, index) => (
                <ServiceItem key={index} service={service} index={index} />
              ))}
            </Marquee>
          ) : (
            <ul className="carouselTicker__list list-partners">
              {SERVICES.map((service, index) => (
                <ServiceItem key={index} service={service} index={index} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
