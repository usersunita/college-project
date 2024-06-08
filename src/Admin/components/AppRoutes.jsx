import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AdminDashboard from '../Pages/AdminDashboard'
import User from '../Pages/User'
import Guides from '../../components/Guides'
import Edit from '../Pages/Edit'
import Tourist from '../Pages/Tourist'
import GuideBooking from '../Pages/GuideBooking'




function AppRoutes ()  {
  return (
<Routes>
  <Route path='/' element={<AdminDashboard/>}/>
  <Route path='/users' element={<User/>}/>
  <Route path='/guides' element={<Guides/>}/>
  <Route path='/edit' element={<Edit/>}/>
  <Route path='/tourist' element={<Tourist/>}/>
  <Route path='/guidebooking' element={<GuideBooking/>}/>

</Routes>

  )
}

export default AppRoutes
