
import React, { useState } from 'react';
import './Herostyle.css';
import gokyo from '../Images/gokyo.jpg';
import LoginForm from './loginwithzod';


const Hero = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="hero">
      <img alt='homeimg' src={gokyo} />

      <div className='hero-text'>
        <h1>Let's Make Wonderful Memories</h1>
        <p>Choose your preferred Guide</p>
        <a href='/' className='btnClass' onClick={handleLoginClick}>
          <span className='show'>Log in</span>
        </a>
      </div>

      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
    </div>
  );
};

export default Hero;

