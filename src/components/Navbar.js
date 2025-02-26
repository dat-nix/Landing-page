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

  const handleNavigation = (id) => {
    if (pathname === "/rikt") {
      router.push(`/?scrollTo=${id}`);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`bg-black w-full flex items-center justify-between flex-wrap p-2 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${pathname === "/rikt" ? "fixed top-0" : "sticky top-0"}`}
    >
      {/* Logo */}
      {pathname === "/rikt" ? (
        <Link href="/" className="flex items-center">
          <img src="/logo.png" width="115px" alt="RMIT SGS Shinsei Kendo Club" />
        </Link>
      ) : (
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src="/logo.png" width="115px" alt="RMIT SGS Shinsei Kendo Club" />
        </ScrollLink>
      )}

      {/* Mobile Menu Toggle */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="px-3 py-2 text-white">
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "flex flex-col items-center space-y-4" : "hidden"}`}>
        {MenuItems.map((item, index) =>
          item.url ? (
            <Link
              key={index}
              href={item.url}
              className="relative block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-xl cursor-pointer mx-4 px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition font-extrabold"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ) : pathname === "/rikt" ? (
            <button
              key={index}
              onClick={() => handleNavigation(item.id)}
              className="relative block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-xl cursor-pointer mx-4 px-2 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {item.title}
            </button>
          ) : (
            <ScrollLink
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              className="relative block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-xl cursor-pointer mx-6 px-2 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </ScrollLink>
          )
        )}
      </div>
    </nav>
  );
}
