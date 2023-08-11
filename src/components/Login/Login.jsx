import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
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
            <div className='link-group'>
                <a href='#' className='create-account'>Create an account</a>
                <a href='#' className='forgot-password'>Forgot your password ?</a>
            </div>
        </div>
    </div>
    
  )
}

export default Login