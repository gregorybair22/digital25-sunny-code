'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-404">
      <div className="text-center">
        <img
          src="/assets/imgs/page/404/404.png"
          alt="Adfinity Clarity 404 Page"
          className="mx-auto"
          width={500}
          height={300}
          loading="lazy"
        />

        <h2 className="heading-2 mt-15 mb-20">Page Not Found</h2>
        <p className="text-lg neutral-500 mb-35">
          The page you are looking for doesn't exist or has been moved
        </p>

        <Link className="btn btn-brand-4" href="/">
          Back to Home Page
        </Link>
      </div>
    </section>
  );
}
