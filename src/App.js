import React from 'react'
import UserTable from './components/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Agreagr usuario</h2>
        </div>
        <div className="flex-large">
          <h2>Ver usuario</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default App