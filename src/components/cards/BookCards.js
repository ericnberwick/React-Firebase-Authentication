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
              path="/book1"
              book= "https://images-na.ssl-images-amazon.com/images/I/71ne0w3xcwL.jpg"
            />
          
            <BookCardItem
              src={Tomato}
              text="7 Habits of Highly Effective People"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL.jpg"
            />
            <BookCardItem
              src={Tomato}
              text="Think and Grow Rich"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://images-na.ssl-images-amazon.com/images/I/71ZA+vKnFRL.jpg"
            />
          </ul>
          <ul className="cards__items">
            <BookCardItem
              src={Carrots}
              text="The Subtle Art of Not Giving a F***"
              path="/html1"
              file="Limitless___Jim_Kwik.pdf"
              book="https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg"
            />
          
            <BookCardItem
              src={Tomato}
              text="Atomic Habits"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
            />
            <BookCardItem
              src={Tomato}
              text="The Infinite Game"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book = "https://images-na.ssl-images-amazon.com/images/I/51YNDYmRqBL.jpg"
            />
          </ul>
          <ul className="cards__items">
            <BookCardItem
              src={Carrots}
              text="How To Win Friends & Influence People"
              path="/html1"
              file="Limitless___Jim_Kwik.pdf"
              book="https://m.media-amazon.com/images/I/41FYFMn7lZL._AC_SY780_.jpg"
            />
          
            <BookCardItem
              src={Tomato}
              text="Deep Work"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book="https://images-na.ssl-images-amazon.com/images/I/71g8BUSqbpL.jpg"
            />
            <BookCardItem
              src={Tomato}
              text="The Worlds Fittest Book"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book = "https://images-na.ssl-images-amazon.com/images/I/71JtF90V+DL.jpg"
            />
          </ul>
          <ul className="cards__items">
            <BookCardItem
              src={Carrots}
              text="Build a Bulletproof Body For Extreme Adventure In 365 Days"
              path="/html1"
              file="Limitless___Jim_Kwik.pdf"
              book="https://cdn.waterstones.com/bookjackets/large/9780/0084/9780008487034.jpg"
            />
          
            <BookCardItem
              src={Tomato}
              text="Thinking Fast and Slow"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377.jpg"
            />
            <BookCardItem
              src={Tomato}
              text="Rich Dad Poor Dad"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book = "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
