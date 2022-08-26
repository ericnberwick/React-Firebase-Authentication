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
              file="1___HTML_Fundamentals.pdf"
            />
          
            <CardItem
              src={Tomato}
              text="CSS for Beginners"
              path="/comp2"
              file="2___CSS_Fundamentals.pdf"
            />
            <CardItem
              src={Tomato}
              text="Developing Websites Locally"
              path="/comp3"
              file="3___Developing_Website_Locally.pdf"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Improved Styling CSS"
              path="/comp4"
              file="4___Improved_Styling_CSS.pdf"
            />
          
            <CardItem
              src={Tomato}
              text="Fundamentals of Web Design"
              path="/comp5"
              file="5___Fundamentals_of_Web_Design.pdf"
            />
            <CardItem
              src={Tomato}
              text="Making a Website Responsive"
              path="/comp6"
              file="6___Making_a_Website_Responsive.pdf"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="JavaScipt for Beginners"
              path="/comp7"
              file="7___JavaScript.pdf"
            />
          
            <CardItem
              src={Tomato}
              text="JavaScript for Intermediate"
              path="/comp8"
              file="10___More_JavaScipt.pdf"
            />
            <CardItem
              src={Tomato}
              text="JavaScript Testing"
              path="/comp9"
              file="11___JavaScript_Testing.pdf"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="Asyn JavaScript and HTTP Requests"
              path="/comp10"
              file="12___Async_JavaScript_and_HTTP_Requests.pdf"
            />
          
            <CardItem
              src={Tomato}
              text="React"
              path="/comp11"
              file="13___React.pdf"
            />
            <CardItem
              src={Tomato}
              text="Git"
              path="/comp12"
              file="Git_Notes.pdf"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
