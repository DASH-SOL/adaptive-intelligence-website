import React, { useState, useEffect } from 'react';
import Image from "next/image";
import LetsTalkButton from "@/components/LetsTalkButton";

const Leads = () => {
  const [leadItems, setLeadItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/services?populate=icon`;
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Failed to fetch services');
        
        const json = await res.json();
        // The structure of the response is likely flat, so we use it directly.
        setLeadItems(json.data || json || []); 
      } catch (error) {
        console.error("Error fetching services in Leads component:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return <div>Loading services...</div>;
  }

  if (leadItems.length === 0) {
    return <div>No services found.</div>;
  }

  return (
    <div className="row g-4">
      {leadItems.map((item, index) => {
        // THE FIX: We use 'item' directly because your API response is flat.
        // We also use the simpler 'item.icon.url' path.
        const iconUrl = item.icon?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.icon.url}`
          : "/images/shape/content.png";

        return (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <div
              className="service-card-modern h-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="service-header">
                <div className="service-number">0{index + 1}</div>
                <div className="service-icon-wrapper">
                  <Image src={iconUrl} alt={`${item.title} icon`} width={80} height={80} />
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{item.title}</h3>
                <h4 className="service-subtitle">{item.subtitle}</h4>
                <p className="service-description">{item.description}</p>
              </div>
              <div className="service-footer">
                <LetsTalkButton buttonText="Learn More" href={item.buttonUrl || '/services'} showIcon={true} />
              </div>
              <div className="service-accent" style={{ backgroundColor: item.color }}></div>
            </div>
          </div>
        );
      })}
      
      <style jsx>{`
        /* All your original CSS styles remain here, unchanged. */
        .service-card-modern {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 0;
          padding: 40px 30px;
          position: relative;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          min-height: 500px;
        }

        .service-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #FF1292;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .service-number {
          font-size: 48px;
          font-weight: 300;
          color: #f0f0f0;
          font-family: 'Recoleta', serif;
          line-height: 1;
        }

        .service-icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .service-card-modern:hover .service-icon-wrapper img {
          filter: brightness(0) invert(1);
        }

        .service-content {
          flex-grow: 1;
          margin-bottom: 30px;
        }

        .service-title {
          font-size: 28px;
          font-weight: 600;
          color: #151937;
          margin-bottom: 8px;
          font-family: 'Recoleta', serif;
        }

        .service-subtitle {
          font-size: 16px;
          color: #FF1292;
          font-weight: 500;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .service-description {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 14px;
          color: #555;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          background: #FF1292;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .service-footer {
          margin-top: auto;
        }

        .service-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-modern:hover .service-accent {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .service-card-modern {
            padding: 30px 20px;
            min-height: auto;
          }
          
          .service-number {
            font-size: 36px;
          }
          
          .service-title {
            font-size: 24px;
          }
        }
      `}</style><style jsx>{`
        /* All your original CSS styles remain here, unchanged. */
        .service-card-modern {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 0;
          padding: 40px 30px;
          position: relative;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          min-height: 500px;
        }

        .service-card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #FF1292;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .service-number {
          font-size: 48px;
          font-weight: 300;
          color: #f0f0f0;
          font-family: 'Recoleta', serif;
          line-height: 1;
        }

        .service-icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .service-card-modern:hover .service-icon-wrapper img {
          filter: brightness(0) invert(1);
        }

        .service-content {
          flex-grow: 1;
          margin-bottom: 30px;
        }

        .service-title {
          font-size: 28px;
          font-weight: 600;
          color: #151937;
          margin-bottom: 8px;
          font-family: 'Recoleta', serif;
        }

        .service-subtitle {
          font-size: 16px;
          color: #FF1292;
          font-weight: 500;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .service-description {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 14px;
          color: #555;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          background: #FF1292;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .service-footer {
          margin-top: auto;
        }

        .service-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-modern:hover .service-accent {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .service-card-modern {
            padding: 30px 20px;
            min-height: auto;
          }
          
          .service-number {
            font-size: 36px;
          }
          
          .service-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Leads;