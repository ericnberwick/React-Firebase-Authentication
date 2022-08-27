import React from "react";
import CardItem from "../../components/CardItem"
import "../../css/Cards.css"
import Tomato from "../../pics/notEdV3.jpg"
import Carrots from "../../pics/notEdV3.jpg"
import BookCardItem from "./cardItems/books/BookCardItem1"
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
            <BookCardItem
              src={Carrots}
              text="Limitless"
              path="/html1"
              book= "https://images-na.ssl-images-amazon.com/images/I/71ne0w3xcwL.jpg"
            />
          
            <BookCardItem
              src={Tomato}
              text="7 Habits of Highly Effective People"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
            />
            <BookCardItem
              src={Tomato}
              text="Think and Grow Rich"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
            />
          </ul>
          <ul className="cards__items">
            <BookCardItem
              src={Carrots}
              text="The Subtle Art of Not Giving a F***"
              path="/html1"
              file="Limitless___Jim_Kwik.pdf"
            />
          
            <BookCardItem
              src={Tomato}
              text="Atomic Habits"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
            />
            <BookCardItem
              src={Tomato}
              text="The Infinite Game"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
