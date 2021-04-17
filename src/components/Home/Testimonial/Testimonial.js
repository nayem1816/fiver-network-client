import React, { useEffect, useState } from "react";
import customer from "../../../images/customar.jpg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// const reviews = [
//   {
//     id: 1,
//     reviewStar: 3,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
//   {
//     id: 2,
//     reviewStar: 4,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
//   {
//     id: 3,
//     reviewStar: 5,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
//   {
//     id: 4,
//     reviewStar: 2,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
//   {
//     id: 5,
//     reviewStar: 5,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
//   {
//     id: 6,
//     reviewStar: 3,
//     img: customer,
//     name: "Al Amin Rony",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, omnis!",
//   },
// ];

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div style={{ marginTop: "60px" }} className="">
      <div className="text-center">
        <h4>Review</h4>
        <h1 className="rock-salt">Testimonial</h1>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="row container">
          {reviews.map((review) => (
            <TestimonialCard review={review} key={review._id}></TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
