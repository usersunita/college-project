import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../routes/Home';

const Logout = () => {
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     // Perform any logout logic here (e.g., clearing session, local storage, etc.)
    //     // Navigate to the login page
    //     navigate('/login');
    

    return (
        <div>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Home/>
        </div>
    );
};

export default Logout;

