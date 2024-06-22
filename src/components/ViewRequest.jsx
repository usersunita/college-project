// import React from 'react'

// const ViewRequest = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ViewRequest


import React, { useEffect, useState } from 'react';
import { Space, Table, Typography, Button, Tag } from 'antd';
import Session from 'react-session-api';

const { Title } = Typography;

function ViewRequest() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = Session.get("user_id");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/viewrequest.php?userId=${userId}`, {
      credentials: 'include' // This ensures cookies are sent with the request
    })
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  }, [userId]);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/viewrequest.php?action=delete&id=${id}`, {
      credentials: 'include' // This ensures cookies are sent with the request
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        if (data.success) {
          setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
        setLoading(false);
      });
  };

  const handleAccept = (id) => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/viewrequest.php?action=accept&id=${id}`, {
      credentials: 'include' // This ensures cookies are sent with the request
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        if (data.success) {
          setBookings(prevBookings => prevBookings.map(booking => {
            if (booking.id === id) {
              return { ...booking, status: 'Accepted' };
            }
            return booking;
          }));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error accepting booking:', error);
        setLoading(false);
      });
  };

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
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          {record.status !== 'Accepted' && (
            <Button type="primary" onClick={() => handleAccept(record.id)}>Accept</Button>
          )}
          {record.status === 'Accepted' && (
            <Tag color="green">Accepted</Tag>
          )}
          {record.status !== 'Accepted' && (
            <Button type="primary" danger onClick={() => handleDelete(record.id)}>Reject</Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space size={20} direction='vertical'>
        <Title level={4}>All Booking</Title>
        <Table
          columns={columns}
          dataSource={Array.isArray(bookings) ? bookings : []} // Ensure bookings is always an array
          loading={loading}
          pagination={{ pageSize: 3 }}
        />
      </Space>
    </div>
  );
}

export default ViewRequest;
