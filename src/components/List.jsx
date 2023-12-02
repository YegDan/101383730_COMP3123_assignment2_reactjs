import React from 'react'
import ListItem from './ListItem'

export default function List({employees, onUpdate, onDelete, onView}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
        <ListItem key={employee.id} employee={employee}  />
        ))}
      </tbody>
    </table>
  )
}
