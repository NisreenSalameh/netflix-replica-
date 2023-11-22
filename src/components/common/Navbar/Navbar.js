import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    const imgPath = process.env.PUBLIC_URL + '/netflix logo.PNG';
    return(
        <div className='nav'>
            <Link to="/scarface">
                <img src={imgPath} className='nav-logo' alt="netflix-logo"/>
            </Link>
            <div className='navbar-right-section'>
                <div className='navbar-text'>
                    <p>unlimited tv shows & movies</p>
                </div>
                <div className='navbar-link'>
                    <a href="/">JOIN NOW</a>
                    <a href='/'>SIGN IN</a>
                </div>
            </div>
        </ div>
    )
}