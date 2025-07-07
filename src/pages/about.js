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

export const metadata = {
  title: "About Us || Adaptive Intelligence International",
};


const About = () => {
  return (
    <>
      <Header />

      <Hero isHomePage={false}>
        <div
          className="title-style-fourteen text-center mt-50 mb-50  lg-mb-70"
          data-aos="fade-up"
        >
          <h2 className="main-title font-recoleta fw-normal tx-dark" style={{ color: 'white', marginTop: '10px' }}>
            Fueling Creative Innovation.
            <span className="position-relative">
              <Image
                width={302}
                height={9}
                src="/images/shape/shape_186.svg"
                alt="shape"
              />
            </span>
          </h2>
          <p className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20" data-aos="fade-up" style={{ color: 'white' }} >
            We&rsquo;re in the business of growing your business. We believe that creativity is the world&rsquo;s most valuable asset. By combining raw creativity with innovative, best-in-class marketing strategies, Adaptive Intelligence drives the future of industries.
          </p>
        </div>

      </Hero>

      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">

              {/* /.title-style-fourteen */}
            </div>
          </div>
          <OurMission />
          {/* End .row */}

          <Image
            width={449}
            height={808}
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      {/* /.fancy-feature-fiftyEight */}
      {/*
        =====================================================
        Feature Section Fifty Nine
        =====================================================
        */}
      <div
        className="fancy-feature-fiftyNine position-relative mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Adaptive Intelligence. The People{" "}
              <span className="position-relative">
                of Expert.
                <Image
                  width={235}
                  height={9}
                  src="/images/shape/shape_188.svg"
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
                At Adaptive Intelligence, we&rsquo;ve seen again and again how the seemingly simple act
                of creating can be a force for growth, change,and discovery in
                people&rsquo;s lives. We want to inspire and multiply the kind of
                creative exploration that furthers expression, learning and
                application.
              </p>
            </div>
          </div>
          {/* End .row */}
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>{" "}
          {/* /.card-wrapper */}
        </div>{" "}
        {/* /.container */}
        <div className="wrapper mt-50 lg-mt-10">
          <div className="container">
            <div className="row">
              <CounterSection />
            </div>
          </div>
        </div>{" "}
        {/* /.wrapper */}
        <Image
          width={130}
          height={108}
          src="/images/shape/shape_189.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.fancy-feature-fiftyNine */}
      {/* 
        =============================================
        Feedback Section Ten
        ============================================== 
        */}
      {/* /.feedback-section-ten */}
      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq />
            <Image
              width={65}
              height={66}
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let&rsquo;s Talk{" "}
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
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We&rsquo;r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                aos-delay="300"
                aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
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
                <h5 className="footer-title fw-normal">Newslettert</h5>
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

export default About;

