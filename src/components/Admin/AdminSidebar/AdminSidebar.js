import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar d-flex justify-content-center">
      <div className="">
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/orderList">Order List</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/addService">Add Service</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/makeAdmin">Make Admin</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/manageService">Manage Services</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
