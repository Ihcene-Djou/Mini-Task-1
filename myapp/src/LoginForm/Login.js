import React, { useState } from 'react'
import './Login.css'

function LoginForm () {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChangeEmail = (event) => {
    setEmail(event.target.value)
}
const handleChangePassword = (event) => {
    setPassword(event.target.value)
}

  return (
    <div className='container'>
            <div className='header'>
            <h1>Welcome Back!</h1>
            <p>Log in with</p>
            </div>
            <div className='social-icons'>
            <i className='bx bxl-google'></i>
            <i className='bx bxl-facebook' ></i>
            <i className='bx bxl-linkedin'></i>
            <i className='bx bxl-github' ></i>
            </div>
            <p className='or'><span>or</span></p>
            <div className='inputs'>
                <input type='email' placeholder='Email' value={email} onChange={handleChangeEmail}/>
                <i className='bx bxs-envelope'></i>
            </div>
            <div className='inputs'>
                <input type='password' placeholder='Password' value={password} onChange={handleChangePassword}/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className='forgot-password'>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit' className='btn'>Login</button>
            <div className='signup'>
            <p>Don't have an account? <a href='#'>Sign up</a></p>
            </div>
    </div>
  )
}

export default LoginForm