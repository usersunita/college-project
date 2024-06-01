import React from 'react';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import service from "../Images/service.webp";

function Service() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden' }}>
        <img alt='heroimg' src={service} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

       {/* <div style={{
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
          <h1>We are here to serve you</h1>
        </div>*/}
      </div>
      
      <div style={{ flex: '1', overflowY: 'auto' }}>
        <Trip />
      </div>
      
      <Footer />
    </div>
  );
}

export default Service;
