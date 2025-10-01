import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head"; // <-- ADDED: For correct metadata handling

// Your original component imports
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
import LetsTalkButton from "@/components/LetsTalkButton";

// CORRECTED: The component now receives props and includes the <Head> component
const HomePage = ({ homepageData }) => {
  return (
    <>
      <Head>
        <title>Adaptive Intelligence | Homepage</title>
        <meta name="description" content="Fueling Creative Innovation and Digital Growth." />
      </Head>

      <Header />

      <Hero isHomePage={true} heroData={homepageData} />

      <Feedback feedbackData={homepageData} />

      <Feature featureData={homepageData} />

      <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              {/* THIS SECTION IS NOW DYNAMIC */}
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  {homepageData?.servicesTitle || "Our"}{" "}
                  <span className="position-relative">
                    {homepageData?.servicesTitleHighlight || "Services"}
                    <Image
                      src="/images/shape/shape_122.svg"
                      alt="icon shape"
                      width={220}
                      height={5}
                    />
                  </span>
                </h2>
                <p className="fs-20 mt-20">
                  {homepageData?.servicesSubtitle || "Powered by Innovation."}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* PASS THE REPEATER DATA TO THE LEADS COMPONENT */}
           <Leads />
          </div>
        </div>
      </div>

    <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container">
          <div className="row">
            {/* Pass the data to FeaturesBlock */}
            <FeaturesBlock featuresData={homepageData} />
          </div>
        </div>
        <div className="wrapper mt-90 lg-mt-30">
          <div className="container">
            <div className="row">
              {/* Pass the repeater data to Counter */}
              <Counter counterData={homepageData?.whyUsCounterItems} />
            </div>
          </div>
        </div>
      </div>

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
            </div>
          </div>
        </div>
        <SuccessStory />
      </div>

      <div className="feedback-section-ten position-relative pt-200 lg-pt-150">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">Client Testimonials</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
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
                </div>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>

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

      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
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
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We’re ready to help you. Our experts are here, just send a message.
              </p>
              <LetsTalkButton buttonText="Send Message" href="/contact" />
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>

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
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Using the simplest possible populate query
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/homepage?populate=*`;
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API fetch failed: ${res.status}`);
    const data = await res.json();
    const homepageData = data?.data?.attributes || data?.data || null; // Handles both structures
    return { props: { homepageData }, revalidate: 1 };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return { props: { homepageData: null } };
  }
}
export default HomePage;