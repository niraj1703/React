// import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login'
export default function Signup () {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call and store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ email, password }));
    navigate('/');
    localStorage.setItem('isLoggedIn', true);
    // Redirect to Dashboard after signup
    if (isPasswordMatch()) {
      alert("Passwords match!");
      
      // Proceed with form submission logic
    } else {
      alert("Passwords do not match!");
    }
   
  };
  return (
    <div> 
    <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <label> username</label>
    <input
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName"
        required
      />
      <label> Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <label> Password</label>
      <input id='password'
      type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <label>Confermed Password</label>
      <input id='conf-password'
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder=" Conferm Password"
        required
      />
       <input
          type="checkbox"
          checked={showPassword}
          onChange={togglePasswordVisibility}
        />
      <button type="submit">Sign Up</button>
      <Link to={'/'}> <bold>Sign In</bold> </Link>
    </form>
  
    </div>
  )
}


