/*import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Handle login submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
        </div>
        <div className='input'>
          <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
        </div>
      </div>
      <div className='submit-container'>
        <div className='submit' onClick={handleSubmit}>Login</div>
      </div>
    </div>
  );
};

export default Login;*/

import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="login-container">
          
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;



