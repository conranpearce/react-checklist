import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Daily Journal</h1>
            <Link style={linkStyle}to="/">Home</Link> | <Link style={linkStyle} to="/aims">Aims </Link> 
        |   <Link style={linkStyle} to="/checklist">Checklist</Link>  
        </header>
    )
}

const headerStyle = {
    background: '#33373e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
