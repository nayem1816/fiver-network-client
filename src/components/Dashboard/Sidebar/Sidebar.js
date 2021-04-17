import { faChartPie, faCommentDots, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar d-flex justify-content-center">
      <div className="">
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/book"><FontAwesomeIcon className="me-2" icon={faShoppingCart} />Book</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/bookingList"><FontAwesomeIcon className="me-2" icon={faChartPie} />Booking List</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/dashboard/review"><FontAwesomeIcon className="me-2" icon={faCommentDots} />Review</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
