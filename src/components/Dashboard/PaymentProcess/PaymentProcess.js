import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IgiRBHvDeQj5H1r2CFB8QT72q6Vlb4bvKogb7QIzv9ZTxpTsDjHp8PHZrAmN3BqkjhM8p1QpI20NecWLYDz0Ytw00TtiQgRgp"
);

const PaymentProcess = ({id}) => {
  // console.log(id);
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm id={id}></SimpleCardForm>
    </Elements>
  );
};

export default PaymentProcess;
