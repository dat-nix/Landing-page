import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [redirectToHome, setRedirectToHome] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const sectionToScroll = sessionStorage.getItem("scrollToSection");

        if (sectionToScroll && location.pathname === "/") {
            setTimeout(() => {
                document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: "smooth" });
                sessionStorage.removeItem("scrollToSection");
            }, 100); 
        }
    }, [location.pathname]);

    const handleNavClick = (section) => {
        setIsOpen(false); // Close menu on mobile when clicking a link
        if (location.pathname !== "/") {
            sessionStorage.setItem("scrollToSection", section);
            navigate("/", { replace: true });
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleRiktClick = () => {
        setIsOpen(false); // Close menu on mobile
        setRedirectToHome(true);
    };

    return (
        <nav className="bg-black w-full px-8 flex items-center justify-between shadow-md relative">
            {/* Logo */}
            <div>
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src="/logo.png" width="100px" alt="Logo" />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="text-white lg:hidden z-50">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
            </button>

            {/* Navigation Menu */}
            <div className="hidden lg:flex space-x-8 text-lg font-medium">
                <button
                    className="text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleNavClick("home")}
                >
                    Home
                </button>

                <button
                    className="text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleNavClick("about")}
                >
                    About
                </button>

                <Link
                    to="/rikt"
                    onClick={handleRiktClick}
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

                <button
                    className="text-white cursor-pointer hover:text-yellow-400"
                    onClick={() => handleNavClick("contact")}
                >
                    Contact
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center space-y-6 pt-24 transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    className="hover:text-yellow-400"
                    onClick={() => handleNavClick("home")}
                >
                    Home
                </button>
                <button
                    className="hover:text-yellow-400"
                    onClick={() => handleNavClick("about")}
                >
                    About
                </button>
                <Link
                    to="/rikt"
                    className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                    before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                    hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                    onClick={handleRiktClick}
                >
                    RIKT
                </Link>
                <button
                    className="hover:text-yellow-400"
                    onClick={() => handleNavClick("contact")}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}