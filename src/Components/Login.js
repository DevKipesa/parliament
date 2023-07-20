import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faEye, FaHammer, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Kenya from '../images/kenya.jpg';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    if (username === 'Kipesa' && password === 'Kipesa1234') {
      // Login success
      navigate('/Homepage');
    } else {
      // Login failed
      setErrorMessage('INVALID USERNAME OR PASSWORD.');
    }
  };

  return (
    <div>
    <div className="page">
    <div className="kenya-container">
            <img src={Kenya} alt="Kenya" className="kenya" />
          </div>
    <div className="Login">
      <div className='Legi'>
      <FontAwesomeIcon icon={faHammer} className="input-icon" />
      <span>  LEGISLATIVE INFORMATION MANAGEMENT SYSTEM</span>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="input-container">
  <FontAwesomeIcon icon={faUser} className="input-icon" />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="input-container">
      <FontAwesomeIcon icon={faLock} className="input-icon" />
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <FontAwesomeIcon
    icon={showPassword ? faEyeSlash : faEye}
    className="eye"
    onClick={() => setShowPassword(!showPassword)}
  />
</div>
       <div className='log'>

      <button onClick={handleLogin}>LOGIN</button>
      </div>
      <div className='ver'>
      <h1>      LIMS V 1.2.1</h1>
    </div>
    </div>
    </div>
    </div>
  );
}

export default LoginPage;
