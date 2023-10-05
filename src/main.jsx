import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_REACT_APP_DOMAIN_NAME}
    clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}
    authorizationParams={{redirect_uri: window.location.origin}}>

      <Provider store={store}>
        <App />
      </Provider>

  </Auth0Provider>
);
