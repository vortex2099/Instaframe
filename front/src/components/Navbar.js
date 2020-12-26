import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <Link Link to="/" className="brand-logo left">Instaframe</Link>
                <ul id="nav-mobile" className="right ">
                    <li><Link Link to="/signin">Signin</Link></li>
                    <li><Link Link to="signup">Signup</Link></li>
                    <li><Link Link to="/profile">Profile</Link></li>
                    <li><Link Link to="/create">Create</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar