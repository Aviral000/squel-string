import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: 'A'
});

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/auth/register", formData);
        navigate("/login")
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Username'
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <input
            type="password"
            placeholder='Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
            <option value="A">Role A</option>
            <option value="B">Role B</option>
        </select>
        <button type='submit'>Register</button>
    </form>
  )
}
