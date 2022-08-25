import './FbNavbar.css';

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
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import notedLogo3 from './icons/note.jpg'
import "@fontsource/league-spartan";
function FbNavbar() {
  return (
    <Navbar>
      <NavItem icon={''} />
      <NavItem icon={'Books'} />
      <NavItem icon={'Computing'} >
        <ComputingDropdownMenu></ComputingDropdownMenu>
      </NavItem>
      <NavItem icon={'Cooking'} />
      <NavItem icon={'Photography'} />
      <NavItem icon={'Trading'} />
      <NavItem icon={'University'} />
      <NavItem className= "userNav" icon={<UserIcon />}>
        <AccountDropdownMenu></AccountDropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="fnavbar">
      <img class="flogo" src={notedLogo3} />
      <ul className="fnavbar-nav ful">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="fnav-item">
      <a href="#" className="ficon-button fa" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
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
          <DropdownItem leftIcon={<Computer />}>Computing</DropdownItem>
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
    <div className="fdropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="fmenu">
          <DropdownItem leftIcon={<UserIcon />}>Account</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} >Update Account</DropdownItem>
          <DropdownItem leftIcon={<LogoutIcon />} >Logout</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default FbNavbar;
