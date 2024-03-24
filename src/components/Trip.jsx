import React from 'react'
import "./Trip.css";
import Kalinchowk from "../Images/Kalinchowk.jpg"
import pathibhara from "../Images/pathibhara.jpg"
import muktinath from "../Images/Muktinath_Temple.jpg"
const Trip = () => {
  return (
    <div >
      <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can descover unique places with ta best guide</p>
        
      <div className='t-card'>
        <div className='t-image'>
            <img alt='images' src={Kalinchowk}/>
            <h4>Trip to Kalinchowk</h4>
            <p>Kalinchowk Bhagwati Temple is a hindu shrine located at eastern hilly region of Nepal Dolakha district.
                 It lies at an altitude of 3842m from sea level and is a part of Gaurishankar Conservation Area.
                  Goddess Bhagwati at Kalinchowk Temple is
                  famous for the fulfillment of pilgrims prayer and desires. </p>
        </div>
      
        <div className='t-image'>
            <img alt='images' src={pathibhara}/>
            <h4>Trip to Pathabhara</h4>
            <p>There is a belief that a pilgrimage to the mountain-top shrine of Pathibhara is all it takes to have one’s wish
             granted by the gods. However, there is also a belief that if the journey is too easy,
              the blessing may not be granted.
            </p>
        </div>
        
        <div className='t-image'>
            <img alt='images' src={muktinath}/>
            <h4>Trip to Mustang</h4>
            <p>Mustang is known for its trekking tours and mountain sightseeing. Elevated at an altitude of 3840
                 kilometres, this city is divided into two parts: Lower and Upper Mustang. Even though it is relatively
                  unexplored, this city is a great destination for those who want to immerse in Tibetan culture as well
                   as in Nepalese lifestyle as it is located near the Tibetan Plateau. </p>
        </div>
        </div>
        </div>
      </div>
  
    

  )
}

export default Trip
