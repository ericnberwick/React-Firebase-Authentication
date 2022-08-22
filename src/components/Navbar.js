import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../css/NavBar.css"
import notedLogo from "../pics/notEd.jpg"
import "@fontsource/league-spartan"; //npm install @fontsource/league-spartan
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {faUserLargeSlash} from '@fortawesome/free-solid-svg-icons';
//
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext.js";
import { useContext } from "react";
//////
export default function Navbar() {
  
  const { currentUser, logout } = useAuth()
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img class="logo" src={notedLogo} />
      </Link>
      <ul>
        <CustomLink to="/signup">SignUp</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        {currentUser.email && <CustomLink className="userIcon" to="/home"><FontAwesomeIcon icon={faUserCheck} /></CustomLink>}
        {!currentUser.email && <CustomLink className="userIcon" to="/home"><FontAwesomeIcon icon={faUserLargeSlash} /></CustomLink>}
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
