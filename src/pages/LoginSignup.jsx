import React from 'react'
import './Css/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account<span> Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing,I agree to the terms of use & privacy policy.</p>
          </div>
        </h1>
      </div>
      
    </div>
  )
}

export default LoginSignup
