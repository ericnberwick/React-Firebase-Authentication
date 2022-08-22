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
              text="Basics"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="CSS for Beginners"
              path="Composition"
            />
            <CardItem
              src={Tomato}
              text="Night Photography"
              path="/art3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Exposure"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="Portraits"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="HDR"
              path="/art3"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
