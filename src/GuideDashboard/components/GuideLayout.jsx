import React from 'react'
import { Outlet } from 'react-router-dom';
import './menu.css'
import Menus from './Menus';
const GuideLayout = () => {
  return (
    <div className="guide-layout">
      <Menus/>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default GuideLayout;
