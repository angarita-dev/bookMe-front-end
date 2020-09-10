import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './configStore';

import Root from './containers/Root';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);
