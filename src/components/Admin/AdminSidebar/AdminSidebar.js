import { faFolder, faPlus, faTasks, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar d-flex justify-content-center">
      <div className="">
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faFolder} />Order List</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/addService"><FontAwesomeIcon className="me-2" icon={faPlus} />Add Service</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/makeAdmin"><FontAwesomeIcon className="me-2" icon={faUserCog} />Make Admin</Link>
        </div>
        <div className="menu-item">
          <Link className="menu-item-link" to="/admin/manageService"><FontAwesomeIcon className="me-2" icon={faTasks} />Manage Services</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
