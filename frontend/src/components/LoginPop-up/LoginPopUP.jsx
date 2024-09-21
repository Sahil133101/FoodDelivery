import React, { useState } from 'react'
import './LoginPopUP.css'
import { assets } from '../../assets/assets'
const LoginPopUP = ({setshowLogin}) => {

  const [current, setcurrent] = useState("Sign up") 
  return (
    <div className="loginPop">
        <form className='Container'>
          <div className="titel">
<h2> {current}</h2>
<img onClick={()=> setshowLogin(false)} src ={assets.cross_icon} />
          </div>

        </form>
    </div>
  )
}

export default LoginPopUP