import HeroHeaderAndMenu from "./HeroHeaderAndMenu";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function HeroSection() {
  return (
    <>
      <HeroHeaderAndMenu />
      <section className="section-box">
        <div className="banner-hero hero-4">
          <div className="banner-inner">
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {/* LEFT CONTENT - Server-rendered for SSR/SEO */}
              <div style={{ flex: 1, minWidth: 320, maxWidth: 700 }}>
                <h1 className="display-2 mb-25">
                  Unlock Your Business{" "}
                  <span className="text-bg-brand-4">Revenue</span> With Internet
                  Marketing Agency
                </h1>
                <p className="text-lg mb-25">
                  Use data-driven digital marketing strategies to attract more
                  leads, convert customers, and scale your business with
                  confidence.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
