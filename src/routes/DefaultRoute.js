import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultRoute = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default DefaultRoute
