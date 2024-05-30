import React, { useEffect, useState } from 'react';
import { Space, Table, Typography,Button, Tag} from 'antd';

const { Title } = Typography;

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost/php%20backend/booking.php') // Replace with the path to your PHP script
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/booking.php?action=delete&id=${id}`)
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
    fetch(`http://localhost/php%20backend/booking.php?action=accept&id=${id}`)
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
    
    {
      title: "ID",
      dataIndex: "id",
    },{
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },
    {
      title: "Tour Date",
      dataIndex: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
    },
    {
      title: "No of Days",
      dataIndex: "days",
    },
    {
      title: "Destination",
      dataIndex: "destination",
    },
    {
      title: "No of Person",
      dataIndex: "person",
    },
    {
      title: "Type of Tour",
      dataIndex: "type",
    },
    {
      title: "Message for Guide",
      dataIndex: "message",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
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
            <Button type="primary" danger onClick={() => handleDelete(record.id)}>Delete</Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>All Booking</Typography.Title>
        <Table
          columns={columns}
          dataSource={bookings}
          loading={loading}
          pagination={{ pageSize: 3 }}
        />
      </Space>
    </div>
  );
}

export default Booking;