import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>Built by <a href="https://conranpearce.github.io" target="_blank" style={hrefStyle}><b>Conran Pearce</b></a></p>
        </footer>
    )
}

const footerStyle = {
    bottom: 0,
    background: '#33373e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'relative',
}

const hrefStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

export default Footer;