import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import './Navbar.css';

const Navbar = () => {
  const [admin, setAdmin] = useState([]);
  const [loggedInUser] = useContext(userContext);

  useEffect(() => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/isAdmin?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, [loggedInUser.email]);
  const isAdmin = admin[0]?.email;
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <Link className="rock-salt logo-style" to="/">
            Fiver Network
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center">
              <Link className="nav-link text-white ms-5 menu-item-link" to="/home">
                Home
              </Link>
              <Link className="nav-link text-white ms-5 menu-item-link" to="#">
                About Us
              </Link>
              <Link className="nav-link text-white ms-5 menu-item-link" to="#">
                Contact
              </Link>
              <Link
                className="nav-link text-white ms-5 menu-item-link"
                to="/dashboard/bookingList"
              >
                Dashboard
              </Link>
              {isAdmin && (
                <Link
                  className="nav-link text-white ms-5 menu-item-link"
                  to="/admin/orderList"
                >
                  Admin
                </Link>
              )}
              {loggedInUser.name ? (
                <Link to="/" className="nav-link text-white ms-5">
                  <img
                    style={{ height: "50px" }}
                    className="image-style rounded-circle"
                    src={loggedInUser.photoURL}
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/login" className="nav-link text-white ms-5">
                  <button className="btn login-btn-style">
                    <h5 className="mt-2 menu-item-link">Login</h5>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
