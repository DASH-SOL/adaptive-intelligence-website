// Updated HeroContent component
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";

const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', padding: '10px', userSelect: 'none' }}>
        Adaptive Intelligence{" "}
        <span className="position-relative curved-underline-span">
          Fueling Creative Innovation™
        </span>
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', padding: '10px', userSelect: 'none' }}>
        Welcome to Adaptive Intelligence International. We  
        <span className="text-white"> maximize your global exposure </span>by sculpting key messages that speak clearly to a universal audience.
      </p>
      <div className="d-lg-flex align-items-center">
        <Link
          href="/contact"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
          style={{ userSelect: 'none', background: 'rgba(255, 255, 255, 0.75)', color: 'black' }}
        >
          <span>Start a Conversation</span>
          <Image
            src="/images/icon/icon_91.svg"
            alt="img"
            className="ms-3"
            width={31}
            height={16}
          />
        </Link>
      </div>
    </>
  );
};

export default HeroContent;