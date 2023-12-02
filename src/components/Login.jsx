import React, { useState } from 'react'

function Login() {
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')

    const handlePasswordChange = (e)=>{
        setUserPass(e.target.value)
    }
    const handleUserNameChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleFormSubmission = (e) =>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleFormSubmission}>
    <div className="mb-3">
        <label for="username" className="form-label">Username</label>
        <input 
        type="text" 
        className="form-control" 
        id="username" 
        placeholder="Enter your username"
        value={userName}
        onChange={handleUserNameChange}/>
    </div>
    <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" 
        className="form-control" 
        id="password"
        placeholder="Enter your password"
        value={userPass}
        onChange={handlePasswordChange}/>
    </div>
    <button type="button" class="btn">Login</button>
    </form>
  )
}
export default Login
