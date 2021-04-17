import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/adminEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("server res successfully", res);
      alert("Thank You added a new Admin");
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <div className="p-3">
            <h2>Make Admin</h2>
          </div>
          <div className="mt-5 p-4">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <p>Add Email: </p>
              <input
                type="email"
                placeholder="Make Admin Email.."
                className="form-control w-50"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
              <br />
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
