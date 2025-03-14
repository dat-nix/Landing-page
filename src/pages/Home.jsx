import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
import FAQs from "../components/FAQs";

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
            {/* Hero Section */}
            <section
                id="home"
                className="relative h-screen flex justify-center items-center bg-white"
            >
                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute w-[90%] h-[85vh] overflow-hidden rounded-xl"
                >
                    <img
                        src="/rmit-kendo-club.jpg"
                        className="w-full h-full object-cover opacity-80 rounded-xl mb-6"
                        alt="RMIT"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </motion.div>

                {/* Welcome Text */}
                <div className="relative z-10 text-white flex flex-col items-center text-center px-8">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-6"
                    >
                        Elevate Your Kendo Journey
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="text-lg md:text-xl font-light text-gray-200 max-w-[600px] drop-shadow-lg"
                    >
                        Train, compete, and excel with the RMIT Shinsei Kendo Club.
                        Join a community dedicated to mastering the art of Kendo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-6"
                    >
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer px-6 py-3 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                        >
                            Learn More
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <About />

            {/* FAQs Section */}
            <div className="mb-16"><FAQs/></div>

            {/* Contact Section */}

            {/* Footer */}
            <Footer />
        </div>
    );
}
