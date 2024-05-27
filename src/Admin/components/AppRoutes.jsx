import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Guides from '../Pages/Guides'
import Booking from '../Pages/Booking'
import Tourist from '../Pages/Tourist'
import User from '../Pages/User'
import Edit from '../Pages/Edit'
import Dashboard from '../Pages/Dashboard'


function AppRoutes ()  {
  return (
<Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/booking" element={<Booking/>}/>
   <Route path="/guides" elements={<Guides/>}/>
    <Route path="/tourist_area" element={<Tourist/>}/>
    <Route path="/users" element={<User/>}/>
    <Route path="/edit" element={<Edit/>}/>
</Routes>

  )
}

export default AppRoutes
