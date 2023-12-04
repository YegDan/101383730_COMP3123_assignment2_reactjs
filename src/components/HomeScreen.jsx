import React, { useEffect, useState } from 'react';
import List from './List';
import axios from 'axios';
import ViewEmployee from './ViewEmployee';
import Update from './Update';

export default function HomeScreen() {
  const [employees, setEmployees] = useState([]);
  const [viewEmployeeId, setViewEmployeeId] = useState(null);
  const [updateEmployeeId, setUpdateEmployeeId] = useState(null);


  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleView = (id) => {
    setViewEmployeeId(id);
  };

  const handleBack = () => {
    setViewEmployeeId(null);
  };

  const handleUpdate = (id) => {
    setUpdateEmployeeId(id);
  };

  const handleUpdateComplete = () => {
    setUpdateEmployeeId(null);
    fetchEmployees(); 
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`http://localhost:8181/api/employees/${id}`);
        setEmployees(employees.filter(employee => employee._id !== id));
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  const actionHandlers = {
    onUpdate: handleUpdate,
    onDelete: handleDelete,
    onView: handleView
  };

  if (viewEmployeeId) {
    return <ViewEmployee employeeId={viewEmployeeId} onBack={handleBack} />;
  }

  if (updateEmployeeId) {
    const employeeToUpdate = employees.find(e => e._id === updateEmployeeId);
    return <Update employee={employeeToUpdate} onUpdateComplete={handleUpdateComplete} />;
  }

  return <List employees={employees} actionHandlers={actionHandlers} />;
}
