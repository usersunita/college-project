// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const colors = { orange: "#FFBA5A", gray: "#a9a9a9" };

// export const Feedback = ({ guideId, userId }) => {
//   const stars = Array(5).fill(0);
//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   const [feedback, setFeedback] = useState("");

//   const handleClick = value => {
//     setCurrentValue(value);
//   };

//   const handleMouseOver = value => {
//     setHoverValue(value);
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { rating: currentValue, feedback, guide_id: guideId, user_id: userId };

//     fetch('http://localhost/php%20backend/feedback.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//         //window.location.reload();
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <h2>Give your feedback</h2>
//       <div style={{ display: 'flex' }}>
//         {stars.map((_, index) => {
//           return (
//             <FaStar
//               key={index}
//               size={24}
//               style={{ marginRight: 10, cursor: "pointer" }}
//               color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
//               onClick={() => handleClick(index + 1)}
//               onMouseOver={() => handleMouseOver(index + 1)}
//               onMouseLeave={handleMouseLeave}
//             />
//           );
//         })}
//       </div>
//       <textarea
//         placeholder="Write your feedback"
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         style={{
//           border: "1px solid #a9a9a9",
//           borderRadius: 5,
//           width: 300,
//           margin: "20px 0",
//           minHeight: 100,
//           padding: 10
//         }}
//       />
//       <button
//         onClick={handleSubmit}
//         style={{
//           border: "1px solid #a9a9a9",
//           borderRadius: 5,
//           width: 300,
//           padding: 10
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const colors = { orange: "#FFBA5A", gray: "#a9a9a9" };

export const Feedback = ({ guideId, userId }) => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedback, setFeedback] = useState("");

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { rating: currentValue, feedback, guide_id: guideId, user_id: userId };

    fetch('http://localhost/php%20backend/feedback.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 20,
      width: 400,
      margin: "auto",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff"
    }}>
      <h2>Give your feedback</h2>
      <div style={{ display: 'flex' }}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 10, cursor: "pointer" }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <textarea
        placeholder="Write your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{
          border: "1px solid #a9a9a9",
          borderRadius: 5,
          width: "100%",
          margin: "20px 0",
          minHeight: 100,
          padding: 10,
          boxSizing: "border-box"
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          border: "1px solid #a9a9a9",
          borderRadius: 5,
          width: "100%",
          padding: 10,
          backgroundColor: "#f0f0f0",
          cursor: "pointer"
        }}
      >
        Submit
      </button>
    </div>
  );
};

