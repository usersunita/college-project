
import React from 'react';
import Footer from '../components/Footer';
import Forms from '../components/Forms';
import contact from '../Images/contact.avif'

function Contact() {
  return (
    <div style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden' }}>
        <img 
          alt='heroimg' 
          src={contact} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
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
          <h1>Contact us</h1>
          <p>Let's Get Connected</p>
        </div>
      </div>
      <div style={{ flex: '1', overflow: 'hidden' }}>
        <Forms />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

