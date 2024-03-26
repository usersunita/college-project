import React, { useState } from 'react';
import "./Navbar.css";
import MenuItems from "./MenuItems";
import { NavLink} from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import  Register from './Register';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setShowRegisterForm(false); 
  }
  const handleRegisterButtonClick = () => {
    setShowRegisterForm(true);
    setClicked(false); // Close the menu when register button is clicked
  }
  return (
  
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Banepa Travels </h1>

      <div className='menu-icons' onClick={handleClick}>
  {clicked ? <FaTimes /> : <FaBars />}
</div>


      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <NavLink className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </NavLink>
          </li>
        ))}
       <li>
        </li>
          <button  onClick={handleRegisterButtonClick}>Register</button>
          { clicked && <Register/>}
          </ul>
    </nav>

  );
};

export default Navbar;




