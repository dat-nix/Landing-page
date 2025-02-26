"use client";
import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 500 });
    }
  }, [scrollTo]);

  return (
    <div>
      {/* home section */}
      <section id="home" className="relative h-screen flex justify-center items-center bg-white">
        {/* enlarged background image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2 }}
          className="absolute w-[90%] h-[85vh]"
        >
          <Image src="/rmit.jpg" fill className="object-cover opacity-85" alt="RMIT" />

        </motion.div>

        {/* welcome text & about us button */}
        <div className="relative z-10 text-white flex flex-col items-start px-10">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-5xl font-thin mb-6"
          >
            Welcome to RMIT Shinsei Kendo Club
          </motion.h1> 

          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:text-gray-200"
          >
          About Us
          </ScrollLink>

          </motion.div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="h-screen flex justify-center items-center bg-green-500 text-white text-5xl font-bold">
        <h1>About Section</h1>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex justify-center items-center bg-yellow-500 text-white text-5xl font-bold">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}
