import React from 'react'
import Home from './routes/Home';
import{Routes,Route, BrowserRouter} from "react-router-dom";
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import DefaultRoute from './routes/DefaultRoute';
 import Dashboard from './components/Dashboard';
 import Guides from './components/Guides';
import Admin from './Admin/Admin';
import Booking from './components/Booking';
import { Feedback } from './components/Feedback';
import { GuideDashboard } from './GuideDashboard/Page/GuideDashboard';
const App = () => {
  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<DefaultRoute/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        </Route>
        <Route path="admin/*" element={<Admin />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/guide' element={<Guides/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/guidedashboard' element={<GuideDashboard/>}/>
      </Routes>
  </BrowserRouter>
    </>
      
  )
}

export default App
