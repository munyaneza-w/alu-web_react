import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';

const rootId = document.getElementById("root");
// isLoggedIn={true}
ReactDOM.render(
  <>
      <App />
    </>,
    rootId
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootId
    );
  });
}