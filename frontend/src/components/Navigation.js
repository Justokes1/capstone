import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

function NavBar() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <h2>Justin.AF</h2>
      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#Projects">Projects</a>
        <a href="#cPage">Contact</a>
        <button className="nav-btn nav-close" onClick={showNav}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
