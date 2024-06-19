import { Subtitles } from 'lucide-react';
import React, { useState } from 'react';

const UpdateHeroForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image_url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/php%20backend/updateherocontent.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Hero content updated successfully');
      } else {
        alert('Error updating hero content: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
      />
      <input
        type="text"
        name="subtitle"
        value={formData.subtitle}
        onChange={handleChange}
        placeholder="subtitle"
      />
      <input
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Update Hero Content</button>
    </form>
  );
};

export default UpdateHeroForm;
