import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <nav className="bg-black w-full fixed top-0 z-50 px-8 flex items-center justify-between shadow-md">
            {/* Logo */}
            <div>
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src="/logo.png" width="100px" alt="Logo" />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="text-white lg:hidden">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
            </button>

            {/* Navigation Menu */}
            <div className="hidden lg:flex space-x-8 text-lg font-medium">
                <ScrollLink
                    to="home"
                    smooth
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    Home
                </ScrollLink>

                <ScrollLink
                    to="about"
                    smooth
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    About
                </ScrollLink>

                <Link
                    to="/rikt"
                    className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                    before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                    hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                >
                    <span className="hidden lg:inline">
                        RMIT Ichigeki Kendo Tournament
                    </span>
                    <span className="inline lg:hidden">RIKT</span>
                </Link>

                <ScrollLink
                    to="contact"
                    smooth
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    Contact
                </ScrollLink>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white py-6 shadow-md lg:hidden">
                    <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
                        <li>
                            <ScrollLink
                                to="home"
                                smooth
                                duration={500}
                                className="hover:text-yellow-400"
                                onClick={toggleMenu}
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about"
                                smooth
                                duration={500}
                                className="hover:text-yellow-400"
                                onClick={toggleMenu}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <Link
                                to="/rikt"
                                className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                                before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                                hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                                onClick={toggleMenu}
                            >
                                RIKT
                            </Link>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                smooth
                                duration={500}
                                className="hover:text-yellow-400"
                                onClick={toggleMenu}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
