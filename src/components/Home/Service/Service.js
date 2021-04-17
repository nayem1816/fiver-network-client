import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [servicePlan, setServicePlan] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServicePlan(data));
  }, []);
  return (
    <div style={{ marginTop: "60px" }} className="">
      <div className="text-center">
        <h4>Services</h4>
        <h1 className="rock-salt">Our Internet Plan</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row container">
          {servicePlan.map((plan) => (
            <ServiceCard plan={plan} key={plan._id}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
