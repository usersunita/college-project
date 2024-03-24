import React from 'react'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus '
import POKHARA from "../Images/POKHARA.jpg"
const About = () => {
  return (
    <div>
      <div className="hero-mid">
      <img alt='heroimg' src={POKHARA} />

     <div className='hero-text'>
      <h1>Know more about us</h1>
     </div>
    </div>
    <Aboutus/>
    <Footer/>
    </div>
  )
}

export default About
