import Image from "next/image";
import Link from "next/link";

const BlockContact5 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Our Address",
      content: "244 5th Ave Suite A269 Floor 2, New York, NY 10001",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: "Contact Info",
      content: "Open a chat or give us call at",
      link: "tel:800.985.7395",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "Email Support",
      content: "Drop us a line at",
      mailto: "support@aii.agency",
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
              <Image width={30} height={30} src={block.icon} alt="icon" style={{ 
                userSelect: 'none',
                filter: 'brightness(0) invert(1)'
              }}/>
            </div>
            <h5 className="title text-white">{block.title}</h5>
            <p>
              <span className="text-white">{block.content}</span> <br />
              {block.link && (
                <Link
                  href={block.link}
                  className={`text-white ${
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }`}
                >
                  {block.link.replace("tel:", "")}
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
