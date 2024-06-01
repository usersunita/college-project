import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Allbooking from '../Page/Allbooking'
import Allusers from '../Page/Alluser'
import Edit from '../Page/Edit'
import Review from '../Page/Review'
import Dashboard from '../Page/Dashboard'
const GuideRoute = () => {
  return (
    <div>
      <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/guidebooking" element={<Allbooking/>}/>
    <Route path="/users" element={<Allusers/>}/>
    <Route path="/edit" element={<Edit/>}/>
    <Route path='/review' element={<Review/>}/>
</Routes>
    </div>
  )
}

export default GuideRoute

