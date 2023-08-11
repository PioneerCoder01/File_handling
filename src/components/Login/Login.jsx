import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <h1>Sign in</h1>
        <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div className="input-group">
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>
        <button>Login</button>
        <a href='#' className='forgot-password'>Forgot your password ?</a>
    </div>
  )
}

export default Login