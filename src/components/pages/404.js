import React from 'react';

var FontAwesome = require('react-fontawesome')

function NotFound() {
    return (
        <React.Fragment>
            <div style={aimsStyle}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
            </div>
        </React.Fragment>
    )
}

const aimsStyle = {
    background: '#33373e',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default NotFound;