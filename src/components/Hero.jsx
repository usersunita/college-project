
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

/*
import React, { useState, useEffect } from 'react';
import './Herostyle.css';
import LoginForm from './loginwithzod';

const Hero = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [heroContent, setHeroContent] = useState({
    title: "Let's Make Wonderful Memories",
    subtitle: "Choose your preferred Guide",
    image_url: "default-image-path/gokyo.jpg"
  });

  useEffect(() => {
    fetch('http://localhost/php%20backend/herocontent.php')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setHeroContent(data.data);
        }
      })
      .catch(error => console.error('Error fetching hero content:', error));
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="hero">
      <img alt='homeimg' src={heroContent.image_url} />

      <div className='hero-text'>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.subtitle}</p>
        <a href='/' className='btnClass' onClick={handleLoginClick}>
          <span className='show'>Log in</span>
        </a>
      </div>

      {showLoginForm && <LoginForm onClose={handleCloseLoginForm} />}
    </div>
  );
};

export default Hero;
*/

