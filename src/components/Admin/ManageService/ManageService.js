import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import ManageServiceData from "../ManageServiceData/ManageServiceData";

const ManageService = () => {
  const [servicePlan, setServicePlan] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServicePlan(data));
  }, []);
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2">
            <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <div>
            <h2 className="manage-product-heading">Manage Product</h2>
            <div className="">
              <div className="px-5">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Package Name</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {servicePlan.map((plan) => (
                    <ManageServiceData
                      plan={plan}
                      key={plan._id}
                    ></ManageServiceData>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
