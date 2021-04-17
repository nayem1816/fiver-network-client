import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar d-flex justify-content-center">
      <div className="">
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/book">Book</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/bookingList">Booking List</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/review">Review</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
