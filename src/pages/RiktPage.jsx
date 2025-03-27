import React from "react";
import "../styles/RIKT.css";
import content from "../configs/content";
import { Footer } from "../components";

const RIKT = ({ language }) => {
    const timelineData = content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;
    const riktAbout = content[language]?.riktAbout || content["en"].riktAbout;

   
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
                <h2 className="about-title">{riktAbout.about[0]}</h2>
                <p className="about-text">
                    {riktAbout.about[1]} <strong>{riktAbout.about[2]}</strong> {riktAbout.about[3]}
                    {riktAbout.about[4]}
                </p>
            </div>

            {/* Event Information Section */}
            <div className="w-full p-4 md:mt-30 event-info-container">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Text Container */}
                    <div className="md:w-7/12 event-details px-1 md:pr-4"> {/* Added px-4 for mobile padding */}
                        <div className="mb-8 w-full">
                        <h1 className="text-left w-full text-[3.5rem] sm:text-[5rem] md:text-[3.5rem] lg:text-[8rem] font-bold text-[#FFCA5A] leading-[0.9] md:leading-[0.8] whitespace-normal md:whitespace-nowrap">
                                {riktAbout.information[0]}<br />{riktAbout.information[1]}
                            </h1>
                        </div>

                        <div className="text-left mt-10 md:mt-25 space-y-5 md:space-y-8 w-full px-1 md:px-0 md:ml-18">
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

                    {/* Map Container */}
                    <div className="md:w-[510px] md:h-[480px] mt-5 md:mt-60 md:mr-10 event-map flex-grow-0">
                        <div className="relative aspect-square w-[400px]">
                            {/* Embedded Google Map */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.0637546456305!2d106.6937685!3d10.729566200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srmit%20sgs!5e0!3m2!1sen!2s!4v1742901966432!5m2!1sen!2s" 
                                width="510" 
                                height="480" 
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

{/*wavy effect*/}
          <div className="wavyeffect">
        <img 
          src="/wavyeffect.png" 
          alt="wavy design"
        />
      </div>
            {/* Sponsor Section */}
<section className="bg-white py-12 text-center">
    <h2 className="text-4xl font-semibold">{riktData.sponsor.text}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:md-30 md:gap-3 max-w-4xl mx-auto mt-4 md:mt-6 px-4">
        {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-gray-300 h-24"></div>
        ))}
        {/* Center the last two elements */}
        <div className="bg-gray-300 h-16 md:h-24 col-span-2 md:col-span-2 mx-auto rounded-sm"></div>
        <div className="bg-gray-300 h-16 md:h-24 col-span-2 md:col-span-2 mx-auto rounded-sm"></div>
    </div>
</section>
            <div className="flex flex-col h-20"> 
                <Footer language={language} />
            </div>
        </section>
    );
};

export default RIKT;
