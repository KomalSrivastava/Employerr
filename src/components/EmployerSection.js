import React from 'react';
import './EmployerSection.css';

const EmployerSection = () => {
  return (
    <div className="container">
      <div className="employer-section">
       
        <div className="employer-box">
          <h2>ARE YOU AN EMPLOYER?</h2>
          <p>Hire in 30 minutes</p>
          <button className="post-job-button">Post Free Job</button>
        </div>

        
        <div className="why-univoc-box">
          <div className="why-univoc-content">
            <h2>WHY UNIVOC?</h2>
            <p className="click-note">Click on each point to know more...</p>
            <ul className="benefits-list">
              <li>Benefits of industry</li>
              <li>Selection of candidates</li>
              <li>Industry benefits</li>
              <li>Benefits to trainees</li>
            </ul>
          </div>
          <div className="image-box">
            <img
              src="/images/linkedin-sales.png" 
              alt="Why Univoc"
              className="univoc-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSection;
