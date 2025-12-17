import {useEffect, useState} from "react";

import clsx from "clsx";
import roomLogo from "/images/logo.svg";
import hamburgerIcon from "/src/assets/images/icon-hamburger.svg";
import closeIcon from "/src/assets/images/icon-close.svg";
import "./Nav.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function closeMenu() {
      menuOpen ? setMenuOpen(false) : undefined;
    }

    window.addEventListener("scroll", closeMenu);
    document
      ?.querySelector(".bkground-mask")
      .addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", closeMenu);
      document
        ?.querySelector(".bkground-mask")
        .removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <header>
        <button
          onClick={toggleMenu}
          aria-label="open menu"
          className="menu-toggle"
          type="button"
        >
          <img src={hamburgerIcon} alt="hamburger icon for opening menu" />
        </button>
        <img src={roomLogo} alt="Room logo" className="logo" />
        <div className={clsx("nav-drawer", menuOpen && "show-menu")}>
          <button
            onClick={toggleMenu}
            aria-label="close menu"
            className="menu-toggle"
          >
            <img src={closeIcon} alt="cross icon for closing menu" />
          </button>
          <nav>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#shop">shop</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={clsx("bkground-mask", menuOpen && "show")}></div>
    </>
  );
}
