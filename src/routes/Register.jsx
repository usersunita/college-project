import React, { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
/*const Register = () => {

    const [guideFormData, setGuideFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        qualification: '',
        experience: ''
      });
    
      const [clientFormData, setClientFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
      });
    
      
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
              <h3 className="register-heading">Form for Guide</h3>
              <form onSubmit={handleGuideFormSubmit}>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="first_name" className="form-control" placeholder="First Name *" value={guideFormData.first_name} onChange={handleGuideFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="last_name" className="form-control" placeholder="Last Name *" value={guideFormData.last_name} onChange={handleGuideFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Your Email *" value={guideFormData.email} onChange={handleGuideFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" className="form-control" placeholder="Password *" value={guideFormData.password} onChange={handleGuideFormChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="phone_number" minLength="10" maxLength="10" className="form-control" placeholder="Your Phone *" value={guideFormData.phone_number} onChange={handleGuideFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="qualification" className="form-control" placeholder="Your Qualification *" value={guideFormData.qualification} onChange={handleGuideFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="experience" className="form-control" placeholder="Your experience *" value={guideFormData.experience} onChange={handleGuideFormChange} required />
                    </div>
                    <input type="submit" className="btnRegister" value="Register" />
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h3 className="register-heading">Form for Client</h3>
              <form onSubmit={handleClientFormSubmit}>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="first_name" className="form-control" placeholder="First Name *" value={clientFormData.first_name} onChange={handleClientFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="last_name" className="form-control" placeholder="Last Name *" value={clientFormData.last_name} onChange={handleClientFormChange} required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Email *" value={clientFormData.email} onChange={handleClientFormChange} required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="phone_number" maxLength="10" minLength="10" className="form-control" placeholder="Phone *" value={clientFormData.phone_number} onChange={handleClientFormChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" className="form-control" placeholder="Password *" value={clientFormData.password} onChange={handleClientFormChange} required />
                    </div>
                    <input type="submit" className="btnRegister" value="Register" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}*/





const Register = () => {
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
      
      <RegisterForm/>
    </div>
  );
};

export default Register;
