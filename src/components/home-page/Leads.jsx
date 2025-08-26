import Image from "next/image";
import LetsTalkButton from "@/components/LetsTalkButton";

const leadItems = [
  {
    icon: "/images/shape/content.png",
    title: "Content",
    subtitle: "Smart Content Strategy",
    description: "Smart content is more than words on a page. Our content marketing services include SEO-driven website copy, blog writing, social media posts, and custom graphic design. Each piece is designed to increase visibility, improve search rankings, and generate qualified leads. Cut through the noise and position your brand at the forefront.",
    features: [],
    color: "#FF1292",
    width: 80,
    height: 80
  },
  {
    icon: "/images/shape/analysis.png",
    title: "Strategy",
    subtitle: "Data-Driven Marketing",
    description: "Our marketing specialists use data-driven marketing strategies that combine PPC management, conversion optimization, audience targeting, and analytics. Whether you’re building awareness or scaling performance, we turn insights into measurable growth.",
    features: [],
    color: "#FF1292",
    width: 80,
    height: 80
  },
  {
    icon: "/images/shape/brand-asset-management.png",
    title: "Brand Narrative",
    subtitle: "Story-Driven Identity",
    description: "Our brand architects recognize that your brand’s story is everything. We’ll guide you through the essential elements of brand identity, brand kits, audience personas, messaging frameworks, and creative design systems, ensuring your story connects with the right audience across every platform.",
    features: [],
    color: "#FF1292",
    width: 80,
    height: 80
  },
];

const Leads = () => {
  return (
    <div className="row g-4">
      {leadItems.map((item, index) => (
        <div className="col-lg-4 col-md-6" key={index}>
          <div
            className="service-card-modern h-100"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Header with icon and number */}
            <div className="service-header">
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon-wrapper">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="service-icon"
                  width={item.width}
                  height={item.height}
                />
              </div>
            </div>

            {/* Content */}
            <div className="service-content">
              <h3 className="service-title">{item.title}</h3>
              <h4 className="service-subtitle">{item.subtitle}</h4>
              <p className="service-description">{item.description}</p>
              
              {/* Features list */}
              <ul className="service-features">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer with CTA */}
            <div className="service-footer">
              <LetsTalkButton 
                buttonText="Learn More" 
                href={`/services/${item.title.toLowerCase()}`}
                showIcon={true}
              />
            </div>

            {/* Decorative element */}
            <div className="service-accent" style={{ backgroundColor: item.color }}></div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
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

        /* Responsive adjustments */
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