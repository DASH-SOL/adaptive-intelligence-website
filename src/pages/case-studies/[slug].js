// File: pages/case-studies/[slug].js
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

// Resource Database - Using your exact content
const resourceDatabase = {
  "infstones-global-press-coverage": {
    id: 1,
    slug: "infstones-global-press-coverage",
    type: "case-study",
    badge: "Case Study: InfStones",
    title: "How InfStones Earned Global Press Coverage Across Top Media Outlets",
    client: "InfStones",
    clientLogo: "/images/clients/infstones.svg",
    category: "Digital Marketing",
    industry: "Blockchain & Crypto",
    heroImage: "/images/case-studies/InfStones.png",
    testimonial: {
      quote: "Amazing writer/copy editor. Professional, excellent language skills, ethical/high integrity, will definitely work with again.",
      author: "Zhenwu Shi",
      position: "CEO of InfStones"
    },
    insights: [
      "Brand strategy and market positioning in the competitive crypto space",
      "Digital strategy and Go-To-Market strategies for blockchain infrastructure",
      "How strategic positioning supported InfStones in securing $66M in funding",
      "The press release that drove a spike in Google search interest",
      "PR and media outreach that captured coverage from reputable outlets"
    ],
    benefits: [
      {
        icon: "/images/icon/icon_94.svg",
        title: "Spark ideas for brand positioning and market entry"
      },
      {
        icon: "/images/icon/icon_95.svg",
        title: "Learn how storytelling drives investor confidence"
      },
      {
        icon: "/images/icon/icon_96.svg",
        title: "Avoid common pitfalls when scaling in competitive industries"
      }
    ],
    downloadType: "case study",
    downloadRedirect: "/download-template",
    relatedResources: ["MyMood AI", "Pitchboard", "HatchPath", "Real Strategies"]
  },

  "market-trend-report-2025": {
    id: 2,
    slug: "market-trend-report-2025",
    type: "report",
    badge: "2025 Market Trend Report",
    title: "Discover the trends shaping the future of marketing—from nostalgic branding to AI-powered personalization.",
    client: "Adaptive Intelligence",
    clientLogo: "/images/logo/logo_06.svg",
    category: "Market Insights",
    industry: "Marketing & Strategy", 
    heroImage: "/images/case-studies/unnamed.png",
    testimonial: {
      quote: "We share our most impactful insights so you can apply the lessons to your own business, in hopes that you'll keep us in mind when you have future marketing questions.",
      author: "Adaptive Intelligence",
      position: "Marketing Strategy Team"
    },
    insights: [
      "Emotional connections through nostalgia marketing",
      "Retro visuals, fonts, and design trends",
      "Human-centered content in an AI-driven world",
      "Hyper-personalized marketing strategies",
      "Transparent communication that builds trust",
      "Interactive content, AR experiences, and voice search optimization",
      "Instagram + SEO integration for long-term visibility",
      "Meta AI and the automation of ad creation"
    ],
    benefits: [
      {
        icon: "/images/icon/icon_94.svg",
        title: "Spark fresh ideas for campaigns and creative strategy"
      },
      {
        icon: "/images/icon/icon_95.svg",
        title: "Learn proven approaches to engage modern audiences"
      },
      {
        icon: "/images/icon/icon_96.svg",
        title: "Stay ahead of shifts in technology and consumer expectations"
      },
      {
        icon: "/images/icon/icon_97.svg",
        title: "Avoid falling behind in a rapidly changing digital landscape"
      }
    ],
    downloadType: "report",
    downloadRedirect: "/download-template",
    relatedResources: ["InfStones", "Pitchboard", "HatchPath", "Real Strategies"]
  }
};

// Helper function to get related resources
const getRelatedResources = (currentSlug, limit = 4) => {
  const allResources = Object.values(resourceDatabase);
  return allResources
    .filter(resource => resource.slug !== currentSlug)
    .slice(0, limit)
    .map(resource => ({
      title: resource.type === 'report' ? resource.badge : resource.client,
      slug: resource.slug
    }));
};

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
        setRelatedResources(getRelatedResources(slug));
      } else {
        setResource(null);
      }
      setIsLoading(false);
    }
  }, [slug]);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // 404 state
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
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Hero Section - Same design for all resources */}
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
                    downloadRedirect={resource.downloadRedirect}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section - Same layout, different content */}
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
                  This {resource.downloadType} includes insights on:
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

      {/* Benefits Section - Same design for all */}
      <div className="benefits-section pt-100 pb-150 lg-pt-80 lg-pb-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="benefits-title">
                Join leading marketers and founders who use our {resource.downloadType}s to:
              </h2>
              <div className="benefits-grid">
                {resource.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">
                      <Image 
                        src={benefit.icon}
                        alt={benefit.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h4>{benefit.title}</h4>
                  </div>
                ))}
              </div>
              
              <div className="cta-section">
                <LetsTalkButton 
                  buttonText={`Download Free ${resource.type === 'report' ? 'Report' : 'Case Study'}`}
                  usePopup={true}
                  popupTitle={`Get Your Free ${resource.type === 'report' ? 'Report' : 'Case Study'}`}
                  popupDescription={`Enter your email to access the ${resource.badge}`}
                  downloadRedirect={resource.downloadRedirect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Section - Same for all */}
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

      {/* FAQ Section - Same for all */}
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

      {/* CTA Section - Same for all */}
      <div className="main-cta-section pt-150 pb-100 lg-pt-120 lg-pb-80" style={{ background: 'linear-gradient(135deg, #FF1292 0%, #e60d82 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="cta-title">Let's Build Your Brand Today.</h2>
              <p className="cta-description">
                Adaptive Intelligence partners with brands ready to make their mark. Whether launching a new app or revitalizing an existing business, we design strategies that deliver results.
              </p>
              <LetsTalkButton 
                buttonText="Let's Talk" 
                href="/contact"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights Section */}
      <div className="insights-cta-section pt-100 pb-100 lg-pt-80 lg-pb-80" style={{ background: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="insights-cta-title">Want More Insights?</h3>
              <p className="insights-cta-description">
                Adaptive Intelligence aims to make our insights accessible to anyone who wishes to learn innovative marketing strategies.
              </p>
              <p className="insights-cta-description">
                That's why we've created a Marketing Insights Report that breaks down the latest trends in brand strategy, PPC, content marketing, and consumer behavior.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <LetsTalkButton 
                buttonText="Market Trend Report" 
                usePopup={true}
                popupTitle="Get Market Trend Report"
                popupDescription="Enter your email to access our latest market insights"
                downloadRedirect="/download-report?type=market-trends"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources - Same layout for all */}
      <div className="related-resources-section pt-150 pb-150 lg-pt-120 lg-pb-120" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="related-title text-center">
                {resource.type === 'case-study' ? 'Explore More Case Studies' : 'Explore More Resources'}
              </h2>
              <div className="related-grid">
                {resource.relatedResources.map((relatedResource, index) => (
                  <div key={index} className="related-item">
                    <div className="related-link-text">
                      {relatedResource}
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
        /* Loading Screen */
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

        /* 404 Section */
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

        /* Hero Section - Consistent for all resources */
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

        /* Preview Section */
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

        .study-indicators {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          transition: background 0.3s ease;
        }

        .indicator.active {
          background: #FF1292;
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
          border-radius: 8px;
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

        /* CTA Sections */
        .cta-title {
          font-size: 2.5rem;
          color: white;
          font-family: 'Recoleta', serif;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .cta-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .insights-cta-title {
          font-size: 2rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .insights-cta-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Related Resources */
        .related-title {
          font-size: 2.5rem;
          color: #151937;
          font-family: 'Recoleta', serif;
          margin-bottom: 50px;
          font-weight: 400;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .related-item {
          background: white;
          border-radius: 8px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .related-item:hover {
          transform: translateY(-3px);
        }

        .related-link-text {
          color: #151937;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .benefits-title,
          .strategy-title,
          .faq-title,
          .related-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .faq-question {
            padding: 20px;
            font-size: 1rem;
          }

          .faq-answer.expanded {
            padding: 0 20px 20px;
          }
        }
      `}</style>
    </>
  );
};

// Export function for generating static paths (if using static generation)
export async function getStaticPaths() {
  const paths = Object.keys(resourceDatabase).map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

// Export function for getting static props (if using static generation)
export async function getStaticProps({ params }) {
  const resource = resourceDatabase[params.slug];

  if (!resource) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      resource
    }
  };
}

export default DynamicResourcePage;