import React, { useContext, useState } from "react";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";

const Review = () => {
  const [loggedInUser] = useContext(userContext);
  const [imageUrl, setImageURL] = useState();
  const history = useHistory();
  const handelUploadImage = (event) => {
    // console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "94e8e908997cb2f7fead68d619169951");
    imgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        // console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const reviewData = { data, ...loggedInUser, imageUrl };
    const url = `http://localhost:5000/reviews`;
    // console.log(mobileData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => {
      console.log("server res successfully", res);
      alert('Thank Your for your Review', history.push("/"));
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <h2 className="p-3">Review</h2>
          <div className="p-4">
            <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 mt-4">
                <p>Your Name</p>
                <input
                  className="form-control w-50"
                  placeholder="Your Name"
                  defaultValue={loggedInUser.name}
                  {...register("name")}
                />
              </div>
              <div className="col-12 mt-4">
                <p>Your Photo</p>
                <input
                  onChange={handelUploadImage}
                  className="form-control w-50"
                  type="file"
                />
              </div>
              <div className="col-12 mt-4">
                <p>Description</p>
                <input
                  className="form-control w-50"
                  placeholder="Write description"
                  {...register("description")}
                />
              </div>
              <div className="col-12 mt-4">
                <p>Rating Out of 5</p>
                <input
                  className="form-control w-50"
                  type="number"
                  placeholder="Review Rating (1-5)"
                  {...register("review", { min: 1, max: 5 })}
                />
              </div>

              <div className="">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
