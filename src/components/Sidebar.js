import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileMenuIcon, setMobileMenuIcon] = useState(<AiOutlineMenu />);

  const mobileToggle = () => {
    setMobileMenu(mobileMenu ? false : true);
    setMobileMenuIcon(mobileMenu ? <AiOutlineMenu /> : <AiOutlineClose />);
  };

  return (
    <>
      <header className="header flex">
        <div className="logo-wraper">
          <a className="logo" href="#">
            LOGO
          </a>
        </div>
        <button
          onClick={mobileToggle}
          className="mobile-toggle"
          aria-controls="navbar"
          aria-expanded={mobileMenu}
        >
          <span className="sr-only">{mobileMenuIcon}</span>
        </button>
        <nav>
          <ul data-visible={mobileMenu} id="navbar" className="navbar flex">
            <a href="/home">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
          </ul>
        </nav>
      </header>
      {/*-------------Mobile vsesion---------------*/}
      <div></div>
    </>
  );
};

export default Navbar;
