"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/header/Header';
import LetsTalkButton from '@/components/LetsTalkButton';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';
import { resourceDatabase } from '@/data/resources';

const DynamicResourcePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [resource, setResource] = useState(null);
  const [relatedResources, setRelatedResources] = useState([]);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const faqs = [
    {
      question: "Why do I need to provide my email?",
      answer: "We ask for your information in exchange for a valuable resource so we can: (a) send you the full resource directly, (b) share additional insights and resources we believe will benefit your brand, and (c) occasionally send marketing communications that align with your business interests. We will always keep your information safe and secure."
    },
    {
      question: "Is this really free?",
      answer: "Certainly! We share our most impactful client success stories and market insights so you can apply the lessons to your own business, in hopes that you'll keep us in mind when you have future marketing questions."
    }
  ];

  useEffect(() => {
    if (slug) {
      const foundResource = resourceDatabase[slug];
      
      if (foundResource) {
        setResource(foundResource);
        
        // Get other case studies/reports excluding current one
        const otherResources = Object.values(resourceDatabase)
          .filter(r => r.slug !== slug && (r.type === 'case-study' || r.type === 'report'))
          .slice(0, 3); // Show up to 3 related resources
        
        setRelatedResources(otherResources);
      } else {
        setResource(null);
      }
      setIsLoading(false);
    }
  }, [slug]);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!resource) {
    return (
      <>
        <Header />
        <div className="not-found-section">
          <div className="container">
            <div className="not-found-content">
              <h1>Resource Not Found</h1>
              <p>The resource you're looking for doesn't exist.</p>
              <Link href="/case-studies" className="back-link">
                View All Resources
              </Link>
            </div>
          </div>
        </div>
        <FooterContent />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="resource-hero pt-200 pb-100 lg-pt-150 lg-pb-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="hero-content text-center">
                <div className="resource-badge">
                  {resource.badge}
                </div>
                <h1 className="hero-title">
                  {resource.title}
                </h1>
                <div className="testimonial-quote">
                  <blockquote>
                    "{resource.testimonial.quote}"
                  </blockquote>
                  <cite>— {resource.testimonial.author}, {resource.testimonial.position}</cite>
                </div>
                <div className="hero-cta">
                  <LetsTalkButton 
                    buttonText="Download for free" 
                    usePopup={true}
                    popupTitle={`Get Your Free ${resource.type === 'report' ? 'Report' : 'Case Study'}`}
                    popupDescription={`Enter your email to access the ${resource.badge}`}
                    resourceSlug={slug}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="resource-preview pt-150 pb-100 lg-pt-120 lg-pb-80" style={{ background: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="preview-content">
                <div className="resource-visual">
                  <div className="resource-mockup">
                    <Image
                      src={resource.heroImage}
                      alt={`${resource.badge} Preview`}
                      width={400}
                      height={500}
                      className="mockup-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="insights-content">
                <h2 className="insights-title">
                  This {resource.type} includes insights on:
                </h2>
                <ul className="insights-list">
                  {resource.insights.map((insight, index) => (
                    <li key={index}>
                      <div className="insight-icon">✓</div>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section pt-100 pb-150 lg-pt-80 lg-pb-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="benefits-title">
                Join leading marketers and founders who use our {resource.type}s to:
              </h2>
              <div className="benefits-grid">
                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <Image src="/images/icon/icon_94.svg" alt="Spark ideas" width={40} height={40}/>
                    </div>
                    <h4>Spark ideas for brand positioning and market entry</h4>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Image src="/images/icon/icon_95.svg" alt="Learn storytelling" width={40} height={40}/>
                    </div>
                    <h4>Learn how storytelling drives investor confidence</h4>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <Image src="/images/icon/icon_96.svg" alt="Avoid pitfalls" width={40} height={40}/>
                    </div>
                    <h4>Avoid common pitfalls when scaling in competitive industries</h4>
                  </div>
              </div>
              
              <div className="cta-section">
                <LetsTalkButton 
                  buttonText={`Download Free ${resource.type === 'report' ? 'Report' : 'Case Study'}`}
                  usePopup={true}
                  popupTitle={`Get Your Free ${resource.type === 'report' ? 'Report' : 'Case Study'}`}
                  popupDescription={`Enter your email to access the ${resource.badge}`}
                  resourceSlug={slug}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Strategy Section */}
      <div className="strategy-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="strategy-title">
                Outline your marketing strategy in a simple template.
              </h2>
              <p className="strategy-description">
                With so many different marketing and advertising channels, it's a smart move to equip your marketing team with a plan for what to do and why.
              </p>
              <p className="strategy-description">
                That's why we've built a marketing plan for your business. You can use it to lay out your budget, team structure, and channels of choice.
              </p>
              <p className="strategy-cta">
                Download the template now to start organizing and mapping out your marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Case Studies Section */}
      {/* Explore More Case Studies Section */}
      {relatedResources.length > 0 && (
        <div className="explore-more-section pt-150 pb-100 lg-pt-120 lg-pb-80" style={{ background: '#f8f9fa' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-60">
                <h2 className="explore-title">
                  Explore More Case Studies
                </h2>
                <p className="explore-subtitle">
                  Discover how we've helped other brands achieve remarkable results
                </p>
              </div>
            </div>
            <div className="row g-4">
              {relatedResources.map((relatedResource) => (
                <div key={relatedResource.slug} className="col-lg-4 col-md-6">
                  <div className="featured-case-card">
                    <div className="case-image">
                      <Image
                        src={relatedResource.heroImage}
                        alt={relatedResource.title}
                        width={600}
                        height={400}
                        className="case-img"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="case-overlay">
                        <div className="case-category">{relatedResource.category}</div>
                        {relatedResource.metrics &&
                          <div className="case-metrics">
                            {Object.entries(relatedResource.metrics).map(([key, value], idx) => (
                              <div key={idx} className="metric-item">
                                <span className="metric-value">{value}</span>
                                <span className="metric-label">{key}</span>
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    </div>
                    <div className="case-content">
                      <div className="case-meta">
                        <span className="client-name">{relatedResource.client}</span>
                        <span className="industry">{relatedResource.industry}</span>
                      </div>
                      <h3 className="case-title-related">{relatedResource.title}</h3>
                      <p className="case-description">{relatedResource.description}</p>
                      <div className="case-tags">
                        {relatedResource.tags && relatedResource.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <div className="case-results">
                        <div className="result-highlight">
                          <span className="result-number">{relatedResource.results}</span>
                          <span className="result-label">Key Result</span>
                        </div>
                        <Link href={`/case-studies/${relatedResource.slug}`} className="case-link">
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
      )}
      {/* Dual CTA Section */}
      <div className="dual-cta-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-50">
              <div className="cta-card cta-primary">
                <h3 className="cta-card-title alt_cta">
                  Let's Build Your Brand Today.
                </h3>
                <p className="cta-card-description">
                  Adaptive Intelligence partners with brands ready to make their mark. Whether launching a new app or revitalizing an existing business, we design strategies that deliver results.
                </p>
                <Link href="/contact" className="cta-button cta-button-primary">
                  Let's Talk
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-card cta-secondary">
                <h3 className="cta-card-title">
                  Want More Insights?
                </h3>
                <p className="cta-card-description">
                  Adaptive Intelligence aims to make our insights accessible to anyone who wishes to learn innovative marketing strategies. That's why we've created a Marketing Insights Report that breaks down the latest trends in brand strategy, PPC, content marketing, and consumer behavior.
                </p>
                <Link href="/market-trend-report" className="cta-button cta-button-secondary">
                  Market Trend Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section pt-100 pb-150 lg-pt-80 lg-pb-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="faq-title text-center">FAQs</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={expandedFaq === index}
                    >
                      <span>{faq.question}</span>
                      <svg 
                        className={`faq-arrow ${expandedFaq === index ? 'expanded' : ''}`}
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none"
                      >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
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
        /* Loading and Error States */
        .loading-screen {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #FF1292;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .not-found-section {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .not-found-content h1 {
          font-size: 2.5rem;
          color: #151937;
          margin-bottom: 20px;
        }
        .not-found-content p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }
        .back-link {
          background: #FF1292;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .back-link:hover {
          background: #e60d82;
          transform: translateY(-2px);
        }

        /* Hero Section */
        .resource-hero {
          position: relative;
          overflow: hidden;
        }
        .resource-badge {
          background: #FF1292;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 30px;
        }
        .hero-title {
          font-size: 3rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .testimonial-quote {
          margin: 40px 0;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .testimonial-quote blockquote {
          font-size: 1.2rem;
          color: #151937;
          font-style: italic;
          margin-bottom: 15px;
          line-height: 1.5;
        }
        .testimonial-quote cite {
          color: #FF1292;
          font-weight: 600;
          font-style: normal;
        }
        .hero-cta {
          margin-top: 40px;
        }

        /* Resource Preview */
        .resource-mockup {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mockup-image {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        .insights-title {
          font-size: 2rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 30px;
          font-weight: 400;
        }
        .insights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .insights-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .insight-icon {
          width: 24px;
          height: 24px;
          background: #FF1292;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          margin-right: 15px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Benefits Section */
        .benefits-title {
          font-size: 2.2rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 50px;
          font-weight: 400;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
        }
        .benefit-item {
          text-align: center;
        }
        .benefit-icon {
          width: 60px;
          height: 60px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border: 2px solid #FF1292;
        }
        .benefit-item h4 {
          font-size: 1.1rem;
          color: #151937;
          font-weight: 600;
          line-height: 1.4;
        }

        /* Strategy Section */
        .strategy-title {
          font-size: 2.5rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 30px;
          font-weight: 400;
        }
        .strategy-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
        }
        .strategy-cta {
          font-size: 1.1rem;
          color: #151937;
          font-weight: 600;
          margin-top: 30px;
        }

        /* Explore More Section */
        .explore-title {
          font-size: 2.5rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          font-weight: 400;
          margin-bottom: 15px;
        }
        .explore-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 0;
        }
        .case-study-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }
        .case-study-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .case-image {
          position: relative;
          overflow: hidden;
        }
        .case-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #FF1292;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .case-content {
          padding: 25px;
        }
        .case-title {
          font-size: 1.3rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 15px;
        }
        .case-excerpt {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .case-link {
          color: #FF1292;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .case-link:hover {
          color: #e60d82;
          transform: translateX(3px);
        }

        /* Dual CTA Section */
        .dual-cta-section .row {
          align-items: stretch;
        }
        .cta-card {
          background: #f8f9fa;
          padding: 50px 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }
        .cta-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
        .cta-primary {
          background: #151937;
          color: white;
          align-items: center;
        }
        .cta-secondary {
          background: #f8f9fa;
          color: #151937;
        }
        .cta-card-title {
          font-size: 2rem;
          font-family: 'Recoleta', serif;
          font-weight: 400;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .cta-card-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          flex-grow: 1;
          text-align: center !important;
        }
        .cta-primary .cta-card-description {
          color: rgba(255, 255, 255, 0.9);
        }
        .cta-secondary .cta-card-description {
          color: #666;
        }

.cta-secondary {
  align-items: center !important;
}

        .cta-button {
          background: #FF1292;
          color: white;
          padding: 15px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          text-align: center;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        .cta-button:hover {
          background: #e60d82;
          transform: translateY(-2px);
          color: white;
        }
        .cta-button-secondary {
          background: #151937;
        }
        .cta-button-secondary:hover {
          background: #0d1526;
        }

        /* FAQ Section */
        .faq-title {
          font-size: 2.5rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 50px;
          font-weight: 400;
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: white;
          margin-bottom: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .faq-question {
          width: 100%;
          padding: 25px 30px;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #151937;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.3s ease;
        }
        .faq-question:hover {
          color: #FF1292;
        }
        .faq-arrow {
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 15px;
        }
        .faq-arrow.expanded {
          transform: rotate(180deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-answer.expanded {
          max-height: 200px;
          padding: 0 30px 25px;
        }
        .faq-answer p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .explore-title {
            font-size: 2rem;
          }
          .strategy-title {
            font-size: 2rem;
          }
          .benefits-title {
            font-size: 1.8rem;
          }
          .faq-title {
            font-size: 2rem;
          }
          .cta-card-title {
            font-size: 1.6rem;
          }
          .cta-card {
            padding: 30px 25px;
          }
          .dual-cta-section .col-lg-6:first-child {
            margin-bottom: 30px;
          }

        }
          /* Explore More Section */
        .explore-title {
          font-size: 2.5rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          font-weight: 400;
          margin-bottom: 15px;
        }
        .explore-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 0;
        }

        /* NEW & REPLACED: Styles for the case study cards */
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
          height: 280px; 
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
        .case-title-related {
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
          .alt_cta{
          color:white;
          }
      `}</style>
    </>
  );
};

// Static generation functions
export async function getStaticPaths() {
  const pageResources = Object.values(resourceDatabase).filter(r => r.type === 'case-study' || r.type === 'report');
  const paths = pageResources.map(resource => ({
    params: { slug: resource.slug }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const resource = resourceDatabase[params.slug] || null;

  if (!resource) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      resource
    },
    revalidate: 60
  };
}

export default DynamicResourcePage;