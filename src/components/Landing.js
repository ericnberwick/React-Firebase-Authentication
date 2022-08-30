import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import PlantBackground from "../pics/back1.png";
import { useContext } from "react";
import FbNavbar from "../FbNavbar";
import Float from "./Float";
import RNavbar from "./RNavbar/RNavbar"
import { motion } from 'framer-motion';
/**
 * Home section of our website
 * @returns
 */
function Landing() {

  return (
    <>
    <RNavbar />
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <motion.div className="home container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.2 }}
          >
        <h1 style={{ color: "white", marginTop: 10 }}>Welcome to not<span className="ed">Ed</span>.</h1>
        </motion.div>
        <p className="para">
          Explore, Learn and Create from our library of professional note library
        </p>
      </div>
    </>
  );
}

export default Landing;
