import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
import Input from '../Input/Input';
function Header() {
  return (
   <header className="showcase">
    <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo"/>
        <Link to ="/" className="btn btn-rounded btn-header">
            Sign In
        </Link>
    </div>
    <div className="showcase-content">
        <h1>Unlimited movies ,TV shows and more </h1>
        <p>Watch anywhere. Cancel Anytime</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        
        
    </div>
    <Input/>
   </header>
  )
}

export default Header
