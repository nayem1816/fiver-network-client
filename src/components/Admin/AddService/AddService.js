import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const [imageUrl, setImageURL] = useState([]);
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceData = {
      packageName: data.title,
      CategoryName: data.category,
      price: data.price,
      mbps: data.mbps,
      feature1: data.feature1,
      feature2: data.feature2,
      feature3: data.feature3,
      feature4: data.feature4,
      imageUrl: imageUrl,

    };

    const url = `http://localhost:5000/addService`;
    // console.log(mobileData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
    .then((res) => console.log("server res successfully", res));
    // alert("Your Product Added Successfully");
  };
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <div className="p-3">
            <h2>Add Service</h2>
          </div>
          <div className="mt-5 p-4">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-5">
                <div className="col-6">
                  <p>Package Name</p>
                  <input
                    className="form-control"
                    placeholder="Package Name"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <p>Add Photo</p>
                  <input
                    onChange={handelUploadImage}
                    className="form-control"
                    type="file"
                    placeholder="Package Name"
                  />
                </div>
                <div className="col-6">
                  <p>Category Name</p>
                  <input
                    className="form-control"
                    placeholder="Category Name"
                    {...register("category", { required: true })}
                  />
                  {errors.category && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <p>Price</p>
                  <input
                    className="form-control"
                    placeholder="Price"
                    type="number"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <p>Mbps</p>
                  <input
                    className="form-control"
                    placeholder="mbps"
                    type="number"
                    {...register("mbps", { required: true })}
                  />
                  {errors.price && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <p>Features 1</p>
                  <input
                    className="form-control"
                    placeholder="Feature...."
                    {...register("feature1")}
                  />
                </div>
                <div className="col-6">
                  <p>Features 2</p>
                  <input
                    className="form-control"
                    placeholder="Feature...."
                    {...register("feature2")}
                  />
                </div>
                <div className="col-6">
                  <p>Features 3</p>
                  <input
                    className="form-control"
                    placeholder="Feature...."
                    {...register("feature3")}
                  />
                </div>
                <div className="col-6">
                  <p>Features 4</p>
                  <input
                    className="form-control"
                    placeholder="Feature...."
                    {...register("feature4")}
                  />
                </div>
              </div>
              <input
                className="mt-5 btn btn-success"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
