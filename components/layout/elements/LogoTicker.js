'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
                <Marquee
                    // style={{ width: "auto" }}
                    pauseOnHover={true}
                    direction="left" className="carouselTicker__list list-logos">
                    <li className="carouselTicker__item">
  <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/googleanalytics.svg" alt="Google Analytics" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/googlesearchconsole.svg" alt="Google Search Console" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://lookerstudio.google.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/googlelookerstudio.svg" alt="Google Looker Studio" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://ahrefs.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/ahrefs.svg" alt="Ahrefs" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://semrush.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/semrush.svg" alt="Semrush" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/screaming-frog.svg" alt="Screaming Frog" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://www.searchenginejournal.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/searchenginejournal.svg" alt="Search Engine Journal" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://neilpatel.com/ubersuggest/" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/ubersuggest.svg" alt="Ubersuggest" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://yoast.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/yoastseo.svg" alt="Yoast SEO" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://moz.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/moz.svg" alt="MOZ" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://rankmath.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/rankmath.svg" alt="RankMath" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://hubspot.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/hubSpot.svg" alt="HubSpot" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://www.hotjar.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/hotjar.svg" alt="Hotjar" />
    </div>
  </a>
</li>

<li className="carouselTicker__item">
  <a href="https://backlinko.com" target="_blank" rel="noopener noreferrer">
    <div className="item-logo">
      <img src="/assets/imgs/page/homepage3/backlinko.svg" alt="Backlinko" />
    </div>
  </a>
</li>
                </Marquee>
        </>
    )
}
