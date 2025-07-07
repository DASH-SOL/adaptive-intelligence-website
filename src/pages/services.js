import React from 'react';
import Header from '@/components/header/Header';
import Link from 'next/link';
import Image from 'next/image';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';
import Container from '@mui/material/Container';

const Services = () => {
  return (
    <>
      <Header />
      <div className="services-section">
        <Container>
          <h1>Our Services</h1>
          <h2>Powered by Innovation</h2>
          <h3>Our core services</h3>
          <ul>
            <li>Web Copy</li>
            <li>SEO Copy</li>
            <li>Blogging</li>
            <li>Editorial</li>
            <li>Social Media</li>
            <li>Pay-Per-Click Ads (PPC)</li>
          </ul>
          <h3>Strategy</h3>
          <ul>
            <li>Creative Consulting</li>
            <li>Content Strategy</li>
            <li>Brand Strategy</li>
            <li>Marketing Strategy</li>
            <li>PR Strategy</li>
          </ul>
          <h3>Brand Narrative</h3>
          <ul>
            <li>Brand Development</li>
            <li>Brand Identity</li>
            <li>Brand Voice</li>
            <li>Brand Architecture</li>
          </ul>
        </Container>
      </div>
      <div className="footer-style-nine theme-basic-footer zn2 position-relative" >
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/logo_06.svg"
                      alt="logo"
                      width={115}
                      height={80}
                    />
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
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

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
    </>
  )
};

export default Services;
