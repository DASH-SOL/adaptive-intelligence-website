import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/header/Header";
import Hero from "@/components/home-page/hero";
import Feedback from "@/components/home-page/Feedback";
import Feature from "@/components/home-page/Feature";
import Leads from "@/components/home-page/Leads";
import FeaturesBlock from "@/components/home-page/FeaturesBlock";
import Counter from "@/components/home-page/Counter";
import SuccessStory from "@/components/home-page/SuccessStory";
import Testimonial from "@/components/home-page/Testimonial";
import Faq from "@/components/home-page/Faq";
import FooterContent from "@/components/footer/FooterContent";
import Subscribe from "@/components/footer/Subscribe";
import CopyrightFooter from "@/components/footer/CopyrightFooter";

export const metadata = {
  title: "Insurance || Jano - Creative Multipurpose React NextJS Template",
};
const HomePage = () => {
  return (
    <>
      {/* <!-- 
      =============================================
    Theme Default Menu
     ============================================== 	
    --> */}
      <Header />
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero isHomePage={true} />
      {/* /.hero-banner-nine */}
      {/*
        =====================================================
        Feedback Section Eight
        =====================================================
        */}
      <Feedback />
      {/* /.feedback-section-eight */}
      {/* 
        =============================================
        Feature Section Thirty
        ============================================== 
        */}
      <Feature />
      {/* /.fancy-feature-thirty */}

      {/* 
        =============================================
        Feature Section Thirty One
        ============================================== 
        */}
      <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                Our 
                  <span className="position-relative">
                    {" "}
                    Services
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={220}
                      height={5}
                    />
                  </span>

                </h2>
                <p className="fs-20 mt-20">
                Powered by Innovation.
                </p>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <Leads />
          </div>
        </div>
        {/* /.container */}

        <Image
          src="/images/shape/shape_124.svg"
          alt="icon shape"
          className="lazy-img shapes shape-one"
          width={237}
          height={201}
        />
        <Image
          src="/images/shape/shape_125.svg"
          alt="icon shape"
          className="lazy-img shapes shape-two"
          width={73}
          height={129}
        />
      </div>
      {/* /.fancy-feature-thirtyOne */}

      {/* 
        =============================================
        Feature Section Thirty Two
        ============================================== 
        */}
      <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container">
          <div className="row">
            <FeaturesBlock />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="wrapper mt-90 lg-mt-30">
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>
      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-lg-auto" data-aos="fade-left">
              <div className="title-style-ten">
                <div className="sc-title">SUCCESS STORIES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  See success{" "}
                  <span className="position-relative">
                    stories{" "}
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="img"
                      width={185}
                      height={5}
                    />
                  </span>
                  of our customers.
                </h2>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <SuccessStory />
        {/* /.wrapper */}
      </div>
      {/* /.feedback-section-nine */}

      {/* 
			=============================================
				Feedback Section Ten
			============================================== 
			*/}
      <div className="feedback-section-ten position-relative pt-200 lg-pt-150">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">Testimonials.</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
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
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
          </div>
        </div>
        {/* End .container */}

        <Image
          src="/images/shape/shape_130.svg"
          alt=""
          className="lazy-img shapes shape-one"
          width={129}
          height={147}
        />
        <Image
          src="/images/shape/shape_131.svg"
          alt=""
          className="lazy-img shapes shape-two"
          width={170}
          height={150}
        />
      </div>
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
                  Have an idea for a project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
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
                We’re ready to help you. Our experts are here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos-delay="300"
                data-aos="fade-up"
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
      {/* /.footer-style-nine */}
    </>
  );
};

export default HomePage;
