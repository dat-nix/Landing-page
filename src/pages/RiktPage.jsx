import React from "react";
import "../styles/RIKT.css";
import content from "../configs/content";
import { Footer } from "../components";

const RIKT = ({ language }) => {
    const timelineData = content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;

    return (
        <section className="timeline-section">
            {/* Tournament Banner Section */}
            <div className="banner-section ">
                <img 
                    src="/rmit-kendo-club.png" 
                    alt="RMIT Ichigeki Kendo Tournament 2025"
                    className="w-full object-cover"
                />
            </div>

            <div className="about-section">
                <h2 className="about-title">ABOUT THE EVENT</h2>
                <p className="about-text">
                    Hosted by RMIT Shinsei Kendo Club, The <strong>RMIT Ichigeki Kendo Tournament</strong> aims to create opportunities 
                    for young kendokas to compete, improve their skills, and strengthen the Kendo community in Ho Chi Minh City.
                </p>
            </div>

            {/* Event Information Section */}
            <div className="w-full p-4 event-info-container">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Text Container */}
                    <div className="md:w-7/12 event-details pr-4">
                        <div className="mb-8 w-full">
                            <h1 className="lg:ml-17 text-left w-full text-[7rem] md:text-[8rem] md:mb-20 font-bold text-[#FFCA5A] leading-[0.8] whitespace-nowrap">
                                EVENT<br />INFORMATION
                            </h1>
                        </div>

                        <div className="text-left md:mt-20 md:ml-30 space-y-4 w-full">
                            <p className="text-white text-3xl">
                                <span className="font-bold block">Date</span>
                                May 30 - June 1st 2025
                            </p>
                            <p className="text-white text-3xl">
                                <span className="font-bold block">Time</span>
                                8:00 AM - 5:00 PM
                            </p>
                            <p className="text-white text-3xl">
                                <span className="font-bold block">Venue</span>
                                702 Nguyen Van Linh, Q7<br />RMIT University SGS Sports Hall Building 10
                            </p>
                        </div>
                    </div>

                    {/* Map Container */}
                    <div className="md:w-[507px] md:h-[475px] mt-5 md:mt-60 md:mr-30 event-map flex-grow-0">
                        <div className="relative aspect-square w-[400px]">
                            {/* Embedded Google Map */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.0637546456305!2d106.6937685!3d10.729566200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srmit%20sgs!5e0!3m2!1sen!2s!4v1742901966432!5m2!1sen!2s" 
                                width="507" 
                                height="435" 
                                style={{ border: 0, borderRadius: '10px' }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <p className="text-white mt-4 text-center text-lg">Location Map</p>
                    </div>
                </div>
            </div>

            <h1 className="timeline-title">{riktData.eventTimeline}</h1>
            {timelineData.map((day, index) => (
                <div key={index} className="timeline-card">
                    <h2 className="timeline-date">{day.date}</h2>
                    <div className="timeline-container">
                        <div className="timeline-connector"></div>
                        {day.events.map((event, idx) => (
                            <div key={idx} className="timeline-event">
                                <div className="timeline-dot"></div>
                                <div className="event-info">
                                    <span className="event-time">{event.time}</span>
                                    <span className="event-activity">{event.activity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Registration and Requirement Section */}
            <div className="requirements-container">
                <div className="requirement-card">
                    <h2 className="requirement-title">{riktData.eligibility.title}</h2>
                    <p className="requirement-text">{riktData.eligibility.requirements[0]}</p>
                    <p className="requirement-text">{riktData.eligibility.requirements[1]}</p>
                </div>
                <div className="requirement-card">
                    <h2 className="requirement-title">{riktData.registration.title}</h2>
                    <p className="registration-text">{riktData.registration.description}</p>
                    <button 
                        className="register-button" 
                        onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeDh1nk2ZrgkMdPqUVULepuEg1c1suve47upcgtTC1QwGVNMw/viewform?pli=1"}
                    >
                        {riktData.registration.button}
                    </button>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="contact-us-container">
                <p className="contact-text">{riktData.contact.text}</p>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook-white.png" alt="Facebook" className="contact-icon" />
                    </a>
                    <a href="https://www.instagram.com/rmitshinsei/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-white.png" alt="Instagram" className="contact-icon" />
                    </a>
                </div>
            </div>

            {/* Sponsor Section */}
            <section className="bg-white py-12 text-center">
                <h2 className="text-2xl font-semibold">Thanks to our sponsor</h2>
                <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto mt-6">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="bg-gray-300 h-24"></div>
                    ))}
                </div>
            </section>

            <div className="flex flex-col h-20"> 
                <Footer language={language} />
            </div>
        </section>
    );
};

export default RIKT;