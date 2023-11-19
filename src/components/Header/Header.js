import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
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
        {/* <Link to="/netflix-show" className='btn btn-xl'>
            Watch Free for 30 Days
            <i className="fas fa-chevron-right btn-icon"></i>
        </Link> */}
        {/* <div classname="last-section"> */}
        <div className="input-container">
            <input type="text" id="input" placeholder="Email Address" />
         </div>
         <Link to ="/" className="btn btn-rounded btn-header">
            Get Started
            <i className="fas fa-chevron-right btn-icon"></i>
        </Link>
        {/* </div> */}
    </div>
   </header>
  )
}

export default Header
