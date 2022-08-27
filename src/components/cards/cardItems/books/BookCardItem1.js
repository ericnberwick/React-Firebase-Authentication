import React from "react";
import { Link } from "react-router-dom";
import BApp from "../../../../pIcon/books/BApp"
import Limitless from "../../../../pics/limitless.jpg"
function CardItem(props) {
  let book = "https://images-na.ssl-images-amazon.com/images/I/71ne0w3xcwL.jpg";
  return (
    <>
    <li className="cards__item">
    <img src= {props.book} alt="Logo"  width="300" height="330"/>
    <Link className="cards__item__link" to={props.path}>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{props.text}</h5>
      </div>
      </Link>
      </li>
    </>
  );
}

export default CardItem;
