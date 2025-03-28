import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup'
  export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
        e.preventDefault(); 
        // const Username = JSON.parse(localStorage.getItem('user'));
       
        if (username === 'user' && password === 'password') {
           navigate('/');  // Redirect to the dashboard
        } else {
            setErrorMessage('Invalid username or password');
            
        }
    }
    

    return (
      <form onSubmit={handleLogin}>
      <div className="input-group">
          <label>Username</label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
          />
      </div>
      <div className="input-group">
          <label>Password</label>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="Login">Login</button>
      
  </form>
    );
};


