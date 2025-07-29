import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
       
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMsg(res.data.message);
       
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div>
      <div className="login-container">
  <h2>Login</h2>
   
</div>
      <h2>Login</h2>
      {msg && <p>{msg}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
       

      </form>
    </div>
  );
}

export default Login;

