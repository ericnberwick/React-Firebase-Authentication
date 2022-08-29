
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/checkout.jpg";
import FbNavbar from "../FbNavbar";
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
//dfsf
  const checkoutOptions  = {
    lineItems: [item],
    mode: "payment",
    successUrl: "https://630cd441068f4d51fa8f26ec--dashing-maamoul-ba042f.netlify.app/cooking" ,
    cancelUrl: `${window.location.origin}`
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
    <>
    <FbNavbar />
    <div className="checkout">
      <h1>not<span className="ed">Ed</span> Checkout</h1>
      <p className="checkout-title">notEd Full Access One Time Account Subscription</p>
      <p className="checkout-description">
        Gain Full Access to notEds huge library of notes for only £3.00!
      </p>
      <h1 className="checkout-price">£3</h1>
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
    </>
  );
};

export default Checkout;
