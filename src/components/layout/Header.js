import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Checklist</h1>
        </header>
    )
}

const headerStyle = {
    background: '#33373e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
