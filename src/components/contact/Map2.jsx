"use client";

import React from "react";

const Map2 = ({ settings }) => {
  // Create Google Maps embed URL from address
  const address = settings?.address || "Adaptive Intelligence International, 244 5th Ave, New York";
  const mapUrl = `https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="map-area-two h-100 w-100">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            src={mapUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Map2;