import { Suspense } from 'react';
import HeroContent from "./HeroContent";
import Partners from "./Partners";
import GrassThreeD from "../../threeD/GrassThreeD";

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
    <div className="hero-banner-nine position-relative zn2 pt-225 md-pt-150" 
         style={{ height: isHomePage ? "auto" : "100vh" }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}>
        <Suspense fallback={<div>Loading...</div>}>
          <GrassThreeD style={{ pointerEvents: 'all', touchAction: 'none' }}/>
        </Suspense>
      </div>

      {isHomePage ? <HomePageContent /> : 
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12" data-aos="fade-left" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '10px', padding: '10px', userSelect: 'none' }}>
            {children}
          </div>
        </div>
      </div>
      }
    </div>
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