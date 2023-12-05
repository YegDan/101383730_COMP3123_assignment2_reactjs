
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEmployee = ({ employeeId, onBack }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/api/employees/${employeeId}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployeeDetails();
  }, [employeeId]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p><strong>First Name:</strong> {employee.first_name}</p>
      <p><strong>Last Name:</strong> {employee.last_name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Position:</strong> {employee.position}</p>
  
      <button onClick={onBack}>Back to List</button>
    </div>
  );
};

export default ViewEmployee;
