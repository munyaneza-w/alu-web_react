import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import { Notifications } from './Notifications/Notifications';
import uiReducer from './reducers/uiReducer';

// Create Redux store with the uiReducer
const store = createStore(uiReducer);

const rootId = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <div className="root-notifications">
          <Notifications />
        </div>
        <App />
      </>
    </Provider>
  </React.StrictMode>,
  rootId
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App/App", () => {
    const NextApp = require("./App/App").default;
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <>
            <div className="root-notifications">
              <Notifications />
            </div>
            <NextApp />
          </>
        </Provider>
      </React.StrictMode>,
      rootId
    );
  });
}
