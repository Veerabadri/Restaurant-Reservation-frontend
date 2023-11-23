// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login  ({ userType, onSignIn })  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Corrected the usage of useState for error
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  let handleLogin = (event) => {
    const obj = { email, password };
    const url = "https://restaurant-reservation-backend-iiey.onrender.com/userRoute/login";
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
        navigate('/create-reservation');
      })
      .catch((err) => {
        // Corrected the usage of setError
        setError(err.message || 'An error occurred.');
      });
    event.preventDefault();
  };

  return (
    <div className='lgn'>
    <div className="form">
      <h2>Login</h2>
      <div className="title">Welcome Back</div>
      <div className="ic1">
        <label>Email:</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="ic1">
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <br />
      {error && <p className="error-message">{error}</p>}
      <button className='btn' type="button" onClick={handleLogin}>
        Login
      </button>
      <div>
        <p>
          <Link to="/Signup">Don't have an account?</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
