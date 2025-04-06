import React, { useState } from 'react';
import '../styles/Agenda.css';

const agendaData = {
  //6:30 pm: seminar begin
  //8:30 pm: seminar ends

  'May 30th': [
    { time: '6:30 PM', activity: 'Seminar begin' },
    { time: '8:30 PM', activity: 'Seminar ends' },
  ],
  /**/
  'May 31st': [
    { time: "8:00 AM", activity: "Check-in" },
    { time: "9:30 AM", activity: "Opening Ceremony" },
    { time: "10:00 AM", activity: "Morning Matches" },
    { time: "12:00 PM", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "Afternoon Matches" },
    { time: "4:30 PM", activity: "End of day 1" },
  ],
  'June 1st': [
    { time: "8:00 AM", activity: "Check-in" },
    { time: "9:10 AM", activity: "Day 2 Opening Speech" },
    { time: "9:15 AM", activity: "Morning matches" },
    { time: "12:00 PM", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "Afternoon Matches" },
    { time: "3:45 PM", activity: "Awards and Closing Ceremony" },
  ]
};

const AgendaSection = () => {
  const dates = Object.keys(agendaData);
  const [currentIndex, setCurrentIndex] = useState(0); // Default to May 30th
  const [fade, setFade] = useState(false);
  const [selectedDate, setSelectedDate] = useState('May 30th');

  // Handle click on a date button
  const handleDateClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 300); // Match the fade transition time
  };

  return (
    <section id="agenda-section" className="agenda-section">
      <div className="agenda-left">
        <h2 className="agenda-title">AGENDA</h2>
        <p className="agenda-subtitle">Choose the date</p>
        {dates.map((date, index) => (
          <button
            key={date}
            className={`agenda-date ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDateClick(index)}
          >
            {date.toUpperCase()}
          </button>
        ))}
        <div className="agenda-dots">
          {dates.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="agenda-right">
        {currentIndex !== null && (
          <div className={`agenda-timeline ${fade ? 'fade-out' : 'fade-in'}`}>
            {agendaData[dates[currentIndex]].map((item, i) => (
              <div key={i} className="agenda-item">
                <div className="agenda-time">{item.time}</div>
                <div className="agenda-activity">{item.activity}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AgendaSection;
