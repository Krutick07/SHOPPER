import React from 'react'
import './css/loginsignup.css'

export const Loginsignup = () => {
  return (
    <div className='loginsignup'>
          <div className="loginsignup-container">
            <h1>Sign up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='Your Email' />
              <input type="password" placeholder='Your Password' />
            </div>
            <button>Coontinue</button>
            <p className="loginsignup-login">
              Already have an account? <span>login here</span>
            </p>
            <div className="loginsigup-agree">
              <input type="checkbox" name='' id=''/>
              <p>By continuing, i agree to the terms of use & privarcy ploicy.</p>
            </div>
          </div>
    </div>
  )
}
