"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function ExpertiseSection() {
  const swiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  const industries = [
    {
      title: "B2B Marketing",
      description: "We help businesses build strong relationships. Our goal is to make your brand stand out and be remembered by your clients."
    },
    {
      title: "Education",
      description: "We help schools and universities connect with students and families. We highlight what makes your institution special so people find you."
    },
    {
      title: "Automotive",
      description: "The automotive market is tough. We help car brands reach more customers and turn interest into trust."
    },
    {
      title: "Healthcare",
      description: "Trust is everything in healthcare. We help clinics and providers get noticed and make sure patients feel confident in their care."
    },
    {
      title: "Hospitality",
      description: "Guests want more than a place to stay. They want an experience. We help you create great experiences that keep visitors coming back."
    },
    {
      title: "Real Estate",
      description: "We help you show properties in a way that connects with buyers. We tell story of each home to help people picture themselves living there."
    },
    {
      title: "E-Commerce",
      description: "Shopping online is always changing. We help e-commerce businesses make their websites easy to use and increase sales."
    },
    {
      title: "Dental",
      description: "For dental practices, trust is key. We help you bring in new patients and build a reputation people rely on."
    },
    {
      title: "Law",
      description: "In law, your reputation counts. We help law firms stand out, attract clients, and show their expertise."
    },
    {
      title: "Schools",
      description: "We help schools connect with students, parents, and staff. We make sure everyone knows why your school is right choice."
    }
  ];

  return (
    
    <section className="section-box wow animate__animated animate__fadeIn box-discover">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="pt-50">
              <img
                src="/assets/imgs/page/homepage1/img-discover.webp"
                alt="Adfinity Clarity"
              />
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <h2>Our Expertise in Different Industries</h2>
            <p className="text-lg neutral-500">
              At Adfinity Clarity, we have worked with businesses in many
              industries. We focus on finding solutions that work for you.
              Here&apos;s how:
            </p>
            <div className="box-reviews-home5">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-1">
                  <Swiper {...swiperOptions}>
                    {industries.map((industry, index) => (
                      <SwiperSlide key={index}>
                        <div className="item-review-discover">
                          <h5>{industry.title}</h5>
                          <p className="text-lg">{industry.description}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
