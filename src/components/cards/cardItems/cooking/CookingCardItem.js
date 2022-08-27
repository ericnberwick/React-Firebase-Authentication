import React from "react";
import { Link } from "react-router-dom";
function CookCardItem(props) {
  return (
    <>
    <li className="cards__item">
    <img src= {props.cook} alt="Logo"  width="300" height="300"/>
    <Link className="cards__item__link" to={props.path}>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{props.text}</h5>
      </div>
      </Link>
      </li>
    </>
  );
}

export default CookCardItem;
