import React, { useState } from 'react'
import './LoginPopUP.css'
import { assets } from '../../assets/assets'
const LoginPopUP = ({setshowLogin}) => {

  const [current, setcurrent] = useState("Sign Up") 
  return (
    <div className="loginPop">
        <form className='Container'>
          <div className="title">
<h2> {current}</h2>
<img onClick={()=> setshowLogin(false)} src ={assets.cross_icon} />
          </div>
<div className="login-popup-input">
  {current==="Login"?<></>:<input type="text" placeholder="Your Name" required />}

  <input type="Email" placeholder="Your Email" required />
  <input type="password" placeholder="Your Password" required />
  
  </div>
  
<button className='Abc'>
  {current === "Sign Up"? "Create Account" : "Login"}
 
</button>
<div className="loginPopUp-condition">
  <input type="checkbox" required />
  <p> By continuing, i agree to the term of use and privacy policy.</p>
</div>
{current==="Login"
? <p>  Create a new account ?<span onClick={()=> setcurrent("Sign Up")}> Click Here!</span></p> 
:<p> Already Have an account ? <span onClick={()=> setcurrent("Login")}> Login Here</span></p>
}

        </form>
    </div>
  )
}

export default LoginPopUP