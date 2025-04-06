import React from "react";
import "../styles/RIKT.css";
import content from "../configs/content";
import { Footer } from "../components";
import AgendaSection from "../components/AgendaSection";
import FacebookPosts from "../components/FacebookPosts";

const RIKT = ({ language }) => {
    const timelineData = content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;
    const riktAbout = content[language]?.riktAbout || content["en"].riktAbout;
    const contact = content[language]?.contact || content["en"].contact;

    return (
        <section className="timeline-section">
            {/* Banner */}
  <div className="relative banner-section">
  <img
    src="rmit-kendo-club.png"
    alt="Banner"
    className="w-full h-auto object-contain"
  />

<div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <a
    href="https://docs.google.com/document/d/1ULqZoZ235xmzRWGJfTORwiBW0JaIK44N/edit"
    className="px-10 py-5 sm:px-12 sm:py-5 md:px-16 md:py-6 lg:px-24 lg:py-7 
               text-base sm:text-lg md:text-xl lg:text-2xl font-bold 
               bg-[#ffcc5c] text-gray-900 rounded-2xl shadow-lg 
               transition-all duration-300 hover:bg-orange-600 hover:scale-105 
               whitespace-normal break-words"
  >
    TOURNAMENT CHARTER
  </a>
</div>
 
</div>
 

            {/* About */}
            <div className="about-section">
                <h2 className="about-title">{riktAbout.about[0]}</h2>
                <p className="about-text">
                    {riktAbout.about[1]} <strong>{riktAbout.about[2]}</strong> {riktAbout.about[3]}
                    {riktAbout.about[4]}
                </p>
            </div>

            {/* Event Info */}
            <div className="w-full p-4 md:mt-30 event-info-container">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="md:w-7/12 event-details px-1 md:pr-4">
                        <div className="mb-8 w-full">
                            <h1 
                                className="text-left w-full text-[3.5rem] sm:text-[5rem] md:text-[3.5rem] lg:text-[8rem] font-bold text-[#FFCA5A] leading-[1.2] md:leading-[1.2] whitespace-normal md:whitespace-nowrap font-['Anton'] tracking-[0.1em] ml-[30px]">
                                {riktAbout.information[0]}<br />{riktAbout.information[1]}
                            </h1>
                        </div>

                        <div className="text-left mt-10 md:mt-25 space-y-5 md:space-y-8 w-full px-1 md:px-0 md:ml-[30px]">
                            <p className="text-white text-xl sm:text-2xl md:text-3xl">
                                <span className="font-bold block">{riktAbout.information[2]}</span>
                                {riktAbout.information[3]}
                            </p>
                            <p className="text-white text-xl sm:text-2xl md:text-3xl">
                                <span className="font-bold block">{riktAbout.information[4]}</span>
                                {riktAbout.information[5]}
                            </p>
                            <p className="text-white text-xl sm:text-2xl md:text-3xl">
                                <span className="font-bold block">{riktAbout.information[6]}</span>
                                {riktAbout.information[7]}<br />{riktAbout.information[8]}
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="md:w-[500px] md:h-[500px] mt-5 md:mt-80 md:mr-10 event-map flex-grow-0">
                        <div className="relative aspect-square w-[300px] md:w-[400px] lg:w-[450px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.0637546456305!2d106.6937685!3d10.729566200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srmit%20sgs!5e0!3m2!1sen!2s!4v1742901966432!5m2!1sen!2s" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, borderRadius: '10px' }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agenda */}
            <AgendaSection language={language} />

            {/* Requirements & Registration */}
            <div className="register-section">
                <h2 className="register-title">{riktData.registration.title}</h2>
                <div className="register-content">
                    <p>{riktData.registration.description}</p>
                     <a href="https://docs.google.com/document/d/1BxNh6MUfEN4eCtX5AJNHmi0npxMiFWIc20FMADJG3zM/edit?fbclid=IwY2xjawJSZoRleHRuA2FlbQIxMAABHZJwMa5y0pQeS69FhxPXA2PNByXHS114SkLwHkGYWvZD2RnJdd3SxQxPhg_aem_JC4ZikG7M6Y0Riv63_9_KQ&tab=t.0">
                        <button className="register-button">
                            {riktData.registration.button}
                        </button>
                    </a>
                </div>
            </div>

            {/* Facebook Posts */}
            <FacebookPosts language={language} />

            {/* Contact Us */}
            <div id="contact" className="w-full max-w-xl text-white font-[Reddit Sans] text-center mx-auto flex flex-col items-center justify-center">
                <p className="lg:text-3xl text-2xl font-semibold mb-4">{contact.text}</p>
                <div className="mt-6 flex justify-center gap-10 lg:gap-18 text-4xl lg:text-5xl">
                    <img src="/Mail.png" className="w-15 h-15 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                    <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" className="w-15 h-15 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                    </a>
                </div>
            </div>

            {/* Wavy Effect */}
            <div className="wavyeffect">
                <img src="/wavyeffect.png" alt="wavy design" />
            </div>

            {/* Footer */}
            <Footer language={language} />
        </section>
    );
};

export default RIKT;
