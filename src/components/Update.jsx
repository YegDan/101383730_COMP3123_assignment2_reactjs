import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ employee, onUpdateComplete }) => {
  const [formData, setFormData] = useState({...employee});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8181/api/employees/${employee._id}`, formData);
      onUpdateComplete(); 
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <input 
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input 
        name="position"
        value={formData.position}
        onChange={handleChange}
      />

      
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
