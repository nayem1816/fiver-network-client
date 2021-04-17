import React from "react";
import "./HeaderSlider.css";
import slider1 from "../../../images/slider1.jpg"
import slider2 from "../../../images/slider2.jpg"
import slider3 from "../../../images/slider3.jpg"

const HeaderSlider = () => {
  return (
    <div className="header-slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider3} className="d-block w-100 blur-img" alt="#" />
            <div className="carousel-caption d-none d-md-block carousel-caption-text">
              <h1 className="rock-salt">Best Internet Provider</h1>
              <p className="">
                Some representative placeholder content for the first slide.
              </p>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 blur-img" alt="#" />
            <div className="carousel-caption d-none d-md-block carousel-caption-text">
              <h1 className="rock-salt">All time full Speed</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider1} className="d-block w-100 blur-img" alt="#" />
            <div className="carousel-caption d-none d-md-block carousel-caption-text">
              <h1 className="rock-salt">Low cost best service</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderSlider;
