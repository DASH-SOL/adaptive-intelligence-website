// Remove "use client" from the top
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import Hero from "@/components/home-page/hero";
import LetsTalkButton from "@/components/LetsTalkButton";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import Testimonial from "@/components/home-page/Testimonial";
import Faq from "@/components/home-page/Faq";
import ClientCarousel from "@/components/ClientCarousel"; // Import the new client component


const ServicesHeroContent = ({ servicesData }) => {
  return (
    <div className="title-style-fourteen text-center mt-50 mb-50 lg-mb-70">
      <div className="col-lg-8 mx-auto">
        <h2 className="main-title font-recoleta fw-normal" style={{ color: 'white', marginTop: '10px' }}>
          {servicesData?.servicesHeroTitle || "Services"}.
          <span className="position-relative">
            <Image
              width={302}
              height={9}
              src="/images/shape/shape_186.svg"
              alt="shape"
            />
          </span>
        </h2>
        <p className="text-lg text-center lh-lg mt-25 md-mt-20" style={{ color: 'white' }}>
          {servicesData?.servicesHeroDescription || "We deliver comprehensive solutions that drive growth, enhance brand visibility, and create meaningful connections with your audience."}
        </p>
      </div>
    </div>
  );
};
const ServicesPage = ({ servicesPageData }) => {
  // Get services from the relation
  const servicesData = servicesPageData?.services?.map(service => ({
    id: service.id,
    title: service.title,
    subtitle: service.subtitle,
    description: service.description,
    icon: service.icon?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${service.icon.url}` : "/images/shape/content.png",
    color: service.color || "#FF1292"
  })) || [];

  const clientLogos = [
    { name: "Nike", logo: "/images/logo/digital-agency-manhattan-611.png" },
    { name: "Verizon", logo: "/images/logo/digital-agency-manhattan-714.png" },
    { name: "Vimeo", logo: "/images/logo/digital-agency-manhattan-716.png" },
    { name: "Reebok", logo: "/images/logo/digital-agency-manhattan-718.png" },
    { name: "AV Club", logo: "/images/logo/digital-agency-manhattan-720.png" },
    { name: "Upwork", logo: "/images/logo/digital-agency-manhattan-722.png" },
    { name: "Billboard", logo: "/images/logo/digital-agency-manhattan-911.png" },
    { name: "Vice", logo: "/images/logo/digital-agency-manhattan-913.png" },
    { name: "Atlantic Records", logo: "/images/logo/digital-agency-manhattan-918.png" },
    { name: "Atlantic Records", logo: "/images/logo/digital-agency-manhattan-content-412.png" }
  ];

  const clientCarouselRef = useRef(null);

  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <Header />
      
      {/* Hero Section using your existing Hero component */}
     <Hero isHomePage={false}>
        <ServicesHeroContent servicesData={servicesPageData} />
      </Hero>

      <div className="fancy-feature-thirtyOne position-relative zn2 pt-180 pb-140 lg-pt-140 lg-pb-100" style={{ background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <div className="sc-title" style={{ color: '#FF1292', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                  {servicesPageData?.servicesSectionTagline || "Our Services"}
                </div>
                <h2 className="main-title font-recoleta fw-normal" style={{ color: 'white' }}>
                  {servicesPageData?.servicesSectionTitle || "Powered by"}
                  <span className="position-relative">
                    {" "}
                    {servicesPageData?.servicesSectionTitleHighlight || "Innovation"}
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={220}
                      height={5}
                    />
                  </span>
                </h2>
                <p className="fs-20 mt-20" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {servicesPageData?.servicesSectionDescription || "Comprehensive solutions that drive growth and enhance brand visibility."}
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={service.id || index} className="col-lg-4 col-md-6">
                <div className="service-card-dark">
                  <div className="service-header-dark">
                    <div className="service-number-dark">0{index + 1}</div>
                    <div className="service-icon-dark">
                      <Image 
                        src={service.icon || "/images/shape/content.png"}
                        alt={service.title}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  
                  <div className="service-content-dark">
                    <h3 className="service-title-dark">{service.title}</h3>
                    <p className="service-subtitle-dark">{service.subtitle}</p>
                    <p className="service-description-dark">{service.description}</p>

                    <div className="service-cta-dark">
                      <LetsTalkButton 
                        buttonText="Learn More" 
                        href={`/contact`}
                      />
                    </div>
                  </div>

                  <div className="service-accent-dark" style={{ backgroundColor: service.color || '#FF1292' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     {/* Approach Section - White Background */}
<div className="fancy-feature-thirtyOne position-relative zn2 pt-180 pb-180 lg-pt-140 lg-pb-140" style={{ background: 'white' }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="approach-content-white">
          <div className="sc-title" style={{ color: '#FF1292', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
            {servicesPageData?.approachTagline || "Our Approach"}
          </div>
          <h2 className="main-title font-recoleta fw-normal tx-dark">
            {servicesPageData?.approachTitle || "Strategic"}
            <span className="position-relative">
              {" "}
              {servicesPageData?.approachTitleHighlight || "Excellence"}
              <Image
                src="/images/shape/shape_122.svg"
                alt="icon shape"
                width={220}
                height={5}
              />
            </span>
          </h2>
          <p className="approach-text-dark">
            {servicesPageData?.approachDescription || "While we deploy tried and true marketing methodology and brand strategy to each of our accounts, we also emphasize a bespoke approach that takes a deeper look at your marketplace positioning and what's needed to make a splash that both your audience and industry will care about."}
          </p>
          <div className="approach-stats-dark">
            <div className="stat-item-dark">
              <div className="stat-number-dark">{servicesPageData?.approachStat1Number || "500+"}</div>
              <div className="stat-label-dark">{servicesPageData?.approachStat1Label || "Projects Delivered"}</div>
            </div>
            <div className="stat-item-dark">
              <div className="stat-number-dark">{servicesPageData?.approachStat2Number || "98%"}</div>
              <div className="stat-label-dark">{servicesPageData?.approachStat2Label || "Client Satisfaction"}</div>
            </div>
          </div>
        </div>
      </div>
   
<div className="col-lg-6">
  <div className="approach-visual-white">
    <div className="approach-image-wrapper">
      <Image 
        src={
          servicesPageData?.approachImage?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${servicesPageData.approachImage.url}`
            : "/images/assets/Strategic-Excellence-How-We-Help-Organizations-Achieve-Sustainable-Success-scaled.jpg"
        }
        alt="Our strategic approach"
        width={600}
        height={400}
        className="approach-main-image"
      />
      <div className="approach-overlay-card">
        <h4>{servicesPageData?.approachOverlayTitle || "Strategic Planning"}</h4>
        <p>{servicesPageData?.approachOverlayDescription || "Data-driven insights for market positioning"}</p>
      </div>
    </div>
    <div className="approach-features-white">
      <div className="feature-item-dark">
        <div className="feature-icon">
          <Image
            src="/images/icon/innovation.png"
            alt="Creative Excellence"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h4>{servicesPageData?.approachFeature1Title || "Creative Excellence"}</h4>
          <p>{servicesPageData?.approachFeature1Description || "Award-winning design and content creation"}</p>
        </div>
      </div>
      <div className="feature-item-dark">
        <div className="feature-icon">
          <Image
            src="/images/icon/focus.png"
            alt="Results Focus"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h4>{servicesPageData?.approachFeature2Title || "Results Focus"}</h4>
          <p>{servicesPageData?.approachFeature2Description || "Measurable outcomes that drive growth"}</p>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Enhanced Capabilities Section - Navy Background */}
      <div className="fancy-feature-thirtyOne position-relative zn2 pt-180 pb-180 lg-pt-140 lg-pb-140" style={{ background: '#151937' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <div className="sc-title" style={{ color: '#FF1292', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                  Our Capabilities
                </div>
                <h2 className="main-title font-recoleta fw-normal" style={{ color: 'white' }}>
                  Industry-Leading
                  <span className="position-relative">
                    {" "}
                    Expertise
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={220}
                      height={5}
                    />
                  </span>
                </h2>
                <p className="fs-20 mt-20" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Our set of services have been built and refined for over a decade, 
                  which is why our client success ratings are among the highest in the industry.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="capabilities-image-section">
                <div className="capabilities-image-wrapper">
                  <Image 
                    src="/images/assets/team-diverse-analysts-consultants-reviewing-data-checklists_482257-125957.jpg" 
                    alt="Our team capabilities"
                    width={600}
                    height={450}
                    className="capabilities-main-image"
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="capabilities-content">
                <div className="capabilities-grid-enhanced">
                  <div className="capability-card-enhanced">
                    <div className="capability-icon">
                      <Image 
                        src="/images/icon/support.png" 
                        alt="Support"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="capability-content">
                      <h4>24/7 Support</h4>
                      <p>Available whenever you need us</p>
                    </div>
                    <div className="capability-number">01</div>
                  </div>
                  
                  <div className="capability-card-enhanced">
                    <div className="capability-icon">
                      <Image 
                        src="/images/icon/reach.png" 
                        alt="Global Reach"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="capability-content">
                      <h4>Global Reach</h4>
                      <p>Serving clients worldwide</p>
                    </div>
                    <div className="capability-number">02</div>
                  </div>
                  
                  <div className="capability-card-enhanced">
                    <div className="capability-icon">
                      <Image 
                        src="/images/icon/trophy.png" 
                        alt="Award Winning"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="capability-content">
                      <h4>Award Winning</h4>
                      <p>Recognized industry excellence</p>
                    </div>
                    <div className="capability-number">03</div>
                  </div>
                  
                  <div className="capability-card-enhanced">
                    <div className="capability-icon">
                      <Image 
                        src="/images/icon/innovation.png" 
                        alt="Award Winning"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="capability-content">
                      <h4>Innovation</h4>
                      <p>Cutting-edge solutions</p>
                    </div>
                    <div className="capability-number">04</div>
                  </div>
                </div>
                
                <div className="capabilities-bottom-content">
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
                    Simply put, expertly crafted content and innovative creative strategy is our bread and butter.
                  </p>
                  <LetsTalkButton 
                    buttonText="View Our Work" 
                    href="/case-studies"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-section pt-100 pb-100" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="main-title font-recoleta fw-normal tx-dark">Clients.</h2>
            <div className="title-underline mx-auto"></div>
            <p className="fs-20 mt-20">Trusted by industry leaders worldwide</p>
          </div>

          <div className="clients-carousel">
            <ClientCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </div>

      {/* Testimonials Section - Black Background */}
      <div className="feedback-section-ten position-relative pt-200 pb-200 lg-pt-150 lg-pb-150" style={{ background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)' }}>
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title" style={{ color: '#FF1292', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                    Client Testimonials
                  </div>
                  <h2 className="main-title font-recoleta fw-normal" style={{ color: 'white', marginTop: '20px' }}>
                    Trusted by
                    <span className="position-relative">
                      {" "}
                      Leading{" "}
                      <Image
                        src="/images/shape/shape_129.svg"
                        alt=""
                        width={160}
                        height={6}
                      />
                    </span>
                    Brands
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.6' }}>
                    Don't just take our word for it. Here's what our clients say about working with us.
                  </p>
                </div>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <div className="sc-title">FAQs</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Answers to your most &amp;{" "}
              <span className="position-relative">
                frequently{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
                asked questions.
              </span>
            </h2>
          </div>

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            data-aos="fade-up"
          >
            <Faq />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have an idea for a project? <br />
                  <span className="position-relative">
                    Let's Talk{" "}
                    <Image
                      width={221}
                      height={7}
                      src="/images/shape/shape_132.svg"
                      alt=""
                    />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We're ready to help you. Our experts are here, just send a message.
              </p>
              <LetsTalkButton buttonText="Send Message" href="/contact" />
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
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
        /* Services Section - Dark Theme */
        .service-card-dark {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .service-card-dark:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 18, 146, 0.2);
          border-color: #FF1292;
          background: rgba(255, 255, 255, 0.08);
        }

        .service-header-dark {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .service-number-dark {
          font-size: 3rem;
          font-weight: 100;
          color: rgba(255, 255, 255, 0.2);
          font-family: 'Recoleta', serif;
        }

        .service-icon-dark {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 18, 146, 0.1);
          border: 1px solid rgba(255, 18, 146, 0.3);
        }

        .service-icon-dark img {
          filter: brightness(0) invert(1);
        }

        .service-content-dark {
          flex-grow: 1;
        }

        .service-title-dark {
          font-size: 1.8rem;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
          font-family: 'Recoleta', serif;
        }

        .service-subtitle-dark {
          color: #FF1292;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .service-description-dark {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .service-features-dark ul {
          list-style: none;
          padding: 0;
          margin: 0 0 25px;
        }

        .service-features-dark li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .feature-dot-dark {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF1292;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .service-accent-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-dark:hover .service-accent-dark {
          opacity: 1;
        }

        /* Approach Section - White Theme */
        .approach-text-dark {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .approach-stats-dark {
          display: flex;
          gap: 40px;
          margin-top: 30px;
        }

        .stat-item-dark {
          text-align: left;
        }

        .stat-number-dark {
          font-size: 2.5rem;
          font-weight: 600;
          color: #151937;
          font-family: 'Recoleta', serif;
          line-height: 1;
        }

        .stat-label-dark {
          color: #666;
          font-size: 0.9rem;
          margin-top: 5px;
        }

        .approach-image-wrapper {
          position: relative;
          margin-bottom: 30px;
        }

        .approach-main-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
        }

        .approach-overlay-card {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #FF1292;
          max-width: 250px;
        }

        .approach-overlay-card h4 {
          color: #151937;
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .approach-overlay-card p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }

        .approach-features-white {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item-dark {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #e9ecef;
        }

        .feature-item-dark h4 {
          color: #151937;
          font-size: 1.1rem;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .feature-item-dark p {
          color: #666;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        /* Enhanced Capabilities Section */
        .capabilities-image-wrapper {
          position: relative;
          margin-bottom: 30px;
        }

        .capabilities-main-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        .capabilities-floating-card {
          position: absolute;
          top: -30px;
          right: -30px;
          background: rgba(255, 18, 146, 0.95);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          min-width: 180px;
        }

        .floating-card-content {
          position: relative;
        }

        .capabilities-floating-card h4 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 5px;
          font-weight: 600;
          font-family: 'Recoleta', serif;
        }

        .capabilities-floating-card p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }

        .floating-card-icon {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-card-icon img {
          filter: brightness(0) invert(1);
        }

        .capabilities-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .capability-card-enhanced {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .capability-card-enhanced:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FF1292;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 18, 146, 0.15);
        }

        .capability-icon {
          width: 50px;
          height: 50px;
          background: rgba(255, 18, 146, 0.1);
          border: 1px solid rgba(255, 18, 146, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .capability-icon img {
          filter: brightness(0) invert(1);
        }

        .capability-content h4 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .capability-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }

        .capability-number {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 600;
        }

        .capabilities-bottom-content {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Clients Section */
        .title-underline {
          width: 60px;
          height: 4px;
          background: #FF1292;
        }

        .clients-carousel {
          margin-top: 40px;
        }

        .client-slide-modern {
          padding: 0 15px;
        }

        .client-logo-wrapper-modern {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          background: white;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .client-logo-wrapper-modern:hover {
          border-color: #FF1292;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .client-logo-modern {
  max-width: 100% !important;
  width: auto !important;
  height: auto !important;
  max-height: 60px !important;
  object-fit: contain !important;
}

        .client-logo-wrapper-modern:hover .client-logo-modern {
          opacity: 1;
        }

        

        /* Testimonials Section - Black Background Overrides */
        .feedback-section-ten {
          background: #000 !important;
        }

        .feedback-section-ten .sc-title {
          color: #FF1292 !important;
        }

        .feedback-section-ten .main-title {
          color: white !important;
        }

        .feedback-section-ten .feedback-block-ten {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .feedback-section-ten .feedback-block-ten:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FF1292;
        }

        .feedback-section-ten .feedback-block-ten .cmp-name {
          color: #FF1292;
        }

        .feedback-section-ten .feedback-block-ten p {
          color: rgba(255, 255, 255, 0.9);
        }

        .feedback-section-ten .feedback-block-ten .rating li {
          color: #FF1292;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .service-card-dark {
            padding: 25px;
          }

          .approach-stats-dark {
            flex-direction: column;
            gap: 25px;
          }

          .capabilities-grid-enhanced {
            grid-template-columns: 1fr;
          }

          .capabilities-floating-card {
            position: static;
            margin-top: 20px;
            margin-right: 0;
          }

          .approach-overlay-card {
            position: static;
            margin-top: 20px;
            margin-right: 0;
          }

          .approach-image-wrapper {
            margin-bottom: 20px;
          }

          .service-number-dark {
            font-size: 2.5rem;
          }

          .service-title-dark {
            font-size: 1.5rem;
          }

          .stat-number-dark {
            font-size: 2rem;
          }

          .feedback-section-ten {
            padding-top: 120px !important;
            padding-bottom: 120px !important;
          }
        }

        @media (max-width: 480px) {
          .service-card-dark {
            padding: 20px;
          }

          .capability-card-enhanced {
            padding: 20px;
            flex-direction: column;
            text-align: center;
          }

          .capability-icon {
            margin: 0 auto 15px;
          }

          .capability-number {
            position: static;
            margin-top: 10px;
          }

          .capabilities-floating-card {
            padding: 20px;
            min-width: auto;
          }

          .approach-stats-dark {
            gap: 20px;
          }

          .stat-number-dark {
            font-size: 1.8rem;
          }

          .feature-item-dark {
            gap: 10px;
          }

          .feature-icon {
            width: 35px;
            height: 35px;
          }

          .capabilities-main-image {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
};
export async function getStaticProps() {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/services-page?populate[services][populate]=icon&populate=approachImage`;
  
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API fetch failed: ${res.status}`);
    
    const data = await res.json();
    console.log("Services Page API Response:", data);
    
    const servicesPageData = data?.data || null;
    
    return { 
      props: { servicesPageData }, 
      revalidate: 1 
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { 
      props: { servicesPageData: null } 
    };
  }
}

export default ServicesPage;