import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const ParentComponent = () => {
  // Define initial form data state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    qualification: '',
    experience: '',
    phone_number: '',
    password: ''
  });



  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <RegisterForm
        formData={formData}
        formType="Guide"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
};

export default ParentComponent;
