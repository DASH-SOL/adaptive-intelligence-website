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
import { resourceDatabase } from '@/data/resources'; // UPDATED: Import from central file

const DynamicResourcePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [resource, setResource] = useState(null);
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
                    resourceSlug={slug} // UPDATED: Pass the slug
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
              {/* Note: This section is simplified for demonstration as benefit structure was different */}
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
                  resourceSlug={slug} // UPDATED: Pass the slug
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Sections */}
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
        /* All your existing styles here */
        .loading-screen {
          min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: white;
        }
        .loading-spinner {
          width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #FF1292; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 20px;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .not-found-section { min-height: 70vh; display: flex; align-items: center; justify-content: center; text-align: center; }
        .not-found-content h1 { font-size: 2.5rem; color: #151937; margin-bottom: 20px; }
        .not-found-content p { color: #666; font-size: 1.1rem; margin-bottom: 30px; }
        .back-link { background: #FF1292; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; transition: all 0.3s ease; }
        .back-link:hover { background: #e60d82; transform: translateY(-2px); }
        .resource-hero { position: relative; overflow: hidden; }
        .resource-badge { background: #FF1292; color: white; padding: 8px 20px; border-radius: 25px; font-size: 0.9rem; font-weight: 500; display: inline-block; margin-bottom: 30px; }
        .hero-title { font-size: 3rem; color: #151937; font-family: 'Recoleta', serif; font-weight: 400; line-height: 1.2; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .testimonial-quote { margin: 40px 0; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); max-width: 600px; margin-left: auto; margin-right: auto; }
        .testimonial-quote blockquote { font-size: 1.2rem; color: #151937; font-style: italic; margin-bottom: 15px; line-height: 1.5; }
        .testimonial-quote cite { color: #FF1292; font-weight: 600; font-style: normal; }
        .hero-cta { margin-top: 40px; }
        .resource-mockup { position: relative; display: flex; flex-direction: column; align-items: center; }
        .mockup-image { border-radius: 12px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15); }
        .insights-title { font-size: 2rem; color: #151937; font-family: 'Recoleta', serif; margin-bottom: 30px; font-weight: 400; }
        .insights-list { list-style: none; padding: 0; margin: 0; }
        .insights-list li { display: flex; align-items: flex-start; margin-bottom: 20px; font-size: 1.1rem; line-height: 1.5; }
        .insight-icon { width: 24px; height: 24px; background: #FF1292; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; margin-right: 15px; flex-shrink: 0; margin-top: 2px; }
        .benefits-title { font-size: 2.2rem; color: #151937; font-family: 'Recoleta', serif; margin-bottom: 50px; font-weight: 400; }
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; margin-bottom: 50px; }
        .benefit-item { text-align: center; }
        .benefit-icon { width: 60px; height: 60px; background: #f8f9fa; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px solid #FF1292; }
        .benefit-item h4 { font-size: 1.1rem; color: #151937; font-weight: 600; line-height: 1.4; }
        .strategy-title { font-size: 2.5rem; color: #151937; font-family: 'Recoleta', serif; margin-bottom: 30px; font-weight: 400; }
        .strategy-description { font-size: 1.1rem; color: #666; line-height: 1.7; margin-bottom: 25px; }
        .strategy-cta { font-size: 1.1rem; color: #151937; font-weight: 600; margin-top: 30px; }
        .faq-title { font-size: 2.5rem; color: #151937; font-family: 'Recoleta', serif; margin-bottom: 50px; font-weight: 400; }
        .faq-list { max-width: 800px; margin: 0 auto; }
        .faq-item { background: white; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); }
        .faq-question { width: 100%; padding: 25px 30px; background: none; border: none; text-align: left; font-size: 1.1rem; font-weight: 600; color: #151937; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: color 0.3s ease; }
        .faq-question:hover { color: #FF1292; }
        .faq-arrow { transition: transform 0.3s ease; flex-shrink: 0; margin-left: 15px; }
        .faq-arrow.expanded { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: all 0.3s ease; }
        .faq-answer.expanded { max-height: 200px; padding: 0 30px 25px; }
        .faq-answer p { color: #666; line-height: 1.6; margin: 0; }
      `}</style>
    </>
  );
};

// UPDATED: These functions now use the central database
export async function getStaticPaths() {
  // Filter for resources that are meant to have detail pages (case studies and reports)
  const pageResources = Object.values(resourceDatabase).filter(r => r.type === 'case-study' || r.type === 'report');
  const paths = pageResources.map(resource => ({
    params: { slug: resource.slug }
  }));

  return {
    paths,
    fallback: 'blocking' // Use 'blocking' or true if you add new resources without rebuilding
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
    revalidate: 60 // Optional: re-generate the page every 60 seconds
  };
}

export default DynamicResourcePage;