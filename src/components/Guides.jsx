
// import React, { useState, useEffect } from 'react';
// import './Guides.css';
// import Booking from './Booking';
// import Star from './star';
// import { Feedback } from './Feedback';
// import Session from 'react-session-api';

// const Guides = () => {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [guides, setGuides] = useState([]);
//   const [ratings, setRatings] = useState([]);
//   const [showFeedback, setShowFeedback] = useState(null); // Track which guide's feedback form is open
//   const [guideId, setGuideId] = useState(null);

//   const userId = Session.get("user_id");

//   const openBookingForm = (guideId) => {
//     setGuideId(guideId);
//     setIsBookingOpen(true);
//   };

//   const openFeedbackForm = (guideId) => {
//     setShowFeedback(guideId);
//   };

//   const closeFeedbackForm = () => {
//     setShowFeedback(null);
//   };

//   useEffect(() => {
//     fetch('http://localhost/php%20backend/profiledata.php')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched guides:', data);
//         setGuides(data);
//       })
//       .catch(error => console.error('Error fetching guides:', error));

//     fetch('http://localhost/php%20backend/feedbackrating.php')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched ratings:', data);
//         setRatings(data);
//       })
//       .catch(error => console.error('Error fetching ratings:', error));
//   }, []);

//   const fallbackImageUrl = '/fallback.jpg'; // Provide the fallback URL

//   const getRatingForGuide = (guideId) => {
//     const ratingData = ratings.find(rating => rating.guide_id === guideId);
//     return ratingData ? ratingData : { average_rating: 0, reviews_count: 0 };
//   };

//   return (
//     <>
//       <h2>Book Your Preferred Guide</h2>
//       <div className='upc'>
//         {guides.map(guide => {
//           const { average_rating, reviews_count } = getRatingForGuide(guide.id);
//           const imageUrl = guide.image_path ? `http://localhost/php%20backend/${guide.image_path.replace("C:xampphtdocsphp backend/", "")}` : fallbackImageUrl;

//           return (
//             <div key={guide.id} className='profile-container'>
//               <div className="gradiant"></div>
//               <div className='profile-down'>
//                 <img
//                   src={imageUrl}
//                   alt={guide.name}
//                   onError={(e) => { e.target.src = fallbackImageUrl; }}
//                 />
//                 <div className='profile-title'>{guide.name}</div>
//                 <div className='profile-description'>
//                   <>Language:</> {guide.languages} <br />
//                   <>Daily Rate:</> {guide.dailyRate} <br />
//                   <>Skills:</> {guide.skills} <br />
//                   <>Areas:</> {guide.area} <br />
//                   <Star stars={average_rating} reviews={reviews_count} />
//                 </div>
//                 <div className='profile-button'>
//                   <div>
//                   <button onClick={() => openBookingForm(guide.id)}>Send request</button> </div>
//                  <div> <button onClick={() => openFeedbackForm(guide.id)}>Give Feedback</button> </div>
//                 </div>
//                 {showFeedback === guide.id && (
//                   <Feedback guideId={guide.id} userId={userId} onClose={closeFeedbackForm} />
//                 )}
//               </div>
//             </div>
//           );
          
//         })}
//       </div>
//       {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} userId={userId} guideId={guideId} />}
//     </>
//   );
// };

// export default Guides;
// import React, { useState, useEffect } from 'react';
// import './Guides.css';
// import Booking from './Booking';
// import Star from './star';
// import { Feedback } from './Feedback';
// import Session from 'react-session-api';

// const Guides = () => {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [guides, setGuides] = useState([]);
//   const [ratings, setRatings] = useState([]);
//   const [showFeedback, setShowFeedback] = useState(null); // Track which guide's feedback form is open
//   const [guideId, setGuideId] = useState(null);

//   const userId = Session.get("user_id");

//   const openBookingForm = (guideId) => {
//     setGuideId(guideId);
//     setIsBookingOpen(true);
//   };

//   const openFeedbackForm = (guideId) => {
//     setShowFeedback(guideId);
//   };

//   const closeFeedbackForm = () => {
//     setShowFeedback(null);
//   };

//   useEffect(() => {
//     fetch('http://localhost/php%20backend/profiledata.php')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched guides:', data);
//         setGuides(data);
//       })
//       .catch(error => console.error('Error fetching guides:', error));

//     fetch('http://localhost/php%20backend/feedbackrating.php')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched ratings:', data);
//         setRatings(data);
//       })
//       .catch(error => console.error('Error fetching ratings:', error));
//   }, []);

//   const fallbackImageUrl = '/fallback.jpg'; // Provide the fallback URL

//   const getRatingForGuide = (guideId) => {
//     const ratingData = ratings.find(rating => rating.guide_id === guideId);
//     return ratingData ? ratingData : { average_rating: 0, reviews_count: 0 };
//   };

//   return (
//     <>
//       <div className="header-container">
//         <h2>Book Your Preferred Guide</h2>
//         <button className="status-button">Request Status</button>
//       </div>
//       <div className='upc'>
//         {guides.map(guide => {
//           const { average_rating, reviews_count } = getRatingForGuide(guide.id);
//           const imageUrl = guide.image_path ? `http://localhost/php%20backend/${guide.image_path.replace("C:xampphtdocsphp backend/", "")}` : fallbackImageUrl;

//           return (
//             <div key={guide.id} className='profile-container'>
//               <div className="gradiant"></div>
//               <div className='profile-down'>
//                 <img
//                   src={imageUrl}
//                   alt={guide.name}
//                   onError={(e) => { e.target.src = fallbackImageUrl; }}
//                 />
//                 <div className='profile-title'>{guide.name}</div>
//                 <div className='profile-description'>
//                   <>Language:</> {guide.languages} <br />
//                   <>Daily Rate:</> {guide.dailyRate} <br />
//                   <>Skills:</> {guide.skills} <br />
//                   <>Areas:</> {guide.area} <br />
//                   <Star stars={average_rating} reviews={reviews_count} />
//                 </div>
//                 <div className='profile-button'>
//                   <div>
//                     <button onClick={() => openBookingForm(guide.id)}>Send request</button>
//                   </div>
//                   <div>
//                     <button onClick={() => openFeedbackForm(guide.id)}>Give Feedback</button>
//                   </div>
//                 </div>
//                 {showFeedback === guide.id && (
//                   <Feedback guideId={guide.id} userId={userId} onClose={closeFeedbackForm} />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} userId={userId} guideId={guideId} />}
//     </>
//   );
// };

// export default Guides;

// Guides.js

import React, { useState, useEffect } from 'react';
import './Guides.css';
import Booking from './Booking';
import Star from './star';
import { Feedback } from './Feedback';

import Session from 'react-session-api';
import ViewRequest from './ViewRequest';

const Guides = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [guides, setGuides] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [showFeedback, setShowFeedback] = useState(null); // Track which guide's feedback form is open
  const [guideId, setGuideId] = useState(null);
  const [showViewRequests, setShowViewRequests] = useState(false); 

  const userId = Session.get("user_id");

  const openBookingForm = (guideId) => {
    setGuideId(guideId);
    setIsBookingOpen(true);
  };

  const openFeedbackForm = (guideId) => {
    setShowFeedback(guideId);
  };

  const closeFeedbackForm = () => {
    setShowFeedback(null);
  };

  useEffect(() => {
    fetch('http://localhost/php%20backend/profiledata.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched guides:', data);
        setGuides(data);
      })
      .catch(error => console.error('Error fetching guides:', error));

    fetch('http://localhost/php%20backend/feedbackrating.php')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched ratings:', data);
        setRatings(data);
      })
      .catch(error => console.error('Error fetching ratings:', error));
  }, []);

  const fallbackImageUrl = '/fallback.jpg';

  const getRatingForGuide = (guideId) => {
    const ratingData = ratings.find(rating => rating.guide_id === guideId);
    return ratingData ? ratingData : { average_rating: 0, reviews_count: 0 };
  };

  const toggleViewRequests = () => {
    setShowViewRequests(!showViewRequests);
  };

  return (
    <>
      <div className="header-container">
        <h2>Book Your Preferred Guide</h2>
        <button className="status-button" onClick={toggleViewRequests}>Request Status</button>
      </div>
      {showViewRequests ? (
        <ViewRequest /> 
      ) : (
        <div className='upc'>
          {guides.map(guide => {
            const { average_rating, reviews_count } = getRatingForGuide(guide.id);
            const imageUrl = guide.image_path ? `http://localhost/php%20backend/${guide.image_path.replace("C:xampphtdocsphp backend/", "")}` : fallbackImageUrl;

            return (
              <div key={guide.id} className='profile-container'>
                <div className="gradiant"></div>
                <div className='profile-down'>
                  <img
                    src={imageUrl}
                    alt={guide.name}
                    onError={(e) => { e.target.src = fallbackImageUrl; }}
                  />
                  <div className='profile-title'>{guide.name}</div>
                  <div className='profile-description'>
                    <>Language:</> {guide.languages} <br />
                    <>Daily Rate:</> {guide.dailyRate} <br />
                    <>Skills:</> {guide.skills} <br />
                    <>Areas:</> {guide.area} <br />
                    <Star stars={average_rating} reviews={reviews_count} />
                  </div>
                  <div className='profile-button'>
                    <div>
                      <button onClick={() => openBookingForm(guide.id)}>Send request</button>
                    </div>
                    <div>
                      <button onClick={() => openFeedbackForm(guide.id)}>Give Feedback</button>
                    </div>
                  </div>
                  {showFeedback === guide.id && (
                    <Feedback guideId={guide.id} userId={userId} onClose={closeFeedbackForm} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isBookingOpen && <Booking onClose={() => setIsBookingOpen(false)} userId={userId} guideId={guideId} />}
    </>
  );
};

export default Guides;



