import React from 'react';
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';



const { Item } = Menu;

function Sidemenu() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if(item.key==='/logout'){
      navigate('/login');
    }else{
    navigate(item.key);
    }
  };

  return (
    <div className='sidemenu'>
      <Menu
      className='Sidemenuvertical'onClick={handleItemClick} style={{ backgroundColor: '#f0f2f5' }} mode="vertical">
        <Item key="/" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Dashbard</Item>
        <Item key="/users" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Users</Item>
        <Item key="/tourist_area" style={{ backgroundColor: '#fff', marginBottom:'8px' }}>All Tourist Areas</Item>
        <Item key="/guides" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Guides</Item>
        <Item key="/booking" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Booking</Item>
        <Item key="/edit" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Edit Profile</Item>
        <Item key="/logout" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Log Out</Item>
      </Menu>
    </div>
  );
}

export default Sidemenu;
/*
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  { label: <Link to="/admindashboard" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Dashboard</Link>, key: 'admindashboard' },
  { label: <Link to="/booking">Booking</Link>, key: 'booking' },
  { label: <Link to="/guides">Guides</Link>, key: 'guides' },
  { label: <Link to="/tourist_area">Tourist Area</Link>, key: 'tourist_area' },
  { label: <Link to="/users">Users</Link>, key: 'users' },
  { label: <Link to="/edit">Edit</Link>, key: 'edit' },
];

const Sidemenu = () => {
  return (
    <Menu mode="vertical" items={items} />
  );
};

export default Sidemenu;
*/