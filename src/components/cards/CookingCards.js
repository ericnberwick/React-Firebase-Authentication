import React from "react";
import CardItem from "../../components/CardItem"
import "../../css/Cards.css"
import Tomato from "../../pics/notEdV3.jpg"
import Carrots from "../../pics/notEdV3.jpg"

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
              text="Trindade Baolognese"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="Erics Burrito"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="Legendary Chicken Pasta"
              path="/art3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Carbonara Baby"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="Prawn Linguine"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="Creamy Tuscan Chicken"
              path="/art3"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
