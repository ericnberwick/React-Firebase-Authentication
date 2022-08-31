
import { ReactComponent as UserIcon } from './icons/user.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as Computer } from './icons/computer.svg';
import { ReactComponent as ReactIcon } from './icons/react.svg';
import { ReactComponent as HTMLIcon } from './icons/html.svg';
import { ReactComponent as CSSIcon } from './icons/css.svg';
import { ReactComponent as JSIcon } from './icons/javascript (1).svg';
import { ReactComponent as Git } from './icons/git.svg';
import { ReactComponent as Csharp } from './icons/csharp.svg';
import { ReactComponent as Java } from './icons/java.svg';
import { ReactComponent as Sql } from './icons/sql.svg';
import { ReactComponent as Security } from './icons/security.svg';
import { ReactComponent as Python } from './icons/python.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as LogoutIcon } from './icons/logout.svg';
import { ReactComponent as NoteL } from './icons/note.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserLargeSlash} from '@fortawesome/free-solid-svg-icons';
import "@fontsource/league-spartan";
import {useAuth} from "../../contexts/AuthContext";

import "./RNavbar.css";
import noted from "./icons/note.jpg"
const RNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  var loggedIn;
  const { currentUser, logout } = useAuth()
  if (currentUser != null){
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return (
    <div class="contentContainer" style={{
      position: 'absolute',
      left: '0%',
      top: '0%',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '90px'
    }}>
    <div className="Navbar">
      <span className="nav-logo"><Link className="notebar2" to="/"><img className="notebar" src={noted}/></Link></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        
          <NavItem icon={'Computing'} >
            <ComputingDropdownMenu></ComputingDropdownMenu>
          </NavItem>
        
          <Link className="mlink"  to="/cooking"><NavItem icon={'Cooking'} /></Link>
      <Link className="mlink"  to="/photography"><NavItem icon={'Photography'} /></Link>
      <Link className="mlink"  to="/trading"><NavItem icon={'Trading'} /></Link>
      <Link className="mlink"  to="/university"><NavItem icon={'University'} /></Link>

        
        {loggedIn && <NavItem icon={'Account'}><AccountDropdownMenu></AccountDropdownMenu></NavItem>}
        {!loggedIn && <Link style={{backgroundColor: 'red', padding: '10px', border: '3px solid black'}} className="mlink sigin"  to="/login"><NavItem  icon={'Sign In'} /></Link>}
      
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </div>
  );
};


function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href="#"className='compute' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
      </>
  );
}

function ComputingDropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="fmenu-item fa" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="ficon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="fdropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem leftIcon={<Computer />}><Link className="alink"  to="/computing">Computing</Link></DropdownItem>
          <DropdownItem leftIcon={<ReactIcon />} goToMenu="settings">Web Dev</DropdownItem>
          <DropdownItem leftIcon={<Csharp />} >C#</DropdownItem>
          <DropdownItem leftIcon={<Java />}>Java</DropdownItem>
          <DropdownItem leftIcon={<Python />}>Python</DropdownItem>
          <DropdownItem leftIcon={<Sql />}>SQL</DropdownItem>
          <DropdownItem leftIcon={<Security />}>Security</DropdownItem>
          <DropdownItem leftIcon={<Git />} >Git</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem className="menuTitle" goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2 className="fh2">Web Development</h2>
          </DropdownItem>
          <DropdownItem className= "firstItem" leftIcon={<HTMLIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSSIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JSIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<ReactIcon />}>React</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h1>Animals</h1>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function AccountDropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="fmenu-item fa" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="ficon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }

  return (
    <div className="sdropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem leftIcon={<UserIcon />}><Link className="alink"  to="/home">Account</Link></DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} ><Link className="alink"  to="/update-profile">Update Account</Link></DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon />} ><Link className="alink"  to="/home">Logout</Link></DropdownItem> 
          {/* ^^make redirect to home and logout ^^*/}
        </div>
      </CSSTransition>
    </div>
  );
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

export default RNavbar;
