
import React, { useState, useEffect } from 'react';
import { Typography, Table, Button, message } from 'antd';

const { Title } = Typography;

const GuideProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/php%20backend/guide.php');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch('http://localhost/php%20backend/guide.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'delete', id: id })
      });
      const result = await response.json();
      if (result.success) {
        message.success(result.message);
        fetchData(); // Refresh data after successful delete
      } else {
        message.error(result.message);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Daily Rate', dataIndex: 'dailyRate', key: 'dailyRate' },
    { title: 'Languages', dataIndex: 'languages', key: 'languages' },
    {
      title: 'Image',
      dataIndex: 'image_path',
      key: 'image_path',
      render: (text) => <img src={`http://localhost/uploads/${text}`} alt="guide" style={{ width: '100px' }} />,
    },
    { title: 'Skills', dataIndex: 'skills', key: 'skills' },
    { title: 'Areas', dataIndex: 'area', key: 'area' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="primary" danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Title level={4}>Guides</Title>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default GuideProfile;