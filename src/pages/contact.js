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
import FooterWithSettings from "@/components/footer/FooterWithSettings";

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

 <FooterWithSettings />
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