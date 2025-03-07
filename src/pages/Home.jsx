import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 300 });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Home Section */}
      <section id="home" className="relative h-screen flex justify-center items-center bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          transition={{ duration: 1.2 }}
          className="absolute w-[90%] h-[85vh] overflow-hidden rounded-xl"
        >
          <img src="src/assets/rmit.jpg" className="w-full h-full object-cover opacity-85 rounded-xl" alt="RMIT" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Welcome Text */}
        <div className="relative z-10 text-white flex flex-col items-start px-10">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-thin mb-6">
            Welcome to RMIT Shinsei Kendo Club
          </motion.h1> 

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            <ScrollLink to="about" smooth={true} duration={500} className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:bg-orange-600">
              About Us
            </ScrollLink>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
