import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling

function Login({ handleSubmit }) {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost/PHP%20BACKEND/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.text())
        .then(data => {
            handleSubmit(data); // Pass data to handleSubmit function in Registration component
        })
        .catch(error => {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.'); // Display generic error message
        });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Login;

