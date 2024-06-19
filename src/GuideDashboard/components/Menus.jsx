/*
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
        <Item key="/" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Dashboard</Item>
        <Item key="/users" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Users</Item>
        <Item key="/guidebooking" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Booking</Item>
        <Item key="/review" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Feedback</Item>
        <Item key="/edit" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Edit Profile</Item>
        <Item key="/logout" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Log Out</Item>
      </Menu>
    </div>
  );
}

export default Menus;
*/
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menus = () => {
  const sidemenuStyle = {
    position: 'fixed',
    width: '200px',
    height: '100%',
    backgroundColor: '#f0f2f5',
    overflow: 'hidden',
  };

  const menuStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const menuItemStyle = {
    marginBottom: '8px',
  };

  const linkStyle = {
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  const activeLinkStyle = {
    backgroundColor: '#1890ff',
    color: '#fff',
  };

  return (
    <div style={sidemenuStyle}>
      <nav>
        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/dashboard"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              Dashboard
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/allguide"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Guides
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/users"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Users
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/booking"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Booking
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/edit"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              Edit Profile
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/review"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Review
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/guide/logout"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menus;
