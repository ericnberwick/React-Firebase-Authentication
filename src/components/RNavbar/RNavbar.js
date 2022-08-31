
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
import { ReactComponent as ASPNET } from './icons/aspnet.svg';
import { ReactComponent as VS } from './icons/vs.svg';
import { ReactComponent as IntelliJ } from './icons/intellij.svg';
import { ReactComponent as Ecl } from './icons/ecl.svg';
import { ReactComponent as Hack } from './icons/crime-hacker-icon.svg';
import { ReactComponent as ML } from './icons/ml.svg';
import { ReactComponent as Numpy } from './icons/numpy-logo.svg';
import { ReactComponent as Pandas } from './icons/pandas-seeklogo.com.svg';
import { ReactComponent as Pycharm } from './icons/pycharm.svg';
import { ReactComponent as Data } from './icons/data.svg';
import { ReactComponent as NoteL } from './icons/note.svg';
import { ReactComponent as Leet } from './icons/leetcode.svg';

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
      zIndex: 50
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
          <DropdownItem leftIcon={<Csharp />} goToMenu="csharp">C#</DropdownItem>
          <DropdownItem leftIcon={<Java />} goToMenu="java">Java</DropdownItem>
          <DropdownItem leftIcon={<Python />} goToMenu="python">Python</DropdownItem>
          <DropdownItem leftIcon={<Sql />}>SQL</DropdownItem>
          <DropdownItem leftIcon={<Security />}>Security</DropdownItem>
          <DropdownItem leftIcon={<Git />} >Git</DropdownItem>
          <DropdownItem leftIcon={<Leet />} >Leet Code</DropdownItem>
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
          <DropdownItem className= "firstItem" leftIcon={<HTMLIcon />}><Link className="alink"  to="/html1">HTML</Link></DropdownItem>
          <DropdownItem leftIcon={<CSSIcon />}><Link className="alink"  to="/css1">CSS</Link></DropdownItem>
          <DropdownItem leftIcon={<JSIcon />}><Link className="alink"  to="/js1">JavaScript</Link></DropdownItem>
          <DropdownItem leftIcon={<ReactIcon />}><Link className="alink"  to="/react">React</Link></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'csharp'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem className="menuTitle" goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2 className="fh2">C#</h2>
          </DropdownItem>
          <DropdownItem className= "firstItem" leftIcon={<VS />}><Link className="alink"  to="/comingsoon">Visual Studio</Link></DropdownItem>
          <DropdownItem leftIcon={<Csharp />}>How to C#</DropdownItem>
          <DropdownItem leftIcon={<ASPNET />}>ASP.NET</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'java'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem className="menuTitle" goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2 className="fh2">Java</h2>
          </DropdownItem>
          <DropdownItem className= "firstItem" leftIcon={<IntelliJ />}>IntelliJ</DropdownItem>
          <DropdownItem leftIcon={<Java />}>How to Java</DropdownItem>
          <DropdownItem leftIcon={<Ecl />}>Testing</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'python'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem className="menuTitle" goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2 className="fh2">Python</h2>
          </DropdownItem>
          <DropdownItem className= "firstItem" leftIcon={<Pycharm />}>PyCharm</DropdownItem>
          <DropdownItem leftIcon={<Python />}>How to Python</DropdownItem>
          <DropdownItem leftIcon={<Numpy />}>Numpy</DropdownItem>
          <DropdownItem leftIcon={<Pandas />}>Pandas</DropdownItem>
          <DropdownItem leftIcon={<Data />}>Data Science</DropdownItem>
          <DropdownItem leftIcon={<ML />}>Machine Learning</DropdownItem>
          <DropdownItem leftIcon={<Hack />}>Hack Your Life </DropdownItem>
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
