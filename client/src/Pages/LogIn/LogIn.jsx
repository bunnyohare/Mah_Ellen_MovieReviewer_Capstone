import React, { useState } from 'react';
import './logIn.css'

const LogIn = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication (accept any userId and password)
    onLogin();
  };

  return (
    <div className='LogIn'>
      <div className='Welcome'>
      <h2>Please Login</h2>
      </div>
      <div id="LogIn-Form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID: </label>
          <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default LogIn;
