import BlockContact5 from "@/components/contact/BlockContact5";
import React from "react";
import Image from 'next/image';

export const metadata = {
  title: "Contact v4 || Jano - Creative Multipurpose React NextJS Template",
};
const ContactV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      {/* 
			=============================================
				Contact Section Four
			============================================== 
			*/}
      <div className="contact-section-four pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-50"
                data-aos="fade-up"
              >
                <div className="sc-title">CONTACT US</div>
                <h2 className="main-title font-recoleta fw-normal text-white">
                  Our{" "}
                  <span className="position-relative">
                    team <Image src="/images/shape/shape_186.svg" alt="icon" width={20} height={20} />
                  </span>
                  is here to help you.
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
          <div className="row">
            <BlockContact5 />
          </div>
        </div>
        {/* End .container */}


        {/* /.contact-meta */}
      </div>
      {/* /.contact-section-four */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
    </>
  );
};

export default ContactV4;
