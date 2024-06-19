
import React, { useState, useEffect } from 'react';
import './edit.css';
import Session from 'react-session-api';

function Edit() {
  const [formData, setFormData] = useState({
    name: '',
    dailyRate: '',
    languages: '',
    image: null,
    skills: '',
    area: ''
  });

  const userId = Session.get("user_id");

  useEffect(() => {
    fetch(`http://localhost/php%20backend/guidedata.php?user_id=${userId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setFormData({
            name: data.name,
            dailyRate: data.dailyRate,
            languages: data.languages,
            image: data.image_path ? `http://localhost/php%20backend/${data.image_path}` : null,
            skills: data.skills,
            area: data.area
          });
        }
      })
      .catch(error => console.error('Error fetching guide data:', error));
  }, [userId]);

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

    formDataToSend.append('user_id', userId);

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
      console.log('Success:', data);
      if (data.success) {
        window.location.reload(); 
      }
    })
    .catch(error => {
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
        {formData.image && <img src={formData.image} alt="Profile" />}
        <div className="form-row">
          <label htmlFor="skills">Skills and Experience</label>
          <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter skills and experience" required></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="area">Areas</label>
          <input id="area" name="area" value={formData.area} onChange={handleChange} placeholder="Enter Your specialized area" required></input>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edit;


