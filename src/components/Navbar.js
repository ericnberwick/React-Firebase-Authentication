import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../css/NavBar.css"
import notedLogo from "../pics/notEd.jpg"
import notedLogo2 from "../pics/notEdV2.jpg"
import notedLogo3 from "../pics/notEdV3.jpg"
import "@fontsource/league-spartan"; //npm install @fontsource/league-spartan
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {faUserLargeSlash} from '@fortawesome/free-solid-svg-icons';
//
import { useAuth } from "../contexts/AuthContext.js";
import { useContext } from "react";
//////
export default function Navbar() {
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img class="logo" src={notedLogo3} />
      </Link>
      <ul>
        <CustomLink to="/books">Books</CustomLink>
        <CustomLink to="/computing">Computing</CustomLink>
        <CustomLink to="/cooking">Cooking</CustomLink>
        <CustomLink to="/photography">Photography</CustomLink>
        <CustomLink to="/trading">Trading</CustomLink>
        <CustomLink to="/university">University</CustomLink>
        {loggedIn && <CustomLink className="userIcon" to="/home"><FontAwesomeIcon icon={faUserCheck} /></CustomLink>}
        {!loggedIn && <CustomLink className="userIcon" to="/login"><FontAwesomeIcon icon={faUserLargeSlash} /></CustomLink>}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
