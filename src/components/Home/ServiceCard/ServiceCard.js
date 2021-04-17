import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";


const ServiceCard = ({ plan }) => {

  return (
    <div className="col-md-4 mt-3">
      <Link to={`/dashboard/book/${plan._id}`} className="card-plan-style card">
          <div className="text-center text-dark p-5">
            <img src={plan.imageUrl} className="card-image" alt="#" />
            <h4 className="mt-3">{plan.CategoryName}</h4>
            <div className="mt-4">
              <h2 className="">{plan.packageName}</h2>
              <p className="">{plan.feature1}</p>
              <p className="">{plan.feature2}</p>
              <p className="">{plan.feature3}</p>
              <p className="">{plan.feature4}</p>
              <h2>
                Price: <span>{plan.price}</span> | month
              </h2>
              <Link to={`/dashboard/book/${plan._id}`} className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
