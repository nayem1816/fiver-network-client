import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import OrderListDetails from "../OrderListDetails/OrderListDetails";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10">
          <h2 className="p-3">Order List</h2>
          <div className="p-2">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Pay With</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                    orders.map(order => <OrderListDetails order={order} key={order._id}></OrderListDetails>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
