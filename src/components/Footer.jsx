/*import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
            <h1>Banepa Travels</h1>
            <p>Lets Explore Together</p>
        </div>
        <div>
            <a href=''>
                <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href=''>
                <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href=''>
                <i className='fa-brands fa-twitter-square'></i>
            </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
        <h4>Project</h4>
        <a href='/'>Status</a>
        <a href='/'>License</a>
      </div>
      <div>
      <h4>Community</h4>
        <a href='/'>Issues</a>
        <a href='/'>Twitter</a>
        </div>
        <div>
        <h4>Help</h4>
        <a href='/'>Support</a>
        <a href='/'>Contact</a>
        </div>
        </div>
    </div>
  )
}

export default Footer*/
import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Banepa Travels</h1>
          <p>Let's Explore Together</p>
        </div>
        <div className='social-icons'>
          <a href=''>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href=''>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href=''>
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Project</h4>
          <a href='/'>Status</a>
          <a href='/'>License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href='/'>Issues</a>
          <a href='/'>Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href='/'>Support</a>
          <a href='/'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

