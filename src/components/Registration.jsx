import React, { useState } from 'react';
import RegisterForm from "../components/RegisterForm";

const Registration = () => {
    const [guideFormData, setGuideFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: '',
        qualification: '',
        experience: ''
    });

    const [clientFormData, setClientFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phonenumber: ''
    });

    const [activeTab, setActiveTab] = useState('guide');

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

    const handleGuideFormSubmit = (e) => {
        e.preventDefault();
        console.log('Guide form submitted:', guideFormData);
        // Add code to handle guide form submission here
    };

    const handleClientFormSubmit = (e) => {
        e.preventDefault();
        console.log('Client form submitted:', clientFormData);
        // Add code to handle client form submission here
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <h3>Welcome</h3>
                    <p>Travelling – it leaves you speechless, then turns you into a storyteller</p>
                    <input type="submit" value="Login" /><br />
                </div>
                <div className="col-md-9 register-right">
                    <ul class="nav nav-tabs nav-justified" id="myTab" role='tablist'>
                      <li class="nav-item">
                        <button class="nav-link active" className={activeTab === 'guide' ? 'active' : ''} onClick={() => handleTabChange('guide')}>Guide</button>
                        </li>
                        <li class="nav-item">
                        <button class="nav-link" className={activeTab === 'client' ? 'active' : ''} onClick={() => handleTabChange('client')}>Client</button>
                    </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      
                        <div className={`tab-pane fade show ${activeTab === 'guide' ? 'active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Register as a Guide</h3>
                            <div class="row register-form">
                            <RegisterForm
                                formData={guideFormData}
                                formType="Guide"
                                onSubmit={handleGuideFormSubmit}
                                onChange={handleFormChange}
                            />
                        </div>
                        </div>
                        <div className={`tab-pane fade show ${activeTab === 'client' ? 'active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 className="register-heading">Register as a Client</h3>
                            <div class="row register-form">
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

