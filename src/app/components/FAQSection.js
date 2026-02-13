import Link from "next/link";

export default function FAQSection() {

  const faqs = [
    {
      id: 1,
      question: "What does an internet marketing agency do?",
      answer: (
        <p>
          An <Link href="/">internet marketing agency</Link> helps businesses grow online. It offers services like SEO,
          online ads, content creation, email marketing, and digital PR. These services work together
          to attract more visitors, generate leads, and increase sales.
        </p>
      )
    },
    {
      id: 2,
      question: "Why is SEO important for my business?",
      answer: (
        <div>
          SEO improves your website&apos;s visibility in search engines like Google, helping it appear higher
          in search results. This means more people can find your business when they&apos;re searching
          online. It&apos;s one of most affordable ways to get long-term traffic and build trust.
        </div>
      )
    },
    {
      id: 3,
      question: "Is email marketing still effective?",
      answer: (
        <div>
          Yes, email marketing consistently delivers, and well-timed emails outperform many newer channels by building lasting customer relationships, driving repeat business, and delivering some of highest ROI in digital marketing.
        </div>
      )
    },
    {
      id: 4,
      question: "What are digital marketing agency, and how can they help my business?",
      answer: (
        <div>
          <Link href="/digital-marketing">Digital marketing agencies</Link> help you promote your business online. They include things like
          SEO, social media marketing, paid ads, and email campaigns. These tools work together to
          help you reach more people, get new leads, and increase your sales by sharing right
          message with right audience.
        </div>
      )
    }
  ];

  return (
    <section className="section-box box-faqs-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="box-faq-left">
              <div className="btn btn-brand-4-sm">Frequently Asked Questions</div>
              <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
              <p className="text-lg neutral-700">
                Below you&apos;ll find answers to most common questions you may have on Adfinity Clarity
                Platform Online Advertising. If you still can&apos;t find answer you&apos;re looking for, just{" "}
                <a href="mailto:contact@adfinityclarity.com" className="text-18-bold brand-1-1">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
              {faqs.map((faq) => (
                <div key={faq.id} className="accordion-item">
                  <h2 className="accordion-header" id={`flush-heading${faq.id}`}>
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#flush-collapse${faq.id}`} 
                      aria-expanded="false" 
                      aria-controls={`flush-collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div 
                    className="accordion-collapse collapse" 
                    id={`flush-collapse${faq.id}`} 
                    aria-labelledby={`flush-heading${faq.id}`} 
                    data-bs-parent="#accordionFAQS"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
