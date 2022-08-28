
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";

import "./styles.css";




let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51LbjNJK7gJkFbCuNCevxC4tiZ3XiT4Bq5YkUWgv2O3qfC4GyIPr4t1sQ57qJrk5z5hlMlGgza4jjSevZYcxiAjbI000w8FNESQ");
  }

  return stripePromise;
};
const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item= {
    price: "price_1Lbl9FK7gJkFbCuNN98eMYJU",
    quantity: 1
  };

  const checkoutOptions  = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/home`,
    cancelUrl: `${window.location.origin}/login`
  }

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };
  if(stripeError) alert(stripeError);
  //the cancel and successUrl are to redirect user after checkout successfully and if they cancel
  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button className="checkout-button" onClick={redirectToCheckout} disabled={isLoading}>
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading...": "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
