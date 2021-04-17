import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import BookingListCard from "../BookingListCard/BookingListCard";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
    const [loggedInUser] = useContext(userContext);
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookingsEmail?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [loggedInUser.email]);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <h2 className="p-3">Booking List</h2>
          <div className="">
            <div className="row">
              {bookingList.map((booking) => (
                <BookingListCard
                  booking={booking}
                  key={booking._id}
                ></BookingListCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
