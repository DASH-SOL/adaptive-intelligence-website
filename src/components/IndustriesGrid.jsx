// src/components/IndustriesGrid.jsx
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const IndustriesGrid = () => {
  const [industries, setIndustries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      setIsLoading(true);
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/industries?populate=image`; // Adjust 'image' if needed
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Failed to fetch industries');
        const json = await res.json();

        const formattedIndustries = (json.data || []).map(item => ({
          id: item.id,
          name: item.name,
          imageUrl: item.image?.url // Use simple .url for v5
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`
            : '/images/icon/innovation.png' // Fallback
        }));
        setIndustries(formattedIndustries);
      } catch (error) {
        console.error("Error fetching industries:", error);
        setIndustries([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchIndustries();
  }, []);

  if (isLoading) {
    return <p style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>Loading industries...</p>;
  }

  if (industries.length === 0) {
    return null; // Or a message like "No industries found."
  }

  return (
    <>
      {/* --- Use the same grid wrapper class --- */}
      <div className="capabilities-grid-enhanced">
        {industries.map((industry) => (
          // --- Use the same card structure and classes ---
          <div key={industry.id} className="capability-card-enhanced industry-card"> {/* Added industry-card */}
            <div className="capability-icon">
              <Image
                src={industry.imageUrl}
                alt={`${industry.name || 'Industry'} icon`}
                width={35} // Match original icon size
                height={35} // Match original icon size
                // Keep filter if icons should be white on dark background
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="capability-content">
              {/* Removed <p> tag, just use h4 */}
              <h4>{industry.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* --- Copy relevant styles from ServicesPage --- */}
      <style jsx>{`
        /* Original styles for the grid and cards */
        .capabilities-grid-enhanced {
          display: grid;
          /* Keep 2 columns like the original design */
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px; /* Copied from original */
        }

        .capability-card-enhanced {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px;
          position: relative;
          transition: all 0.3s ease;
          display: flex; /* Original used flex */
          align-items: center; /* Vertically center icon and text */
          gap: 15px; /* Space between icon and text */
        }

        /* Added industry-card specific styles if needed, or keep combined */
        .industry-card {
           /* You might adjust padding or text alignment if needed */
           /* padding-top: 35px; */
           /* padding-bottom: 35px; */
        }


        .capability-card-enhanced:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #FF1292;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 18, 146, 0.15);
        }

        .capability-icon {
          width: 50px; /* Original icon wrapper size */
          height: 50px;
          background: rgba(255, 18, 146, 0.1);
          border: 1px solid rgba(255, 18, 146, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Removed .capability-icon img filter here as it's inline */

        .capability-content h4 {
          color: white;
          font-size: 1.2rem; /* Original size */
          margin-bottom: 0; /* Remove default margin */
          font-weight: 600;
        }

        /* Responsive grid adjustment */
        @media (max-width: 768px) {
           .capabilities-grid-enhanced {
               grid-template-columns: 1fr; /* Stack on smaller screens */
           }
        }
        @media (max-width: 480px) {
          .capability-card-enhanced {
            padding: 20px;
            /* Optional: stack icon above text on smallest screens */
            /* flex-direction: column; */
            /* text-align: center; */
          }
          .capability-icon {
             /* margin: 0 auto 15px; */ /* If stacking */
          }
        }

      `}</style>
    </>
  );
};

export default IndustriesGrid;