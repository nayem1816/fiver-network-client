import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../images/icon/facebook.png";
import google from "../../../images/icon/google.png";
import whatsapp from "../../../images/icon/whatsapp.png";
import youtube from "../../../images/icon/youtube.png";

const Footer = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className="row container">
          <div className="col-md-3 text-center text-md-start">
            <Link
              style={{ fontSize: "30px", color:'red' }}
              className="navbar-brand rock-salt"
              to="/"
            >
              Fiver Network
            </Link>
            <p className="mt-3">
              <span className="me-2">
                <FontAwesomeIcon icon={faMapMarker} />
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa
              delectus deleniti! Eos, ab. Culpa cumque officia deserunt quas.
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>Quick Links</h2>
            <p>
              <Link className="text-dark" to="">
                About
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Services
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Appointment
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Our Plans
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Contact
              </Link>
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>Useful Links</h2>
            <p>
              <Link className="text-dark" to="">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Terms and Conditions
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Disclaimer
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                Support
              </Link>
            </p>
            <p>
              <Link className="text-dark" to="">
                FAQ
              </Link>
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h2>News letter</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="">
              <Link to="">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="m-2"
                  src={facebook}
                  alt=""
                />
              </Link>
              <Link to="">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="m-2"
                  src={google}
                  alt=""
                />
              </Link>
              <Link to="">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="m-2"
                  src={whatsapp}
                  alt=""
                />
              </Link>
              <Link to="">
                <img
                  style={{ height: "40px", width: "40px" }}
                  className="m-2"
                  src={youtube}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#212529" }}
        className=" text-center p-2 d-flex align-items-center justify-content-center text-white"
      >
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
