import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() !== '') {
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="brand-title">TSAR</h1>
        <p className="brand-tagline">Your ultimate workspace</p>
        
        <h2 className="login-heading">Log in to continue</h2>
        <form onSubmit={handleSubmit}>
          <label>Email or phone</label>
          <input
            type="text"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="continue-btn">Continue</button>
        </form>

        <p className="other-text">Other login options</p>
        <div className="social-login">
          <button className="icon-btn fb">f</button>
          <button className="icon-btn google">G</button>
          <button className="icon-btn apple"></button>
          <button className="icon-btn office">O</button>
          <button className="icon-btn more">••••</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;



