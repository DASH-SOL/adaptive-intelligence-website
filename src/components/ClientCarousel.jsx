import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Image from "next/image";

const ClientCarousel = () => {
  const [clientLogos, setClientLogos] = useState([]);
  const clientCarouselRef = useRef(null);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/client-logos?populate=logo`;
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Failed to fetch logos');
        
        const json = await res.json();
        
        const formattedLogos = (json.data || json).map(item => ({
          name: item.name,
          logo: item.logo?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.logo.url}`
            : ""
        })).filter(item => item.logo);

        setClientLogos(formattedLogos);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      }
    };

    fetchClientLogos();
  }, []);

  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  if (clientLogos.length === 0) {
    return <p>Loading client logos...</p>;
  }

  return (
    // THE FIX: Add an opening React Fragment tag <>
    <>
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

      <style jsx>{`
        .client-slide-modern {
          padding: 0 15px;
        }
        .client-logo-wrapper-modern {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
          background: white;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }
        .client-logo-wrapper-modern:hover {
          border-color: #FF1292;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    {/* THE FIX: Add a closing React Fragment tag </> */}
    </>
  );
};

export default ClientCarousel