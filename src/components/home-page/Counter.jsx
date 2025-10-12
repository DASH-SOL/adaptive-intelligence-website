"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// This is the individual counter item
const CounterItem = ({ data }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (inView && !isInView) {
    setIsInView(true);
  }

  return (
    <div className="counter-block-five text-center mt-40" data-aos="fade-up" ref={ref}>
      <div className="main-count font-recoleta fw-light">
        {isInView ? <CountUp start={0} end={data.value} duration={2} separator="," /> : data.value}
        {data.symbol}
      </div>
      <p className="fs-18 mb-15">{data.title}</p>
      <span className="d-block rounded-circle cicrle m-auto" style={{ background: data.color }} />
    </div>
  );
};

// This is the main section component that maps over the data
const CounterSection = ({ counterData }) => {
  // Fallback data in case the prop is not provided
  const items = counterData || [
    { id: 1, title: "Satisfied Clients", value: 153, symbol: "+", color: "#FFC735" },
    { id: 2, title: "Hours", value: 10000, symbol: "+", color: "#F177FF" },
    { id: 3, title: "Cities", value: 4, symbol: "+", color: "#00FCFC" },
    { id: 4, title: "Successful Projects", value: 439, symbol: "+", color: "#9671FF" },
  ];
  // Determine the column class based on the number of items
  const columnClass = items.length === 5 
    ? "col-lg col-sm-6" // If 5 items, use flexible columns on large screens
    : "col-lg-3 col-sm-6"; // Default to 4 columns if not 5 items

  return (
    <div className="row">
      {items.map((item) => (
        <div className={columnClass} key={item.id}>
          <CounterItem data={item} />
        </div>
      ))}
    </div>
  );
};

export default CounterSection;