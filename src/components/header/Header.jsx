"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header = ({ style }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-seven white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block" style={{ userSelect: 'none' }}>
              <Image
                src="/images/logo/logo_06.svg"
                alt="logo"
                width={115}
                height={80}
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3" style={{ userSelect: 'none' }}>
            <Link
              href="/contact"
              className="signup-btn-two fw-500 tran3s d-none d-lg-block"
              style={{ userSelect: 'none' }}
            >
              Contact Us
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
