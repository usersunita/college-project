import React, { useState } from 'react';
import "./Navbar.css";
import MenuItems from "./MenuItems";
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import Modal from "react-modal"
import Register from './Register';

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

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const openModalFunc = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
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
          <button onClick={openModalFunc}>Register</button>
        </li>
      </ul>

      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        //style={customStyles}
      >
        <button onClick={closeModal}>Close</button>
        <div>I am a modal</div>
        <div >
          {handleClick && <Register/>}
          </div>
      </Modal>
      {clicked && <Register />}
    </nav>
  );
};

export default Navbar;
