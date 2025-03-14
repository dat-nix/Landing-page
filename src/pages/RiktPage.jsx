import React from 'react';
import { Scoreboard } from '../components';
import "../styles/RIKT.css";
{/*Date and time*/}
function RIKT() {
  const timelineData = [
    {
      date: "May 30th 2025",
      events: [
        { time: "8:00 AM", activity: "Check-in and shinai check" },
        { time: "9:15 AM", activity: "Opening Ceremony" },
        { time: "9:30 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:00 PM", activity: "Award Ceremony" }
      ]
    },
    {
      date: "May 31st 2025",
      events: [
        { time: "8:00 AM", activity: "Check-in and shinai check" },
        { time: "9:15 AM", activity: "Opening Ceremony" },
        { time: "9:30 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:00 PM", activity: "Award Ceremony" }
      ]
    },
    {
      date: "June 1st 2025",
      events: [
        { time: "8:15 AM", activity: "Overview Ceremony" },
        { time: "9:30 AM", activity: "Morning Matches" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Afternoon Matches" },
        { time: "3:00 PM", activity: "Award Ceremony" }
      ]
    }
  ];

  return (
    <section className="timeline-section">
      <h1 className="timeline-title">Event Timeline</h1>

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
      {/* ▼▼▼ Registrationa and requirement section ▼▼▼ */}
<div className="requirements-container">
  <div className="requirement-card">
    <h2 className="requirement-title">Eligibility Requirements</h2>
    <p className="requirement-text">+ Above 18 years old</p>
    <p className="requirement-text">+ For 0-dan participants, you must be able to fight in bogu</p>
  </div>
  
  <div className="requirement-card">
    <h2 className="requirement-title">How to Register</h2>
    <p className="registration-text">
      To participate, complete the registration form before and submit it before April 1st, 2025.
    </p>
    <button className="register-button">Comming soon...</button>
  </div>
</div>
      {/* ▲▲▲ END OF NEW SECTION ▲▲▲ */}
      {/* ▼▼▼ Contact Us Section ▼▼▼ */}
  <div className="contact-us-container">
  <p className="contact-text">If there's any questions, contact us at:</p>
  <div className="contact-icons">
    <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
    <img src="/public/facebook-white.png" alt="Facebook" className="contact-icon" /></a>
    <a href="https://www.instagram.com/rmitshinsei/" target="_blank" rel="noopener noreferrer">
    <img src="/public/instagram-white.png" alt="Instagram" className="contact-icon" /></a>
  </div>
</div>
{/* ▲▲▲ End of Contact Us Section ▲▲▲ */}
    </section>
  );
}

export default RIKT;