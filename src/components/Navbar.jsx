import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { content } from "../configs/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("en");
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleLanguage = () => setLanguage((prevLanguage) => (prevLanguage === "en" ? "vn" : "en"));

    const currentContent = content[language].navbar;

    const handleNavigation = (section) => {
    if (location.pathname !== "/") {
        navigate("/", { replace: true });

        // Ensure the page loads before scrolling
        setTimeout(() => smoothScroll(section), 500);
    } else {
        smoothScroll(section);
    }
};

   const smoothScroll = (section) => {
    const element = document.getElementById(section);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Adjust duration (in ms) for smoother scrolling
    let startTime = null;

    const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const ease = easeInOutQuad(elapsedTime, startPosition, distance, duration);
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
    const scrollStep = -window.scrollY / 20; // Adjust for smoothness
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
        setTimeout(smoothScrollToTop, 200); // Ensures page loads before scrolling
    } else {
        smoothScrollToTop();
    }
};

    return (
        <nav className="bg-black w-full sticky top-0 z-50 px-8 flex items-center justify-between shadow-md">
            <div>
                <Link to="/" className="flex items-center cursor-pointer">
                    <img src="/logo.png" width="100px" alt="Logo" />
                </Link>
            </div>

            <button onClick={toggleMenu} className="text-white lg:hidden cursor-pointer">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="xl" />
            </button>

            <div className="hidden lg:flex space-x-8 text-lg font-medium">
                <button onClick={() => handleNavigation("home")} 
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    {currentContent.home}
                </button>

                <button onClick={() => handleNavigation("about")}
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    {currentContent.about}
                </button>

                <span onClick={handleRiktNavigation}
                    className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                    before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                    hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                >
                    <span className="hidden lg:inline">
                        {currentContent.rikt}
                    </span>
                    <span className="inline lg:hidden">RIKT</span>
                </span>

                <button onClick={() => handleNavigation("contact")}
                    className="text-white cursor-pointer hover:text-yellow-400"
                >
                    {currentContent.contact}
                </button>
                <button
                    onClick={toggleLanguage}
                    className="bg-gray-600 text-white px-2 py-0 rounded-md hover:bg-gray-800 transition duration-300"
                >
                    {currentContent.language}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white py-6 shadow-md lg:hidden">
                    <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
                        <li>
                            <button onClick={() => { handleNavigation("home"); toggleMenu(); }}
                                className="hover:text-yellow-400 cursor-pointer"
                            >
                                {currentContent.home}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { handleNavigation("about"); toggleMenu(); }}
                                className="hover:text-yellow-400 cursor-pointer"
                            >
                                {currentContent.about}
                            </button>
                        </li>
                        <li>
                            <span onClick={() => {handleRiktNavigation(); toggleMenu(); }} 
                                className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                                before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
                                hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                            >
                                RIKT
                            </span>
                        </li>
                        <li>
                            <button onClick={() => { handleNavigation("contact"); toggleMenu(); }}
                                className="hover:text-yellow-400 cursor-pointer"
                            >
                                {currentContent.contact}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    toggleMenu();
                                }}
                                className="bg-gray-600 text-white px-2 py-0 rounded-md hover:bg-gray-800 transition duration-300"
                            >
                                {currentContent.language}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}