import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './forgotpassword.css';

const ForgotPassword = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    console.log('Email:', email);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="pass">
          <div className="word">
            <h1> Forgotten your password? Enter your email to receive the reset link.</h1>
          </div>
          <div className="email">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input className='size'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="button">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button className="send-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
