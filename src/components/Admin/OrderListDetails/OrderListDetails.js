import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderListDetails = ({ order }) => {
    const [updateStatus, setUpdateStatus] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setUpdateStatus(data);
  };
  const handelUpdateBtn = () => {
      const id = order._id;
      const updateData = {updateStatus, id};
      console.log(updateData);
      fetch("https://mysterious-ocean-52360.herokuapp.com/update/" + id, {
          method: "PATCH",
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(updateData)
      })
      .then((res) =>res.json())
      .then((data) => console.log("Updated"))
  }
  return (
    <tr>
      <td className="w-25">{order.name}</td>
      <td className="w-25">{order.email}</td>
      <td>{order.servicePlan.packageName}</td>
      <td>{order.paymentType}</td>
      <td className="text-center d-flex">
        <form className="" onChange={handleSubmit(onSubmit)}>
          <select
            id="inputState"
            className="form-select"
            {...register("status")}
          >
            <option value={order.status} className="" selected>
              {order.status}
            </option>
            <option value="Pending" className="">
              Pending
            </option>
            <option value="Ongoing" className="">
              Ongoing
            </option>
            <option value="Done" className="">
              Done
            </option>
          </select>
        </form>
        <button onClick={handelUpdateBtn} className="btn btn-success">Update</button>
      </td>
    </tr>
  );
};

export default OrderListDetails;
