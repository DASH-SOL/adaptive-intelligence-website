"use client";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { useSettings } from "@/context/SettingsContext";

const Header = ({ style, menuTextColor }) => {
  const { settings } = useSettings();
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <header
        className={`theme-main-menu sticky-menu theme-menu-seven white-vr ${
          navbar ? "fixed" : ""
        } ${menuTextColor === 'white' ? 'white-menu-text' : ''}`}
      >
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block" style={{ userSelect: "none" }}>
                <Image
                  src={
                    settings?.logo?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${settings.logo.url}`
                      : "/images/logo/logo_06.svg"
                  }
                  alt="logo"
                  width={115}
                  height={80}
                />
              </Link>
            </div>
            
            <div
              className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3"
              style={{ userSelect: "none" }}
            >
              <button
                onClick={toggleMenu}
                className="lets-talk-btn fw-500 tran3s d-none d-lg-flex align-items-center"
                style={{ userSelect: "none" }}
              >
                <span>Let's talk</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="ms-2"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            
            <MainMenu />
          </div>
        </div>
      </header>

      {/* Hamburger Menu Overlay - Desktop Only */}
      <div className={`hamburger-menu-overlay d-none d-lg-block ${isMenuOpen ? 'active' : ''}`}>
        <div className="hamburger-menu-content">
          <div className="hamburger-header d-flex justify-content-between align-items-center">
            <h2 className="menu-title">Let's talk —</h2>
            <button onClick={closeMenu} className="close-menu-btn">
              <span>Close</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="hamburger-form">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name *"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us a little bit more: *"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <p className="privacy-text">
              Learn more about how your information will be used in our{' '}
              <Link href="/privacy-policy" className="privacy-link">Privacy Policy</Link>.
            </p>
          </form>

          <div className="help-section">
            <h3>How else can we help?</h3>
            <div className="help-links">
              <div className="help-item">
                <span>Become a client</span>
                <Link href={`mailto:${settings?.clientEmail || 'hello@aii.agency'}`}>
                  {settings?.clientEmail || 'hello@aii.agency'}
                </Link>
              </div>
              <div className="help-item">
                <span>Media inquiries</span>
                <Link href={`mailto:${settings?.mediaEmail || 'press@aii.agency'}`}>
                  {settings?.mediaEmail || 'press@aii.agency'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      .white-menu-text .main-menu ul li a {
          color: white !important;
        }

        .white-menu-text .main-menu ul li:hover > a {
          color: #FF1292 !important;
        }

        .white-menu-text .main-menu ul li.current-menu-item > a {
          color: #FF1292 !important;
        }

        /* For dropdown menus if you have them */
        .white-menu-text .main-menu ul li ul {
          background: rgba(0, 0, 0, 0.9);
        }

        .white-menu-text .main-menu ul li ul li a {
          color: white !important;
        }

        /* Mobile menu button if needed */
        .white-menu-text .mobile-menu-trigger {
          color: white !important;
        }
        .lets-talk-btn {
          background: white;
          color: black;
          border: 1px solid #ff1292;
          border-radius: 0;
          padding: 15px 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .lets-talk-btn:hover {
          background: #ff1292;
          border-color: #ff1292;
          transform: translateY(-2px);
          color:white;
        }

        .hamburger-menu-overlay {
          position: fixed;
          top: 0;
          right: -100%;
          width: 30%;
          min-width: 380px;
          max-width: 500px;
          height: 100vh;
          background: #000000;
          z-index: 9999;
          transition: right 0.4s ease;
          overflow-y: auto;
        }

        .hamburger-menu-overlay.active {
          right: 0;
        }

        .hamburger-menu-content {
          padding: 40px;
          max-width: 900px;
          margin: 0 auto;
          color: white;
        }

        .hamburger-header {
          margin-bottom: 50px;
        }

        .menu-title {
          font-size: 32px;
          font-weight: 400;
          margin: 0;
          color: white;
        }

        .close-menu-btn {
          background: #fff;
          color: black;
          border: none;
          padding: 12px 20px;
          border-radius: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .close-menu-btn:hover {
          background: #ff1292;
          color: white;
        }

        .hamburger-form {
          max-width: 600px;
        }

        .form-group {
          margin-bottom: 30px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background: transparent;
          border: 1px solid #ffff;
          color: white;
          padding: 20px;
          border-radius: 0;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #FF1292;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #9ca3af;
        }

        .submit-btn {
          background: white;
          color: black;
          border: none;
          padding: 16px 40px;
          border-radius: 0;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 30px;
        }

        .submit-btn:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .privacy-text {
          color: white;
          font-size: 14px;
          margin-bottom: 60px;
        }

        .privacy-link {
          color: white;
          text-decoration: underline;
        }

        .help-section h3 {
          font-size: 24px;
          margin-bottom: 30px;
          color: white;
        }

        .help-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .help-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .help-item span {
          color: #888;
          font-size: 14px;
        }

        .help-item a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }

        .help-item a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1200px) {
          .hamburger-menu-overlay {
            width: 400px;
            min-width: 400px;
          }
        }

        @media (max-width: 991px) {
          .hamburger-menu-overlay {
            display: none !important;
          }
          
          .lets-talk-btn {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .hamburger-menu-content {
            padding: 20px;
          }

          .menu-title {
            font-size: 24px;
          }

          .help-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Header;