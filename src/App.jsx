import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import DefaultRoute from './routes/DefaultRoute';
import Guides from './components/Guides';
import { Feedback } from './components/Feedback';
import User from './Admin/Pages/User';
import Edit from './GuideDashboard/Page/Edit';
import GuideBooking from './Admin/Pages/GuideBooking';
import AllGuides from './Admin/Pages/AllGuides';
import Review from './GuideDashboard/Page/Review';
import Tourist from './Admin/Pages/Tourist';
import Allbooking from './GuideDashboard/Page/Allbooking';
import AdminDashboard from './Admin/Pages/AdminDashboard';
import Dashboard from './GuideDashboard/Page/Dashboard';
import AdminLayout from './Admin/components/AdminLayout';
import GuideLayout from './GuideDashboard/components/GuideLayout';
import UpdateHeroForm from './components/UpdateHeroForm';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultRoute />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            <Route path="guides" element={<Guides />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="admindashboard" element={<AdminDashboard />} />
            <Route path="allguide" element={<AllGuides />} />
            <Route path="users" element={<User />} />
            <Route path="tourist" element={<Tourist />} />
            <Route path="guidebooking" element={<GuideBooking />} />
            <Route path="edit" element={<Edit />} />
            <Route path="review" element={<Review />} />
          </Route>

          <Route path="/guide" element={<GuideLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="allguide" element={<AllGuides />} />
            <Route path="users" element={<User />} />
            <Route path="booking" element={<Allbooking />} />
            <Route path="edit" element={<Edit />} />
            <Route path="review" element={<Review />} />
          </Route>

          <Route path="/feedback" element={<Feedback />} />
          <Route path="/heroupdate" element={<UpdateHeroForm />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;

