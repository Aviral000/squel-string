import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ user, role, children }) {
if (!user || user.role !== role) {
    return <Navigate to="/login" />;
}

  return children;
}
