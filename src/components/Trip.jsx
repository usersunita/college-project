import React from 'react'
import "./Trip.css";
import Kalinchowk from "../Images/Kalinchowk.jpg"
import pathibhara from "../Images/pathibhara.jpg"
import muktinath from "../Images/Muktinath_Temple.jpg"
import Gokyo from "../Images/gokyo.jpg"
import Lumbini from"../Images/Lumbini.jpeg"
import Namche from "../Images/namche.jpg"
import Pokhara from"../Images/POKHARA.jpg"
const Trip = () => {
  return (
    <div >
      <div className='trip'>
        <h1>Tourist Area</h1>
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
  
        <div className='t-image'>
            <img alt='images' src={Lumbini}/>
            <h4>Trip to </h4>
            <p>Lumbini, the Birthplace of the Lord Buddha
              Siddhartha Gautama, the Lord Buddha, was born in 623 B.C. in the famous gardens of Lumbini, which soon 
              became a place of pilgrimage. Among the pilgrims was the Indian emperor Ashoka, who erected one of his
               commemorative pillars there. The site is now being developed as a Buddhist pilgrimage centre, where the
                archaeological remains associated with the birth of the Lord Buddha form a central feature.
            </p>
        </div>
        
        <div className='t-image'>
            <img alt='images' src={Namche}/>
            <h4>Trip to Namche Bazzar</h4>
            <p>Namche Bazaar (3,500 m) is the staging point for expeditions to Everest and other Himalayan peaks in the 
              area. It has developed into a small, colorful market town selling everything from Tibetan artifacts to 
              trekking, climbing equipment and everything you might need during your trip. The visitor center at park
               headquarters has detailed information on various climbs in the area, memorabilia from different 
               mountaineering expeditions, and information on the lifestyle and culture of the Sherpa people.  </p>
        </div>
        <div className='t-image'>
            <img alt='images' src={Pokhara}/>
            <h4>Trip to Pokhara</h4>
            <p>Pokhara’s tranquil beauty has been the subject of inspiration for many travel writers. Its pristine air, 
            spectacular backdrop of snowy peaks, blue lakes and surrounding greenery make it ‘the jewel in the Himalaya’,
            a place of remarkable natural disposition. With the magnificent Annapurna range forming the backdrop and the
           serenity of the Cluster of 9 Lakes with three major ones - Phewa, Rupa and Begnas – Pokhara is a great destination
            for a weekend getaway as well as a long relaxing holiday. Pokhara Valley, gateway to the Annapurna region where 
            many a trekker finds his Shangri-la, sits high on the list of ‘must visit’ places in Nepal. </p>
        </div>
        <div className='t-image'>
            <img alt='images' src={Gokyo}/>
            <h4>Trek to Gokyo</h4>
            <p>This is one of the more adventurous treks in the Everest region of the Himalayas, following the high route
               pass of Cho La (5330m) into the Base Camp of Mount Everest. This ascent follows the Dudh Koshi and Khumbu
                valleys from the homeland of the Sherpa people to the Gokyo valley, which provides breath-taking views of
                 four 8,000m peaks; Everest, Cho Oyu, Makalu and the largest glacier in Nepal, the Ngozumpa glacier.
                  We visit the turquoise Gokyo lakes before following the high route pass of Cho La (5330m) and then drop
                   into the Khumbu Valley and the base camp of Mount Everest.  </p>
        </div>
      </div>
        </div>
        </div>
  
  
    

  )
}

export default Trip
