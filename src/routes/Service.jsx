import React from 'react'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
import service from "../Images/service.webp";

function Service ()  {
  return (
    <div>
  
  <div>
      <div className="hero-mid">
      <img alt='heroimg' src={service} />

     <div className='hero-text'>
      <h1>We are here to serve you</h1>
    
     </div>
    </div>
    <Trip/>
    </div>
    <Footer/>
    </div>
  )
}

export default Service
