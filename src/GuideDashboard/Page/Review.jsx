// import React, { useEffect, useState } from 'react';
// import { Table, Typography, Button, Space } from 'antd';

// const { Title } = Typography;

// function Review() {
//   const [review, setreview] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://localhost/php%20backend/feedbackdata.php')
//       .then(response => response.json())
//       .then(data => {
//         setreview(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching review:', error);
//         setLoading(false);
//       });
//   }, []);
//   const columns = [
//     { title: 'ID', dataIndex: 'id' },
//     { title: 'Rating', dataIndex: 'rating' },
//     { title: 'Feedback', dataIndex: 'feedback' },
//     { title: 'Client_id', dataIndex: 'client_id' },
//     { title: 'Guide_id', dataIndex: 'guide_id' },
    
//   ];

//   return (
//     <>
//       <Title level={4}>All Feedbacks</Title>
//       <Table
//         columns={columns}
//         dataSource={review}
//         loading={loading}
//         pagination={{ pageSize: 3 }}
//       />
//     </>
//   );
// }

// export default Review;

import React, { useEffect, useState } from 'react';
import { Table, Typography, message } from 'antd';
import Session from 'react-session-api';

const { Title } = Typography;

function Review() {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Session.get("user_id"); // Get user_id from session

  useEffect(() => {
    if (userId) {
      setLoading(true);
      fetch(`http://localhost/php%20backend/reviewdata.php`, {
        credentials: 'include' // Include credentials to handle session cookies
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Fetched data:', data); // Log the fetched data for debugging
          if (Array.isArray(data)) {
            setReview(data);
          } else {
            throw new Error('Invalid data format');
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching review:', error);
          message.error('Error fetching review');
          setLoading(false);
        });
    }
  }, [userId]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    { title: 'Feedback', dataIndex: 'feedback', key: 'feedback' },
    { title: 'Client ID', dataIndex: 'client_id', key: 'client_id' },
    { title: 'Guide ID', dataIndex: 'guide_id', key: 'guide_id' },
  ];

  return (
    <>
      <Title level={4}>All Feedbacks</Title>
      <Table
        columns={columns}
        dataSource={review}
        loading={loading}
        pagination={{ pageSize: 3 }}
        rowKey="id" // Ensure each row has a unique key
      />
    </>
  );
}

export default Review;


