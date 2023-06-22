import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

function RegistrationPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = () => {
    // Perform registration logic here
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      // Registration success
      navigate('/Login');
    }
  };

  return (
  <div>
    <div className="Register">
      <h2>SIGN UP</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
    <div className="signin-link">
      Already have an account? <a href="/Login">Sign in</a>
    </div>
  </div>
);

}

export default RegistrationPage;
