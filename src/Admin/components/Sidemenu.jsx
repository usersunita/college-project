/*import React from 'react';
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
        <Item key="/admin" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Dashboard</Item>
        <Item key="/users" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Users</Item>
        <Item key="/tourist_area" style={{ backgroundColor: '#fff', marginBottom:'8px' }}>All Tourist Areas</Item>
        <Item key="/allguide" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Guides</Item>
        <Item key="/guidebooking" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>All Booking</Item>
        <Item key="/logout" style={{ backgroundColor: '#fff', marginBottom:'8px'}}>Log Out</Item>
      </Menu>
    </div>
  );
}

export default Sidemenu;
*/
/*
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidemenu = () => {
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
            <NavLink to="/admindashboard" style={linkStyle} activeStyle={activeLinkStyle}>Dashboard</NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink to="/allguide" style={linkStyle} activeStyle={activeLinkStyle}>All Guides</NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink to="/users" style={linkStyle} activeStyle={activeLinkStyle}>All Users</NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink to="/guidebooking" style={linkStyle} activeStyle={activeLinkStyle}>All Booking</NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink to="/edit" style={linkStyle} activeStyle={activeLinkStyle}>Edit Profile</NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink to="/logout" style={linkStyle} activeStyle={activeLinkStyle}>Log Out</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Sidemenu;
*/
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidemenu = () => {
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
              to="/admin/admindashboard"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              Dashboard
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/admin/allguide"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Guides
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/admin/users"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Users
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/admin/guidebooking"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Booking
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/admin/edit"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              Edit Profile
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/admin/reviews"
              style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
            >
              All Review
            </NavLink>
          </li>
          <li style={menuItemStyle}>
            <NavLink
              to="/logout"
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

export default Sidemenu;
