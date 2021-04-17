import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ManageServiceData = (props) => {
  const [display, setDisplay] = useState({ display: "" });
  const { CategoryName, packageName, price, _id } = props.plan;
  const handelDeletePlan = (id) => {
    fetch("https://mysterious-ocean-52360.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("delete Successfully");
      });
    const hide = { display: "none" };
    setDisplay(hide);
  };
  return (
    <tbody>
      <tr style={display}>
        <td>{packageName}</td>
        <td>{CategoryName}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          |
          <button
            onClick={() => handelDeletePlan(_id)}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageServiceData;
