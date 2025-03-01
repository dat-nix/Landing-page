"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 min-h-[400px]">
      {/* Top section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center px-6 md:px-16 mb-6">
        {/* Logos */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <Image src="/assets/rec1.png" alt="Logo 1" width={80} height={80} />
          <Image src="/assets/rec2.png" alt="Logo 2" width={80} height={80} />
        </div>

        {/* Icons on the right */}
        <div className="flex gap-4">
        <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/facebook.png" alt="facebook" width={40} height={40} className="rounded-full" />
        </a>

        <a href="https://www.instagram.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/instagram.png" alt="instagram" width={40} height={40} className="rounded-full" />
        </a>

        </div>
      </div>

      {/* Navigation links */}
      <div className="flex flex-wrap justify-center md:justify-around px-6 md:px-16 text-center md:text-left gap-6 md:gap-12">
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-orange-400"
          >
            FAQs
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-orange-400"
          >
            Contact Us
          </ScrollLink>
        </div>

        {/* Center Column */}
        <div className="flex flex-col space-y-2">
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-orange-400"
          >
            About Us
          </ScrollLink>
          <Link href="/address" className="hover:text-orange-400">Address</Link>
        </div>

        {/* Right Column */}
        <div className="text-orange-400 font-bold">
          <Link href="/rikt">RIKT</Link>
        </div>
      </div>

      <hr className="border-gray-700 my-6 mx-6 md:mx-16" />

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-center">
        <Link href="/cookies" className="hover:text-orange-400">Cookies Policy</Link>
        <span className="hidden md:inline text-gray-500">|</span>
        <Link href="/privacy" className="hover:text-orange-400">Privacy Policy</Link>
        <span className="hidden md:inline text-gray-500">|</span>
        <Link href="/legal" className="hover:text-orange-400">Legal Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;
