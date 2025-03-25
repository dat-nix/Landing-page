import { useEffect, useState } from "react"; 
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import About from "./About";
import content from "../configs/content";
import { Footer, FAQs } from "../components";

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
                className="relative h-[40vh] lg:h-[120vh] flex justify-center items-center bg-white"
            >
                {/* Background Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute w-full h-full object-cover overflow-hidden "
                >
                    <img
                        src="/rmit-kendo-club.png"
                        className="lg:object-cover"
                        alt="RMIT"
                    />
                </motion.div>

                <div>

                    <motion.div
                        initial={{ opacity: 0  }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            className="absolute lg:bottom-14 lg:left-15 cursor-pointer px-40 py-6 sm:text-xl md:text-2xl lg:text-3xl font-bold bg-[#ffcc5c] text-black rounded-2xl shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105"

                        >
                            {langData.button}
                        </ScrollLink>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <About language={language} />

           
            {/* FAQs Section */}
            <div className="mb-16" id="faqs">
                <FAQs language={language}/>
            </div>

            {/* Footer */}
            <Footer language={language}/>
        </div>
    );
}
