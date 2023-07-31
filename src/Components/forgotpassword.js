import React, { useState } from 'react';
import './forgotpassword.css';
import { Link } from 'react-router-dom';


const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleSend = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
  
    setIsEmailValid(isValid);
    if (isValid) {
      console.log('Email:', email);
      onClose();
    } else {
      console.log('Invalid email!');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="pass">
          <div className="word">
            <h1> Enter your email and we will help you reset your password.</h1>
          </div>
          <div className="email">
              <input className='size'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(true); 
              }}
            />
            {!isEmailValid && <span className="error-message"> <br/>A valid email is required.</span>}
          </div>
          <div className="button">
            <button className="send-button" onClick={handleSend}>
              Send Password reset email
            </button>
          </div>
          < div className='return'>
      <Link to="/">Return to login</Link></div>
    </div>
        </div>
      </div>
      
  );
};

export default ForgotPassword;
