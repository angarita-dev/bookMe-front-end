import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// Styling
import '../styles/main.scss';

// Components
import App from './App';

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
