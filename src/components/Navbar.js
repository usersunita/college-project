/*import React, { useState } from 'react';
import "./Navbar.css";
import MenuItems from "./MenuItems";
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import Modal from "react-modal";
import Register from './Register';


// Set the app element for the modal
Modal.setAppElement('#root');

/*const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};*/
/*
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
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
          <button onClick={toggleModal}>Register</button>
        </li>
      </ul>

      <Modal
        isOpen={openModal}
        onRequestClose={toggleModal}
       // style={customStyles}
      >
        <button onClick={toggleModal}>Close</button>
        <div>
          <Register />
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;*/

import React, { useState } from 'react';
import "./Navbar.css";
import MenuItems from "./MenuItems";
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import Register from './Register';

// Set the app element for the modal
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0', // Remove padding to rely on CSS class
    border: 'none', // Remove border to rely on CSS class
  },
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Banepa Travels </h1>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <NavLink className={item.cName} to={item.url}>
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <button onClick={toggleModal}>Register</button>
        </li>
      </ul>

      <Modal
        isOpen={openModal}
        onRequestClose={toggleModal}
        // style={customStyles}
      >
        <button className="modal-close-button" onClick={toggleModal}>Close</button>
        <div className="modal-content">
          <Register />
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
