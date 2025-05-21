import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo: Red Seahorse"/>
        <h1>School dashboard</h1>
      </div>
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

          <button onClick={() => {}}>OK</button>
        </div>
      </div>
        <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
