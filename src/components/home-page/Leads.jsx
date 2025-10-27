import React, { useState, useEffect } from 'react'; // Added useState, useEffect
import Image from "next/image";
import LetsTalkButton from "@/components/LetsTalkButton";

// This component now fetches its own data
const Leads = () => {
  // Add state for data, loading, and errors
  const [leadItems, setLeadItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null); // Reset error state on new fetch
      try {
        // Fetch services and populate the icon
        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/services?populate=icon`;
        console.log("Leads component fetching from:", apiUrl); // Log URL
        const res = await fetch(apiUrl);

        if (!res.ok) {
           const errorText = await res.text();
           console.error(`Failed to fetch services: ${res.status}`, errorText);
           throw new Error(`API fetch failed: ${res.status}`);
        }

        const json = await res.json();
        console.log("Leads component received raw data:", json); // Log raw response

        // Format data (assuming Strapi v5 flat structure)
        const formattedServices = (json.data || []).map(item => ({
          // Make sure these field names match your Strapi 'Service' collection type
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          buttonText: item.buttonText,
          buttonUrl: item.buttonUrl,
          color: item.color,
          // Use simple .url access for v5 icon
          icon: item.icon?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.icon.url}`
            : "/images/shape/content.png" // Fallback
        }));
        console.log("Leads component formatted data:", formattedServices); // Log formatted data
        setLeadItems(formattedServices);

      } catch (error) {
        console.error("Error fetching services in Leads component:", error.message);
        setError(error.message);
        setLeadItems([]); // Clear data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty array ensures this runs only once

  // --- Render based on state ---
  if (isLoading) {
    return <p className="text-center">Loading services...</p>; // Simple loading text
  }

  if (error) {
     return <p className="text-center text-danger">Error loading services. Please try again later.</p>; // Error message
  }

  if (leadItems.length === 0) {
    // Don't show anything if no services are fetched or available
    return null;
  }

  // --- Main Render ---
  return (
    <div className="row g-4">
      {leadItems.map((item, index) => {
        // Use the 'icon' property directly from the formatted data
        const iconUrl = item.icon;

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
                   {/* Add onError for debugging */}
                   <Image
                      src={iconUrl}
                      alt={`${item.title || 'Service'} icon`}
                      width={80} height={80}
                      onError={(e) => console.error(`Image load error for ${iconUrl}`, e.target.src)}
                    />
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{item.title || 'Untitled Service'}</h3>
                <h4 className="service-subtitle">{item.subtitle || ''}</h4>
                <p className="service-description">{item.description || 'No description.'}</p>
              </div>
              <div className="service-footer">
                <LetsTalkButton buttonText={item.buttonText || "Learn More"} href={item.buttonUrl || '/services'} showIcon={true} />
              </div>
              <div className="service-accent" style={{ backgroundColor: item.color || '#cccccc' }}></div>
            </div>
          </div>
        );
      })}

      {/* Styles remain unchanged */}
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