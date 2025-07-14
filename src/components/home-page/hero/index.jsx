import { Suspense } from "react";
import HeroContent from "./HeroContent";
import Partners from "./Partners";

const backgroundAnimations = `
  @keyframes slowZoom {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes floatMove {
    0% { transform: translateY(0px) translateX(0px); }
    33% { transform: translateY(-10px) translateX(5px); }
    66% { transform: translateY(5px) translateX(-3px); }
    100% { transform: translateY(0px) translateX(0px); }
  }
  
  @keyframes subtleRotate {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(0.5deg) scale(1.02); }
    50% { transform: rotate(0deg) scale(1.05); }
    75% { transform: rotate(-0.5deg) scale(1.02); }
    100% { transform: rotate(0deg) scale(1); }
  }
  
  @keyframes parallaxMove {
    0% { transform: translateX(0%) translateY(0%); }
    25% { transform: translateX(-1%) translateY(-0.5%); }
    50% { transform: translateX(0%) translateY(-1%); }
    75% { transform: translateX(1%) translateY(-0.5%); }
    100% { transform: translateX(0%) translateY(0%); }
  }
`;

const HomePageContent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6" data-aos="fade-left">
            <HeroContent />
          </div>
        </div>
      </div>
      <div className="partner-section-five position-relative mt-130 lg-mt-100">
        <div className="wrapper m-auto">
          <Partners />
        </div>
      </div>
    </>
  );
};

const Hero = ({ isHomePage = false, children }) => {
  return (
    <>
      <style jsx>{backgroundAnimations}</style>

      <div
        className="hero-banner-nine position-relative zn2 pt-225 md-pt-150"
        style={{ height: isHomePage ? "auto" : "100vh" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: "url(/images/assets/Shapes.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            WebkitUserDrag: "none",
            KhtmlUserDrag: "none",
            MozUserDrag: "none",
            OUserDrag: "none",
            userDrag: "none",
            animation: "floatMove 15s ease-in-out infinite",
          }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onSelectStart={(e) => e.preventDefault()}
        />

        {isHomePage ? (
          <HomePageContent />
        ) : (
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 col-md-12"
                data-aos="fade-left"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  borderRadius: "10px",
                  padding: "10px",
                  userSelect: "none",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;

/* <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-150">

<div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-6" data-aos="fade-right">
      <HeroContent />
    </div>
  </div>
</div>

<div className="image-gallery" data-aos="fade-left">
  <div className="row align-items-center">
    <HeroGallery />

  </div>
</div>





<div className="partner-section-five position-relative mt-130 lg-mt-100">
  <div className="wrapper m-auto">
    <Partners />
  </div>
</div>

</div>  */
