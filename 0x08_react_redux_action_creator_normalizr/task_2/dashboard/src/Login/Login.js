import React, { useState, useEffect } from 'react';
import { StyleSheet, css, reset } from 'aphrodite';

const styles = StyleSheet.create({
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
        alignItems: 'baseline',
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

function Login({ logIn }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ enableSubmit, setEnableSubmit ] = useState(false);

    function handleLoginSubmit(e) {
        e.preventDefault();
        logIn(email, password);
        console.log('Logged in!');
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    useEffect(() => {
        resetEnableSubmit();
    }, [ email ]);

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    useEffect(() => {
        resetEnableSubmit();
    }, [ password ]);

    function resetEnableSubmit() {
        if (email !== '' && password !== '') {
            // disabled = false
            setEnableSubmit(true);
            return false;
        } else {
            // disabled = true
            setEnableSubmit(false);
            return true
        }
    }

    return (
        <div className={ css(styles.appBody) } id="Login">
            <p className={ css(styles.appBodyParagraph) }>Login to access the full dashboard</p>
            <form
                className={ css(styles.form) }
                onSubmit={ handleLoginSubmit }>
                <label
                    htmlFor="email"
                    className={ css(styles.formLabel) }
                >
                    <span className={ css(styles.appBodyLabelSpan) }>Email:</span>
                    <input
                        className={ css(styles.appBodyInput) }
                        type="email"
                        name="email"
                        id="email"
                        onChange={ handleChangeEmail } />
                </label>

                <label htmlFor="password"
                    className={ css(styles.formLabel) }>
                    <span className={ css(styles.appBodyLabelSpan) }>Password:</span>
                    <input
                        className={ css(styles.appBodyInput) }
                        type="password"
                        name="password"
                        id="pwd"
                        onChange={ handleChangePassword } />
                </label>

                <input
                    type='submit'
                    id='submit'
                    value='OK'
                    className={ css(styles.appBodyButton) }
                    disabled={ !enableSubmit }
                    ></input>
            </form>
        </div>
    );
}

export default Login;