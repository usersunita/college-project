import React, { useEffect, useState } from 'react';
import { Table, Typography, Button, Space } from 'antd';

const { Title } = Typography;

function Reviews() {
  const [review, setreview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost/php%20backend/feedbackdata.php')
      .then(response => response.json())
      .then(data => {
        setreview(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching review:', error);
        setLoading(false);
      });
  }, []);
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Rating', dataIndex: 'rating' },
    { title: 'Feedback', dataIndex: 'feedback' },
    { title: 'Client_id', dataIndex: 'client_id' },
    { title: 'Guide_id', dataIndex: 'guide_id' },
    
  ];

  return (
    <>
      <Title level={4}>All Feedbacks</Title>
      <Table
        columns={columns}
        dataSource={review}
        loading={loading}
        pagination={{ pageSize: 3 }}
      />
    </>
  );
}

export default Reviews;