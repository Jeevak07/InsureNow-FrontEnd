import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7000/',{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body: JSON.stringify({email,password})
    })
    const data = await  response.json();
  };
  return (
    <div>
      
    </div>
  )
}

export default LoginPage
