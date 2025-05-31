import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        borderBottom: '4px solid #FF0000',
    },

    appHeaderH1: {
        maxWidth: 'fitContent',
        color: '#FF0000',
    },

});

function Header() {
    return (
        <div className={css(styles.appHeader)} id="Header">
            <img src={ logo } alt="Holberton Logo: Red Seahorse" />
            <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
        </div>
    )
}

export default Header;