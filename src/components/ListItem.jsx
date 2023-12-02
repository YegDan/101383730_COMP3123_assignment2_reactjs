import React from 'react'

export default function ListItem({employee, onUpdate, onDelete, onView}) {

  return (
    <tr>
        <td>{employee.fname}</td>
        <td>{employee.lname}</td>
        <td>{employee.email}</td>

        <td>
            <button onClick={() => onUpdate(employee.id)}>Update</button>
            <button onClick={() => onDelete(employee.id)}>Delete</button>
            <button onClick={() => onView(employee.id)}>View</button>
        </td>
    </tr>
  )
}
