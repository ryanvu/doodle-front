import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                
                <Link to="/login"><li>Login</li></Link>

                <Link to="/test"><li>Test</li></Link>
            </ul>
        </div>
    )
}

export default Header
