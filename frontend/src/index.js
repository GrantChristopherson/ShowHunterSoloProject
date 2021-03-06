import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './store';
import * as sessionActions from "./store/session";
import { restoreCSRF, csrfFetch } from './store/csrf';
import { ModalProvider } from "./context/Modal";



const store = configureStore();

// will add XSRF-TOKEN if in development
if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();      

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
