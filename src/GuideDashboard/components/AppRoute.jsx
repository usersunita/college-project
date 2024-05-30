import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Dashboard from '../Page/Dashboard'
import Allbooking from '../Page/Allbooking'
import Alluser from '../Page/Alluser'
import Edit from '../../Admin/Pages/Edit'
import Review from '../Page/Review'
function AppRoute ()  {
  return (
<Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/guidebooking" element={<Allbooking/>}/>
    <Route path="/users" element={<Alluser/>}/>
    <Route path="/edit" element={<Edit/>}/>
    <Route path='/review' element={<Review/>}/>
</Routes>

  )
}

export default AppRoute;