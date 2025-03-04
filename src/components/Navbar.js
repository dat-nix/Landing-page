"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  // Define menu items
  const MenuItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "RIKT", url: "/rikt" },
    { title: "Contact", id: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const threshold = 50;
    const handleScroll = () => {
      if (!isOpen) {
        const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      }
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  // Toggle menu open/close state
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setShowNavbar(true);
  };

  // Handle navigation logic
  const handleNavigation = (id) => {
    setIsOpen(false);
    if (pathname === "/rikt") {
      router.push(`/?scrollTo=${id}`);
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <nav
      className={`lg:pl-24 lg:h-24 md:h-30 bg-black w-full flex items-center justify-between flex-wrap p-1 z-50 transition-transform duration-700 lg:justify-center ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${pathname === "/rikt" ? "fixed top-0" : "sticky top-0"}`}
    >
      {/* Logo Navigation */}
      <div className="lg:absolute left-4">
      {pathname === "/rikt" ? (
        <Link href="/" className="flex items-center">
          <img src="/logo.png" width="100px" alt="RMIT SGS Shinsei Kendo Club" />
        </Link>
      ) : (
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src="/logo.png" width="100px" alt="RMIT SGS Shinsei Kendo Club" />
        </ScrollLink>
      )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="px-3 py-2 text-white">
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`bg-black w-full lg:flex lg:items-center lg:w-auto ${
          isOpen ? "flex flex-col items-center space-y-4" : "hidden"
        }`}
      >
        {MenuItems.map((item, index) => (
          item.url ? (
            // External navigation link
            <Link
              key={index}
              href={item.url}
              className="relative block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-2xl cursor-pointer mx-4 px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition font-extrabold"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ) : (
            // Internal navigation with smooth scrolling
            <button
              key={index}
              onClick={() => handleNavigation(item.id)}
              className="relative block mt-4 lg:inline-block lg:mt-0 text-stone-200 text-2xl cursor-pointer mx-6 px-2 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {item.title}
            </button>
          )
        ))}
      </div>
    </nav>
  );
}