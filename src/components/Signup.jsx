import React, { useState } from 'react'

function Signup() {

  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const[passowrd, setPass] = useState('')

  const handlePasswordChange = (e)=>{
    setPass(e.target.value)
  }

  const handleFnameChange = (e)=>{
    setfname(e.target.value)
  }

  const handleLnameChange = (e)=>{
    setlname(e.target.value)
  }

  const handleAddressChange = (e)=>{
    setAddress(e.target.value)
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }
  
  const handleFormSubmission = (e) =>{
    e.preventDefault()
}


  return (
    <form onSubmit={handleFormSubmission}>
      <div className="mb-3">
        <label for="fname" className="form-label">First Name</label>
        <input 
        type="text" 
        className="form-control" 
        id="fname" 
        placeholder="Enter your first name"
        value={fname}
        onChange={handleFnameChange} 
        />
    </div>
    <div className="mb-3">
        <label for="lname" className="form-label">Last Name</label>
        <input type="text" 
        className="form-control" 
        id="lname"
        placeholder="Enter your last name"
        value={lname}
        onChange={handleLnameChange}
        />
    </div>
    <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" 
        className="form-control" 
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        />
    </div>


    <div className="mb-3">
        <label for="address" className="form-label">Address</label>
        <input type="address" 
        className="form-control" 
        id="address"
        placeholder="Enter your address"
        value={address}
        onChange={handleAddressChange}
        />
    </div>
   
    <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" 
        className="form-control" 
        id="password"
        placeholder="Enter your password"
        value={passowrd}
        onChange={handlePasswordChange}
        />
    </div>

    

    <button type="button" class="btn">Sign Up</button>
    </form>
  )
}

export default Signup
