/*import React, { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
import LoginForm from './loginwithzod';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [guideFormData, setGuideFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: '',
        qualification: null,
        experience: null,
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
    const handleSubmit = () => {
        setShowLogin(true);
    };
    
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setGuideFormData({
            ...guideFormData,
            photo: file
        });
  const validatePhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const handleGuideFormSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(guideFormData.phonenumber)) {
            setErrorMessage('Phone number must be exactly 10 digits.');
            return;
        }
        try {
            const formData = new FormData();
            for (const key in guideFormData) {
                formData.append(key, guideFormData[key]);
            }
            formData.append('formType', 'Guide');

            formData.append('photo', guideFormData.photo);
            console.log(formData)
            const response = await fetch('http://localhost/php%20backend/register.php', {
                method: 'POST',
                body: formData
            });


            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                console.log(data);
                  if (data.success) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    const handleClientFormSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(clientFormData.phonenumber)) {
            setErrorMessage('Phone number must be exactly 10 digits.');
            return;
        }
        try {
            const formData = new FormData();
            for (const key in clientFormData) {
                formData.append(key, clientFormData[key]);
            }
            formData.append('formType', 'Client'); 
    
            const response = await fetch('http://localhost/php%20backend/register.php', {
                method: 'POST',
                body: formData
            });
    
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                   if (data.success) {
                window.location.reload();
                } else {
                    console.error(data.message);
                }
            } else {
                const text = await response.text();
                console.error('Unexpected response format:', text);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
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
                                    formData={guideFormData}
                                    formType="Guide"
                                    onSubmit={handleGuideFormSubmit}
                                    onChange={handleFormChange}
                                    setFormData={setGuideFormData}
                                    handlePhotoChange={handlePhotoChange} 
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
*/
import React, { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
import LoginForm from './loginwithzod';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [guideFormData, setGuideFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: '',
        qualification: null,
        experience: null,
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
    const [errorMessage, setErrorMessage] = useState('');
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
        setErrorMessage(''); // Reset error message on tab change
    };

    const handleClick = () => {
        setShowLogin(true);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setGuideFormData({
            ...guideFormData,
            photo: file
        });
    };

    const validatePhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const handleGuideFormSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(guideFormData.phonenumber)) {
            setErrorMessage('Phone number must be exactly 10 digits.');
            return;
        }
        try {
            const formData = new FormData();
            for (const key in guideFormData) {
                formData.append(key, guideFormData[key]);
            }
            formData.append('formType', 'Guide');

            const response = await fetch('http://localhost/php%20backend/register.php', {
                method: 'POST',
                body: formData
            });

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                if (data.success) {
                    window.location.reload();  // Reload the page upon successful registration
                } else {
                    console.error('Registration failed');
                }
            } else {
                const text = await response.text();
                console.error('Unexpected response format:', text);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleClientFormSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhoneNumber(clientFormData.phonenumber)) {
            setErrorMessage('Phone number must be exactly 10 digits.');
            return;
        }
        try {
            const formData = new FormData();
            for (const key in clientFormData) {
                formData.append(key, clientFormData[key]);
            }
            formData.append('formType', 'Client'); 

            const response = await fetch('http://localhost/php%20backend/register.php', {
                method: 'POST',
                body: formData
            });

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                if (data.success) {
                    window.location.reload();  // Reload the page upon successful registration
                } else {
                    console.error('Registration failed');
                }
            } else {
                const text = await response.text();
                console.error('Unexpected response format:', text);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
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
                                    formData={guideFormData}
                                    formType="Guide"
                                    onSubmit={handleGuideFormSubmit}
                                    onChange={handleFormChange}
                                    setFormData={setGuideFormData}
                                    handlePhotoChange={handlePhotoChange} 
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
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
};

export default Registration;
