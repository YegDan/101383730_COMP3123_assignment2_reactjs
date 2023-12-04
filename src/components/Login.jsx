import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8181/api/users/login', {
                email: email,
                password: password
            });
            console.log(response.data); 
            onLogin()
            navigate('HomeScreen.jsx');
        } catch (error) {
            if (error.response) {

                console.error('Error data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {

                console.error('Error request:', error.request);
            } else {

                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };
    

    return (
        <form onSubmit={handleFormSubmission}>
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
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default Login;

