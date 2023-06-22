import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    if (username === 'Kipesa' && password === 'Kipesa1234') {
      // Login success
      navigate('/Homepage');
    } else {
      // Login failed
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="Login">
      <h2>SIGN IN</h2>
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
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default LoginPage;
