import { getFullYear, getFooterCopy } from '../utils/utils';
import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppFooter: {
        fontStyle: 'italic',
        borderTop: '4px solid #FF0000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '5vmin',
        marginTop: '24px',
        paddingTop: '8px',
    }
});

function Footer() {
    const ctx = useContext(AppContext);
    return (
        <div className={css(styles.AppFooter)}>
            { ctx.user.isLoggedIn && (
                <a href="#">Contact Us</a>
            )}

            <p> Copyright { getFullYear() } - { getFooterCopy(true) }</p>
        </div>
    );
}

export default Footer;