import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={`bg-black w-full fixed top-0 z-50 p-4 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-700`}>
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center">
          <img src="/src/assets/logo.png" width="100px" alt="Logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="text-white lg:hidden">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
      </button>

      {/* Navigation Menu */}
      <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
        <ScrollLink to="home" smooth duration={500} className="text-white mx-4">Home</ScrollLink>
        <ScrollLink to="about" smooth duration={500} className="text-white mx-4">About</ScrollLink>
        <Link to="/rikt" className="text-white mx-4">RIKT</Link>
        <ScrollLink to="contact" smooth duration={500} className="text-white mx-4">Contact</ScrollLink>
      </div>
    </nav>
  );
}
