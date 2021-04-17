import React from "react";

const BookingListCard = ({ booking }) => {
  return (
    <div className="col-md-5 p-3 mt-3 d-flex justify-content-center">
      <div style={{ height: "300px", width: "400px" }} className="card p-3">
        <div className="d-flex justify-content-between">
          <img
            style={{ height: "64px" }}
            src={booking.servicePlan.imageUrl}
            alt=""
          />
          <button
            style={{ color: "white" }}
            className="btn btn-dark"
            disabled="disabled"
          >
            <h4>{booking.status}</h4>
          </button>
        </div>
        <div className="text-center mt-4">
          <h2>{booking.servicePlan.packageName}</h2>
          <p>{booking.servicePlan.feature1}</p>
          <p>{booking.servicePlan.feature2}</p>
          <p>{booking.servicePlan.feature3}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingListCard;
