import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
const [formData, setFormData] = useState({
    username: "",
    password: ""
});
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("/api/auth/login", formData);
        setUser(response.data);
        if(response.data.role === "A") {
            navigate("/role-a");
        } else {
            navigate("/role-b");
        }
    } catch (error) {
        console.error('login failed:', error);
        alert(error);
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Username'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
            type="password"
            placeholder='Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type='submit'>Login</button>
    </form>
  )
}
