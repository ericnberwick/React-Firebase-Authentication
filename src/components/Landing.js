import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import PlantBackground from "../pics/back1.png";
import { useContext } from "react";
import FbNavbar from "../FbNavbar";
/**
 * Home section of our website
 * @returns
 */
function Landing() {
  return (
    <>
    <FbNavbar />
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1 style={{ color: "white", marginTop: 10 }}>Welcome to notEd.</h1>
        <p style={{ color: "white" }}>
          Explore, Learn and Create from our library of professional note library
        </p>
        
      </div>
    </>
  );
}

export default Landing;
