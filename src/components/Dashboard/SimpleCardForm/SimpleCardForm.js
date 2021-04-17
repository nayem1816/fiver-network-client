import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userContext } from "../../../App";
import { useHistory } from "react-router";

const SimpleCardForm = ({ id }) => {
  // console.log(id);
  const [loggedInUser] = useContext(userContext);
  const [status, setStatus] = useState("Pending");
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [servicePlan, setServicePlan] = useState({});
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setServicePlan(data));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);

      const paymentType = paymentMethod.type;
      const cardType = paymentMethod.card.brand;
      const postalCode = paymentMethod.billing_details.address.postal_code;
      const cardLast4Digit = paymentMethod.card.last4;
      const allData = {
        ...loggedInUser,
        servicePlan,
        paymentType,
        cardType,
        postalCode,
        cardLast4Digit,
        status,
      };

      fetch("http://localhost:5000/addBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Please Review this Package",history.push("/dashboard/review"))
        });
      
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-success" type="submit" disabled={!stripe}>
          Pay {servicePlan.price}
        </button>
      </form>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Thank you Payment Successfully.</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
