import React, { useState } from 'react'
import List from './List';

export default function HomeScreen() {

const [employees, setEmployees] = useState([])

const actionHandlers = {
    onUpdate: (id) => { /* handle update */ },
    onDelete: (id) => { /* handle delete */ },
    onView: (id) => { /* handle view */ }
};
  return (
    <List employees={employees} />
  )
}
