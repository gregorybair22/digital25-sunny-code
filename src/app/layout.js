import { Urbanist } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/css/style.css";
import "./assets/css/fix-backgrounds.css";
import "animate.css";
import Script from "next/script";
import BackToTop from "../components/BackToTop";


const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

export const metadata = {
  verification: {
    google: "u4O0nRNafe3pkIB3d6EG-kBJAl0lTRq7Ntjm_dbH9eA",
  },
};
{/*export const metadata = {
  metadataBase: new URL("https://adfinityclarity.com"),
  title: {
    default: "Adfinity Clarity – Digital Marketing Agency",
    template: "%s | Adfinity Clarity",
  },
  description:
    "Adfinity Clarity is a results-driven digital marketing agency offering SEO, PPC, social media marketing, and growth solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};*/}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager 
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NDZMJK42');
          `}
        </Script>
        End Google Tag Manager */}
      </head>
      <body className={urban.className}>
        {/* Google Tag Manager (noscript)         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDZMJK42"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
         End Google Tag Manager (noscript) */}
        {children}
        <BackToTop />

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
