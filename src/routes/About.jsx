import React from 'react';
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus '
import POKHARA from "../Images/POKHARA.jpg";

const About = () => {
  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden' }}>
        <img alt='heroimg' src={POKHARA} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        <div style={{
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white', 
          textAlign: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '1rem', 
          borderRadius: '10px'
        }}>
          <h1>Know more about us</h1>
        </div>
      </div>
      <div style={{ flex: '1', overflowY: 'auto' }}>
        < Aboutus/>
      </div>
      <Footer />
    </div>
  );
};

export default About;
