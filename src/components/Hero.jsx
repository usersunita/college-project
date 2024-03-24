import React from 'react'
import "./Herostyle.css"
import gokyo from "../Images/gokyo.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <img alt='homeimg' src={gokyo}/>

     <div className='hero-text'>
      <h1>Lets Make Wonderful Memories</h1>
      <p>Choose your prefered Guide</p>
      <a href='/' className='btnClass'><span className='show'>More Info</span></a>
     </div>
    </div>
  )
}

export default Hero
