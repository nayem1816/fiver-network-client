import React from 'react';
import hoursSupport from '../../../../images/icon/24-hours-support.png';
import clapperboard from '../../../../images/icon/clapperboard.png';
import databaseStorage from '../../../../images/icon/database-storage.png';
import rocket from '../../../../images/icon/rocket.png';
import tv from '../../../../images/icon/tv.png';
import television from '../../../../images/icon/television.png';
import OurFeaturesCard from '../OurFeaturesCard/OurFeaturesCard';

const featuresData = [
    {
      id: 1,
      img: television,
      name: "4K & 8K Quality",
    },
    {
      id: 2,
      img: clapperboard,
      name: "Flexible Tariff Plans",
    },
    {
      id: 3,
      img: databaseStorage,
      name: "Free Installation",
    },
    {
      id: 4,
      img: rocket,
      name: "Speed Seamless",
    },
    {
      id: 5,
      img: tv,
      name: "250+ Channels",
    },
    {
      id: 6,
      img: hoursSupport,
      name: "Fast Support 24/7",
    },
  ];

const OurFeatures = () => {
    return (
        <div className="mt-5">
      <div className="container">
        <div className="text-center">
          <h4>Features</h4>
          <h1 className="rock-salt">Our Features</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row mt-4">
            {featuresData.map((feature) => (
              <OurFeaturesCard feature={feature} key={feature.id}></OurFeaturesCard>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default OurFeatures;