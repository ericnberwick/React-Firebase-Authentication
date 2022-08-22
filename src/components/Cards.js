import React from "react";
import CardItem from "../components/CardItem"
import "../css/Cards.css";
import Tomato from "../pics/notEdV3.jpg"
import Plants from "../pics/notEdV3.jpg"
import Carrots from "../pics/notEdV3.jpg"
import Cress from "../pics/notEdV3.jpg"
import Pots from "../pics/notEdV3.jpg"


/**
 * Function to return the cards section under the headers of the home page, Uses a react library called cards, pretty simple
 * Not implemented yet just renders the items
 * @returns 
 */
function Cards({section}) {
  return (
    <div className="cards">
      <h1>{section}</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="How to grow any carrot!"
              path="/art9"
            />
            <CardItem
              src={Plants}
              text="How to make your flat look better with plants!"
              path="/art10"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              path="/art3"
            />
            <CardItem
              src={Cress}
              text="Learn how to make your water cress taste delicious!"
              label="Trending"
              path="/art12"
            />
            <CardItem
              src={Pots}
              text="What benefits keeping plants in your house is doing for you!"
              label="Trending"
              path="/art13"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
