import './Login.css';
import React from 'react';

function Login() {
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <div className="form">
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="email" name="email" id="email" />
                </label>

                <label htmlFor="password">
                    <span>Password:</span>
                    <input type="password" name="password" id="pwd" />
                </label>

                <button onClick={ () => { } }>OK</button>
            </div>
        </div>
    );
}

export default Login;