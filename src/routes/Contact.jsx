import React from 'react'
import Footer from '../components/Footer';
import Forms from '../components/Forms';
function Contact() {
  return (
    <div>
       
      <div className="hero-mid">
      <img alt='heroimg' src='https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     <div className='hero-text'>
      <h1>Contact us</h1>
      <p>Lets Get Connected</p>
     
     </div>
    </div>
    <Forms/>
    <Footer/>
    </div>
  );
}

export default Contact
