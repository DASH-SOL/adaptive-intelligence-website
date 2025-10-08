import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header/Header';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';

// Icon mapping function
const getIconByType = (iconType) => {
  const icons = {
    remote: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5L25 15H35L27.5 22.5L30 32.5L20 25L10 32.5L12.5 22.5L5 15H15L20 5Z" stroke="#FF1292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="18" stroke="#FF1292" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
    growth: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5V35M20 5L10 15M20 5L30 15" stroke="#FF1292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 25L20 35L32 25" stroke="#FF1292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="10" r="3" fill="#FF1292"/>
      </svg>
    ),
    innovation: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8L12 12V20C12 26 16 30 20 32C24 30 28 26 28 20V12L20 8Z" stroke="#FF1292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16L16 20L18 22L20 20L24 16L22 14L20 16Z" fill="#FF1292"/>
        <circle cx="20" cy="20" r="1" fill="#FF1292"/>
      </svg>
    ),
    sustainability: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="#FF1292" strokeWidth="2"/>
        <path d="M20 8C14.5 8 10 12.5 10 18C10 23.5 14.5 28 20 28" stroke="#FF1292" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 15L32 20L28 25" stroke="#FF1292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12L12 15L15 18" stroke="#FF1292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    results: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="24" height="20" rx="2" stroke="#FF1292" strokeWidth="2"/>
        <path d="M14 12V8C14 6.9 14.9 6 16 6H24C25.1 6 26 6.9 26 8V12" stroke="#FF1292" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 20H28M20 16V24" stroke="#FF1292" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="26" r="2" fill="#FF1292"/>
      </svg>
    ),
    collaborative: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="6" stroke="#FF1292" strokeWidth="2"/>
        <circle cx="26" cy="14" r="6" stroke="#FF1292" strokeWidth="2"/>
        <circle cx="20" cy="26" r="6" stroke="#FF1292" strokeWidth="2"/>
        <path d="M18 20L14 18M22 20L26 18" stroke="#FF1292" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 15L19 17L23 13" stroke="#FF1292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };
  
  return icons[iconType] || icons.remote;
};

const Creatives = ({ pageData }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  if (!pageData) {
    return (
      <>
        <Header />
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  const missionImageUrl = pageData.missionImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${pageData.missionImage.url}`
    : '/images/media/img_133.jpg';

  return (
    <>
      <Header menuTextColor="white" />
      
      {/* Hero Section */}
      <div className="careers-hero pt-200 pb-100 lg-pt-150 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 m-auto">
              <div className="title-style-ten text-center">
                <div className="sc-title">{pageData.heroTagline || 'Join Our Team'}</div>
                <h1 className="main-title font-recoleta fw-normal">
                  {pageData.heroTitle || 'Shape the Future of Digital Marketing'}
                  <span className="position-relative">
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={280}
                      height={5}
                      style={{ filter: 'invert(1)' }}
                    />
                  </span>
                </h1>
                <p className="hero-description">
                  {pageData.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-50">
              <div className="mission-content">
                <h2 className="section-title font-recoleta">{pageData.missionTitle || 'What We Do'}</h2>
                <p className="mission-text">{pageData.missionParagraph1}</p>
                <p className="mission-text">{pageData.missionParagraph2}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-image">
                <Image
                  src={missionImageUrl}
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-60">
              <div className="sc-title">{pageData.valuesTagline || 'Our Values'}</div>
              <h2 className="section-title font-recoleta">{pageData.valuesTitle || 'What Drives Us'}</h2>
            </div>
          </div>
          <div className="row g-4">
            {pageData.values?.map((value, index) => (
              <div key={value.id || index} className="col-lg-6 col-md-6">
                <div className="value-card">
                  <div className="value-number" style={{ color: value.color || '#FF1292' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-60">
              <div className="sc-title">{pageData.benefitsTagline || 'Why Join Us'}</div>
              <h2 className="section-title font-recoleta">{pageData.benefitsTitle || 'Benefits & Perks'}</h2>
            </div>
          </div>
          <div className="row g-4">
            {pageData.benefits?.map((benefit, index) => (
              <div key={benefit.id || index} className="col-lg-4 col-md-6">
                <div 
                  className="benefit-card"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="benefit-icon">
                    {getIconByType(benefit.iconType)}
                  </div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'linear-gradient(135deg, #FF1292 0%, #e60d82 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <h2 className="cta-title">{pageData.ctaTitle || 'Ready to Join Our Team?'}</h2>
              <p className="cta-description">{pageData.ctaDescription}</p>
              <div className="cta-buttons">
                <a 
                  href={pageData.applyButtonUrl || 'https://smlof6a6801.typeform.com/to/dBDGwPOT'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  {pageData.applyButtonText || 'Apply to Work With Us'}
                </a>
                <a 
                  href={`mailto:${pageData.hrEmail || 'HR@aii.agency'}`}
                  className="contact-button"
                >
                  {pageData.contactButtonText || 'Contact HR Team'}
                </a>
              </div>
              <p className="contact-info">
                Questions? Reach us at{' '}
                <a href={`mailto:${pageData.hrEmail || 'HR@aii.agency'}`} className="email-link">
                  {pageData.hrEmail || 'HR@aii.agency'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image src="/images/logo/logo_06.svg" alt="logo" width={115} height={80} />
                  </Link>
                </div>
              </div>
              <FooterContent />
              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newsletter</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </div>

      <style jsx>{`
        /* White Header Fix */
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-link) {
          color: white !important;
        }
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item:hover .nav-link),
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item.active .nav-link),
        :global(body .theme-main-menu.white-vr:not(.fixed) .navbar .navbar-nav .nav-item.current-menu-item .nav-link) {
          color: #FF1292 !important;
        }
        :global(body .theme-main-menu:not(.fixed) .lets-talk-btn) {
          color: white !important;
          border-color: white !important;
          background: transparent !important;
        }
        :global(body .theme-main-menu:not(.fixed) .lets-talk-btn:hover) {
          color: black !important;
          background: white !important;
        }

        /* Hero Section */
        .careers-hero {
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }
        .sc-title {
          color: #FF1292;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .main-title {
          color: white;
          margin-bottom: 30px;
          font-size: 3.5rem;
          line-height: 1.2;
        }
        .hero-description {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Mission Section */
        .section-title {
          font-size: 2.5rem;
          color: #151937;
          margin-bottom: 30px;
          font-weight: 400;
        }
        .mission-text {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .rounded-img {
          border-radius: 12px;
          width: 100%;
          height: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        /* Values Section */
        .value-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-left: 4px solid #FF1292;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        .value-number {
          font-size: 3rem;
          font-weight: 700;
          font-family: 'Recoleta', serif;
          margin-bottom: 15px;
          line-height: 1;
        }
        .value-title {
          font-size: 1.5rem;
          color: #151937;
          margin-bottom: 15px;
          font-family: 'Recoleta', serif;
          font-weight: 600;
        }
        .value-description {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Benefits Section */
        .benefit-card {
          background: #f8f9fa;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
        }
        .benefit-card:hover {
          background: white;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
        .benefit-icon {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border: 2px solid #FF1292;
          box-shadow: 0 5px 15px rgba(255, 18, 146, 0.2);
          transition: all 0.3s ease;
        }
        .benefit-card:hover .benefit-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 18, 146, 0.3);
        }
        .benefit-title {
          font-size: 1.3rem;
          color: #151937;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .benefit-description {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section */
        .cta-title {
          color: white;
          font-size: 2.8rem;
          margin-bottom: 20px;
          font-family: 'Recoleta', serif;
          font-weight: 400;
        }
        .cta-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.2rem;
          margin-bottom: 50px;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .apply-button {
          background: white;
          color: #FF1292;
          padding: 18px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .apply-button:hover {
          background: #151937;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .contact-button {
          background: transparent;
          color: white;
          padding: 18px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border: 2px solid white;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .contact-button:hover {
          background: white;
          color: #FF1292;
          transform: translateY(-3px);
        }
        .contact-info {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin-top: 20px;
        }
        .email-link {
          color: white;
          text-decoration: underline;
          font-weight: 600;
        }
        .email-link:hover {
          color: #151937;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .cta-title {
            font-size: 2rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          .apply-button, .contact-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  try {
    const pageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/creatives-page?populate=*`;
    const pageRes = await fetch(pageUrl);
    const pageJson = await pageRes.json();
    const pageData = pageJson.data || null;
    
    return { 
      props: { pageData },
    };
  } catch (error) {
    console.error("Error fetching creatives page data:", error);
    return { props: { pageData: null } };
  }
}

export default Creatives;