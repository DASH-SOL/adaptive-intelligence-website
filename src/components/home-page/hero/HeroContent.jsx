// Updated HeroContent component
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import LetsTalkButton from "@/components/LetsTalkButton";
const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', padding: '40px 20px', userSelect: 'none' }}>
        Adaptive Intelligence{" "}
        <span className="position-relative curved-underline-span">
          Fueling Creative Innovation™
        </span>
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', padding: '40px 20px', userSelect: 'none' }}>
        Welcome to Adaptive Intelligence International. We  
        <b className="text-white"> maximize your global exposure </b>through innovative strategies and crafting key messages that resonate clearly with a universal audience.      </p>
        <LetsTalkButton buttonText="Start a project" href="/contact" />
    </>
  );
};

export default HeroContent;