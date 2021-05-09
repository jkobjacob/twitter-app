import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default function HomePage() {
    return <div className="wrapper">
        <Link to="/signup">
            <button className="btn">Sign up</button>
        </Link>
        <Link to="/login">
            <button className="btn">Log in</button>
        </Link>
    </div>
    
}