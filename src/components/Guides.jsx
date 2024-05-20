
import React, { useState, useEffect } from 'react';
import './Guides.css';
import Booking from './Booking';
import Star from './star';
import { Feedback } from './Feedback';

const Guides = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [guides, setGuides] = useState([]);
  const [showFeedback, setShowFeedback] = useState(null); // Track which guide's feedback form is open

  const openBookingForm = () => {
    setIsBookingOpen(true);
  };

  useEffect(() => {
    fetch('http://localhost/php%20backend/profiledata.php')
      .then(response => response.json())
      .then(data => setGuides(data))
      .catch(error => console.error('Error fetching guides:', error));
  }, []);

  const fallbackImageUrl = '/fallback.jpg'; // Provide the fallback URL

  return (
    <>
      <h2>Book Your Preferred Guide</h2>
      <div className='upc'>
        {guides.map(guide => (
          <div key={guide.id} className='profile-container'>
            <div className="gradiant"></div>
            <div className='profile-down'>
             <img src={guide.image_path || fallbackImageUrl} alt={guide.name} />
              <div className='profile-title'>{guide.name}</div>
              <div className='profile-description'>
                <>Language:</> {guide.languages} <br />
                <>Daily Rate:</> {guide.dailyRate} <br />
                <>Skills:</> {guide.skills} <br />
                <Star stars={guide.rating} reviews={guide.reviews} />
              </div>
              <div className='profile-button'>
                <a href='#' onClick={openBookingForm}>Send request</a>
              </div>
              <div className='profile-button'>
                <button onClick={() => setShowFeedback(guide.id)}>Give Feedback</button>
              </div>
              {showFeedback === guide.id && <Feedback />}
            </div>
          </div>
        ))}
      </div>
      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} />}
    </>
  );
};

export default Guides;

