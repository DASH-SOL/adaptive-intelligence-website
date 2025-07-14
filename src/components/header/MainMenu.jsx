"use client";

import Link from "next/link";
import { servicesItems, aboutItems, caseStudiesItems } from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  // Helper function to render either dropdown or single link
  const renderNavItem = (items, label, checkActive) => {
    // If only one item, render as simple link
    if (items.length === 1) {
      return (
        <li className="nav-item">
          <Link
            href={items[0].link || items[0].text}
            className={`nav-link ${checkActive(items[0]) ? "active-menu" : ""}`}
            style={{ userSelect: "none" }}
          >
            {label}
          </Link>
        </li>
      );
    }

    // Otherwise render as dropdown
    return (
      <li className="nav-item dropdown">
        <a
          className={
            items.some((elm) => isActive(elm.link || elm.text))
              ? "nav-link dropdown-toggle active-menu"
              : "nav-link dropdown-toggle"
          }
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          style={{ userSelect: "none" }}
        >
          {label}
        </a>
        <ul className="dropdown-menu" style={{ userSelect: "none" }}>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link || item.text}
                className={`dropdown-item ${
                  isActive(item.link || item.text) ? "active" : ""
                }`}
                style={{ userSelect: "none" }}
              >
                <span style={{ userSelect: "none" }}>
                  {item.name || item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Mobile Logo - Updated to match desktop */}
          <li className="d-block d-lg-none">
            <div className="logo mobile-logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_06.svg"
                  alt="logo"
                  width={115}
                  height={80}
                  style={{ userSelect: "none" }}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
            <Link
              href="/"
              className={pathname === "/" ? "nav-link active-menu" : "nav-link"}
              style={{ userSelect: "none" }}
            >
              Home
            </Link>
          </li>
          {/* End li (pages) */}

          {renderNavItem(aboutItems, "About", (item) => isActive(item.link))}
          {renderNavItem(caseStudiesItems, "Case Studies", (item) =>
            isActive(item.link)
          )}
          {renderNavItem(servicesItems, "Services", (item) =>
            isActive(item.link)
          )}

          {/* Mobile Content */}
          <div className="mobile-content d-block d-lg-none">
            <div className="d-flex flex-column align-items-center justify-content-center mt-70">
              <Link
                href="/contact"
                className="signup-btn-two fw-500 tran3s"
                style={{ userSelect: "none" }}
              >
                Contact us
              </Link>
            </div>
          </div>
          {/* /.mobile-content */}
        </ul>
        {/* End ul */}
      </div>
    </nav>
  );
};

export default MainMenu;
