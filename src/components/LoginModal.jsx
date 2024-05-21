// LoginModal.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import LoginForm from './LoginForm'; // Ensure the path is correct

const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // Remove default footer buttons
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
