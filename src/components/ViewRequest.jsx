

import React, { useEffect, useState } from 'react';
import { Space, Table, Typography } from 'antd';
import Session from 'react-session-api';

const { Title } = Typography;

function ViewRequest() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Session.get("user_id");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/viewrequest.php?userId=${userId}`, {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  }, [userId]);

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Client ID", dataIndex: "client_id" },
    { title: "Guide ID", dataIndex: "guide_id" },
    { title: "Tour Date", dataIndex: "date" },
    { title: "Time", dataIndex: "time" },
    { title: "No of Days", dataIndex: "days" },
    { title: "Destination", dataIndex: "destination" },
    { title: "No of Person", dataIndex: "person" },
    { title: "Type of Tour", dataIndex: "type" },
    { title: "Message for Guide", dataIndex: "message" },
    { title: "Status", dataIndex: "status" },
  ];

  return (
    <div>
      <Space size={20} direction='vertical'>
        <Title level={4}>All Booking</Title>
        <Table
          columns={columns}
          dataSource={Array.isArray(bookings) ? bookings : []}
          loading={loading}
          pagination={{ pageSize: 3 }}
        />
      </Space>
    </div>
  );
}

export default ViewRequest;
