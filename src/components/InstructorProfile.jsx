import React from 'react';
import '../styles/InstructorProfile.css';

const InstructorProfile = () => {
  return (
    <div className="instructor-profile-container">
      {/* Layer 1: Gallery Grid */}
      <div className="gallery-grid">
        <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 1" /></div>
        <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 2" /></div>
        <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 3" /></div>
        <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 4" /></div>
        <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 5" /></div>
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
          <p>6-Dan Kendo</p>
          <p>30 years of experience</p>
          <p>President of KKA Vietnam</p>
          <p>Vice Coach for VN National team</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;