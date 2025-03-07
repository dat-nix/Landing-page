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
        <nav
            className={`bg-black w-full fixed top-0 z-50 p-4 px-8 flex items-center justify-between ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-700`}
        >
            {/* Logo */}
            <div>
                <ScrollLink
                    to="home"
                    smooth
                    duration={500}
                    className="flex items-center cursor-pointer"
                >
                    <img src="/src/assets/logo.png" width="100px" alt="Logo" />
                </ScrollLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="text-white lg:hidden">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
            </button>

            {/* Navigation Menu */}
            <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
                <ScrollLink
                    to="home"
                    smooth
                    duration={500}
                    className="text-white mx-4 cursor-pointer"
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    to="about"
                    smooth
                    duration={500}
                    className="text-white mx-4"
                >
                    About
                </ScrollLink>
                <Link
                    to="/rikt"
                    className="relative mx-4 cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                   before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                   before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                   hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                >
                    RIKT
                </Link>
                <ScrollLink
                    to="contact"
                    smooth
                    duration={500}
                    className="text-white mx-4 cursor-pointer"
                >
                    Contact
                </ScrollLink>
            </div>
        </nav>
    );
}
