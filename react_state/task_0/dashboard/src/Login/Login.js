import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
   /* App-body */
    appBody: {
        padding: '0px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    appBodyParagraph: {
        fontWeight: 'bold',
        marginBottom: '8px',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'flex-start',
    },

    formLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
    },

    appBodyLabelSpan: {
        paddingLeft: '2px',
        fontWeight: 'bold',
        marginRight: '16px',
    },

    appBodyInput: {
        /* display: block, */
        height: '32px',
        lineHeight: '16px',
        fontSize: '16px',
        paddingLeft: '2px',
        marginTop: '2px',
    },

    appBodyButton: {
        borderRadius: '25px',
        width: '150px',
        height: '32px',
        backgroundColor: 'white', /* #ff4242 */
        fontSize: '24px',
        border: '.5px solid lightgrey',
        alignSelf: 'center',
    },
});

function Login() {
    return (
        <div className={css(styles.appBody)} id="Login">
            <p className={css(styles.appBodyParagraph)}>Login to access the full dashboard</p>
            <div className={css(styles.form)}>
                <label
                    htmlFor="email"
                    className={css(styles.formLabel)}
                    >
                    <span className={css(styles.appBodyLabelSpan)}>Email:</span>
                    <input className={css(styles.appBodyInput)} type="email" name="email" id="email" />
                </label>

                <label htmlFor="password"
                    className={ css(styles.formLabel) }>
                    <span className={css(styles.appBodyLabelSpan)}>Password:</span>
                    <input className={css(styles.appBodyInput)} type="password" name="password" id="pwd" />
                </label>

                <button className={css(styles.appBodyButton)} onClick={ () => { } }>OK</button>
            </div>
        </div>
    );
}

export default Login;