import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Registration.css';

const RegisterForm = ({ formData, formType, onSubmit, onChange, handlePhotoChange }) => {

  const { firstName, lastName, email, password, phonenumber, qualification, experience } = formData;
  const handleButtonClick = async (e) => {
    e.preventDefault();
    await onSubmit(e);
    window.location.reload();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="firstName" value={firstName || ''} onChange={onChange} placeholder="First Name" /><br />
      <input type="text" name="lastName" value={lastName || ''} onChange={onChange} placeholder="Last Name" /><br />
      <input type="email" name="email" value={email || ''} onChange={onChange} placeholder="Email" /><br />
      <input type="password" name="password" value={password || ''} onChange={onChange} placeholder="Password" /><br />
      <input type="tel" name="phonenumber" value={phonenumber || ''} onChange={onChange} placeholder="Phone Number" /><br />
      <input type="hidden" name="formType" value={formType} />

      {formType === 'Guide' && (
        <>
          <input type="text" name="qualification" value={qualification || ''} onChange={onChange} placeholder="Qualification" /><br />
          <input type="text" name="experience" value={experience || ''} onChange={onChange} placeholder="Experience" /><br />
          <input type="file" className="form-control" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />
        </>
      )}

      <button type="submit" className="btnRegister" onSubmit={handleButtonClick}  >Register</button>
    </form>
  );
};

export default RegisterForm;

