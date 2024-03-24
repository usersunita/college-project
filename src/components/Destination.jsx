import React from 'react'
import Muktinath_Temple from "../Images/Muktinath_Temple.jpg"
import TempleSnow from "../Images/TempleSnow.jpg"
import Lumbini from "../Images/Lumbini.jpeg"
import lumbini1 from"../Images/lumbini1.jpg"
import "./Destination.css";
const Destination = () => {
  return (
    <>
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Good guide gives us better experience and make ur trip worthy</p>
    <div className='first-des-reverse'>
        <div className='des-text'>
            <h2>Mustang Valley</h2>
            <p>Mustang is known for its trekking tours and mountain sightseeing. Elevated at an altitude of 3840
                 kilometres, this city is divided into two parts: Lower and Upper Mustang. Even though it is relatively
                  unexplored, this city is a great destination for those who want to immerse in Tibetan culture as well
                   as in Nepalese lifestyle as it is located near the Tibetan Plateau.</p>
        </div>
        <div className='Image'>
            <img alt="img" src={Muktinath_Temple}/>
            <img alt="img" src={TempleSnow}/>
        </div>
    </div>
    </div>
    <div className='destination'>
    <div className='first-des'>
        <div className='des-text'>
            <h2>Limbini</h2>
            <p>Lumbini, the Birthplace of the Lord Buddha
Siddhartha Gautama, the Lord Buddha, was born in 623 B.C. in the famous gardens of Lumbini, which soon became a place
 of pilgrimage. Among the pilgrims was the Indian emperor Ashoka, who erected one of his commemorative pillars there.
 The site is now being developed as a Buddhist pilgrimage centre, where the archaeological remains associated with the
  birth of the Lord Buddha form a central feature.</p>
        </div>
        <div className='Image'>
            <img alt="img" src={Lumbini}/>
            <img alt="img" src={lumbini1}/>
        </div>
        
    </div>
    </div>
   </> 
  )
}

export default Destination
