'use client';

import { useState, useEffect } from 'react';
import Script from "next/script";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm/ContactForm';
import MobileMenu from '../../../components/layout/MobileMenu';

// Import components with SSR disabled for client-side only components
const Header1 = dynamic(() => import('../../../components/layout/header/Header1'), { ssr: true });
const Footer3 = dynamic(() => import('../../../components/layout/footer/Footer3'), { ssr: true });


export default function DigitalMarketingPage() {
  const [isActive, setIsActive] = useState({ key: 1 });
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClick = (key) => {
    setIsActive({ key });
  };

  const handleMobileMenu = () => {
    const newState = !isMobileMenu;
    setIsMobileMenu(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  // Cleanup function to reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
return (
    <>
      {/*<h1 style={{display: 'none'}}>Digital Marketing Services - Grow Your Business with Adfinity Clarity</h1>
      
       Server-rendered SEO content - hidden from UI 
      <div style={{display: 'none'}}>
        <h2>Comprehensive Digital Marketing Solutions</h2>
        <p>Transform your online presence with Adfinity Clarity&apos;s expert digital marketing services. We specialize in creating data-driven strategies that deliver measurable results, helping businesses achieve growth objectives through targeted digital campaigns across all platforms.</p>
        
        <h3>Search Engine Optimization Services</h3>
        <p>Our SEO services form foundation of successful digital marketing. We conduct comprehensive keyword research, implement on-page and off-page optimization strategies, and ensure your website meets all technical SEO requirements to improve search engine rankings and drive organic traffic.</p>
        
        <h3>Pay-Per-Click Advertising Management</h3>
        <p>Maximize ROI with our expert PPC management services. We create and manage targeted campaigns across Google Ads, Bing Ads, Facebook Ads, and LinkedIn Ads, ensuring your ad spend delivers optimal results through continuous optimization and detailed performance tracking.</p>
        
        <h3>Social Media Marketing Strategies</h3>
        <p>Build meaningful connections with your audience through our comprehensive social media marketing services. We develop and execute strategies across Facebook, Instagram, Twitter, and LinkedIn to increase brand awareness, engage followers, and drive conversions with consistent brand messaging.</p>
        
        <h3>Content Marketing and Copywriting</h3>
        <p>Quality content drives digital marketing success. Our team creates compelling blog posts, articles, infographics, and videos that educate, engage, and convert your target audience, establishing your brand as an industry authority while driving organic traffic.</p>
        
        <h3>Email Marketing Campaigns</h3>
        <p>Nurture leads and maintain customer relationships through targeted email marketing campaigns. We design and execute email strategies including welcome series, promotional campaigns, and automated drip campaigns to maximize open rates and conversions.</p>
        
        <h3>Web Design and Development Services</h3>
        <p>Your website is your digital storefront. We create responsive, user-friendly websites that convert visitors into customers using WordPress, Webflow, Shopify, and custom development solutions tailored to your business needs and goals.</p>
        
        <h3>Conversion Rate Optimization</h3>
        <p>Improve your website&apos;s performance with our conversion rate optimization services. We analyze user behavior, conduct A/B testing, and implement data-driven changes to increase conversion rates and maximize your marketing ROI.</p>
        
        <h3>Affiliate Marketing Management</h3>
        <p>Expand your reach and increase sales through strategic affiliate marketing partnerships. We help you build and manage affiliate programs that align with your brand values and business objectives, from partner recruitment to performance tracking.</p>
        
        <h3>Online PR and Reputation Management</h3>
        <p>Protect and enhance your online reputation with our comprehensive PR and reputation management services. We monitor brand mentions, respond to reviews, and create positive content that improves your online image and builds authority.</p>
        
        <h3>Mobile Marketing Solutions</h3>
        <p>Reach your audience where they spend most of their time with our mobile marketing services. We create SMS campaigns, push notifications, and mobile-optimized content that engages users on their devices and drives conversions across mobile platforms.</p>
        
        <h3>Video Marketing Production</h3>
        <p>Capture attention and communicate your message effectively with professional video marketing services. We produce engaging video content for social media, websites, and advertising campaigns, from concept development to post-production.</p>
        
        <h3>Influencer Marketing Campaigns</h3>
        <p>Leverage power of social proof through strategic influencer partnerships. We identify and collaborate with influencers who align with your brand values and target audience to reach new markets and build authentic engagement.</p>
        
        <h3>Data-Driven Digital Marketing Strategy</h3>
        <p>Every successful digital marketing campaign starts with a solid strategy. We develop comprehensive digital marketing plans based on thorough market research, competitor analysis, and audience insights to ensure every marketing decision is backed by measurable data.</p>
        
        <h3>Analytics and Performance Reporting</h3>
        <p>Measure what matters with our comprehensive analytics and reporting services. We provide detailed insights into campaign performance, user behavior, and ROI to help you understand the impact of your digital marketing efforts.</p>
      </div>
*/}
       <Header1 
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
            <MobileMenu 
              isMobileMenu={isMobileMenu} 
              handleMobileMenu={handleMobileMenu} 
            />
        <section className="section-box">
          <div className="banner-hero hero-4">
            <div className="banner-inner">
              <div className="container">
                <div className="row align-items-center">
                  {/* LEFT SIDE - Content */}
                  <div className="col-lg-6 col-md-12">
                    <h1 className="display-2 mb-25">
                      Grow Your Business with a <span className="text-bg-brand-4">Digital</span> Marketing Agency
                    </h1>
                    <p className="text-lg mb-25">
                      Every business today needs a strong online presence. Our smartly applied and result-focused
                      strategies expand your brand's reach, attract the right audience, and convert interest into real
                      business growth.
                    </p>
                  </div>
                  
                  {/* RIGHT SIDE - Form */}
                  <div className="col-lg-5 col-md-12 offset-lg-1">
                    <div className="box-form-request">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-box box-content-feature box-content-feature-2">
                                    <div className="container">
                                        <div className="text-center"> <span className="btn btn-bg-brand-4 mb-25"><span>
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.0532 15.1551L12.3032 1.65509C12.2684 1.60707 12.2228 1.56797 12.17 1.54102C12.1172 1.51406 12.0587 1.5 11.9994 1.5C11.9402 1.5 11.8817 1.51406 11.8289 1.54102C11.7761 1.56797 11.7305 1.60707 11.6957 1.65509L1.9457 15.1551C1.91663 15.1955 1.89588 15.2412 1.88466 15.2897C1.87344 15.3381 1.87198 15.3883 1.88035 15.4374C1.88873 15.4864 1.90678 15.5333 1.93345 15.5753C1.96012 15.6173 1.99487 15.6535 2.0357 15.682L11.7857 22.432C11.8485 22.4755 11.923 22.4988 11.9994 22.4988C12.0758 22.4988 12.1504 22.4755 12.2132 22.432L21.9632 15.682C22.004 15.6535 22.0388 15.6173 22.0654 15.5753C22.0921 15.5333 22.1102 15.4864 22.1185 15.4374C22.1269 15.3883 22.1254 15.3381 22.1142 15.2897C22.103 15.2412 22.0823 15.1955 22.0532 15.1551ZM11.9994 15.6445L8.6882 12.9951L11.9994 3.05946L15.3107 12.997L11.9994 15.6445ZM7.94945 12.832L3.22257 14.6676L10.8744 4.08134L7.94945 12.832ZM8.18382 13.5463L11.6244 16.312V21.4157L3.11195 15.5151L8.18382 13.5463ZM12.3744 16.312L15.8169 13.5501L20.9469 15.4738L12.3744 21.4082V16.312ZM16.0494 12.8432L13.1244 4.08134L20.7126 14.5813L16.0494 12.8432Z" fill="true" />
                                            </svg></span>Our Features</span>
                                            <h2 className="mt-15 mb-15">Explore Marketing & Technical Excellence, Powered by AI</h2>
                                            <p className="text-lg neutral-500 mb-25">Smart marketing starts with smart execution. Our <Link href="/digital-marketing">digital marketing services</Link> combine artificial intelligence, performance data, and technical know-how to build systems that are agile, scalable, and results-driven. If your goal is to take your business to new heights, then our <Link href="/digital-marketing">digital marketing agency</Link> may help you get there quicker than you expected.</p>
                                        </div>
                                        <div className="list-features-2">
                                            <div className="item-list-feature">
                                                <div className="feature-left"> <img src="/assets/imgs/page/features/img-feature.png" alt="Digital Marketing Service" /></div>
                                                <div className="feature-right">
                                                    <h4 className="heading-4 mb-20">Drive Qualified Traffic That Converts</h4>
                                                    <p className="text-lg neutral-700">We bring the right audience to your doorstep with a well planned and successful blend of SEO,
SMM, PPC, and content strategies.</p>
                                                    <div className="box-list-check">
                                                        <ul className="list-check">
                                                            <li>Advanced keyword targeting and search intent alignment</li>
                                                            <li>Optimized paid ad funnels across Google, Meta, and LinkedIn</li>
                                                            <li>Content marketing that educates, engages, and sells</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-list-feature">
                                                <div className="feature-left"> <img src="/assets/imgs/page/features/img-feature2.png" alt="Digital Marketing Services" /></div>
                                                <div className="feature-right">
                                                    <h4 className="heading-4 mb-20">Turn Insights Into ROI</h4>
                                                    <p className="text-lg neutral-700">With the analytics of real-time , we not only report metrics but also act on them.</p>
                                                    <div className="box-list-check">
                                                        <ul className="list-check">
                                                            <li>Custom dashboards to monitor key KPIs (CPL, CTR, conversions)</li>
                                                            <li>GA4 + heatmap + CRM integration for full-funnel tracking</li>
                                                            <li>Continuous A/B testing to increase conversion rates</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-list-feature">
                                                <div className="feature-left"> <img src="/assets/imgs/page/features/img-feature3.png" alt="Digital Marketing Company" /></div>
                                                <div className="feature-right">
                                                    <h4 className="heading-4 mb-20">Build Real Connections & Scale Without Breaking Things</h4>
                                                    <p className="text-lg neutral-700">Smart <Link href="/digital-marketing">digital marketing services</Link> that bring in quality leads and turn them into loyal customers.</p>
                                                    <div className="box-list-check">
                                                        <ul className="list-check">
                                                            <li>Automated lead nurturing that talks to your users at the right time — not just dumps them into a sales list</li>
                                                            <li>Websites that convert, not confuse — clean, fast, mobile-first designs that generate results</li>
                                                            <li>Analytics & tools that talk to each other — so you're not stuck jumping between platforms to make sense of your growth</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> 
            <section className="section-box box-content-feature">
                        <div className="container">
                            <div className="text-center"> <span className="btn btn-bg-brand-4 mb-25"><span>
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0532 15.1551L12.3032 1.65509C12.2684 1.60707 12.2228 1.56797 12.17 1.54102C12.1172 1.51406 12.0587 1.5 11.9994 1.5C11.9402 1.5 11.8817 1.51406 11.8289 1.54102C11.7761 1.56797 11.7305 1.60707 11.6957 1.65509L1.9457 15.1551C1.91663 15.1955 1.89588 15.2412 1.88466 15.2897C1.87344 15.3381 1.87198 15.3883 1.88035 15.4374C1.88873 15.4864 1.90678 15.5333 1.93345 15.5753C1.96012 15.6173 1.99487 15.6535 2.0357 15.682L11.7857 22.432C11.8485 22.4755 11.923 22.4988 11.9994 22.4988C12.0758 22.4988 12.1504 22.4755 12.2132 22.432L21.9632 15.682C22.004 15.6535 22.0388 15.6173 22.0654 15.5753C22.0921 15.5333 22.1102 15.4864 22.1185 15.4374C22.1269 15.3883 22.1254 15.3381 22.1142 15.2897C22.103 15.2412 22.0823 15.1955 22.0532 15.1551ZM11.9994 15.6445L8.6882 12.9951L11.9994 3.05946L15.3107 12.997L11.9994 15.6445ZM7.94945 12.832L3.22257 14.6676L10.8744 4.08134L7.94945 12.832ZM8.18382 13.5463L11.6244 16.312V21.4157L3.11195 15.5151L8.18382 13.5463ZM12.3744 16.312L15.8169 13.5501L20.9469 15.4738L12.3744 21.4082V16.312ZM16.0494 12.8432L13.1244 4.08134L20.7126 14.5813L16.0494 12.8432Z" fill="true" />
                                </svg></span>Our Features</span>
                                <h2 className="mt-15 mb-15">All Digital Marketing Solutions</h2>
                                <p className="text-lg neutral-500 mb-25">We shape our <Link href="/digital-marketing">online marketing agency</Link> around your industry goals and audience needs. Whether your goal is to raise brand awareness, attract more qualified leads, or improve conversion rates, our strategies are built to support measurable growth.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature.png" alt="SEO" /></div>
                                        <div className="card-info">
                                            <h6>Search Engine Optimization (SEO)</h6>
                                            <p className="text-md neutral-600">Our <Link href="/seo-search-engine-optimization">SEO services</Link> help your business get found on Google and Bing search engine by improving your organic
search visibility. We handle keyword research, on-page & off-page optimization, technical SEO (Core Web
Vitals, structured data), and high-quality link building.<br></br> Local SEO ensures your business
appears in nearby searches.<br></br> With ongoing performance tracking and strategic updates, we
help you to attract qualified traffic, improve visibility, and turn clicks into measurable business
growth. Looking for top-notch SEO optimization services?, you have found the right place.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature2.png" alt="SMM" /></div>
                                        <div className="card-info">
                                            <h6>Social Media Marketing (SMM)</h6>
                                            <p className="text-md neutral-600">In this contemporary era, social media isn’t just a platform. It&#39;s a place where real
conversations between brands and people take place.<br></br> We create run targeted ads, posts, and
manage your social presence in an exclusive way that fits your goals and speaks attracts your
audience. We help you to stay active with regular posting on Facebook, Instagram, LinkedIn, and Twitter
(X), which is designed to build real engagement and visibility. <br></br>This will help you to know new
people and bring back existing ones with smart ad campaigns on platforms like Facebook,
LinkedIn, and YouTube.
</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature3.png" alt="PPC" /></div>
                                        <div className="card-info">
                                            <h6>Pay-Per-Click (PPC) Advertising</h6>
                                            <p className="text-md neutral-600">Need quick traffic and leads? PPC puts your brand where intent meets action, right when your
audience is ready to choose. Whether it&#39;s Google Ads, Bing, Meta, or LinkedIn, we build and
manage ad campaigns that deliver qualified users directly to your website.
Our PPC team handles everything: from writing compelling ad copy to refining keyword
targeting, bid strategy, and audience segmentation. We continuously monitor performance to
eliminate wasted spend from and focus on what drives conversions. Whether your goal is more
sales, sign-ups, or form fills, our paid campaigns are designed to deliver results you can
measure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature4.png" alt="Content" /></div>
                                        <div className="card-info">
                                            <h6>Content Marketing</h6>
                                            <p className="text-md neutral-600">Content marketing helps people to understand what your business offers, who it&#39;s for, and why
it&#39;s helpful to them. It presents a clear information that supports their decisions. We create
content that is easy to read and is useful for the audience. Whether it&#39;s for your website, blog,
or product pages, every word is written to match what your customers are searching for. With
the placement of right content in appropriate place, your website becomes more visible, more
trustworthy, and more likely to turn visitors into customers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature5.png" alt="Email" /></div>
                                        <div className="card-info">
                                            <h6>Email marketing</h6>
                                            <p className="text-md neutral-600">Email marketing helps you to stay connected with those people who are already interested in
your business. You can share updates, news, or offers straight to their inbox. We make
your campaigns ready, track results and manage your contact lists. We use various tools like
as Mailchimp, Klaviyo, and ActiveCampaign. Our email marketing services also contains
audience groups, send-time planning, and testing. It keeps people interested and brings them
back to your site. We create such email campaigns which gets more opens, clicks, and sales.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature6.png" alt="Addiliate" /></div>
                                        <div className="card-info">
                                            <h6>Affiliate Marketing</h6>
                                            <p className="text-md neutral-600">Affiliate marketing lets other people promote your business and earn a small share when they
help you to make a sale. It’s a simple way to reach more customers without paying upfront for
ads. We set up and scale your affiliate network for long-term growth from picking the right tools
to finding partners that fit your brand. Whether it’s through blogs, videos, or social media, we
make sure that your affiliates stay active and your tracking works well. It’s a proved smart way
to grow efficiently with low risk.
</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature7.png" alt="Website" /></div>
                                        <div className="card-info">
                                            <h6>Website Design & Development</h6>
                                            <p className="text-md neutral-600">Website is a place where visitors learn about your business and take action accordingly. It
should be fast, easy to use, and built to work across all devices.<br></br>
Our team of expert, works across different platforms which includes WordPress, Webflow, and
Shopify, and also builds custom websites using React, PHP, and other frameworks. <br></br>Our team
finishes each product with a clear structure, which supports search visibility and helps the
visitors to navigate with ease and clarity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature8.png" alt="CRO" /></div>
                                        <div className="card-info">
                                            <h6>Conversion Rate Optimization (CRO)</h6>
                                            <p className="text-md neutral-600">Getting traffic is useful only when it leads to action. CRO helps to improve how visitors move
through your website, so that more of them fill out forms, make purchases, or reach out.
We look at user behaviour using tools like heatmaps, analytics, and A/B testing. <br></br>Based on real
data, we update page layouts, calls to action, and site flow to remove confusion and improve
response. Our goal is to help you get better results from the traffic you already have, without
needing more ad spend.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature9.png" alt="online pr" /></div>
                                        <div className="card-info">
                                            <h6>Online PR & Reputation Management</h6>
                                            <p className="text-md neutral-600">Online PR helps the brand to appear on trusted blogs, media sites, and podcasts. Our team
pitches relevant stories to the right platforms to enhance visibility, build authority, and earn
backlinks that support your long-term SEO.
Online Reputation Management (ORM) focuses on how your business appears in search. Our
team monitors reviews, respond to feedback, and publishes brand-positive content. If needed,
we also reduce the impact of negative results and improve your presence on platforms like
Facebook, LinkedIn, and Google Business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature2.png" alt="SMM" /></div>
                                        <div className="card-info">
                                            <h6>Mobile Marketing</h6>
                                            <p className="text-md neutral-600">Mobile marketing is about reaching your audience where they spend most of their time on their
phones. We help you to connect through SMS, push notifications, app messages, and
location-based alerts. Whether it&#39;s an in-app update, a quick offer, or a promotion, our
campaigns are built to be simple, relevant, and timely. Everything is mobile-optimised, so that
messages load fast, look clean and seen attractive for the person receiving them. It&#39;s a
practical way to stay in touch, bring people back, and turn interest into action without being
intrusive.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature7.png" alt="Website" /></div>
                                        <div className="card-info">
                                            <h6>Video Marketing</h6>
                                            <p className="text-md neutral-600">Video is one of the simplest ways to capture attention and explain what your business offers.<br></br> We create short videos, product explainers, and brand stories that feel clear, engaging, and is made for real people.<br></br> From social reels to YouTube content, each video is planned around your goals and how your audience watches it. With the right visuals and messaging, video marketing helps you brand to connect faster, establish trust, and stay memorable across platforms.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card-question card-question-2">
                                        <div className="card-image"> <img src="/assets/imgs/page/features/feature4.png" alt="Content" /></div>
                                        <div className="card-info">
                                            <h6>Influencer Marketing</h6>
                                            <p className="text-md neutral-600">Influencer promotion can help your brand connect with real people through trusted voices. Our team conducts research and finds creators, large and small, who speak to your audience while maintaining your brand's ethos.We handle outreach, logistics, and reporting on social platforms like Instagram, YouTube, TikTok, and LinkedIn. Whether it’s a story post, a product review, or a long video, we make sure the content feels real. This method builds trust, increases awareness, and produces actual results through content that people really care about.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                     <section className="section-box wow animate__animated animate__fadeIn box-our-track box-our-track-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center mb-40"><img src="/assets/imgs/page/homepage4/img-track.png" alt="Digital Marketing" /></div>
                        <div className="col-lg-6 mb-40">
                            <div className="box-padding-left-50">
                                <div className="strate-icon"><span /> Strategies that work</div>
                                <h2 className="heading-2 mb-20">Why Choose Us for Your Digital Marketing Needs?</h2>
                                
                                <div className="row mt-50">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" alt="Adfinity Clarity" /></div>
                                            <div className="card-info">
                                                 <h3 className="text-22-bold">Customised Strategies</h3>
                                             <p className="text-md neutral-700">We understand this concept very clearly that every business is unique in itself. We plan strategies in a way which benefits your needs and goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" alt="SMM"/></div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">Team Expertise</h3>
                                            <p className="text-md neutral-700">Above all, we pride ourselves on having an experienced team who has expertise in  providing positive results.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" alt="ppc"/></div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">Proven Results</h3>
                                            <p className="text-md neutral-700">Our history shows we help businesses grow their online presence and reach their goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="card-feature-2">
                                            <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" alt="Web Design"/></div>
                                            <div className="card-info">
                                                <h3 className="text-22-bold">Data-Driven Approach</h3>
                                                <p className="text-md neutral-700">We use analytics in our strategy development to constantly refine and improve for better results.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box box-faqs-7">
                <div className="container">
                    <div className="box-faqs-inner">
                        <div className="text-center"> <div className="btn btn-brand-4-sm">Frequently Asked Questions (FAQ)</div>
                            <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                        </div>
                        <div className="box-faqs-inner-4">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">How can digital marketing help my business grow online efficiently?</button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p><Link href="/digital-marketing">Digital marketing company</Link> brings in new customers, improves online visibility, and increases sales through targeted channels like SEO, social media, and paid advertising. It seeks to reach the right audience at the right time, offering measurable results.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">What digital marketing service should I start with if I'm new to the field?</button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Begin with SEO and a solid website. They serve as the foundation for most strategies. As your brand grows, you can expand your reach by adding paid ads, email campaigns, and social media to keep people engaged.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How is my digital marketing working? </button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">You can see clear signs such as more website traffic, better search rankings, more leads, and higher conversion rates. Tools like Google Analytics, Search Console, and CRM reports can help you track performance.
</div>
                                    </div>
                                </div>
                               <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How do you improve ROI with digital marketing services?</button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Digital marketing campaigns target people more precisely than traditional media. Better targeting means less waste in budgets, resulting in better results. Additionally, the ability to utilize tracking tools means you can identify what worked and what didn't in order to make adjustments.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(5)}>
                                        <button className={isActive.key == 5 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Will digital marketing work for small and local businesses?</button>
                                    </h2>
                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes. Utilizing local SEO, optimizing your Google Business Profile and using location-based ads helps smaller businesses reach customers nearby that are searching for their services or products.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(6)}>
                                        <button className={isActive.key == 6 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How long does it take to see results from digital marketing?</button>
                                    </h2>
                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">SEO generally takes between 3 and 6 months to yield results, while paid ads or email marketing can yield results far more quickly. A good <Link href="/digital-marketing">Digital marketing agencies</Link> strategy is a balance between filling your immediate cash flow needs and your longer-term needs for growth.
</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(7)}>
                                        <button className={isActive.key == 7 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">What should I look for in a digital marketing agency?</button>
                                    </h2>
                                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Look for honest reporting that is easy to digest for a lay person, have a proven track record for success, proven results in the past that relate to your industry, and good communication. A successful agency will align their <Link href="/digital-marketing">Digital marketing services</Link> objectives with your goals and will keep within your budget.
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
      <Footer3 />
      <Script id="scrollup-fallback" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            window.scrollToTop = () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };
          }
        `}
      </Script>
    </>
  );
}