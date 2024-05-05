import React, { useState } from 'react';
import { object, string, number, optional } from 'zod';
import RegisterForm from "../components/RegisterForm";
import LoginForm from './loginwithzod';
import { useNavigate } from 'react-router-dom';

// Define a common schema for both types of forms using Zod
const commonSchema = object({
    firstName: string(),
    lastName: string(),
    email: string(),
    password: string(),
    phonenumber: string(),
    qualification: optional(string()),
    experience: optional(number()),
    photo: optional(string()) // Assuming photo is stored as a string in the database
});

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: '',
        qualification: null,
        experience: null,
        photo: null
    });

    const [activeTab, setActiveTab] = useState('guide');
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = () => {
        setShowLogin(true);
    };

    const handleSubmit = async () => {
        // setShowLogin(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/PHP%20BACKEND/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, formType: activeTab })
            });

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data);
                if (data === 'Login successful') {
                    // Redirect to dashboard upon successful login
                    navigate(activeTab === 'guide' ? '/dashboard' : '/Admin');
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            photo: file
        });
        console.log('Photo state:', formData.photo);
    };

    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <h3>Welcome</h3>
                    <p>Travelling – it leaves you speechless, then turns you into a storyteller</p>
                    {showLogin ? (
                        <LoginForm />
                    ) : (
                        <button type="submit" value="Login" onClick={handleClick}>Login</button>
                    )}
                </div>
                <div className="col-md-9 register-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role='tablist'>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 'guide' ? 'active' : ''}`} onClick={() => handleTabChange('guide')}>Guide</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 'client' ? 'active' : ''}`} onClick={() => handleTabChange('client')}>Client</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade show ${activeTab === 'guide' ? 'active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Register as a Guide</h3>
                            <div className="row register-form">
                                <RegisterForm
                                    formData={formData}
                                    formType={activeTab}
                                    onSubmit={handleFormSubmit}
                                    onChange={handleFormChange}
                                    setFormData={setFormData}
                                    handlePhotoChange={handlePhotoChange}
                                />
                            </div>
                        </div>
                        <div className={`tab-pane fade show ${activeTab === 'client' ? 'active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Register as a Client</h3>
                            <div className="row register-form">
                                <RegisterForm
                                    formData={formData}
                                    formType={activeTab}
                                    onSubmit={handleFormSubmit}
                                    onChange={handleFormChange}
                                    setFormData={setFormData}
                                    handlePhotoChange={handlePhotoChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
