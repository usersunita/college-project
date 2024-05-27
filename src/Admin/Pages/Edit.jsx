import React, { useState } from 'react';
import './edit.css'

function Edit() {
  const [formData, setFormData] = useState({
    name: '',
    dailyRate: '',
    languages: '',
    image: null,
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? e.target.files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    fetch('http://localhost/php%20backend/upload.php', {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle success response
      console.log('Success:', data);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  return (
    <div className="registration-form">
      <h2>Update your profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Guide Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        <div className="form-row">
          <label htmlFor="dailyRate">Daily Rate (RS)</label>
          <input type="text" id="dailyRate" name="dailyRate" value={formData.dailyRate} onChange={handleChange} placeholder="Enter daily rate" required />
        </div>
        <div className="form-row">
          <label htmlFor="languages">Languages</label>
          <input type="text" id="languages" name="languages" value={formData.languages} onChange={handleChange} placeholder="Enter languages" required />
        </div>
        <div className="form-row">
          <label htmlFor="image">Upload Image</label>
          <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
        </div>
        <div className="form-row">
          <label htmlFor="skills">Skills and Experience</label>
          <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter skills and experience" required></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;
