import React from "react";

const OurFeaturesCard = ({ feature }) => {
  return (
    <div className="col-md-2 col-sm-4 mt-3">
      <div className="p-4">
        <div className="text-center">
          <img src={feature.img} alt="" />
        </div>
        <div className="mt-3 text-center">
          <h6>{feature.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturesCard;
