import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Registration.css';

const RegisterForm = ({ formData, formType, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      
          <input type="text" name="firstName" value={formData.firstName} onChange={onChange} placeholder="First Name" /><br />
          <input type="text" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Last Name" /><br />
          <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" /><br />
          <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" /><br />
          <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={onChange} placeholder="Phone Number" /><br/>
        
    
      {formType === 'Guide' && (
        <>
          <input type="text" name="qualification" value={formData.qualification} onChange={onChange} placeholder="Qualification" /><br />
          <input type="text" name="experience" value={formData.experience} onChange={onChange} placeholder="Experience" /><br />
        </>
      )}
      <input type="submit" className="btnRegister" value="Register" />
    </form>
  );
};

export default RegisterForm;

