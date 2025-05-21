import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import React from 'react';

function Header() {
    return (
        <div className="App-header">
            <img src={ logo } alt="Holberton Logo: Red Seahorse" />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;