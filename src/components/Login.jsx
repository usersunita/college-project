import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [action, setAction] = useState('Sign Up');

  const handleActionChange = (newAction) => {
    setAction(newAction);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Sign Up' && (
          <div className='input'>
            <input type='text' placeholder='Name' />
          </div>
        )}
        <div className='input'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <input type='password' placeholder='Password' />
        </div>
      </div>
      {action === 'Sign Up' && (
        <div className='forgot'>
          Forget password?<span>Click Here!</span>
        </div>
      )}
      <div className='submit-container'>
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => handleActionChange('Sign Up')}>Sign Up</div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => handleActionChange('Login')}>Login</div>
      </div>
    </div>
  );
};

export default Login;

