
import React from 'react';
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';
const { Item } = Menu;

function Menus() {
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
        <Item key="/booking" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Booking</Item>
        <Item key="/feedback" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Feedback</Item>
        <Item key="/edit" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Edit Profile</Item>
        <Item key="/logout" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Log Out</Item>
      </Menu>
    </div>
  );
}

export default Menus;