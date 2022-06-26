import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import { AuthContext } from './context/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Misc from './pages/misc/Misc'
import Register from './pages/register/Register'
export default function App() {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Login />}></Route>
        <Route exact path="/login" element={ user ? <Navigate to="/" /> : <Login />}></Route>
        <Route exact path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route exact path="/misc" element={user ? <Misc /> : <Register />}></Route>
        <Route exact path="*" element={ <NotFound />}/>
      </Routes>
    </div>
  )
}
