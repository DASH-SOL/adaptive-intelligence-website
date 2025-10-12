import Image from "next/image";
import React from "react";

const Feedback = ({ feedbackData }) => {
  const images = [
    {
      src: "/images/ChromeShapes/Shape_FatCylinder2.png",
      alt: "shape",
      className: "lazy-img shapes shape-one",
      width: 236,
      height: 200,
    },
    {
      src: "/images/ChromeShapes/Shape_JellyCube1.png",
      alt: "shape",
      className: "lazy-img shapes shape-two",
      width: 170,
      height: 150,
    },
    {
      src: "/images/ChromeShapes/Shape_Macaroni2.png",
      alt: "shape",
      className: "lazy-img shapes shape-three",
      width: 153,
      height: 100,
    },
    {
      src: "/images/ChromeShapes/Shape_Ring1.png",
      alt: "shape",
      className: "lazy-img shapes shape-four",
      width: 200,
      height: 225,
    },
  ];

  // CORRECTED: The avatar URL path is now simpler to match your Strapi data.
  const avatarUrl = feedbackData?.feedbackAvatar?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${feedbackData.feedbackAvatar.url}`
    : "/images/team/adam.jpeg";
  
  const avatarAlt = feedbackData?.feedbackAvatar?.alternativeText || "Founder and CEO";
  const quoteStart = feedbackData?.feedbackQuoteStart || "Adaptive Intelligence is pushing the";
  const quoteHighlight = feedbackData?.feedbackQuoteHighlight || "boundaries";
  const quoteEnd = feedbackData?.feedbackQuoteEnd || "of creative norms, and our work showcases that.";
  const authorName = feedbackData?.feedbackAuthorName || "Adam Isaac Itkoff";
  const authorTitle = feedbackData?.feedbackAuthorTitle || "Founder and CEO";

  return (
    <div
      className="feedback-section-eight position-relative pt-200 pb-30 lg-pt-120 "
      data-aos="fade-up"
    >
      <div className="container">
        <Image
          src={avatarUrl}
          alt={avatarAlt}
          className="feedback-avatar-image lazy-img m-auto rounded-circle"
          width={100}
          height={100}
          style={{ objectFit: 'cover' }}
        />
        <div className="row">
          <div className="col-xxl-11 col-lg-10 col-md-9 m-auto">
            <div className="feedback_slider_eight">
              <div className="item">
                <div className="feedback-block-eight text-center">
                  <p className="font-recoleta tx-dark mt-60 mb-65 lg-mt-40 lg-mb-40">
                    {quoteStart} <span>{quoteHighlight}</span> {quoteEnd}
                  </p>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    {authorName}, {authorTitle}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
};

export default Feedback;