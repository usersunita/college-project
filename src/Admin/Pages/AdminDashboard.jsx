
import { Typography, Space, Statistic, Card, Table } from 'antd';
import { useEffect, useState } from 'react';

const { Title } = Typography;

function AdminDashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [guidesCount, setGuidesCount] = useState(0);
  
  useEffect(() => {
    fetchUsersCount();
    fetchBookingCount();
    fetchReviewCount();
    fetchGuidesCount();
  }, []);

  const fetchUsersCount = async () => {
    try {
      const response = await fetch('http://localhost/php%20backend/usercount.php');
      const data = await response.json();
      setUsersCount(data.count);
    } catch (error) {
      console.error('Error fetching users count:', error);
    }
  };

  const fetchBookingCount = async () => {
    try {
      const response = await fetch('http://localhost/php%20backend/bookingcount.php');
      const data = await response.json();
      setBookingCount(data.count);
    } catch (error) {
      console.error('Error fetching booking count:', error);
    }
  };

  const fetchReviewCount = async () => {
    try {
      const response = await fetch('http://localhost/php%20backend/reviewcount.php');
      const data = await response.json();
      setReviewCount(data.count);
    } catch (error) {
      console.error('Error fetching tourist count:', error);
    }
  };

  const fetchGuidesCount = async () => {
    try {
      const response = await fetch('http://localhost/php%20backend/guidecount.php');
      const data = await response.json();
      setGuidesCount(data.count);
    } catch (error) {
      console.error('Error fetching guides count:', error);
    }
  };

  return (
    <div>
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard title={"Users"} value={usersCount} />
          <DashboardCard title={"Booking"} value={bookingCount} />
           <DashboardCard title={"Review"} value={reviewCount} /> 
          <DashboardCard title={"Guides"} value={guidesCount} />
        </Space>
        <Space>
          <RecentInquiries />
        </Space>
      </Space>
    </div>
  );
}

function DashboardCard({ title, value }) {
  return (
    <div style={{ marginRight: 20 }}>
      <Card style={{ borderRadius: 20, fontSize: 24, padding: 8, width: '400', height: '300' }}>
        <Space direction="horizontal">
          <Statistic title={<span style={{ color: 'black' }}> {title}</span>} value={value} />
        </Space>
      </Card>
    </div>
  );
}

function RecentInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost/php%20backend/inquery.php')
      .then(response => response.json())
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recent inquiries:', error);
        setLoading(false);
      });
  }, []);

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Subject', dataIndex: 'subject' },
    { title: 'Message', dataIndex: 'message' }
  ];

  return (
    <div>
      <Title level={4}>Recent Inquiry Messages</Title>
      <Table
        columns={columns}
        dataSource={inquiries}
        loading={loading}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
}

export default AdminDashboard;
