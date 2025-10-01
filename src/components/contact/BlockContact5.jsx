"use client";

import Image from "next/image";
import Link from "next/link";

const BlockContact5 = ({ settings }) => {
  // Debug: Check what settings we're receiving
  console.log("Settings in BlockContact5:", settings);
  console.log("Address:", settings?.address);
  console.log("Phone:", settings?.phoneNumber);
  console.log("Support Email:", settings?.supportEmail);

  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: settings?.addressTitle || "Our Address",
      content: settings?.address || "244 5th Ave Suite A269 Floor 2, New York, NY 10001",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: settings?.contactInfoTitle || "Contact Info",
      content: settings?.contactInfoText || "Open a chat or give us call at",
      link: `tel:${settings?.phoneNumber || "800.985.7395"}`,
      linkText: settings?.phoneNumber || "800.985.7395",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: settings?.emailSupportTitle || "Email Support",
      content: settings?.emailSupportText || "Drop us a line at",
      mailto: settings?.supportEmail || "support@aii.agency",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image 
                width={30} 
                height={30} 
                src={block.icon} 
                alt="icon" 
                style={{
                  userSelect: 'none',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <h5 className="title text-white">{block.title}</h5>
            <p>
              <span className="text-white">{block.content}</span> <br />
              {block.link && (
                <Link
                  href={block.link}
                  className="text-white call"
                >
                  {block.linkText}
                </Link>
              )}
              {block.mailto && (
                <Link
                  href={`mailto:${block.mailto}`}
                  className="text-white"
                >
                  {block.mailto}
                </Link>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact5;