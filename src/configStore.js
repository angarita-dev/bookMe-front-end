import { createStore } from 'redux';

import reducer from './redux/reducers/index';

/* eslint-disable no-underscore-dangle */
export default function configStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
/* eslint-enable */
