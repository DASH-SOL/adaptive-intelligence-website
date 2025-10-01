"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ClientCarousel = ({ clientLogos }) => {
  const clientCarouselRef = useRef(null);

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
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Slider {...clientSettings} ref={clientCarouselRef} arrows={false}>
      {clientLogos.map((client, index) => (
        <div key={index} className="client-slide-modern">
          <div className="client-logo-wrapper-modern">
            <Image 
              src={client.logo} 
              alt={client.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '60px'
              }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ClientCarousel;