import React from 'react';
import { Outlet } from 'react-router-dom';
import '../admin.css';
import Sidemenu from './Sidemenu';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidemenu/>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
