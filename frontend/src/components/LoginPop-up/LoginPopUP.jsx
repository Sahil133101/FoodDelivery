import React, { useState } from 'react'
import './LoginPopUP.css'
import { assets } from '../../assets/assets'
const LoginPopUP = ({setshowLogin}) => {

  const [current, setcurrent] = useState("Login") 
  return (
    <div className="loginPop">
        <form className='Container'>
          <div className="titel">
<h2> {current}</h2>
<img onClick={()=> setshowLogin(false)} src ={assets.cross_icon} />
          </div>
<div className="login-popup-input">
  {current=="Login"?<></>:<input type="text" placeholder="Your Name" required />}
  <input type="text" placeholder="Your Name" required />
  <input type="Email" placeholder="Your Email" required />
  <input type="password" placeholder="Your Password" required />
</div>
<button className='Abc'>
  {current === "Sign up"? "Create Account" : "Login"}
 
</button>
        </form>
    </div>
  )
}

export default LoginPopUP