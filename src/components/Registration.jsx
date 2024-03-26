import React, { useState } from 'react'
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
    
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setGuideFormData({
          ...guideFormData,
          [name]: value
        });
        setClientFormData({
          ...clientFormData,
          [name]: value
        });
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
    
  return (
    <div>
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <h3>Welcome</h3>
          <p>Travelling – it leaves you speechless, then turns you into a storyteller</p>
          <input type="submit" value="Login" /><br />
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Guide</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Client</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <RegisterForm
                formData={guideFormData}
                formType="Guide"
                onSubmit={handleGuideFormSubmit}
                onChange={handleFormChange}
              />
            </div>
            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
  )
}

export default Registration;
