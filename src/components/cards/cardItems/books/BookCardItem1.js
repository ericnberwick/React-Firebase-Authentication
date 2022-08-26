import React from "react";
import { Link } from "react-router-dom";
import BApp from "../../../../pIcon/books/BApp"
function CardItem(props) {
  return (
    <>
    <li className="cards__item">
    <BApp file={props.file}/>
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
