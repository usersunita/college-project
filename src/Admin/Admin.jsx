import React from 'react'
import './admin.css'
import Header from './components/Header'
import Sidemenu from './components/Sidemenu'
import Pagecontent from './components/Pagecontent'
import Footer from './components/Footer'
const Admin = () => {
  return (
    <div className="App">
      <Header/>
    <div className='sidemenuandpagecontent'>
      <Sidemenu/>
      <Pagecontent />
      </div>
      <Footer/>
    
    </div>
  )
}

export default Admin;
