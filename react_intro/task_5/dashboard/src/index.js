import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';

ReactDOM.render(
  <div>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
    </div>,
  document.getElementById('root')
);