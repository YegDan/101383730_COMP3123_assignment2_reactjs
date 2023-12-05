import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/users/register', {
        username: username, 
        email: email,
        password: password
      });
      console.log(response.data); 
      setIsSignupSuccessful(true);
     

    } catch (error) {
      console.error('Error registering user:', error);
      setIsSignupSuccessful(false);

    }
  };

  return (

    <>
    {isSignupSuccessful ? (

      <div>
        <p>Signup successful! You can login now.</p>
      </div>
    ) : (
   
      <form onSubmit={handleFormSubmission}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    )}
  </>
    
  );
}

export default Signup;

