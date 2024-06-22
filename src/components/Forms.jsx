
import React, { useState } from 'react';
import './Forms.css';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/PHP%20BACKEND/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
    .then(response => response.text())
    .then(data => {
      alert(data); 
      window.location.reload(); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form action='' method='post' onSubmit={handleSubmit}>
        <input name="name" placeholder='Your Name *' value={formData.name} onChange={handleInputChange}/>
        <input name='email' placeholder='Email *' value={formData.email} onChange={handleInputChange}/>
        <input name='subject' placeholder='Subject *' value={formData.subject} onChange={handleInputChange}/>
        <textarea name='message' placeholder='Message' rows="4" value={formData.message} onChange={handleInputChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Forms;
