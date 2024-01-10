import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css';
import { login } from '../backend/backend';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate()
  const handleLogin = async () => {
    try {
    
    const send =await login(emailOrPhone,password)

    if(send.status===200){
    navigate('/access')
    }
      // You can handle successful login, e.g., redirect to another page
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email or Phone:</label>
        <input type="text" onChange={(e) => setEmailOrPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
