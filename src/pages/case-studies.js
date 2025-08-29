// File: pages/case-studies.js
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header/Header';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';
import LetsTalkButton from '@/components/LetsTalkButton';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Use your exact case study content
  const caseStudiesData = [
    {
      id: 1,
      slug: "infstones-global-press-coverage",
      title: "How InfStones Earned Global Press Coverage Across Top Media Outlets",
      client: "InfStones",
      category: "Digital Marketing",
      industry: "Blockchain & Crypto",
      results: "Global Press Coverage",
      description: "Strategic positioning and PR campaign that helped InfStones secure massive funding and achieve global media recognition in the competitive crypto space.",
      image: "/images/case-studies/InfStones.png",
      tags: ["Brand Strategy", "PR & Media", "Blockchain Infrastructure"],
      metrics: {
        funding: "$66M",
        coverage: "Global",
        search: "Spike"
      },
      duration: "Campaign",
      featured: true
    },
    {
      id: 2,
      slug: "market-trend-report-2025",
      title: "2025 Market Trend Report",
      client: "Adaptive Intelligence",
      category: "Market Insights",
      industry: "Marketing & Strategy",
      results: "8+ Key Insights",
      description: "Discover the trends shaping the future of marketing—from nostalgic branding to AI-powered personalization and everything in between.",
      image: "/images/case-studies/unnamed.png",
      tags: ["Nostalgia Marketing", "AI Personalization", "Consumer Trends"],
      metrics: {
        insights: "8+",
        trends: "2025",
        scope: "Global"
      },
      duration: "Annual",
      featured: true
    }
  ];

  const categories = ['All', 'Digital Marketing', 'Market Insights'];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.category === activeFilter);

  const featuredCaseStudies = caseStudiesData.filter(study => study.featured);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="case-studies-hero pt-200 pb-100 lg-pt-150 lg-pb-80" style={{ background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div className="title-style-ten text-center">
                <div className="sc-title">
                  Our Work
                </div>
                <h1 className="main-title font-recoleta fw-normal">
                  Case
                  <span className="position-relative">
                    {" "}
                    Studies
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={220}
                      height={5}
                      style={{ filter: 'invert(1)' }}
                    />
                  </span>
                </h1>
                <p className="hero-description">
                  Explore how we've helped leading brands transform their digital presence and achieve exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="featured-cases pt-180 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-style-ten text-center mb-5">
                <div className="sc-title">
                  Featured Work
                </div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Success
                  <span className="position-relative">
                    {" "}
                    Stories
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={180}
                      height={5}
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {featuredCaseStudies.map((study, index) => (
              <div key={study.id} className="col-lg-6">
                <div className="featured-case-card">
                  <div className="case-image">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="case-img"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="case-overlay">
                      <div className="case-category">{study.category}</div>
                      <div className="case-metrics">
                        {Object.entries(study.metrics).map(([key, value], idx) => (
                          <div key={idx} className="metric-item">
                            <span className="metric-value">{value}</span>
                            <span className="metric-label">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="case-content">
                    <div className="case-meta">
                      <span className="client-name">{study.client}</span>
                      <span className="industry">{study.industry}</span>
                    </div>
                    <h3 className="case-title">{study.title}</h3>
                    <p className="case-description">{study.description}</p>
                    <div className="case-tags">
                      {study.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="case-results">
                      <div className="result-highlight">
                        <span className="result-number">{study.results}</span>
                        <span className="result-label">Key Result</span>
                      </div>
                      <Link href={`/case-studies/${study.slug}`} className="case-link">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section - for future expansion */}
      <div className="filter-section pt-100 pb-50" style={{ background: '#f8f9fa', display: 'none' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter-navigation">
                <div className="filter-buttons">
                  {categories.map(category => (
                    <button 
                      key={category}
                      className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                      onClick={() => setActiveFilter(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Case Studies Grid - for future expansion */}
      <div className="all-cases pt-100 pb-100" style={{ background: '#f8f9fa', display: 'none' }}>
        <div className="container">
          <div className="row g-4">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="col-lg-4 col-md-6">
                <div className="case-study-card">
                  <div className="case-card-image">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={400}
                      height={300}
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <div className="card-category">{study.category}</div>
                        <div className="card-metrics">
                          {Object.entries(study.metrics).slice(0, 2).map(([key, value], idx) => (
                            <div key={idx} className="metric-item">
                              <span className="metric-value">{value}</span>
                              <span className="metric-label">{key}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="case-card-content">
                    <div className="card-header">
                      <span className="client-badge">{study.client}</span>
                      <span className="duration-badge">{study.duration}</span>
                    </div>
                    <h3 className="card-title">{study.title}</h3>
                    <p className="card-description">{study.description}</p>
                    <div className="card-tags">
                      {study.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <div className="main-result">
                        <span className="result-text">{study.results}</span>
                      </div>
                      <Link href={`/case-studies/${study.slug}`} className="read-more">
                        Read More →
                      </Link>
                    </div>
                  </div>
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
              <h2 className="cta-title">
                Ready to Create Your Success Story?
              </h2>
              <p className="cta-description">
                Let's discuss how we can help transform your brand and achieve exceptional results.
              </p>
              <LetsTalkButton 
                buttonText="Start Your Project" 
                href="/contact"
              />
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
        /* Hero Section */
        .case-studies-hero {
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
          margin-bottom: 20px;
          font-size: 3.5rem;
          line-height: 1.2;
        }

        .hero-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.2rem;
          max-width: 600px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        /* Featured Cases */
        .featured-case-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .featured-case-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .case-image {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .case-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-case-card:hover .case-img {
          transform: scale(1.05);
        }

        .case-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 50%, rgba(0,0,0,0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 25px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-case-card:hover .case-overlay {
          opacity: 1;
        }

        .case-category {
          background: rgba(255, 18, 146, 0.9);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          width: fit-content;
        }

        .case-metrics {
          display: flex;
          gap: 25px;
          align-self: flex-end;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-value {
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .metric-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;
          text-transform: capitalize;
        }

        .case-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .case-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .client-name {
          color: #FF1292;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .industry {
          color: #666;
          font-size: 0.85rem;
        }

        .case-title {
          font-size: 1.4rem;
          color: #151937;
          margin-bottom: 15px;
          font-family: 'Recoleta', serif;
          font-weight: 600;
          line-height: 1.3;
        }

        .case-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .case-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 25px;
          flex-wrap: wrap;
        }

        .tag {
          background: #f8f9fa;
          color: #151937;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .case-results {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #f0f0f0;
        }

        .result-highlight {
          display: flex;
          flex-direction: column;
        }

        .result-number {
          color: #FF1292;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1;
        }

        .result-label {
          color: #666;
          font-size: 0.8rem;
          margin-top: 4px;
        }

        .case-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #151937;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .case-link:hover {
          color: #FF1292;
          transform: translateX(5px);
        }

        /* CTA Section */
        .cta-title {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-family: 'Recoleta', serif;
          font-weight: 400;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* Filter Navigation - Hidden for now */
        .filter-navigation {
          display: flex;
          justify-content: center;
        }

        .filter-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-btn {
          padding: 12px 24px;
          border: 2px solid #e9ecef;
          background: white;
          color: #151937;
          border-radius: 30px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: #FF1292;
          background: #FF1292;
          color: white;
        }

        /* Case Study Cards - For future grid layout */
        .case-study-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .case-study-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
        }

        .case-card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .case-study-card:hover .card-img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 50%, rgba(0,0,0,0.8) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .case-study-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .card-category {
          background: rgba(255, 18, 146, 0.9);
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          width: fit-content;
        }

        .card-metrics {
          display: flex;
          gap: 15px;
          align-self: flex-end;
        }

        .case-card-content {
          padding: 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .client-badge {
          background: #f8f9fa;
          color: #151937;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .duration-badge {
          color: #666;
          font-size: 0.8rem;
        }

        .card-title {
          font-size: 1.25rem;
          color: #151937;
          margin-bottom: 12px;
          font-weight: 600;
          line-height: 1.3;
        }

        .card-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .card-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #f0f0f0;
        }

        .main-result {
          flex-grow: 1;
        }

        .result-text {
          color: #FF1292;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .read-more {
          color: #151937;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .read-more:hover {
          color: #FF1292;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .case-image {
            height: 280px;
          }

          .case-title {
            font-size: 1.2rem;
          }

          .case-metrics {
            gap: 15px;
          }

          .case-results {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .metric-value {
            font-size: 1rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudies;