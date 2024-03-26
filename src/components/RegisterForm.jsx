
import React from 'react';
import './Registration.css';
const RegisterForm = ({ formData, formType, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
    
      <input type="text" name="firstName" value={formData.firstName} onChange={onChange} placeholder="First Name" />
      <input type="text" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Last Name" />
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" />
      <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={onChange} placeholder="Phone Number" />
      {formType === 'Guide' && (
        <div>
          <input type="text" name="qualification" value={formData.qualification} onChange={onChange} placeholder="Qualification" />
          <input type="text" name="experience" value={formData.experience} onChange={onChange} placeholder="Experience" />
        </div>
      )}
      <input type="submit" value={`Register as ${formType}`} />
    </form>
  );
};

export default RegisterForm;

