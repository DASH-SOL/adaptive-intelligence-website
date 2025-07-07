import React from "react";

const Map2 = () => {
  return (
    <div className="map-area-two h-100 w-100">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Adaptive+Intelligence+International,+244+5th+Ave,+New+York&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
      </div>
    </div>
  );
};

export default Map2;
