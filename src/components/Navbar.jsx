import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { content } from "../configs/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ language, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleLanguage = () =>
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "vn" : "en"));
    const currentContent = content[language].navbar;

    const handleNavigation = (section) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => smoothScroll(section), 500);
        } else {
            smoothScroll(section);
        }
    };

    const smoothScroll = (section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const navbarHeight = 80;
        const targetPosition =
            element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const ease = easeInOutQuad(
                elapsedTime,
                startPosition,
                distance,
                duration
            );
            window.scrollTo(0, ease);

            if (elapsedTime < duration) requestAnimationFrame(animation);
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const smoothScrollToTop = () => {
        const scrollStep = -window.scrollY / 20;
        const scrollAnimation = () => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    };

    const handleRiktNavigation = () => {
        if (location.pathname !== "/rikt") {
            navigate("/rikt", { replace: true });
            setTimeout(smoothScrollToTop, 200);
        } else {
            smoothScrollToTop();
        }
    };

    return (
        <nav className="bg-[#EB4E0B] w-full sticky top-0 py-3 sm:py-5 z-50 px-6 sm:px-8 flex items-center justify-between shadow-md">
            <div>
                <Link to="/" className="flex items-center cursor-pointer">
                    <img
                        src="/white-logo.svg"
                        className="w-12 h-14 sm:w-[59px] sm:h-[65px]"
                        alt="Logo"
                    />
                </Link>
            </div>

            <button
                onClick={toggleMenu}
                className="text-white lg:hidden cursor-pointer"
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
            </button>

            <div className="hidden lg:flex space-x-6 sm:space-x-8 text-base sm:text-lg font-medium">
                <button
                    onClick={() => handleNavigation("home")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {currentContent.home}
                </button>
                <button
                    onClick={() => handleNavigation("about")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {currentContent.about}
                </button>
                <span
                    onClick={handleRiktNavigation}
                    className="relative cursor-pointer font-bold text-white before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:drop-shadow-[0_0_10px_rgba(174,238,238,0.8)]"
                >
                    <span className="hidden lg:inline">
                        {currentContent.rikt}
                    </span>
                    <span className="inline lg:hidden">RIKT</span>
                </span>
                <button
                    onClick={() => handleNavigation("contact")}
                    className="text-white cursor-pointer hover:text-yellow-300"
                >
                    {currentContent.contact}
                </button>
                <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 bg-gray-700 text-white px-3 rounded-md border border-gray-600 hover:bg-gray-800 transition duration-300"
                >
                    <span className="text-lg">{currentContent.flag}</span>
                    <span className="hidden sm:inline hover:text-yellow-300">
                        {currentContent.language}
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#EB4E0B] text-white py-4 shadow-md lg:hidden">
                    <ul className="flex flex-col items-center space-y-4 text-base sm:text-lg font-medium">
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("home");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.home}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("about");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.about}
                            </button>
                        </li>
                        <li>
                            <span
                                onClick={() => {
                                    handleRiktNavigation();
                                    toggleMenu();
                                }}
                                className="relative cursor-pointer font-bold text-white before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-cyan-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:drop-shadow-[0_0_10px_rgba(174,238,238,0.8)]"
                            >
                                RIKT
                            </span>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleNavigation("contact");
                                    toggleMenu();
                                }}
                                className="hover:text-cyan-300 cursor-pointer"
                            >
                                {currentContent.contact}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-2 bg-gray-700 text-white px-3 rounded-md border border-gray-600 hover:bg-gray-800 transition duration-300"
                            >
                                <span className="text-lg">
                                    {currentContent.flag}
                                </span>
                                <span className="sm:inline hover:text-cyan-300">
                                    {currentContent.language}
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
