"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    company: "Winsite Digital",
    position: "Founder & CEO",
    name: "Jarad",
    background: "#FA0B5F",
    text: "Gifted brand and content strategists. They will work with you to understand your business and your core philosophy at its deepest levels. They fundamentally understand that we write copy for the benefit of people first, SEO second - but certainly not to the latter's detriment.",
  },
  {
    company: "Advantage Benefit Solutions",
    position: "Chief Operating Officer",
    name: "Alexandra",
    background: "#00FCFC",
    text: "I came looking to get fantastic copy and I got just that and so much more. Not only did the agency provide outstanding copy and clarity, they also helped me put together a marketing strategy to take our company to the next level. Would recommend to anyone in a heartbeat, especially if you are the type of person that is looking to hire the very best.",

  },
  {
    company: "Credabl",
    position: "Chief Brand Officer",
    name: "Dina",
    background: "#F27AFF",
    text: "A talented creative team that has the remarkable ability to convert basic text into something very user friendly, meaningful and both interesting and enjoyable to read. Very happy with their work and looking forward to future campaigns with them.",
  },
  {
    company: "Intersect Marketing Group",
    position: "Strategy Director",
    name: "Bob",
    background: "#52C1FF",
    text: "Yet another example of excellent quality of work, ability to meet an agreed upon deadline, and a willingness to communicate questions and ideas as often as needed. I really appreciate that adaptiveintelligence.online takes the time to understand your project and cheerfully suggests methods to make their deliverables better than you anticipated.",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div
        className="slider-wrapper feedback_slider_ten pt-70 lg-pt-40"
        data-aos="fade-up"
      >
        <Slider {...settings} arrows={false} ref={sliderRef}>
          {testimonialData.map((testimonial) => (
            <div key={testimonial.company} className="item">
              <div
                className="feedback-block-ten"
                style={{ background: testimonial.background }}
              >
                <div className="cmp-name fw-500 tx-dark" style={{ fontSize: "30px" }}>
                  {testimonial.company}
                </div>
                
                <p className="tx-dark mt-20 mb-30 lg-mt-15 lg-mb-25" style={{ fontSize: "18px" }}>
                  {testimonial.text}
                </p>
                <div className="fw-500 tx-dark fs-18">
                    {testimonial.name}
                  </div>
                <div className="fs-18 tx-dark">{testimonial.position}</div>
                <div className="d-flex align-items-center justify-content-between">
                </div>
              </div>
              {/* /.feedback-block-ten */}
            </div>
          ))}
        </Slider>
        {/* /.feedback_slider_ten */}
      </div>
      <ul
        className="slider-arrows slick-arrow-five d-flex justify-content-center style-none"
        data-aos="fade-left"
      >
        <li
          className="prev_f5 slick-arrow text-center tran3s"
          style={{}}
          onClick={handlePrev}
        >
          <i className="bi bi-arrow-left" />
        </li>
        <li
          className="next_f5 slick-arrow text-center tran3s"
          style={{}}
          onClick={handleNext}
        >
          <i className="bi bi-arrow-right" />
        </li>
      </ul>
    </>
  );
};

export default Testimonial;
