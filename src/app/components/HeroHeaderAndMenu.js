"use client";
import { useState, useEffect } from "react";
import Header1 from "../../../components/layout/header/Header1";
import MobileMenu from "../../../components/layout/MobileMenu";

export default function HeroHeaderAndMenu() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    const newState = !isMobileMenu;
    setIsMobileMenu(newState);
    if (typeof document !== "undefined") {
      document.body.style.overflow = newState ? "hidden" : "auto";
    }
  };

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, []);

  return (
    <>
      <Header1
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
    </>
  );
}
