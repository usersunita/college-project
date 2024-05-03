import React, { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [guideFormData, setGuideFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: '',
        qualification: '',
        experience: '',
        photo: null // Add a state for photo file
    });

    const [clientFormData, setClientFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: ''
    });

    const [activeTab, setActiveTab] = useState('guide');
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        if (activeTab === 'guide') {
            setGuideFormData({
                ...guideFormData,
                [name]: value
            });
        } else {
            setClientFormData({
                ...clientFormData,
                [name]: value
            });
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = () => {
        setShowLogin(true);
    };
    const handleSubmit= () => {
       // setShowLogin(true);
    };

    const handleClientFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in clientFormData) {
                formData.append(key, clientFormData[key]);
            }
            formData.append('formType', 'Client'); // Add formType to indicate client registration

            const response = await fetch('http://localhost/PHP%20BACKEND/index.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log(data); // Log the response from the backend
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setGuideFormData({
            ...guideFormData,
            photo: file
        });
        console.log('Photo state:', guideFormData.photo);
    };

    const handleGuideFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in guideFormData) {
                formData.append(key, guideFormData[key]);
            }
            formData.append('formType', 'Guide');

            formData.append('photo', guideFormData.photo);
            const response = await fetch('http://localhost/PHP%20BACKEND/index.php', {
                method: 'POST',
                body: formData
            });

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data);
                if (data === 'Login successful') {
                    // Redirect to dashboard upon successful login
                    navigate('/dashboard');
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
            // Handle the error here, such as displaying an error message to the user
        }
    };

    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <h3>Welcome</h3>
                    <p>Travelling – it leaves you speechless, then turns you into a storyteller</p>
                    {showLogin ? (
                        <Login handleSubmit={handleSubmit} />
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
                                    formData={guideFormData}
                                    formType="Guide"
                                    onSubmit={handleGuideFormSubmit}
                                    onChange={handleFormChange}
                                    setFormData={setGuideFormData}
                                    handlePhotoChange={handlePhotoChange} // Pass the photo change handler
                                />
                            </div>
                        </div>
                        <div className={`tab-pane fade show ${activeTab === 'client' ? 'active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Register as a Client</h3>
                            <div className="row register-form">
                                <RegisterForm
                                    formData={clientFormData}
                                    formType="Client"
                                    onSubmit={handleClientFormSubmit}
                                    onChange={handleFormChange}
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
