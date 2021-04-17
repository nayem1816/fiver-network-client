import React from "react";

const HeaderInfoCard = ({ cardData }) => {
  return (
    <div className="col-md-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <img src={cardData.icon} alt="" />
        </div>
        <div className="col-6">
          <h2>{cardData.name}</h2>
          <p>{cardData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfoCard;
