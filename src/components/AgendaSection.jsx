import React, { useState, useRef, useEffect } from 'react';
import '../styles/Agenda.css';

const agendaData = {
  'May 30th': [
    { time: 'SEMINAR', activity: 'To Be Updated' },
  ],
  'May 31st': [
    { time: '8:00 AM', activity: 'Check in and shinai check' },
    { time: '9:15 AM', activity: 'Team Matches' },
    { time: '12:00 PM', activity: 'Lunch Break' },
    { time: '1:00 PM', activity: 'Quarter Finals' },
    { time: '3:00 PM', activity: 'Semifinals & Awards' },
  ],
  'June 1st': [
    { time: '9:00 AM', activity: 'Free Sparring / Mixed Matches' },
    { time: '12:00 PM', activity: 'Lunch Break' },
    { time: '1:00 PM', activity: 'Closing Remarks & Farewell' },
  ]
};

const AgendaSection = () => {
  const dates = Object.keys(agendaData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  // Throttled scroll and navigation
  const navigate = (direction) => {
    if (direction === 'next' && currentIndex < dates.length - 1) {
      animateTransition(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      animateTransition(currentIndex - 1);
    }
  };

  const animateTransition = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 300); // matches CSS transition time
  };

  // Handle scroll
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) navigate('next');
      else if (e.deltaY < 0) navigate('prev');
    };

    const handleKey = (e) => {
      if (e.key === 'ArrowRight') navigate('next');
      else if (e.key === 'ArrowLeft') navigate('prev');
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, [currentIndex]);

  // Handle swipe on touch devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) navigate('prev');
    else if (deltaX < -50) navigate('next');
  };

  return (
    <section
      id="agenda-section"
      ref={containerRef}
      className="agenda-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="agenda-left">
        <h2 className="agenda-title">AGENDA</h2>
        <p className="agenda-subtitle">Choose the date</p>
        {dates.map((date, index) => (
          <p
            key={date}
            className={`agenda-date ${index === currentIndex ? 'active' : ''}`}
          >
            {date.toUpperCase()}
          </p>
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
        <div className={`agenda-timeline ${fade ? 'fade-out' : 'fade-in'}`}>
          {agendaData[dates[currentIndex]].map((item, i) => (
            <div key={i} className="agenda-item">
              <div className="agenda-time">{item.time}</div>
              <div className="agenda-activity">{item.activity}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
