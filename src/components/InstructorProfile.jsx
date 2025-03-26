import React from 'react';
import '../styles/InstructorProfile.css';
import {content } from '../configs/content';

const InstructorProfile = ({ language }) => { 
  const instructor= content[language]?.instructor || content["en"].instructor;

  return (
    <div className="instructor-profile-container">
      {/* Layer 1: Gallery Grid with Infinite Slider */}
      <div className="gallery-grid">
        <div className="gallery-track">
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 1" /></div>
          <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 2" /></div>
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 3" /></div>
          <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 4" /></div>
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 5" /></div>
          
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 1" /></div>
          <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 2" /></div>
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 3" /></div>
          <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 4" /></div>
          <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 5" /></div>
        </div>
      </div>

      {/* Layer 2: Centered Mockup */}
      <div className="center-mockup">
        <img 
          src="../profile.png" 
          alt="Instructor Profile" 
          className="mockup-image"
        />
      </div>

      {/* Layer 3: Text Overlay */}
      <div className="text-overlay">
         <div className="left-orange-text">
         <h1>OH</h1>
        <h1>JAE</h1>
        <h1>HUN</h1>
    </div>
        <div className="right-black-text">
          <p>{instructor.rank}</p>
          <p>{instructor.years}</p>
          <p>{instructor.president}</p>
          <p>{instructor.viceCoach}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
