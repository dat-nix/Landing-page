import React from "react";
import "../styles/RIKT.css";
import content from "../configs/content";

const RIKT = ( {language} ) => {
    const timelineData= content[language]?.timelineData || content["en"].timelineData;
    const riktData = content[language]?.riktData || content["en"].riktData;
    
    return (
        <section className="timeline-section relative">
          {/* Tournament Banner Section */}
          <div className="banner-section">
        <img 
          src="/rmit-kendo-club.png" 
          alt="RMIT Ichigeki Kendo Tournament 2025"
        />
      </div>

      <div className="about-section">
    <h2 className="about-title">ABOUT THE EVENT</h2>
    <p className="about-text">
        Hosted by RMIT Shinsei Kendo Club, The <strong>RMIT Ichigeki Kendo Tournament</strong> aims to create opportunities 
        for young kendokas to compete, improve their skills, and strengthen the Kendo community in Ho Chi Minh city.
    </p>
</div>
            <h1 className="timeline-title"> {riktData.eventTimeline} </h1>

            {timelineData.map((day, index) => (
                <div key={index} className="timeline-card">
                    <h2 className="timeline-date">{day.date}</h2>

                    <div className="timeline-container">
                        <div className="timeline-connector "></div>

                        {day.events.map((event, idx) => (
                            <div key={idx} className="timeline-event">
                                <div className="timeline-dot"></div>
                                <div className="event-info">
                                    <span className="event-time">
                                        {event.time}
                                    </span>
                                    <span className="event-activity">
                                        {event.activity}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* ▼▼▼ Registrationa and requirement section ▼▼▼ */}
            <div className="requirements-container">
                <div className="requirement-card">
                    <h2 className="requirement-title">
                        { riktData.eligibility.title }
                    </h2>
                    <p className="requirement-text"> {riktData.eligibility.requirements[0] } </p>
                    <p className="requirement-text">
                        {riktData.eligibility.requirements[1]}
                    </p>
                </div>

                <div className="requirement-card">
                    <h2 className="requirement-title"> {riktData.registration.title} </h2>
                    <p className="registration-text">
                       {riktData.registration.description} 
                    </p>
                    <button className="register-button">{riktData.registration.button}</button>
                </div>
            </div>
            {/* ▲▲▲ END OF NEW SECTION ▲▲▲ */}
            {/* ▼▼▼ Contact Us Section ▼▼▼ */}
            <div className="contact-us-container">
                <p className="contact-text">
                   {riktData.contact.text} 
                </p>
                <div className="contact-icons">
                    <a
                        href="https://www.facebook.com/rmitshinsei"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/facebook-white.png"
                            alt="Facebook"
                            className="contact-icon"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/rmitshinsei/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/instagram-white.png"
                            alt="Instagram"
                            className="contact-icon"
                        />
                    </a>
                </div>
            </div>
            {/* ▲▲▲ End of Contact Us Section ▲▲▲ */}
        </section>
    );
}

export default RIKT;