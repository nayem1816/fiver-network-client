import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import PaymentProcess from "../PaymentProcess/PaymentProcess";

const Book = () => {
  const [loggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [servicePlan, setServicePlan] = useState({});
  // console.log(id);
  useEffect(() => {
    fetch("http://localhost:5000/service/" + id)
      .then((res) => res.json())
      .then((data) => setServicePlan(data));
  }, [id]);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <h2 className="p-3">Book</h2>
          <form className="p-4">
            <div className="row g-5">
              <div className="col-12">
                <input
                  className="form-control w-50"
                  name="name"
                  placeholder="Your Name"
                  defaultValue={loggedInUser.name}
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control w-50"
                  name="email"
                  placeholder="Your Email"
                  defaultValue={loggedInUser.email}
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control w-50"
                  name="package"
                  placeholder="Package Name"
                  defaultValue={servicePlan.packageName}
                />
              </div>
            </div>
          </form>
          <div className="w-50 p-4">
            <PaymentProcess id={id}></PaymentProcess>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
