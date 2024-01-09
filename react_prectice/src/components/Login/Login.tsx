// import React from 'react'
import { Card, CardHeader, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import logo from '../../assets/logo_hd.svg'
import './Login.css'
import { useState } from 'react';

interface Errors {
    email?: string;
    password?: string;
  }
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<Errors>({})

    const validateForm = ()=>{
        const errorObject: Errors = {}

        //Email validations
        if(!email.trim()){
            errorObject.email = 'Email is required'
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            errorObject.email = 'Invalid email address';
          }
          //password validations
          if(!password.trim()){
            errorObject.password = 'Password is required'
          }else if (password.length<4){
            errorObject.password = 'Password must have atleast 8 characters'
          }
          setErrors(errorObject)  
          return Object.keys(errorObject).length === 0;
    }
    
     const loginSubmitHandler = async (event: React.MouseEvent<HTMLButtonElement>)=>{
 event.preventDefault()
 if (validateForm()) {
    console.log('Login successful');
   
  } else {
    console.log('Form has validation errors. Please correct them.');
  }
 try{
    const response = await fetch('https://b0tpef7sjf.execute-api.ap-south-1.amazonaws.com/dev/prism-api/v1/authenticator/login',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }
    )
    if(response.ok){
        console.log('you are logged in!!')
    }else{
        console.log('err')
    }
 }catch(err){
    console.error('Error during login:', err);
 }
 
     }
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
         {/* <select className="auth-select-element">
            <option>Select Role</option>
            <option>Seller</option>
            <option>Buyer</option>
          </select> */}
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <input className="input-container" id="email-input" type="email" placeholder="Email" name={email} onChange={e=>setEmail(e.target.value)}/>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
             <input className="input-container" id="password-input" type="password" placeholder="Password" name={password} onChange={e=>setPassword(e.target.value)}/>
             <div className="forget-password">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        
               <span><a>Forgot Password</a></span>
             </div>
           <button className='btn' onClick={(e) => loginSubmitHandler(e)}>LOG IN</button>
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