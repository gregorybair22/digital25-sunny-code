"use client";

import { useEffect, useState } from "react";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";

export default function LayoutWrapper({
  children,
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  topBar,
  headerCls,
  logoWhite,
}) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({ live: false });
    window.wow.init();

    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <>
      <AddClassBody />
      <div className="body-overlay-1" onClick={handleMobileMenu} />

      {/* Header */}
      {!headerStyle && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          topBar={topBar}
          headerCls={headerCls}
          logoWhite={logoWhite}
        />
      )}
      {headerStyle == 1 && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          topBar={topBar}
          headerCls={headerCls}
          logoWhite={logoWhite}
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {/* Main Content */}
      <main className="main">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {/* Footer */}
      {!footerStyle && <Footer3 />}
      {footerStyle == 1 && <Footer3 />}

      <BackToTop />
    </>
  );
}
