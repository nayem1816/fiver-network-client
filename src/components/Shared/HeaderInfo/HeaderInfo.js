import React from "react";
import satellite from "../../../images/icon/satellite.png";
import wiFi from "../../../images/icon/wi-fi.png";
import search from "../../../images/icon/search.png";
import HeaderInfoCard from "../../Shared/HeaderInfoCard/HeaderInfoCard";
import './Headerinfo.css'

const headerCardData = [
  {
    id: 1,
    icon: wiFi,
    name: "Broadband",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, saepe!"
  },
  {
    id: 2,
    icon: satellite,
    name: "Satellite TV",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, saepe!"
  },
  {
    id: 3,
    icon: search,
    name: "Mobility",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, saepe!"
  },
];

const HeaderInfo = () => {
  return (
    <div className="container header-info d-none d-md-block">
      <div className="row">
        {headerCardData.map((cardData) => (
          <HeaderInfoCard
            cardData={cardData}
            key={cardData.id}
          ></HeaderInfoCard>
        ))}
      </div>
    </div>
  );
};

export default HeaderInfo;
