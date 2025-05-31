import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    /* App-footer */

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
    return (
        <div className={css(styles.AppFooter)}>
            <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
        </div>
    );
}

export default Footer;