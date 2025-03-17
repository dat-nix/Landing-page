import { useEffect, useState } from "react"; // ️ add useState here
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import About from "./About";
import content from "../configs/content";
import { Footer, FAQs, FacebookPosts } from "../components";

export default function HomePage({ language }) {  // ️ recieve language from props (from App.jsx)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const scrollTo = params.get("scrollTo");
        if (scrollTo) {
            scroller.scrollTo(scrollTo, { smooth: true, duration: 300 });
        }
    }, []);

    // ️ check language state; if not valid set back to "en"
    const langData = content[language]?.heroSection || content["en"].heroSection; 

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
                        className="w-full h-full object-cover opacity-80 rounded-xl"
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
                        {langData.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="text-lg md:text-xl font-light text-gray-200 max-w-[600px] drop-shadow-lg"
                    >
                        {langData.description} 
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
                            offset={-80}
                            className="cursor-pointer px-6 py-3 text-lg font-semibold bg-orange-500 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                        >
                            {langData.button}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <About language={language} />

            {/* Facebook Posts Section */}
            <FacebookPosts language={language} />

            {/* FAQs Section */}
            <div className="mb-16">
                <FAQs language={language}/>
            </div>

            {/* Footer */}
            <Footer language={language}/>
        </div>
    );
}
