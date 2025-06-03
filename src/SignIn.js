    import React, { useState } from 'react';
    import { Navigate, useNavigate } from 'react-router-dom';
    import './auth.css'
    function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const res = await fetch('http://localhost:7000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form) 
        });
    
        const data = await res.json();
        if (res.ok) {
        alert(data.message);
        navigate('/',{state:{user:data.user}})
        console.log(data.user);
        } else {
        alert(data.message);
        }
    };
    

    return (
        <div className='auth-container'>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <button type="submit">Sign In</button>
        </form>
        </div>
    );
    }

    export default SignIn;
