import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {useAuth} from "../contexts/AuthContext";
/**
 * Footer for the bottom of each page, some links, newsletter and socials
 * @returns Simply a footer for our application
 */
function Footer() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
    <div className="bottom">
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscriptiom-heading">
          Join the notEd Community!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />

            <button buttonStyle="btn--planted">Subscribe</button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-links-wraper">
          <div className="footer-link-items">
          <Link to="/"><h2>Home</h2></Link>
            <Link to="/computing">Computing</Link>
            <Link to="/cooking">Cooking</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/trading">Trading</Link>
            <Link to="/university">University</Link>
          </div>
        </div>
        <div className="footer-link-items">
        <Link to="/"><h2>About Us</h2></Link>
          <Link to="/computing">What is notEd</Link>
          <Link to="/cooking">How to use notEd</Link>
          <Link to="/photography">How to Add your own notes</Link>
        </div>
        <div className="footer-link-items">
        <Link to="/"><h2>Explore</h2></Link>
          <Link to="/computing">Complete Courses</Link>
          <Link to="/cooking">One off notes</Link>
          <Link to="/photography">Photography</Link>
        </div>
        <div className="footer-link-items">
        <Link to="/home"><h2>Account</h2></Link>
          {loggedIn && <Link to="/home">Update profile</Link>}
          {!loggedIn && <Link to="/login">Update profile</Link>}

          {loggedIn && <Link to="/update-profile">Reset Password</Link>}
          {!loggedIn && <Link to="/login">Reset Password</Link>}
          
          {loggedIn && <Link to="/home">Logout</Link>}
          {!loggedIn && <Link to="/login">Logout</Link>}
        </div>
      </div>

    </div>
    </div>
  );
}

export default Footer;