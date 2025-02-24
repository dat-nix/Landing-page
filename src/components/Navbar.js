"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const MenuItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "RIKT", url: "/rikt" },
    { title: "Contact", id: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname();
  const router = useRouter();

  //state control navbar
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        //scroll down -> hide navbar
        setShowNavbar(false);
      } else {
        //scroll up -> show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (id) => {
    if (pathname === "/rikt") {
      router.push(`/?scrollTo=${id}`);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-neutral-800 fixed top-0 left-0 w-full flex items-center justify-between flex-wrap p-6 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ScrollLink 
        to="home"
        smooth={true}
        duration={500}
       className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <img src="/logo.png" width="120px" alt="RMIT SGS Shinsei Kendo Club"/>
      </ScrollLink>

      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-white">
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
        </button>
      </div>
    
      <div className={`w-full lg:flex lg:flex-row lg:items-center lg:w-auto ${isOpen ? "flex flex-col items-center space-y-4" : "hidden"}`}>
          {MenuItems.map((item, index) =>
            item.url ? (
              <Link
                key={index}
                href={item.url}
                className="block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-2xl cursor-pointer mx-4"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ) : (
              pathname === "/rikt" ? (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.id)}
                  className="block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-2xl cursor-pointer mx-4"
                >
                  {item.title}
                </button>
              ) : (
                <ScrollLink
                  key={index}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className="block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-2xl cursor-pointer mx-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </ScrollLink>
              )
            )
          )}
        </div>
    </nav>
  );
}
