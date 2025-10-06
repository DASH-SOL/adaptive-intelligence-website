import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Header from '@/components/header/Header';
import Testimonial from "@/components/home-page/Testimonial";
import Faq from "@/components/home-page/Faq";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";
import OurMission from "@/components/about/OurMission";
import Block2 from "@/components/about/Block2";
import CounterSection from "@/components/home-page/Counter";
import Hero from "@/components/home-page/hero";
import LetsTalkButton from '@/components/LetsTalkButton';

export const metadata = {
  title: "About Adaptive Intelligence | About Our Agency",
  description: "Learn about Adaptive Intelligence and why we're committed to sustainable, innovative marketing efforts.",
};

export async function getStaticProps() {
  const fallbackData = { trees: 311, acres: 1.2, carbon: 328, bottles: 1674 };
  let finalStats = fallbackData;

  // Fetch TreeCard stats
  try {
    const sheetId = '1ICb8PWttvv0leKmfmJWXSGhXkZz5UAxChmFamV_bh1c';
    const url = `https://docs.google.com/sheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Sheet1`;
    const response = await fetch(url);
    
    if (response.ok) {
      const csvText = await response.text();
      const rows = csvText.replace(/"/g, '').split('\n');
      const parsedData = {};
      
      rows.forEach(row => {
        const [key, value] = row.split(',');
        if (key && value) {
          parsedData[key.trim().toLowerCase()] = parseFloat(value.trim());
        }
      });

      if (parsedData.trees && parsedData.acres && parsedData.carbon && parsedData.bottles) {
        finalStats = parsedData;
      }
    }
  } catch (error) {
    console.log('Using fallback data for sustainability stats');
  }

  // Fetch About Page data from Strapi
  let pageData = null;
  try {
    const pageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-page?populate=*`;
    const pageRes = await fetch(pageUrl);
    const pageJson = await pageRes.json();
    pageData = pageJson.data || null;
  } catch (error) {
    console.error("Error fetching about page data:", error);
  }

  return {
    props: {
      treeCardStats: finalStats,
      pageData
    },
    revalidate: 3600,
  };
}

const About = ({ treeCardStats, pageData }) => {
  // Fallback data if Strapi fetch fails
  const whoWeAreImageUrl = pageData?.whoWeAreImage?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${pageData.whoWeAreImage.url}`
    : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  return (
    <>
      <Header />

      <Hero isHomePage={false}>
        <div
          className="title-style-fourteen text-center mt-50 mb-50 lg-mb-70"
          data-aos="fade-up"
        >
          <h2 className="main-title font-recoleta fw-normal tx-dark" style={{ color: 'white', marginTop: '10px' }}>
            {pageData?.heroTitle || 'About Adaptive Intelligence'}
            <span className="position-relative">
              <Image
                width={302}
                height={9}
                src="/images/shape/shape_186.svg"
                alt="shape"
              />
            </span>
          </h2>
          <p className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20" data-aos="fade-up" style={{ color: 'white' }}>
            {pageData?.heroDescription || "We're in the business of growing your business. At Adaptive Intelligence, we believe creativity is the world's most valuable asset."}
          </p>
        </div>
      </Hero>

      {/* Stats Section */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <CounterSection />
              <div className="text-center mt-30" data-aos="fade-up" data-aos-delay="200">
                <p className="fs-20 tx-dark fw-500">{pageData?.statsSubtitle || '3x Top Creative Agency - Upwork'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Our Mission Section */}
<div className="fancy-feature-fiftyEight position-relative zn2 pt-120 md-pt-100" id="mission">
  <div className="container position-relative">
    <OurMission data={pageData} />
    <Image
      width={449}
      height={808}
      src="/images/shape/shape_187.svg"
      alt="shape"
      className="lazy-img shapes shape-one"
    />
  </div>
</div>

      {/* Who We Are Section */}
      <section className="fancy-feature-thirtyTwo mt-180 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative">
                <Image
                  width={600}
                  height={500}
                  src={whoWeAreImageUrl}
                  alt="Team collaboration"
                  className="lazy-img w-100"
                  style={{ borderRadius: '20px' }}
                />
                <div className="position-absolute" style={{ 
                  bottom: '30px', 
                  left: '30px', 
                  background: 'white', 
                  padding: '25px 30px', 
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                  textAlign: 'center'
                }}>
                  <h4 className="m0 tx-dark font-recoleta" style={{ fontSize: '2rem', color: '#FF1292' }}>
                    {pageData?.whoWeAreBadgeNumber || '#1'}
                  </h4>
                  <p className="m0 fs-16 tx-dark" style={{ marginTop: '5px' }}>
                    {pageData?.whoWeAreBadgeText || 'Creative Agency'}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-5 mt-lg-0 mt-50">
                <div className="title-style-ten">
                  <div className="sc-title">{pageData?.whoWeAreTagline || 'WHO WE ARE'}</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    {pageData?.whoWeAreTitle || 'Creative Agency. Way of Thinking.'}
                    <span className="position-relative">
                      <Image
                        width={235}
                        height={9}
                        src="/images/shape/shape_188.svg"
                        alt="shape"
                      />
                    </span>
                  </h2>
                </div>
                <p className="text-lg tx-dark lh-lg mt-35 mb-25">
                  {pageData?.whoWeAreParagraph1}
                </p>
                <p className="text-lg tx-dark lh-lg mb-35">
                  {pageData?.whoWeAreParagraph2}
                </p>
                <p className="text-lg tx-dark lh-lg" style={{ fontWeight: '600' }}>
                  <strong>{pageData?.whoWeAreParagraph3}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Best Section */}
      <div className="fancy-feature-fiftyNine position-relative mt-140" data-aos="fade-up">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              {pageData?.whatWeDoTitle || 'What We Do Best'}
              <span className="position-relative">
                <Image
                  width={235}
                  height={9}
                  src="/images/shape/shape_188.svg"
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20" data-aos="fade-up">
                {pageData?.whatWeDoDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <section className="values-section fancy-feature-thirtyTwo mt-140 lg-mt-120" id="vision">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <div className="sc-title">{pageData?.valuesTagline || 'OUR VISION'}</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              {pageData?.valuesTitle || 'The Principles That Guide Us'}
              <span className="position-relative">
                <Image width={219} height={7} src="/images/shape/shape_132.svg" alt="shape"/>
              </span>
            </h2>
          </div>
          <div className="row gx-xxl-5 mt-60 lg-mt-40">
            {pageData?.values?.map((value, index) => {
              const iconUrl = value.icon?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${value.icon.url}`
                : '/images/icon/icon_175.svg';
              
              return (
                <div key={value.id || index} className="col-md-6 col-lg-3 d-flex" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-style-fifteen tran3s text-center h-100">
                    <div className="icon m-auto tran3s">
                      <Image src={iconUrl} alt={value.title} className="lazy-img" width={32} height={32} />
                    </div>
                    <h4 className="fw-bold tx-dark mt-35 mb-20">{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section fancy-feature-thirtyTwo mt-140 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-ten">
                <div className="sc-title">{pageData?.sustainabilityTagline || 'OUR COMMITMENT'}</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  {pageData?.sustainabilityTitle || 'A Commitment to Sustainability.'}
                </h2>
              </div>
              <p className="text-lg tx-dark lh-lg mt-35 mb-45">
                {pageData?.sustainabilityDescription}
              </p>
              <LetsTalkButton 
                buttonText={pageData?.sustainabilityButtonText || 'Explore Our Eco Initiatives'} 
                href={pageData?.sustainabilityButtonUrl || '/eco'} 
              />
            </div>
            <div className="col-lg-6 col-md-8 ms-auto" data-aos="fade-left">
              <div className="row">
                <div className="col-6">
                  <div className="counter-block-three text-center mt-35">
                    <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.trees || 311).toLocaleString()}</div>
                    <p>Trees Planted</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-block-three text-center mt-35">
                    <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.acres || 1.2).toFixed(1)}</div>
                    <p>Acres Restored</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-block-three text-center mt-35">
                    <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.carbon || 328).toLocaleString()}</div>
                    <p>Tons of CO2 Absorbed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="counter-block-three text-center mt-35">
                    <div className="main-count font-recoleta fw-bold tx-dark">{(treeCardStats?.bottles || 1674).toLocaleString()}</div>
                    <p>Bottles Removed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Brands Choose Us Section */}
      <section className="why-choose-us-section fancy-feature-thirtyTwo mt-140 lg-mt-120" style={{background: '#f8f9fa', padding: '120px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="ps-lg-5">
                <div className="title-style-ten">
                  <div className="sc-title">{pageData?.whyChooseUsTagline || 'CLIENT SUCCESS'}</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    {pageData?.whyChooseUsTitle || 'Why Brands Choose Us.'}
                  </h2>
                </div>
                <p className="text-lg tx-dark lh-lg mt-35 mb-45">
                  {pageData?.whyChooseUsDescription}
                </p>
                <ul className="style-none list-item fs-18">
                  {pageData?.whyChooseUsPoints?.map((point, index) => (
                    <li key={point.id || index}>{point.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first" data-aos="fade-right">
              <div className="client-logos-wrapper text-center">
                {pageData?.clientLogos?.map((logo, index) => {
                  const logoUrl = logo.url
                    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${logo.url}`
                    : '/images/logo/P-2.svg';
                  return (
                    <div key={logo.id || index} className="logo-item">
                      <Image src={logoUrl} alt={`Client logo ${index + 1}`} width={120} height={40} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image width={219} height={7} src="/images/shape/shape_132.svg" alt=""/>
              </span>
            </h2>
          </div>
          <div className="bg-wrapper position-relative mt-80 lg-mt-40" data-aos="fade-up">
            <Faq />
            <Image width={65} height={66} src="/images/shape/shape_133.svg" alt="shape" className="lazy-img shapes shape-one"/>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  {pageData?.letsTalkTitle || "Let's Talk"}
                </h2>
              </div>
              <p className="text-lg mt-45 mb-30 lg-mb-30 lg-mt-40" data-aos="fade-up" data-aos-delay="100">
                {pageData?.letsTalkParagraph1}
              </p>
              <p className="text-lg mb-55 lg-mb-30" data-aos="fade-up" data-aos-delay="150">
                {pageData?.letsTalkParagraph2}
              </p>
              <LetsTalkButton 
                buttonText={pageData?.letsTalkButtonText || "Let's Talk"} 
                targetPage="/contact" 
              />
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
                    <Image src="/images/logo/logo_06.svg" alt="logo" width={115} height={80}/>
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
        .values-section .card-style-fifteen {
          background: #F8F9FA;
          border-radius: 20px;
          padding: 35px;
          border: 1px solid #E5E5E5;
          transition: all 0.3s ease;
        }
        .values-section .card-style-fifteen:hover {
          border-color: #FF1292;
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
        }
        .values-section .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #FF1292;
          transition: background 0.3s ease;
        }
        .values-section .icon img {
          filter: brightness(0) invert(1);
          transition: filter 0.3s ease;
        }
        .values-section .card-style-fifteen:hover .icon {
          background: #FF1292; 
        }
        .values-section .card-style-fifteen:hover .icon img {
          filter: brightness(0) invert(1);
        }

        .sustainability-section .counter-block-three .main-count {
          font-size: 3rem;
          color: #FF1292;
        }
        .sustainability-section .counter-block-three p {
          font-size: 1.1rem;
          color: #151937;
        }
        
        .why-choose-us-section .client-logos-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .why-choose-us-section .logo-item {
          text-align: center;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .why-choose-us-section .logo-item:hover {
          opacity: 1;
        }
        .why-choose-us-section .list-item li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 15px;
        }
        .why-choose-us-section .list-item li::before {
          content: '✓';
          color: #FF1292;
          position: absolute;
          left: 0;
          top: 0;
          font-weight: bold;
        }
      `}</style>
    </>
  )
};

export default About;