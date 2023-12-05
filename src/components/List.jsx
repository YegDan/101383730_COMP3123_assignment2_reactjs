import React from 'react'
import ListItem from './ListItem'

export default function List({employees, actionHandlers}) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
      {employees.map(employee => (
      
        <ListItem key={employee._id} employee={employee} actionHandlers={actionHandlers} />
      ))}
    </tbody>
    </table>
  )
}
