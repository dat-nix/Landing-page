import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import content from "../configs/content";
import { Footer, FacebookPosts } from "../components";

gsap.registerPlugin(ScrollTrigger);

const agendaData = {
    "May 30th": [
        { time: "6:30 PM", activity: "Seminar begin" },
        { time: "8:30 PM", activity: "Seminar ends" },
    ],
    "May 31st": [
        { time: "8:00 AM", activity: "Check-in" },
        { time: "9:30 AM", activity: "Opening Ceremony" },
        { time: "10:00 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "4:30 PM", activity: "End of day 1" },
    ],
    "June 1st": [
        { time: "8:00 AM", activity: "Check-in" },
        { time: "9:10 AM", activity: "Day 2 Opening Speech" },
        { time: "9:15 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:45 PM", activity: "Awards and Closing Ceremony" },
    ],
};

const RiktPage = ({ language }) => {
    const timelineData =
        content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;
    const riktAbout = content[language]?.riktAbout || content["en"].riktAbout;
    const contact = content[language]?.contact || content["en"].contact;

    // Agenda states
    const dates = Object.keys(agendaData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const agendaSectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = agendaSectionRef.current;
        const totalSteps = dates.length;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "+=100%", // adjust scroll range here
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.min(
                        totalSteps - 1,
                        Math.floor(progress * totalSteps)
                    );
                    if (index !== currentIndex) setCurrentIndex(index);
                },
            });
        }, section);

        return () => ctx.revert();
    }, [currentIndex, dates.length]);

    return (
        <section className="bg-[#185195] text-white font-sans">
            {/* Banner */}
            <div className="relative w-full overflow-hidden">
                <img
                    src="rmit-kendo-club.png"
                    alt="Banner"
                    className="w-full h-[80%] sm:h-full md:h-full lg:h-[80%] object-contain"
                />
                <div className="absolute top-[80%] sm:top-[50%] md:top-[50%] lg:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <a href="https://docs.google.com/document/d/1ULqZoZ235xmzRWGJfTORwiBW0JaIK44N/edit">
                        <button className="px-8 py-4 md:px-16 md:py-5 lg:px-24 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-[#ffcc5c] text-black rounded-2xl shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                            TOURNAMENT CHARTER
                        </button>
                    </a>
                </div>
            </div>

            {/* About */}
            <div className="flex flex-col md:flex-row items-center justify-between px-8 pb-20 animate-fadeIn">
                <h2 className="font-['Anton'] text-4xl md:text-8xl font-bold text-[#FFCA5A] uppercase tracking-widest text-center md:text-left">
                    {riktAbout.about[0]}
                </h2>
                <p className="text-white text-lg md:text-2xl mt-6 md:mt-0 md:ml-12 leading-relaxed max-w-xl text-justify">
                    {riktAbout.about[1]} <strong>{riktAbout.about[2]}</strong>{" "}
                    {riktAbout.about[3]}
                    {riktAbout.about[4]}
                </p>
            </div>

            {/* Event Info */}
            <div className="w-full px-10 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="md:w-7/12 space-y-8">
                        <h1 className="text-[#FFCA5A] font-['Anton'] text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-widest text-left">
                            {riktAbout.information[0]} <br />{" "}
                            {riktAbout.information[1]}
                        </h1>
                        <div className="space-y-6 text-xl sm:text-2xl md:text-3xl mt-6 text-left">
                            {[2, 4, 6].map((index) => (
                                <p key={index}>
                                    <span className="font-bold block">
                                        {riktAbout.information[index]}
                                    </span>
                                    {riktAbout.information[index + 1]}
                                    {index === 6 && (
                                        <>
                                            <br />
                                            {riktAbout.information[8]}
                                        </>
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* Map */}
                    <div className="md:w-[500px] md:h-[500px] mt-10 md:mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.0637546456305!2d106.6937685!3d10.729566200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srmit%20sgs!5e0!3m2!1sen!2s!4v1742901966432!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            className="w-full h-full rounded-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Agenda Section */}
            <section
                ref={agendaSectionRef}
                className="relative bg-[#154c9e] text-white"
            >
                <div className="h-screen flex flex-col px-4 sm:px-4 lg:px-20 md:px-12 pt-24 pb-8">
                    {/* Top: Title */}
                    <div className="mb-8">
                        <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold text-[#FFCA5A] uppercase tracking-widest leading-tight font-['Anton']">
                            Agenda
                        </h2>
                    </div>

                    {/* Flex Row: Left and Right */}
                    <div className="flex flex-1 gap-12">
                        {/* Left Side: Text and Dates */}
                        <div className="flex flex-col justify-start flex-1">
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-['Reddit Sans'] mb-6">
                                Scroll to explore the dates
                            </p>
                            <div className="space-y-2">
                                {dates.map((date, index) => (
                                    <div
                                        key={date}
                                        className={`transition-all duration-300 ${
                                            index === currentIndex
                                                ? "text-white text-2xl sm:text-3xl md:text-7xl lg:text-7xl font-bold"
                                                : "text-blue-300 text-xl sm:text-2xl md:text-3xl lg:text-[3.35rem]"
                                        }`}
                                    >
                                        {date.toUpperCase()}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Timeline */}
                        <div className="flex-1 flex items-start justify-center relative">
                            <div className="relative w-full max-w-md">
                                <div className="absolute left-13.5 top-0 h-full w-1 bg-white"></div>
                                <div className="flex flex-col gap-8 pl-12 transition-opacity duration-500">
                                    {agendaData[dates[currentIndex]].map(
                                        (item, index, arr) => (
                                            <div
                                                key={index}
                                                className="relative flex items-center gap-4"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="w-4 h-4 rounded-full bg-white border-2 border-white"></div>
                                                    {index !==
                                                        arr.length - 1 && (
                                                        <div className="flex-1 w-px bg-white opacity-50 mt-1"></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-lg md:text-xl font-bold">
                                                        {item.time}
                                                    </div>
                                                    <div className="text-sm md:text-base opacity-90">
                                                        {item.activity}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <div className="flex flex-col md:flex-row items-start justify-between px-4 sm:px-8 md:px-20 py-16 animate-fadeIn">
                <h2 className="font-['Anton'] text-[clamp(2rem,8vw,8rem)] font-black text-[#FFCA5A] uppercase tracking-widest text-center md:text-left  leading-snug break-words">
                    {riktData.registration.title}
                </h2>

                <div className="flex flex-col justify-center items-center mt-6 md:mt-0 md:ml-12 max-w-xl text-justify text-base sm:text-lg md:text-2xl leading-relaxed">
                    <p>
                        Read the tournament charter in our registration package
                        and follow the guide on PC/Laptop to register.
                        <br /> <br />
                        Registration deadline:
                        <br />
                        <b>Sunday, 4th May 2025, 23:59 p.m (GMT+7)</b>
                    </p>
                    <a
                        className="flex flex-col justify-center items-center"
                        href="https://docs.google.com/document/d/1BxNh6MUfEN4eCtX5AJNHmi0npxMiFWIc20FMADJG3zM/edit?fbclid=IwY2xjawJSZoRleHRuA2FlbQIxMAABHZJwMa5y0pQeS69FhxPXA2PNByXHS114SkLwHkGYWvZD2RnJdd3SxQxPhg_aem_JC4ZikG7M6Y0Riv63_9_KQ&tab=t.0"
                    >
                        <button className="bg-[#FFCA5A] text-black font-bold text-base sm:text-lg md:text-2xl px-8 py-3 rounded-xl shadow-md mt-6 transition hover:bg-orange-600 hover:-translate-y-1">
                            {riktData.registration.button}
                        </button>
                    </a>
                </div>
            </div>

            {/* Facebook Posts */}
            <FacebookPosts language={language} />

            {/* Contact Section */}
            <div
                id="contact"
                className="w-full max-w-xl mx-auto text-center py-12"
            >
                <p className="text-2xl lg:text-3xl font-semibold mb-6">
                    {contact.text}
                </p>
                <div className="flex justify-center gap-8 text-4xl">
                    <img
                        src="/Mail.png"
                        alt="Mail"
                        className="w-12 h-12 cursor-pointer hover:opacity-70"
                    />
                    <a
                        href="https://www.facebook.com/rmitshinsei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/facebook.png"
                            alt="Facebook"
                            className="w-12 h-12 cursor-pointer hover:opacity-70"
                        />
                    </a>
                </div>
            </div>

            {/* Wavy Effect */}
            <div>
                <img
                    src="/wavyeffect.png"
                    alt="wavy design"
                    className="w-full"
                />
            </div>

            {/* Footer */}
            <Footer language={language} />
        </section>
    );
};

export default RiktPage;
