import React from 'react'
import Sidebar from './Components/Sidebar'
import Login from './Screens/Login'

const App = () => {

  const user = localStorage.getItem('user')
  return user ? <Sidebar/> : <Login/>
}

export default App
