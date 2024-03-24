/*import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const ParentComponent = () => {
  // Define initial form data state
  const [guideFormData, setGuideFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    qualification: '',
    experience: '',
    phone_number: '',
    password: ''
  });

  const [clientFormData, setClientFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: ''
  });


  // Handler for guide form submission
  const handleGuideFormSubmit = (e) => {
    e.preventDefault();
    console.log('Guide form submitted:', guideFormData);
    // Add code to handle form submission here
  };

  // Handler for client form submission
  const handleClientFormSubmit = (e) => {
    e.preventDefault();
    console.log('Client form submitted:', clientFormData);
    // Add code to handle form submission here
  };

  // Handler to update guide form data
  const handleGuideFormChange = (e) => {
    const { name, value } = e.target;
    setGuideFormData({
      ...guideFormData,
      [name]: value
    });
  };

  // Handler to update client form data
  const handleClientFormChange = (e) => {
    const { name, value } = e.target;
    setClientFormData({
      ...clientFormData,
      [name]: value
    });
  };


  /* Handle form submission
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
      <RegisterForm
        formData={formData}
        formType="Client"
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
};

export default ParentComponent;*/
