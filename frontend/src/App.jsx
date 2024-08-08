import React, { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './components/Login'
import RoleADashboard from "./pages/RoleADashboard"
import RoleBDashboard from "./pages/RoleBDashboard"
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
const [user, setUser] = useState(null);

  return (
    <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/role-a'
            element={
            <ProtectedRoute user={user} role="A">
                <RoleADashboard />
            </ProtectedRoute>}
        />
        <Route path='/role-b'
            element={
            <ProtectedRoute user={user} role="B">
                <RoleBDashboard />
            </ProtectedRoute>}
        />
    </Routes>
  )
}
