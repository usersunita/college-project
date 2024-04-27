
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
  
      fetch('http://localhost/PHP%20BACKEND/login.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      })
      .then(response => response.text())
      .then(data => {
          console.log(data);
          // Handle response from server
      })
      .catch(error => {
          console.error('Error:', error);
      });
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



