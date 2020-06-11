import React from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome')

function Header() {
    return (
        <header style={headerStyle}>
            <a style={linkStyle} href="https://github.com/conranpearce/react-checklist" target="_blank">
                <FontAwesome
                    name="github"
                    size="3x"
                    style={iconStyle}
                />
            </a>
            <h1 style={h1Style}><Link style={linkStyle} to="/">Daily Journal</Link></h1>
            <div style={navStyle}>
                <Link style={linkStyle} to="/checklist">Checklist </Link> |
                <Link style={linkStyle} to="/aims"> Aims </Link> | 
                <Link style={linkStyle} to="/reflect"> Reflect</Link>  
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#33373e',
    color: '#fff',
    // textAlign: 'center',
    padding: '10px'
}

const h1Style = {
    fontSize: '32px',
}

const navStyle = {
    fontSize: '18px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}

const iconStyle = {
    textDecoration: 'none',
    color: '#fff',
    float:'right'
}

export default Header;
