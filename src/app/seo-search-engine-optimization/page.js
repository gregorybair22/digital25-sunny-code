'use client';
import { useState, useEffect } from 'react';
import Script from "next/script";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import LogoTicker from '../../../components/layout/elements/LogoTicker';
import CounterUp from '../../../components/layout/elements/CounterUp';
import Marquee from 'react-fast-marquee';
import MobileMenu from '../../../components/layout/MobileMenu';
import ContactForm from '../../components/ContactForm/ContactForm';



const Header1 = dynamic(() => import('../../../components/layout/header/Header1'), { ssr: true });
const Footer3 = dynamic(() => import('../../../components/layout/footer/Footer3'), { ssr: true });




export default function SEOPage() {
  // Mobile menu state
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  
  // Toggle mobile menu
  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
    // Toggle body scroll when menu is open
    document.body.style.overflow = isMobileMenu ? 'auto' : 'hidden';
  };

  // Form state moved to ContactForm component
  const [isActive, setIsActive] = useState({ key: 1 });
  
  // Cleanup function to reset body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Form handling moved to ContactForm component

  const handleClick = (key) => {
    setIsActive({ key });
  };
  const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
       {/*<h1 style={{display: 'none'}}>SEO Services - Professional Search Engine Optimization by Adfinity Clarity</h1>
      
       Server-rendered SEO content - hidden from UI *
      <div style={{display: 'none'}}>
        <h2>Professional SEO Services That Drive Organic Growth</h2>
        <p>Transform your online visibility with Adfinity Clarity&apos;s comprehensive SEO services. Our expert team combines technical excellence with strategic insight to deliver sustainable search engine optimization results that increase traffic, improve rankings, and boost conversions for businesses across all industries.</p>
        
        <h3>Comprehensive Keyword Research and Analysis</h3>
        <p>Our SEO services begin with thorough keyword research that goes beyond basic search terms. We analyze search intent, competition levels, and user behavior patterns to identify high-value keywords that align with your business goals using advanced tools like Semrush, Ahrefs, and Google Keyword Planner.</p>
        
        <h3>Advanced On-Page SEO Optimization</h3>
        <p>On-page SEO is the foundation of search engine success. Our team optimizes every aspect of your website, from title tags and meta descriptions to header structure and internal linking. We ensure your content is properly optimized for target keywords while maintaining readability and user experience.</p>
        
        <h3>Technical SEO Excellence</h3>
        <p>Technical SEO ensures that search engines can crawl, index, and understand your website effectively. Our technical SEO experts conduct comprehensive audits to identify and fix issues that may be hindering your search performance, optimizing site speed, mobile responsiveness, and crawlability.</p>
        
        <h3>Strategic Off-Page SEO and Link Building</h3>
        <p>Build authority and credibility with our strategic off-page SEO services. We focus on earning high-quality backlinks from relevant, authoritative websites through ethical link building techniques including content marketing, digital PR, and relationship building to improve domain authority.</p>
        
        <h3>Content SEO That Ranks and Converts</h3>
        <p>Content is at the heart of successful SEO strategies. Our content SEO services focus on creating high-quality, relevant content that satisfies user intent and ranks well in search results. We develop content strategies that include blog posts, articles, and landing pages optimized for both search engines and users.</p>
        
        <h3>In-Depth Competitor Analysis</h3>
        <p>Gain competitive advantage with our comprehensive competitor analysis services. We analyze your competitors&apos; SEO strategies, keyword rankings, and backlink profiles to identify opportunities and gaps in the market, allowing us to develop targeted strategies to help you outrank competitors.</p>
        
        <h3>Voice Search Optimization</h3>
        <p>Prepare for the future of search with our voice search optimization services. As voice search continues to grow, we optimize your content to rank for voice queries and featured snippets, focusing on natural language processing and conversational keywords.</p>
        
        <h3>AI Engine Optimization for Modern Search</h3>
        <p>Stay ahead with our AI engine optimization services that prepare your content for AI-powered search platforms. We optimize your content to be easily understood and recommended by AI models like ChatGPT, Gemini, and Copilot using structured data and clear language formatting.</p>
        
        <h3>Ethical Link Building Strategies</h3>
        <p>Our link building services focus on earning high-quality, relevant backlinks that improve your search rankings and domain authority. We use white-hat techniques that include content marketing, digital PR, guest posting, and relationship building to ensure sustainable results.</p>
        
        <h3>Local SEO for Business Growth</h3>
        <p>Dominate local search with our comprehensive local SEO services. We optimize your Google Business Profile, local citations, and location-specific content to improve your visibility in local search results and attract customers in your geographic area.</p>
        
        <h3>E-commerce SEO Solutions</h3>
        <p>Maximize your online store&apos;s visibility with our specialized e-commerce SEO services. We optimize product pages, category pages, and product descriptions to improve search rankings and drive qualified traffic to increase sales and revenue.</p>
        
        <h3>SEO Analytics and Performance Tracking</h3>
        <p>Measure what matters with our comprehensive SEO analytics and reporting services. We provide detailed insights into keyword rankings, organic traffic, conversion rates, and ROI to help you understand the impact of your SEO efforts.</p>
        
        <h3>Mobile SEO Optimization</h3>
        <p>Ensure your website performs perfectly on mobile devices with our mobile SEO optimization services. We optimize mobile site speed, user experience, and mobile-specific search factors to improve your rankings in mobile search results.</p>
        
        <h3>International SEO for Global Reach</h3>
        <p>Expand your global presence with our international SEO services. We optimize your website for multiple languages and regions, implementing hreflang tags, geo-targeting, and international keyword strategies to reach audiences worldwide.</p>
        
        <h3>SEO Audit and Strategy Development</h3>
        <p>Start your SEO journey with our comprehensive SEO audit and strategy development services. We conduct thorough website audits to identify technical issues, content gaps, and optimization opportunities, then develop customized strategies.</p>
        
        <h3>Partner with Adfinity Clarity for SEO Excellence</h3>
        <p>Ready to transform your search engine presence? Partner with Adfinity Clarity and experience the difference that expert SEO services can make for your business. Our proven track record of success, combined with our commitment to ethical practices, makes us the ideal choice.</p>
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
      
      <main className="main-page">
        <section className="section-box">
          <div className="banner-hero hero-4">
            <div className="banner-inner">
              <div className="container">
                <div className="row align-items-center">
                  {/* LEFT SIDE - Content */}
                  <div className="col-lg-6 col-md-12">
                    <h1 className="display-2 mb-25">
                      Rank Higher with Professional <span className="text-bg-brand-4">SEO Services</span>
                    </h1>
                    <p className="text-lg mb-25">
                      If you have a website that is not ranking as highly as it could on search engines,
                      we can help. Our <Link href="/seo-search-engine-optimization">SEO agency</Link> is here to improve your visibility and performance.
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
        <br></br>
        <br></br>

          <section className="section-box box-our-features-3">
                <div className="container">
                     <div className="text-center">
                        <h2 className="text-48-semibold neutral-1000 mb-30">Our Organic SEO Marketing Services Include:</h2>
                        <p className="text-xl neutral-700 mb-45">Our Customers Trust Us to Help Deliver Measurable SEO Performance and Results That Last.</p>
                    </div>
                    <div className="block-our-features-3">
                        <div className="lists-our-features mt-35">
                            <div className="item-our-feature feature-big">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/global.png" alt="keyword research" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Keyword Research</h5>
                                        <p className="text-md neutral-600">The right keywords will do more than get you traffic; they will connect your business to real search intent. We research not only how your customers search and what your competitors rank for, but also what keywords have the most value in your industry. Then we build a well-informed, focused plan, prioritizing the keywords that have a more qualified traffic opportunity and ultimately support your goals, whether you want conversions, visibility, or market share. SEO keyword research using tools like Semrush, Ahrefs, MOZ Keyword Explorer, Google Keyword Planner, Uber Suggest, Google Trends, Google Suggest, and Bing Websmaster.</p>
                                        <div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-mid">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/planner.png" alt="onpage" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">On-Page SEO</h5>
                                        <p className="text-md neutral-600">Once we have the right keywords, we will optimize your website with the best keyword fit for the search intent of your target audience.<br></br> We optimize both the structure and content of your site to be relevant to both. Ranking Factors that means everything from title tags and other headers to content, internal linking, image optimization and mobile usability; and we do all this based on best practices that will be used accurately for your business based on available data and insight. The end result will be a website that ranks well and also performs better.</p>
                                        <div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-sm">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/report.png" alt="technical seo" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Technical SEO</h5>
                                        <p className="text-md neutral-600">To help a website rank well, search engines need to understand it first. From UI fixes to mobile compatibility, to ease of navigation, we make it easier for a user to engage with your website. We are also optimizing access to your content and helping search
engines read your content better by optimizing site structure, internal linking, page loading speed, and code quality. Sitemaps, robots.txt, schema markup, and what to do with duplicate content; our goal is to build a fast, stable, and fully crawlable website that is
optimized to rank.</p><div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-sm">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/trusted.png" alt="off page" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Off-Page SEO</h5>
                                        <p className="text-md neutral-600">Off-page SEO is used by search engines to gauge the authority of your website. By obtaining quality links back to your website, we build trust and credibility for your domain and improve your reputation. We are talking about real links to real sites, creating relevant shareable content & monitoring your brand to see how it is represented on third-party platforms. We clean up what damages, promote what helps, and put your reputation to work for your rankings. Keep in mind, off-page SEO is not your shortcut; it is your visibility long-game, done the right way.</p>
                                        <div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-mid">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/payment.png" alt="content seo" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Content SEO</h5>
                                        <p className="text-md neutral-600">Our useful content suits what Search Engines and Users want on your website. Our team always writes for people first, but with a search intent crafted in (whether that is blog posts, landing pages, product descriptions). From optimizing existing copy to new posts
that gain links and traffic, we help you build a site that is a valuable resource.<br></br> Once you start producing regular, well-structured content, you will improve your visibility, increase your authority, and gain access to the right audience at every stage of the buyer journey.</p>
<div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-big">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/support.png" alt="competitor analysis" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Competitor Analysis</h5>
                                        <p className="text-md neutral-600">We will determine who is competing for your keywords, how they are ranking, and why. Then we will dissect their content, backlink profile, and technical strengths to identify where you can settle your differences. From keyword targeting and backlink profiles to content gaps and technical SEO, we will dissect their methods to find
every opportunity you can own. This analysis will formulate a more focused <Link href="/seo-search-engine-optimization">SEO services</Link> approach, one that is designed to outrank your competitors where it matters. Best SEO Marketing tools for auditing, optimizing, options like Google Search Console, Ahrefs and Semrush.
</p><div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                           <div className="item-our-feature feature-mid">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/planner.png" alt="voice search" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Voice Search Optimization</h5>
                                        <p className="text-md neutral-600">We optimize your website to rank higher even when the searches are voice commands. Our voice search strategy focuses on natural language queries, question-based phrases, and concise answers that voice assistants favour. We also help you structure content for voice features like featured snippets and smart speaker results. Audio content like podcasts can also support visibility, especially when paired with structured metadata and strong topic authority. We make sure your brand can be found and heard.</p>
                                        <div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-mid">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/planner.png" alt="AI Engine" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">AI Engine Optimization</h5>
                                        <p className="text-md neutral-600">With AI models like Google Gemini integrated into search engines, we optimize your site for them too. Tools like ChatGPT, Gemini, and Copilot are changing how users find answers. We optimize your content so it's clear, direct, and easy for AI platforms to understand and recommend. That means using structured formats, question-based on language, and strong topic focus. Whether someone types a query or asks an AI tool, we make sure your content is ready to appear, answer clearly, and earn trust.</p>
                                        <div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-our-feature feature-mid">
                                <div className="card-enjoy-style-2">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/planner.png" alt="link building" /></div>
                                    <div className="card-info">
                                        <h5 className="heading-5">Link Building</h5>
                                        <p className="text-md neutral-600">Link Building still matters, but the right ones matter more. We focus on earning backlinks that search engines trust and users click. That means placements on real sites, in real content, for fundamental reasons. No shortcuts, no spam. <br></br>Just innovative outreach, content worth linking to, and relationships built over time. Our team handles the
heavy lifting, so your site earns authority naturally and keeps it, even as algorithms shift and competition grows.</p>
<div className="btn btn-link">Learn More
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 4.00032L18.4791 0.479492V3.3074H0V4.69333H18.4791V7.52129L22 4.00032Z" fill="url(#paint0_linear_197_2071)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_197_2071" x1="22.7857" y1="1.52272" x2="-0.776803" y2="6.64942" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#22D1EE" />
                                                        <stop offset={1} stopColor="#C5FF41" />
                                                    </linearGradient>
                                                </defs>
                                            </svg></div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box box-logos-2">
                <div className="container">
                    <div className="carouselTickerLogos2 carouselTicker_vertical" id="slide-logos">
                    <LogoTicker />
                    </div>
                </div>
            </section>    


             <section className="section-box box-our-features-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40">
                            <div className="internet-icon"><span /> Our Features</div>
                            <h2 className="heading-2 mb-20">Build a Stronger SEO Business with Adfinity Clarity</h2>
                            <p className="text-lg neutral-700">With years of experience in <Link href="/seo-search-engine-optimization">SEO services</Link> and other digital marketing 
                                domains, our team is confident that it can help you rank higher, consistently, even through 
                                changing algorithms and marketing trends.</p>
                            <div className="row mt-50">
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" alt="SEO Marketing" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Search Engine Marketing</h3>
                                        <p className="text-md neutral-700">We don’t just use SEO to make you rank higher. We 
                                            use it to Market you better.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" alt="SMM" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Digital Marketing</h3>
                                        <p className="text-md neutral-700">Our Marketing Strategies stand out due to innovation and efficiency, and so will you!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" alt="ppc"/></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">ROI Assured</h3>
                                         <p className="text-md neutral-700"><Link href="/seo-search-engine-optimization">SEO Services</Link> is not a marketing strategy; it is an investment on which we promise high-quality returns.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="card-feature-2">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage3/social.svg" alt="Web Design" /></div>
                                        <div className="card-info">
                                            <h3 className="text-22-bold">Technical Services</h3>
                                        <p className="text-md neutral-700">We not only provide quality marketing solutions but also balance them with technical expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-buttons-feature-4"><a className="btn btn-black" href="mailto:contact@adfinityclarity.com">Contact Us
                                <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                </svg></a><Link className="btn btn-learmore-2" href="/digital-marketing"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> Digital Marketing</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="image-feature-2"><img src="/assets/imgs/page/homepage3/img-feature.png" alt="SEO COMPANY" />
                                <div className="card-number-feature card-number-bottom">
                                    <h4><CounterUp count={17} />k+</h4>
                                    <p className="text-sm">Happy Clients</p>
                                </div>
                                <div className="card-number-feature card-number-top">
                                    <h4><CounterUp count={12} />k+</h4>
                                    <p className="text-sm">Completed Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >        
            <section className="section-box box-category-question pt-10" >
                    <div className="container">
                        <div className="text-center box-help-mw">
                            <h2 className="heading-2 mb-15 mt-15">Our GROWTH SEO Framework</h2>
                            <p className="text-lg neutral-500 mb-50"><Link href="/seo-search-engine-optimization">SEO Company</Link> that scales with your business, not just rankings. At <Link href="/">Adfinity Clarity</Link>, we don't treat SEO as a set of tactics; we treat it as a growth engine. Our GROWTH framework was designed to focus on the key elements that matter: strategy, performance, and momentum. It&#39;s how we drive results that stick.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question">
                                    <div className="text-center"> <div className="btn btn-tag-black"><h5>GAIN CLARITY</h5></div></div><br></br>
                                   <div className="card-info">
                                        <p className="text-md neutral-600">Before we touch your site, we dig into your market. That means understanding your goals, how your customers search, what your competitors are doing right (and wrong), and where search opportunities exist. No assumptions, just a clear view of what we&#39;re working with.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question bg-1">
                                    <div className="text-center"> <div className="btn btn-tag-black"><h5>REFINE</h5></div></div><br></br>
                                    <div className="card-info">
                                        <p className="text-md neutral-600">We fix the issues that are impacting the technical underpinnings of your website. This includes speed, crawlability, indexing issues, mobile experience — pretty much anything that impacts your site. If it slows down rankings or user experience, we fix it; it&#39;s that simple.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question bg-2">
                                    <div className="text-center"> <div className="btn btn-tag-black"><h5>OPTIMIZE</h5></div></div><br></br>
                                    <div className="card-info">
                                        <p className="text-md neutral-600">Now we work hard to optimize your content assets. From on-page copy, meta tags, internal links, and content structure, we are aligning everything to match real search intent. This is not just about keywords; it also aims to deliver great clarity, value and relevance for your audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question bg-3">
                                    <div className="text-center"> <div className="btn btn-tag-black"><h5>WIN AUTHORITY</h5></div></div><br></br>
                                    <div className="card-info">
                                        <p className="text-md neutral-600">Finally, we earn your trust that you are looking for. This is achieved by building high-quality backlinks, strengthening your off-site presence and growing your domain authority. In a way, both search engines and real-life people will trust: we use no shortcuts, no spam, just credible mentions, and creative outreach.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question bg-4">
                                   <div className="text-center"> <div className="btn btn-tag-black"><h5>TRACK</h5></div></div><br></br>
                                   <div className="card-info">
                                        <p className="text-md neutral-600">There is also no wait and see if it works, we track everything in real-time. We track your rankings, traffic, and all behaviour on your site through GA4, GSC, and custom dashboards.<br></br> If something changes, we adapt early and keep the momentum going.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card-question bg-5">
                                    <div className="text-center"> <div className="btn btn-tag-black"><h5>HANDOFF INSIGHTS</h5></div></div><br></br>
                                    <div className="card-info">
                                        <p className="text-md neutral-600">You are never in the dark. We will provide consistent reports that actually make sense, and there will never be any black-box or data dump SEO. Your team gains value, context, and actionable recommendations they can act on, whether you are actively working on the project or handing it all off to us.
</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>      


                <section className="section-box box-our-working">
                <div className="container">
                    <div className="text-center">
                        <p className="text-22-bold mb-15">How It Work?</p>
                        <h2 className="text-48-semibold neutral-1000 mb-35">Our SEO Process</h2>
                        <p className="text-xl neutral-700">Designed for your Growth. Underpinned by Strategy.</p>
                    </div>
                    <div className="row mt-65">
                        <div className="col-lg-3 col-md-6 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>1</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Research</h3>
                                    <p className="text-md">To kick off our engagement, we get to know you, your business, your goals, and your market. We analyze your website, research your competitors, and, like a detective, search how your audience searches online. All of this gives us enough to make an informed decision about how to structure a robust SEO plan. We will also prove to you the range of
strategic options available with SEO Company and how we collaborate with you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-60 mb-30 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>2</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Optimization</h3>
                                    <p className="text-md">We optimize your site for users and search engines. From fixing technical issues to increasing speed and mobile experience as well as user experience, on page elements such as meta tags, and internal links; we get your site ready to succeed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>3</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Strategy</h3>
                                    <p className="text-md">We don&#39;t create content, we create content with intent, meaning as long as we understand what your audience is actually searching for, we make sure that your brand is showing up with valuable answers to those searches. Whether you want to drive traffic, generate qualified leads, or continue to build your local visibility. We take these goals and create a strategy that is rooted in actual business results and years of value.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-60 mb-30 .col-sm-6">
                            <div className="card-working hover-up">
                                <div className="card-number"><span>4</span></div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">Growth</h3>
                                    <p className="text-md">SEO is not a quick fix; it is a long game. But when done properly, it keeps paying. We measure what is working, we measure and adjust what we aren't, meanwhile we are continuously improving your site&#39;s visibility by earning trustworthy backlinks and editing your content. It is all about steady, sustainable growth and acquiring visitors who turn into loyal customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box box-preparing pt-10">
                <div className="box-preparing-inner">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">From Local to Global,<br className="d-none d-lg-block" /> The SEO TYPES That Help Your Business</h2>
                            <p className="text-lg"><Link href="/seo-search-engine-optimization">SEO services</Link> comes in a variety of types and is suited to different requirements. The two most widespread are:</p>
                            <div className="box-button-preparing">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">International SEO</a></li>
                                    <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Ecommerce SEO</a></li>
                                    <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">AI SEO</a></li>
                                    <li onClick={() => handleOnClick(4)}><a className={activeIndex === 4 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Local SEO</a></li>
                                    <li onClick={() => handleOnClick(5)}><a className={activeIndex === 5 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Enterprise SEO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-group-preparing">
                            <div className="tab-content">
                                <div  className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-1">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">International SEO</h2>
                                            <p className="text-lg neutral-700">Our international SEO services expand companies on a worldwide scale. We optimize the website in multiple languages and cultures to produce maximum visibility in the targeted markets. We engage in hreflang tags, geo-targeting, and specifically local search engines to increase international traffic and generate conversions. By building international SEO strategies based on specific business requirements, we will improve your online presence in foreign markets.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Multilingual SEO</li>
                                                    <li>Multiregional SEO</li>
                                                    <li>Hreflang SEO</li>
                                                    <li>Geo-Targeted SEO</li>
                                                    <li>Global Technical SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-2">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-2" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Ecommerce SEO</h2>
                                            <p className="text-lg neutral-700">Ecommerce SEO is an integral part of an online store because the competition is fierce. Our ecommerce <Link href="/seo-search-engine-optimization">SEO services</Link> will help you rank in the search engines by optimizing product pages, product categories, and money pages (website content). Our ecommerce SEO services improve website structure, user experience, and conversion with the outcome being a higher rank in the search engines. Finally, our ecommerce SEO techniques are supported by data through product schema markup and faceted navigation to give the company the highest visibility. Our ecommerce professionals can increase your website traffic with targeted prospects, convert visitors to sales, and improve brand credibility using ecommerce SEO strategies.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>WordPress SEO</li>
                                                    <li>Shopify SEO</li>
                                                    <li>WooCommerce SEO</li>
                                                    <li>Magento SEO</li>
                                                    <li>BigCommerce SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-3">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-3" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">AI SEO</h2>
                                            <p className="text-lg neutral-700">AI SEO drives search engine Optimization. With the advancement of machine learning algorithms and programs that collect user behaviour and trends, we can help you create and optimize content quickly and easily through our Artificial Intelligence platforms. In addition, we can automate many of your manual and tedious processes and allocate those resources back to the planning phase. Our AI SEO marketing tools make it easy to deliver efficient and effective results for content optimization, keywords, and link building using machine learning algorithms to find patterns and predict trends. Since the digital world is constantly evolving, utilizing our AI platforms will keep you ahead of the competition.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Algorithmic Optimization</li>
                                                    <li>AI-Powered SEO</li>
                                                    <li>E.E.A.T Content SEO</li>
                                                    <li>Automation SEO</li>
                                                    <li>Programmatic SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-4">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-4" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Local SEO</h2>
                                            <p className="text-lg neutral-700">Local SEO helps companies and businesses grow and expand in a specific area. We can optimize Google My Business listings, build relevant and high quality local citations, and create and publish content for a specific location. Ultimately, the goal is to get into the top local search results to drive foot traffic and conversions. Our team understands the local search algorithms of search engines and the importance of local intent, so we make sure that businesses are well represented in local searches and are in front of local customers.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Google Business Profile SEO</li>
                                                    <li>Local Citation Building</li>
                                                    <li>Local On-Page Optimization</li>
                                                    <li>Review & Reputation SEO</li>
                                                    <li>Map Pack Optimization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-5">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-5" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Our Features</div>
                                            <h2 className="heading-2 mb-20">Enterprise SEO</h2>
                                            <p className="text-lg neutral-700">Enterprise SEO is a big-time scalable strategy. In enterprise SEO, we help large companies scale through strategic planning. With enterprise SEO, you are responsible for a large, complex website and thousands of pieces of content -- no problem! For us, we can work together to create a scalable SEO strategy when we understand where and how best to be effective with technical SEO. We also understand that we are here to help stakeholders drive the business and increase brand visibility and conversions as well. We approach this through data-driven SEO activities.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                    <li>Large-Scale SEO</li>
                                                    <li>Enterprise-Level SEO</li>
                                                    <li>Multi-Site SEO</li>
                                                    <li>Global Business SEO</li>
                                                    <li>High-Traffic SEO</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box box-partners box-partners-small">
                <div className="container-partner">
                    <div className="carouselTicker6 carouselTicker_vertical" id="slide-partners">
                        <Marquee
                            // style={{ width: "auto" }}
                            pauseOnHover={true}
                            direction="left" className="carouselTicker__list list-partners">
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Services</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Company</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Agency</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Marketing</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>Search Engine Optimization Sevices</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>Search Engine Optimization Agency</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Agencies</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>Search Engine Optimization Company</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                            <li className="carouselTicker__item"><Link href="/seo-search-engine-optimization"><span>SEO Companies</span>
                                <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83288 38C2.29876 38 2.76464 37.8284 3.13245 37.4606L37.4607 3.13793C38.1718 2.42696 38.1718 1.25018 37.4607 0.539213C36.7496 -0.171757 35.5727 -0.171757 34.8616 0.539213L0.533314 34.8619C-0.177769 35.5729 -0.177769 36.7497 0.533314 37.4606C0.901119 37.8284 1.367 38 1.83288 38Z" fill="true" />
                                    <path d="M36.161 28.8556C37.1663 28.8556 38 28.022 38 27.0169V1.83872C38 0.833551 37.1663 0 36.161 0H10.9788C9.97343 0 9.13975 0.833551 9.13975 1.83872C9.13975 2.84388 9.97343 3.67743 10.9788 3.67743H34.322V27.0169C34.322 28.022 35.1557 28.8556 36.161 28.8556Z" fill="true" />
                                </svg></Link></li>
                        </Marquee>
                    </div>
                </div>
            
            </section>

            {/* FAQ Section */}
            <section className="section-box box-faqs">
                <div className="container">
                    <div className="text-center mb-70">
                        <h3 className="heading-2 mb-20">Frequently Asked Questions</h3>
                        <p className="text-md neutral-700">
                            Find answers to common questions about our SEO Company
                        </p>
                    </div>
                    <div className="box-2-col-faqs">
                        <div className="faqs-col">
                            <div className="accordion accordion-flush" id="accordionFAQS-1">
                                {[
                                    {
                                        question: "How long does it take to see results from SEO?",
                                        answer: "SEO is a long-term strategy, and results can vary based on your industry, competition, and current website status. Typically, you may start seeing initial improvements in 3-6 months, with more significant results after 6-12 months of consistent optimization."
                                    },
                                    {
                                        question: "What's the difference between on-page and off-page SEO?",
                                        answer: "On-page SEO refers to optimizations made directly on your website (content, HTML, images, etc.), while off-page SEO focuses on external factors like backlinks and social signals. Both are crucial for a successful SEO strategy."
                                    },
                                    {
                                        question: "How often should I update my website's content?",
                                        answer: "Regular content updates are important for SEO. We recommend adding or updating content at least once a month, with blog posts or news articles published weekly or bi-weekly for best results."
                                    }
                                ].map((faq, index) => {
                                    const itemKey = index + 1;
                                    const isActive = activeIndex === itemKey;
                                    return (
                                        <div className="accordion-item" key={itemKey}>
                                            <h2 
                                                className="accordion-header" 
                                                id={`flush-heading-${itemKey}`}
                                                onClick={() => handleOnClick(isActive ? null : itemKey)}
                                            >
                                                <button 
                                                    className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#flush-collapse-${itemKey}`}
                                                    aria-expanded={isActive}
                                                    aria-controls={`flush-collapse-${itemKey}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div 
                                                className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                                                id={`flush-collapse-${itemKey}`}
                                                aria-labelledby={`flush-heading-${itemKey}`}
                                                data-bs-parent="#accordionFAQS-1"
                                            >
                                                <div className="accordion-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="faqs-col">
                            <div className="accordion accordion-flush" id="accordionFAQS-2">
                                {[
                                    {
                                        question: "Do you provide monthly reporting?",
                                        answer: "Yes, we provide comprehensive monthly reports that include key metrics like organic traffic, keyword rankings, backlink growth, and conversion rates. These reports help track progress and demonstrate the ROI of our SEO efforts."
                                    },
                                    {
                                        question: "How do you handle local SEO?",
                                        answer: "Our local SEO strategy includes optimizing your Google Business Profile, managing local citations, building local backlinks, and ensuring NAP (Name, Address, Phone) consistency across the web. We also focus on local keyword optimization and location-based content."
                                    },
                                    {
                                        question: "What's included in your SEO package?",
                                        answer: "Our SEO packages typically include keyword research, on-page optimization, technical SEO, content strategy, link building, local SEO (if applicable), and monthly reporting. We can customize packages based on your specific business needs and goals."
                                    }
                                ].map((faq, index) => {
                                    const itemKey = index + 4; // Starting from 4 to avoid conflicts with first accordion
                                    const isActive = activeIndex === itemKey;
                                    return (
                                        <div className="accordion-item" key={itemKey}>
                                            <h2 
                                                className="accordion-header" 
                                                id={`flush-heading-${itemKey}`}
                                                onClick={() => handleOnClick(isActive ? null : itemKey)}
                                            >
                                                <button 
                                                    className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#flush-collapse-${itemKey}`}
                                                    aria-expanded={isActive}
                                                    aria-controls={`flush-collapse-${itemKey}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div 
                                                className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                                                id={`flush-collapse-${itemKey}`}
                                                aria-labelledby={`flush-heading-${itemKey}`}
                                                data-bs-parent="#accordionFAQS-2"
                                            >
                                                <div className="accordion-body">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
      </main>
      
      <Footer3 />
      <Script id="seo-scrollup-fallback" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            if (!window.scrollToTop) {
              window.scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };
            }
          }
        `}
      </Script>
    </>
  );
}