// ListItem.jsx
import React from 'react';

export default function ListItem({ employee, actionHandlers }) {
  return (
    <tr>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.email}</td>
      <td>
        <button onClick={() => actionHandlers.onUpdate(employee._id)}>Update</button>
        <button onClick={() => actionHandlers.onDelete(employee._id)}>Delete</button>
        <button onClick={() => actionHandlers.onView(employee._id)}>View</button>
      </td>
    </tr>
  );
}
