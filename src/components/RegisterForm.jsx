import React from 'react'
import InputField from './InputField';
const RegisterForm = ({ formData, formType, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <h3 className="register-heading">Form for {formType}</h3>
      <div className="row register-form">
        <div className="col-md-6">
          <InputField
            name="firstname"
            type="text"
            placeholder="First Name *"
            value={formData.firstname}
            onChange={onChange}
            required
          />
          <InputField
            name="lastname"
            type="text"
            placeholder="Last Name *"
            value={formData.lastname}
            onChange={onChange}
            required
          />
          <InputField
            name="email"
            type="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={onChange}
            required
          />
          {formType === 'Guide' && (
            <>
              <InputField
                name="password"
                type="password"
                placeholder="Password *"
                value={formData.password}
                onChange={onChange}
                required
              />
              <InputField
                name="qualification"
                type="text"
                placeholder="Your Qualification *"
                value={formData.qualification}
                onChange={onChange}
                required
              />
              <InputField
                name="experience"
                type="text"
                placeholder="Your experience *"
                value={formData.experience}
                onChange={onChange}
                required
              />
            </>
          )}
        </div>
        <div className="col-md-6">
          <InputField
            name="phone number"
            type="text"
            minLength="10"
            maxLength="10"
            placeholder="Your Phone *"
            value={formData.phonenumber}
            onChange={onChange}
            required
          />
          <InputField
            name="password"
            type="password"
            placeholder="Password *"
            value={formData.password}
            onChange={onChange}
            required={formType === 'Client'}
          />
          <input type="submit" className="btnRegister" value="Register" />
        </div>
      </div>
      <InputField/>
    </form>
  );
};

export default RegisterForm;
