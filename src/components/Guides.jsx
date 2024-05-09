import React, { useState } from 'react';
import './Guides.css';
import testguide from '../Images/testguide1.jpg';
import Booking from './Booking';
const Guides = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false); // State variable to control form visibility

  const openBookingForm = () => {
    setIsBookingOpen(true); // Function to open the booking form
  };
  return (
    <>
      <h2>Book Your Preferred Guide</h2>
      <div className='upc'>
        <div className="profile-container">
          <div className="gradiant"></div>
          <div className='profile-down'>
            <img src={testguide} alt=''/>
            <div className='profile-title'>Test Guide</div>
            <div className='profile-description'>
              <strong>Language:</strong> Nepali, English <br />
              <strong>Daily Rate:</strong> NRP.2500 <br />
              <strong>Location:</strong> Kathmandu, Nepal <br />
              <strong>Rating:</strong> 
         
            </div>
            <div className='profile-button'><a href='#' onClick={openBookingForm}>Send request</a></div>
          </div>
        </div>
        
        <div className="profile-container">
          <div className="gradiant"></div>
          <div className='profile-down'>
            <img src={testguide} alt=''/>
            <div className='profile-title'>Test Guide</div>
            <div className='profile-description'>
              I have 6 years of experience in this field. 
            </div>
            <div className='profile-button'><a href='#' onClick={openBookingForm}>Send request</a></div>
          </div>
        </div>
        
        <div className="profile-container">
          <div className="gradiant"></div>
          <div className='profile-down'>
            <img src={testguide} alt=''/>
            <div className='profile-title'>Test Guide</div>
            <div className='profile-description'>
              I have 6 years of experience in this field. 
            </div>
            <div className='profile-button'><a href='#' onClick={openBookingForm}>Send request</a></div>
          </div>
        </div>
      </div>
      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} />}
    </>
  );
};

export default Guides;
