import React from "react";
import { Link } from "react-router-dom";
function UniversityCardItem(props) {
  return (
    <>
    <li className="cards__item">
    <img src= {props.university} alt="Logo"  width="300" height="330"/>
    <Link className="cards__item__link" to={props.path}>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{props.text}</h5>
      </div>
      </Link>
      </li>
    </>
  );
}

export default UniversityCardItem;
