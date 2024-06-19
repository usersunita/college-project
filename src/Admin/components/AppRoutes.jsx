/*import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import User from '../Pages/User'
import GuideBooking from '../Pages/GuideBooking'
import AllGuides from '../Pages/AllGuides'
import Sidemenu from './Sidemenu'

function AppRoutes ()  {
  const contentStyle = {
    marginLeft: '200px', // This should match the sidebar width
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh', // Ensure the content takes at least the full viewport height
    overflow: 'hidden', // Hide overflow
  };

  const bodyStyle = {
    overflow: 'hidden', // Hide overflow for the body
    height: '100vh', // Ensure the body takes the full viewport height
  };

  return (
    {/*<div style={bodyStyle}>
      <Sidemenu />
      <div style={contentStyle}>
        <Routes>
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route path="/allguide" element={<AllGuides />} />
          <Route path="/users" element={<User />} />
          <Route path="/guidebooking" element={<GuideBooking />} />
         {/* <Route path="/logout" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes
*/