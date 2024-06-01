import React, { useEffect, useState } from 'react';
import { Table, Typography, Button, Space } from 'antd';

const { Title } = Typography;

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost/php%20backend/Users.php')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost/php%20backend/Users.php?action=delete&id=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        if (data.success) {
          setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        setLoading(false);
      });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'First Name', dataIndex: 'firstName' },
    { title: 'Last Name', dataIndex: 'lastName' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Password', dataIndex: 'password' },
    { title: 'Phone Number', dataIndex: 'phonenumber' },
    { title: 'Qualification', dataIndex: 'qualification' },
    { title: 'Experience', dataIndex: 'experience' },
    { title: 'Photo_path', dataIndex: 'photo' },
    { title: 'Role', dataIndex: 'role' },
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={4}>All Users</Title>
      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        pagination={{ pageSize: 3 }}
      />
    </>
  );
}

export default User;

