import Image from "next/image";

const leadItems = [
  { 
    icon: "/images/icon/icon_94.svg", 
    title: "Content", 
    description: "Successful content strategy can be the engine for your brand, capturing new audiences and market share in the process. Carve out your share of the Internet and turn heads.",
    width: 320,
    height: 320 
  },
  { 
    icon: "/images/icon/icon_95.svg", 
    title: "Strategy", 
    description: "Our brand architects take your projects from the drafting table to completion, leveraging strategic positioning to create campaigns that resonate deeply with your desired audience.",
    width: 320, 
    height: 320 
  },
  { 
    icon: "/images/icon/icon_96.svg", 
    title: "Brand Narrative", 
    description: "Your brand’s story is everything. We’ll guide you through the essential elements of brand identity, ensuring that you and your brand connect with your ideal audience on every platform.",
    width: 320, 
    height: 320 
  },
];

const Leads = () => {
  return (
    <>
      {leadItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card-style-fourteen text-center mt-30"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon">
              <Image
                src={item.icon}
                alt="icon shape"
                className="lazy-img m-auto"
                width={item.width}
                height={item.height}
              />
            </div>
            <p className="text-uppercase fs-18 mt-60 lg-mt-30">{item.title}</p>
            <p className="text-muted fs-16 mt-40 lg-mt-30 px-3">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leads;
