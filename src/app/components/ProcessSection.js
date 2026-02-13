import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="section-box wow animate__animated animate__fadeIn box-our-track-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-40">
            <div className="strate-icon">
              <span /> Strategies that work
            </div>
            <h2 className="heading-2 mb-20">
              How We Boost Revenue and Generate More Leads
            </h2>
            <p className="text-lg neutral-700">
              We help businesses grow by increasing sales and attracting more
              leads. Take a look at our simple yet effective process :
            </p>
            <div className="row mt-50">
              <div className="col-lg-12">
                <div className="card-feature-2">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage3/discover.svg"
                      alt="Adfinity Clarity"
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="text-22-bold">Targeted Marketing</h3>
                    <p className="text-md neutral-700">
                      We use SEO, paid ads, and content to reach the right
                      audience. This helps your business connect with people
                      who are most likely to become customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card-feature-2">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage3/keep.svg"
                      alt="Adfinity Clarity"
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="text-22-bold">Conversion Strategies</h3>
                    <p className="text-md neutral-700">
                      We create landing pages that work. Our email campaigns
                      are clear and focused. We also use social media to keep
                      prospects interested and guide them to buy from you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card-feature-2">
                  <div className="card-image">
                    <img
                      src="/assets/imgs/page/homepage3/keep.svg"
                      alt="Adfinity Clarity"
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="text-22-bold">
                      Continuous Campaign Improvement
                    </h3>
                    <p className="text-md neutral-700">
                      We track campaign results and adjust quickly. This
                      ensures your business keeps growing with steady leads
                      and increased sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center mb-40">
            <div className="box-border-image">
              <div className="box-image-line-1">
                <div className="wow fadeInDown img-1" data-wow-delay={0}>
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-1.png"
                    alt="Adfinity Clarity"
                  />
                </div>
                <div className="wow fadeInDown img-1" data-wow-delay="0.3s">
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-2.png"
                    alt="Adfinity Clarity"
                  />
                </div>
              </div>
              <div className="box-image-line-2">
                <div className="wow fadeInLeft img-1" data-wow-delay={0}>
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-3.png"
                    alt="Adfinity Clarity"
                  />
                </div>
                <div className="wow fadeInRight img-1" data-wow-delay="0.2s">
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-4.png"
                    alt="Adfinity Clarity"
                  />
                </div>
              </div>
              <div className="box-image-line-3">
                <div className="wow fadeInUp img-1" data-wow-delay={0}>
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-5.png"
                    alt="Adfinity Clarity"
                  />
                </div>
                <div className="wow fadeInUp img-2" data-wow-delay="0.2s">
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-6.png"
                    alt="Adfinity Clarity"
                  />
                </div>
                <div className="wow fadeInUp img-3" data-wow-delay="0.4s">
                  <img
                    src="/assets/imgs/page/homepage1/img-track2-7.png"
                    alt="Adfinity Clarity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
