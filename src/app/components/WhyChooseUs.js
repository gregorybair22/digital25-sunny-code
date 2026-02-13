import Link from "next/link";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: (
        <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_1486)">
            <path d="M32.3625 5.44053L27.0625 0.1374C27.019 0.0938406 26.9673 0.0592859 26.9104 0.0357102C26.8535 0.0121345 26.7925 0 26.7309 0C26.6694 0 26.6084 0.0121345 26.5515 0.0357102C26.4946 0.0592859 26.4429 0.0938406 26.3994 0.1374L25.0706 1.46302C24.8776 1.65689 24.7641 1.91599 24.7526 2.18932C24.741 2.46266 24.8322 2.73042 25.0081 2.9399L21.3675 4.3399C21.3051 4.36404 21.2485 4.40122 21.2017 4.44897C21.1548 4.49672 21.1186 4.55393 21.0956 4.61678L19.6581 8.5624H2.21875C1.76311 8.56306 1.32633 8.74436 1.00414 9.06654C0.681956 9.38873 0.500661 9.82551 0.5 10.2811L0.5 30.2812C0.500661 30.7368 0.681956 31.1736 1.00414 31.4958C1.32633 31.8179 1.76311 31.9992 2.21875 31.9999H22.2188C22.6744 31.9992 23.1112 31.8179 23.4334 31.4958C23.7555 31.1736 23.9368 30.7368 23.9375 30.2812V12.8436L27.8831 11.403C27.946 11.38 28.0032 11.3439 28.0509 11.297C28.0987 11.2501 28.1359 11.1936 28.16 11.1312L29.5625 7.4924C29.7718 7.66877 30.0396 7.7602 30.3131 7.74863C30.5866 7.73705 30.8457 7.62332 31.0394 7.4299L32.3625 6.10365C32.4061 6.06012 32.4406 6.00843 32.4642 5.95154C32.4878 5.89465 32.4999 5.83367 32.4999 5.77209C32.4999 5.71051 32.4878 5.64953 32.4642 5.59264C32.4406 5.53574 32.4061 5.48406 32.3625 5.44053Z" fill="true"/>
          </g>
        </svg>
      ),
      title: "Data Driven Decisions",
      description: "Data guides us in everything we do. This helps us make sure every marketing decision we make is focused on getting the best results"
    },
    {
      icon: (
        <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.7954 12.9735C29.4131 11.7516 29.1573 10.301 28.159 9.36409L26.7553 8.0466C26.4416 7.75228 26.258 7.43422 26.1599 7.01534L25.7208 5.14097C25.4085 3.80784 24.2802 2.86109 22.9131 2.78503L20.991 2.67816C20.5615 2.65428 20.2163 2.52866 19.8719 2.27091L18.3307 1.11728C17.2345 0.296844 15.7617 0.296844 14.6655 1.11728L13.1243 2.27084C12.7799 2.52866 12.4348 2.65428 12.0053 2.67816L10.0831 2.78503C8.71602 2.86109 7.58771 3.80784 7.27546 5.14097L6.83639 7.01534C6.73827 7.43422 6.55464 7.75228 6.24102 8.0466L4.83727 9.36409C3.83889 10.3011 3.58314 11.7516 4.20083 12.9735L5.06933 14.6917C5.26339 15.0756 5.32714 15.4373 5.27614 15.8644L5.04771 17.7759C4.88521 19.1354 5.62164 20.411 6.88027 20.95L8.32777 21.57L5.36789 27.9273C5.25308 28.174 5.28458 28.4613 5.45002 28.6773C5.61552 28.8933 5.88489 28.9983 6.15289 28.9515L9.26221 28.4082L10.8481 31.1372C10.9791 31.3628 11.2178 31.4993 11.4766 31.4993C11.4878 31.4993 11.499 31.4991 11.5103 31.4986C11.7821 31.4863 12.0223 31.3254 12.1372 31.0787L14.9326 25.0743L15.9027 24.7812C16.3145 24.6568 16.6818 24.6568 17.0935 24.7812L18.0636 25.0744L20.859 31.0788C20.9738 31.3255 21.2141 31.4863 21.4857 31.4987C21.497 31.4992 21.5082 31.4994 21.5194 31.4994C21.7783 31.4994 22.017 31.3628 22.1481 31.1373L23.734 28.4083L26.8433 28.9515C27.1114 28.9984 27.3807 28.8933 27.5462 28.6773C27.7117 28.4614 27.7431 28.174 27.6283 27.9274L24.6686 21.57L26.1161 20.9502C27.3748 20.4111 28.1112 19.1355 27.9487 17.776L27.7202 15.8645C27.6692 15.4373 27.733 15.0757 27.927 14.6917L28.7954 12.9735Z" fill="true"/>
        </svg>
      ),
      title: "Plans Made Just for You",
      description: "Every business is different. That's why we make sure our marketing plans fit your business, goals, and needs instead of using a one size fits all approach."
    }
  ];

  return (
    <section className="section-box wow animate__animated animate__fadeIn box-preparing-2">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-15">
            Why choose us as your Digital Marketing Partner?
          </h2>
          <p className="text-lg neutral-700">
            At Adfinity Clarity, we make digital marketing easy. Our team
            creates simple, effective strategies to help your business grow.
            We focus on what matters most, which are results. We offer
            services like SEO, social media marketing, and paid advertising.
            Our goal is to help you get more website visitors, more leads,
            more traffic and hence, more sales. We make sure everything we do
            works in the direction of your marketing goals. Our commitment is
            clear communication. We provide simple analytics reports so that
            you can always be up to date with the progress. We also stay on
            top of the latest trends to keep your business ahead of the
            competition. Choose us as your partner. Together, we can help your
            business succeed online.
          </p>
        </div>
        <br></br>
        <div className="text-center">
          <h2 className="mb-15">
            <br></br>
            Tailored Digital Marketing, PPC, and SEO strategies for long-term
            growth
          </h2>
          <p className="text-lg neutral-700">
            Your business can easily grow with digital marketing. We use SEO,
            PPC, and other tools to get faster results. We plan to keep you
            visible and ahead of your competitors at all times. If you are
            ready to grow your business with a clear and effective strategy,
            let&apos;s work together! At Adfinity Clarity, we&apos;re here to help
            you succeed.
          </p>
        </div>
        <div className="row mt-90">
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing">
              <div className="card-image">
                <img
                  className="wow fadeInUp"
                  src="/assets/imgs/page/homepage1/img-prepare.png"
                  alt="SEO Services"
                />
              </div>
              <div className="card-info">
                <h4>SEO Services</h4>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  We can help you reach top rankings on major search engines
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing">
              <div className="card-image">
                <img
                  className="wow fadeInUp"
                  src="/assets/imgs/page/homepage1/img-prepare2.png"
                  alt="Paid Advertisement Services"
                />
              </div>
              <div className="card-info">
                <h4>Paid Advertisement Services</h4>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  This is all you need to drive instant results with Social
                  Media Ads
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-preparing">
              <div className="card-image">
                <img
                  className="wow fadeInUp"
                  src="/assets/imgs/page/homepage1/img-prepare3.png"
                  alt="Web Design Services"
                />
              </div>
              <div className="card-info">
                <h4>Web Design Services</h4>
                <p className="text-lg neutral-700 w-85 mx-auto">
                  We create custom websites, landing pages, and UI/UX designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
