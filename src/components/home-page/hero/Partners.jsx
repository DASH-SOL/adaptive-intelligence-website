import React from "react";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { name: "Upwork", font: "font-recoleta" },
    { name: "", font: "font-recoleta" },
    { name: "Verizon", font: "font-recoleta" },
    { name: "", font: "font-recoleta" },
    { name: "Nike", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "Vimeo", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "Billboard", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "Vice", font: "" },
  ];

  return (
    <div className="d-xl-flex align-items-center">
      <h3 className="title tx-dark d-flex justify-content-center align-items-center m0 lg-pb-30">
        <span className="fw-bold">100+</span>
        <span className="font-recoleta">Trusted Partners</span>
        <span className="ms-4 d-none d-sm-inline-block">
          <Image
            src="/images/shape/shape_119.svg"
            alt="img"
            className="lazy-img"
            width={100}
            height={5}
          />
        </span>
      </h3>

      <div className="logo-wrapper fw-500 tx-dark d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between">
        {partners.map((partner, index) => (
          <React.Fragment key={index}>
            {partner.name && <div className="br-name">{partner.name}</div>}
            {!partner.name && <div className="br-name">.</div>}
          </React.Fragment>
        ))}
      </div>
      {/* /.logo-wrapper */}
    </div>
  );
};

export default Partners;
