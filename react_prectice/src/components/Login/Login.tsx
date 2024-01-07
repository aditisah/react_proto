// import React from 'react'
import { Card, CardHeader, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import logo from '../../assets/logo_hd.svg'
import './Login.css'

function Login() {
  return (
    <div className="main-auth-container">
  <div className="auth-background-image"></div>
<Card className="auth-card">
    <CardHeader
    title= {
<img className="logo" src={logo}/>
    }
    >
    </CardHeader>
    <div className="auth-title">
    <div id="welcome-text">Welcome Back!</div>
    <div id="signin-text">Sign in to continue to PRISM.</div>
  </div>
      <div className="auth-form-container">
        <div className="error-container"></div>
         <form>
         <select className="auth-select-element">
            <option>Select Role</option>
            <option>Seller</option>
            <option>Buyer</option>
          </select>

            <input className="input-container" id="email-input" type="email" placeholder="Email"/>

             <input className="input-container" id="password-input" type="password" name="password" placeholder="Password"/>
             <div className="forget-password">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        
               <span><a>Forgot Password</a></span>
             </div>
           <button className='btn'>LOG IN</button>
         </form>
        <div className="auth-notification">
        <p>Don’t have an account? <a>Sign up for free</a></p>
        </div>
      </div>
</Card>
    </div>
  )
}

export default Login