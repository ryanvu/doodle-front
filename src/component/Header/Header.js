import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

    const [showNav, setShowNav] = useState(false);
    const navRef = useRef(null);
    const toggle = () => {
        setShowNav(prev => !prev);
    }

    return (
        <div className="header">
            <div className="header__wrap">
            <h1>website</h1>
                <ul className="header__nav">
                    <Link className="header__nav-item" to="/"><li>Home</li></Link>
                    <Link className="header__nav-item" to="/login"><li>Login</li></Link>
                    <Link className="header__nav-item" to="/test"><li>Test</li></Link>
                    <Link className="header__nav-item" to="/upload"><li>Upload</li></Link>
                </ul>
            {!showNav ? <p className="header__toggle"onClick={toggle}>hamberg</p> : <p className="header__toggle"onClick={toggle}>close</p>}
            </div>

            

            {showNav && 
                <ul ref={navRef} className="header__hb">
                    <li>poop</li>
                    <li>peep</li>
                </ul>}
        </div>
    )
}

export default Header
