import React from 'react';
import { Link } from 'react-router-dom';

var FontAwesome = require('react-fontawesome')

function Checklist() {
    return (
        <React.Fragment>
            <div style={aboutStyle}>
                <h1><a style={linkStyle} href="https://conranpearce.github.io" target="_blank">Conran Pearce</a></h1>
                <a href="https://conranpearce.github.io" target="_blank"><FontAwesome
                    name="github"
                    size="3x"
                    style={iconStyle}/>
                </a>
            </div>
        </React.Fragment>
    )
}

const aboutStyle = {
    background: '#33373e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const iconStyle = {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Checklist;