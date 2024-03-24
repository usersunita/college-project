import React from 'react';
const InputField = ({ name, type, placeholder, value, onChange, required }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
