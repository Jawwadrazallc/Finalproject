import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import About from '../Screens/About'
import Users from '../Screens/Users'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Protectedroutes from './Protectedroutes'

const Router = () => {
  return (
   <>
   <Routes>

   <Route element={<Protectedroutes/>}>

   <Route path='/' element={<Home/>}/>
   <Route path='/users' element={<Users/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/register' element={<Register/>}/>

   </Route>

   <Route path='/login' element={<Login/>}/>


   </Routes>
   </>
  )
}

export default Router