import React, {useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';

const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Pepito', username: 'Night' },
    { id: uuidv4(), name: 'Perez', username: 'Barriga' },
    { id: uuidv4(), name: 'Berlin', username: 'El capo' },
  ]

  // State
  const [users, setUsers] = useState(usersData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Agregar usuario</h2>
          <AddUserForm addUser = {addUser}/>
        </div>
        <div className="flex-large">
          <h2>Ver usuario</h2>
          <UserTable users = {users} deleteUser = {deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App