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
              text="HTML for Beginners"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="CSS for Beginners"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="Developing Websites Locally"
              path="/art3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Improved Styling CSS"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="Fundamentals of Web Design"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="Making a Website Responsive"
              path="/art3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="JavaScipt for Beginners"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="JavaScript for Intermediate"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="JavaScript Testing"
              path="/art3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Asyn JavaScript and HTTP Requests"
              path="/html1"
            />
          
            <CardItem
              src={Tomato}
              text="React"
              path="/art3"
            />
            <CardItem
              src={Tomato}
              text="Redux"
              path="/art3"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
