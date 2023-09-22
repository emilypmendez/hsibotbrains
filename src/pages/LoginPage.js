import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import '../styling/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <a href="/forgot-password">Forgot Password?</a>
      <a href="/register">Register</a>
    </div>
  );
}

export default LoginPage;
