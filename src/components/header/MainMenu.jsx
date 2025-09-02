"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    // Check if the current path starts with the link's path
    return pathname.startsWith(link);
  };

  const clientsItems = [
    { name: "Services", link: "/services" },
    { name: "Case Studies", link: "/case-studies" }
  ];

  // UPDATED: This array now only contains the dropdown items for "About"
  const aboutDropdownItems = [
    { name: "Our Mission", link: "/about#mission" },
    { name: "Our Vision", link: "/about#vision" }
  ];

  const renderSingleNavItem = (label, link) => {
    return (
      <li className="nav-item">
        <Link
          href={link}
          className={`nav-link ${isActive(link) ? "active-menu" : ""}`}
          style={{ userSelect: "none" }}
        >
          {label}
        </Link>
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

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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

          <li className="nav-item">
            <Link
              href="/"
              className={pathname === "/" ? "nav-link active-menu" : "nav-link"}
              style={{ userSelect: "none" }}
            >
              Home
            </Link>
          </li>
          
          {/* Clients Dropdown */}
          <li className="nav-item dropdown">
            <a
              className={`nav-link dropdown-toggle ${clientsItems.some(item => isActive(item.link)) ? "active-menu" : ""}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              style={{ userSelect: "none" }}
            >
              Clients
            </a>
            <ul className="dropdown-menu">
              {clientsItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className={`dropdown-item ${isActive(item.link) ? "active" : ""}`}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {renderSingleNavItem("Creatives", "/creatives")}
          
          {renderSingleNavItem("Eco", "/eco")}
          
          {/* UPDATED: About link with its specific dropdown */}
          {/* FIXED: About link that goes to /about page AND has dropdown */}
<li className="nav-item dropdown">
  <Link
    href="/about"
    className={`nav-link dropdown-toggle ${isActive("/about") ? "active-menu" : ""}`}
    style={{ userSelect: "none" }}
  >
    About
  </Link>
  <ul className="dropdown-menu">
    {aboutDropdownItems.map((item, index) => (
      <li key={index}>
        <Link href={item.link} className="dropdown-item">
          <span>{item.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;