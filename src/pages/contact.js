"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterContent from '@/components/footer/FooterContent';
import Subscribe from '@/components/footer/Subscribe';
import CopyrightFooter from '@/components/footer/CopyrightFooter';
import Header from '@/components/header/Header';
import ContactV4 from '@/components/contact';
import Hero from "@/components/home-page/hero";
import ContactForm4 from "@/components/contact/ContactForm4";
import Map2 from "@/components/contact/Map2";
import Container from '@mui/material/Container';
import { useSettings } from '@/context/SettingsContext';

const Contact = () => {
  const { settings, loading } = useSettings();


  return (
    <>
      <Header />
      <Hero isHomePage={false}>
        <ContactV4 settings={settings} />
      </Hero>
      <div className="contact-section-four pt-0 md-pt-0">
        <div className="contact-meta mt-0 lg-mt-40">
          <div className="row gx-0">
            <div className="col-lg-6 order-lg-last d-flex">
              <div className="form-wrapper pt-60 lg-pt-40 pb-85 lg-pb-50 w-100">
                <div className="form-style-five">
                  <h3 className="form-title font-recoleta fw-normal pb-30 lg-pb-20">
                    Send Us a Message.
                  </h3>
                </div>
                <Container>
                  <ContactForm4 />
                </Container>
              </div>
            </div>
            <div className="col-lg-6 order-lg-first d-flex">
              <Map2 settings={settings} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={
                        settings?.logoFooter?.url
                          ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${settings.logoFooter.url}`
                          : "/images/logo/logo_06.svg"
                      }
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
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
    </>
  );
};
export async function getStaticProps() {
  let settings = null;
  
  try {
    const settingsUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/setting?populate=*`;
    const settingsRes = await fetch(settingsUrl);
    const settingsJson = await settingsRes.json();
    settings = settingsJson.data || null;
  } catch (error) {
    console.error("Error fetching settings:", error);
  }

  return {
    props: {
      settings
    },
  };
}
export default Contact;