import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Header from "@/components/header/Header";
import LetsTalkButton from "@/components/LetsTalkButton";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      title: "Content",
      subtitle: "Smart Content Strategy",
      description: "Smart content is more than words on a page. Our content marketing services include SEO-driven website copy, blog writing, social media posts, and custom graphic design.",
      services: [
        "Web Copy",
        "SEO Copy", 
        "Blogging",
        "Editorial",
        "Social Media",
        "Pay-Per-Click Ads (PPC)"
      ],
      icon: "/images/icon/icon_94.svg",
      color: "#FF1292"
    },
    {
      id: 2,
      title: "Strategy",
      subtitle: "Data-Driven Marketing",
      description: "Our marketing specialists use data-driven strategies that combine PPC management, conversion optimization, audience targeting, and analytics.",
      services: [
        "Creative Consulting",
        "Content Strategy",
        "Brand Strategy", 
        "Marketing Strategy",
        "PR Strategy"
      ],
      icon: "/images/icon/icon_95.svg",
      color: "#151937"
    },
    {
      id: 3,
      title: "Brand Narrative",
      subtitle: "Story-Driven Identity", 
      description: "Our brand architects recognize that your brand's story is everything. We guide you through brand identity, messaging frameworks, and creative design systems.",
      services: [
        "Brand Development",
        "Brand Identity",
        "Brand Voice",
        "Brand Architecture"
      ],
      icon: "/images/icon/icon_96.svg",
      color: "#FF6B9D"
    }
  ];

  const clientLogos = [
    { name: "Nike", logo: "/images/clients/nike.svg" },
    { name: "Verizon", logo: "/images/clients/verizon.svg" },
    { name: "Vimeo", logo: "/images/clients/vimeo.svg" },
    { name: "Reebok", logo: "/images/clients/reebok.svg" },
    { name: "AV Club", logo: "/images/clients/avclub.svg" },
    { name: "Upwork", logo: "/images/clients/upwork.svg" },
    { name: "Billboard", logo: "/images/clients/billboard.svg" },
    { name: "Vice", logo: "/images/clients/vice.svg" },
    { name: "Atlantic Records", logo: "/images/clients/atlantic.svg" }
  ];

  const testimonialData = [
    {
      company: "Winsite Digital",
      position: "Founder & CEO",
      name: "Jarad",
      background: "#FA0B5F",
      text: "Gifted brand and content strategists. They will work with you to understand your business and your core philosophy at its deepest levels. They fundamentally understand that we write copy for the benefit of people first, SEO second - but certainly not to the latter's detriment.",
    },
    {
      company: "Advantage Benefit Solutions",
      position: "Chief Operating Officer",
      name: "Alexandra",
      background: "#00FCFC",
      text: "I came looking to get fantastic copy and I got just that and so much more. Not only did the agency provide outstanding copy and clarity, they also helped me put together a marketing strategy to take our company to the next level. Would recommend to anyone in a heartbeat, especially if you are the type of person that is looking to hire the very best.",
    },
    {
      company: "Credabl",
      position: "Chief Brand Officer",
      name: "Dina",
      background: "#F27AFF",
      text: "A talented creative team that has the remarkable ability to convert basic text into something very user friendly, meaningful and both interesting and enjoyable to read. Very happy with their work and looking forward to future campaigns with them.",
    },
    {
      company: "Intersect Marketing Group",
      position: "Strategy Director",
      name: "Bob",
      background: "#52C1FF",
      text: "Yet another example of excellent quality of work, ability to meet an agreed upon deadline, and a willingness to communicate questions and ideas as often as needed. I really appreciate that adaptiveintelligence.online takes the time to understand your project and cheerfully suggests methods to make their deliverables better than you anticipated.",
    },
  ];

  // Carousel settings
  const clientCarouselRef = useRef(null);
  const testimonialSliderRef = useRef(null);

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
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleTestimonialPrev = () => {
    testimonialSliderRef.current.slickPrev();
  };

  const handleTestimonialNext = () => {
    testimonialSliderRef.current.slickNext();
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="services-hero-clean">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="hero-content-clean">
                <div className="hero-badge-clean">Our Services</div>
                <h1 className="hero-title-clean font-recoleta">
                  Powered by Innovation.
                </h1>
                <div className="hero-underline-clean"></div>
                <p className="hero-description-clean">
                  We deliver comprehensive solutions that drive growth, enhance brand visibility, 
                  and create meaningful connections with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-clean-section">
        <div className="container">
          <div className="section-header-clean text-center mb-5">
            <h2 className="section-title-clean font-recoleta">Our Core Services</h2>
            <div className="title-underline-clean"></div>
            <p className="section-subtitle-clean">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card-clean">
                  <div className="service-card-header">
                    <div className="service-number">0{index + 1}</div>
                    <div className="service-icon-clean" style={{ backgroundColor: service.color }}>
                      <Image 
                        src={service.icon} 
                        alt={service.title}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  
                  <div className="service-card-body">
                    <h3 className="service-title-clean">{service.title}</h3>
                    <p className="service-subtitle-clean">{service.subtitle}</p>
                    <p className="service-description-clean">{service.description}</p>
                    
                    <div className="service-features-clean">
                      <h4>What's included:</h4>
                      <ul>
                        {service.services.map((item, idx) => (
                          <li key={idx}>
                            <span className="feature-dot-clean" style={{ backgroundColor: service.color }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-card-footer">
                    <LetsTalkButton 
                      buttonText="Learn More" 
                      href={`/services/${service.title.toLowerCase()}`}
                    />
                  </div>

                  <div className="service-accent-clean" style={{ backgroundColor: service.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Capabilities Section */}
      <section className="approach-capabilities-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="content-block-clean">
                <h2 className="block-title-clean font-recoleta">Approach.</h2>
                <div className="title-underline-clean"></div>
                <p className="block-text-clean">
                  While we deploy tried and true marketing methodology and brand strategy 
                  to each of our accounts, we also emphasize a bespoke approach that takes 
                  a deeper look at your marketplace positioning and what's needed to make a 
                  splash that both your audience and industry will care about.
                </p>
                <div className="block-stats">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Projects Delivered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block-clean">
                <h2 className="block-title-clean font-recoleta">Capabilities.</h2>
                <div className="title-underline-clean"></div>
                <p className="block-text-clean">
                  Our set of services have been built and refined for over a decade, which is 
                  why our client success ratings are among the highest in the industry. Simply 
                  put, expertly crafted content and innovative creative strategy is our bread 
                  and butter.
                </p>
                <div className="capabilities-list">
                  <div className="capability-item">
                    <h4>Strategic Planning</h4>
                    <p>Data-driven insights for market positioning</p>
                  </div>
                  <div className="capability-item">
                    <h4>Creative Excellence</h4>
                    <p>Award-winning design and content creation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <section className="clients-carousel-section">
        <div className="container">
          <div className="section-header-clean text-center mb-5">
            <h2 className="section-title-clean font-recoleta">Clients.</h2>
            <div className="title-underline-clean"></div>
            <p className="section-subtitle-clean">Trusted by industry leaders worldwide</p>
          </div>

          <div className="clients-carousel-wrapper">
            <Slider {...clientSettings} ref={clientCarouselRef} arrows={false}>
              {clientLogos.map((client, index) => (
                <div key={index} className="client-slide">
                  <div className="client-logo-wrapper">
                    <Image 
                      src={client.logo} 
                      alt={client.name}
                      width={120}
                      height={60}
                      className="client-logo-clean"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-clean-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="testimonials-header">
                <div className="sc-title-clean">Testimonials.</div>
                <h2 className="section-title-clean font-recoleta">
                  What
                  <span className="position-relative">
                    {" "}
                    clients{" "}
                    <Image
                      src="/images/shape/shape_129.svg"
                      alt=""
                      width={160}
                      height={6}
                    />
                  </span>
                  think about us.
                </h2>
              </div>
            </div>
          </div>

          <div className="testimonials-slider-wrapper">
            <Slider {...testimonialSettings} arrows={false} ref={testimonialSliderRef}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div
                    className="testimonial-card-clean"
                    style={{ backgroundColor: testimonial.background }}
                  >
                    <div className="testimonial-content">
                      <div className="company-name">{testimonial.company}</div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-author">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-position">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="testimonial-controls">
            <button
              className="testimonial-arrow prev"
              onClick={handleTestimonialPrev}
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              className="testimonial-arrow next"
              onClick={handleTestimonialNext}
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-clean">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <h2 className="cta-title-clean font-recoleta">
                Have an idea for a project?<br />
                <span className="position-relative">
                  Let's Talk{" "}
                  <Image
                    width={221}
                    height={7}
                    src="/images/shape/shape_132.svg"
                    alt=""
                  />
                </span>
                & Grow your Business
              </h2>
              <p className="cta-description-clean">
                We're ready to help you. Our experts are here, just send a message.
              </p>
              <LetsTalkButton 
                buttonText="Send Message" 
                href="/contact"
              />
            </div>
          </div>
        </div>
      </section>

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
        <div className="shapes shape-one" />
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <style jsx>{`
        /* Hero Section */
        .services-hero-clean {
          background: white;
          padding: 150px 0 100px;
          position: relative;
        }

        .hero-badge-clean {
          display: inline-block;
          background: #f8f9fa;
          color: #151937;
          padding: 8px 24px;
          border: 1px solid #e9ecef;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .hero-title-clean {
          font-size: 4rem;
          font-weight: 300;
          color: #151937;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .hero-underline-clean {
          width: 100px;
          height: 4px;
          background: #FF1292;
          margin: 0 auto 30px;
        }

        .hero-description-clean {
          font-size: 1.25rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Services Section */
        .services-clean-section {
          padding: 100px 0;
          background: #fafafa;
        }

        .section-header-clean {
          margin-bottom: 60px;
        }

        .section-title-clean {
          font-size: 2.5rem;
          font-weight: 400;
          color: #151937;
          margin-bottom: 20px;
        }

        .title-underline-clean {
          width: 60px;
          height: 4px;
          background: #FF1292;
          margin: 0 auto;
        }

        .section-subtitle-clean {
          font-size: 1.1rem;
          color: #666;
          margin-top: 20px;
        }

        .service-card-clean {
          background: white;
          border: 1px solid #f0f0f0;
          height: 100%;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card-clean:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #FF1292;
        }

        .service-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 30px 0;
        }

        .service-number {
          font-size: 3rem;
          font-weight: 100;
          color: #f0f0f0;
          font-family: 'Recoleta', serif;
        }

        .service-icon-clean {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon-clean img {
          filter: brightness(0) invert(1);
        }

        .service-card-body {
          padding: 30px;
          flex-grow: 1;
        }

        .service-title-clean {
          font-size: 1.5rem;
          font-weight: 600;
          color: #151937;
          margin-bottom: 10px;
          font-family: 'Recoleta', serif;
        }

        .service-subtitle-clean {
          color: #FF1292;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .service-description-clean {
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .service-features-clean h4 {
          font-size: 1rem;
          color: #151937;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-features-clean ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features-clean li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          color: #555;
          font-size: 0.9rem;
        }

        .feature-dot-clean {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .service-card-footer {
          padding: 30px;
          padding-top: 0;
        }

        .service-accent-clean {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-clean:hover .service-accent-clean {
          opacity: 1;
        }

        /* Approach & Capabilities */
        .approach-capabilities-section {
          padding: 100px 0;
          background: white;
        }

        .content-block-clean {
          height: 100%;
        }

        .block-title-clean {
          font-size: 2rem;
          font-weight: 400;
          color: #151937;
          margin-bottom: 20px;
        }

        .block-text-clean {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .block-stats {
          display: flex;
          gap: 30px;
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 600;
          color: #FF1292;
          font-family: 'Recoleta', serif;
          line-height: 1;
        }

        .stat-label {
          color: #666;
          font-size: 0.9rem;
          margin-top: 5px;
        }

        .capabilities-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .capability-item h4 {
          color: #151937;
          font-size: 1.1rem;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .capability-item p {
          color: #666;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Clients Carousel */
        .clients-carousel-section {
          padding: 80px 0;
          background: #fafafa;
        }

        .clients-carousel-wrapper {
          margin-top: 40px;
        }

        .client-slide {
          padding: 0 15px;
        }

        .client-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          background: white;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .client-logo-wrapper:hover {
          border-color: #FF1292;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .client-logo-clean {
          max-width: 100%;
          height: auto;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .client-logo-wrapper:hover .client-logo-clean {
          opacity: 1;
        }

        /* Testimonials */
        .testimonials-clean-section {
          padding: 100px 0;
          background: white;
        }

        .testimonials-header {
          margin-bottom: 60px;
        }

        .sc-title-clean {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .testimonials-slider-wrapper {
          margin-bottom: 40px;
        }

        .testimonial-slide {
          padding: 0 15px;
        }

        .testimonial-card-clean {
          padding: 40px;
          height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease;
        }

        .testimonial-card-clean:hover {
          transform: translateY(-5px);
        }

        .company-name {
          font-size: 1.8rem;
          font-weight: 500;
          color: #000;
          margin-bottom: 20px;
        }

        .testimonial-text {
          color: #000;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          flex-grow: 1;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: #000;
          margin-bottom: 5px;
        }

        .author-position {
          font-size: 1rem;
          color: #000;
          opacity: 0.8;
        }

        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .testimonial-arrow {
          width: 50px;
          height: 50px;
          background: white;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .testimonial-arrow:hover {
          background: #000;
          color: white;
        }

        /* CTA Section */
        .final-cta-clean {
          padding: 120px 0;
          background: white;
        }

        .cta-title-clean {
          font-size: 3rem;
          color: #151937;
          margin-bottom: 30px;
          font-weight: 400;
          line-height: 1.3;
        }

        .cta-description-clean {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title-clean {
            font-size: 2.5rem;
          }

          .section-title-clean {
            font-size: 2rem;
          }

          .service-card-header {
            padding: 20px 20px 0;
          }

          .service-card-body {
            padding: 20px;
          }

          .service-card-footer {
            padding: 20px;
            padding-top: 0;
          }

          .block-stats {
            flex-direction: column;
            gap: 20px;
          }

          .capabilities-list {
            gap: 20px;
          }

          .cta-title-clean {
            font-size: 2rem;
          }

          .testimonial-card-clean {
            padding: 30px;
            height: auto;
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesPage;