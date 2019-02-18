import { Store, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // add-on you may want
import logger from 'redux-logger'; // add-on you may want

import { rootReducer } from './reducers';

export const store: Store = createStore(rootReducer, applyMiddleware(thunk, logger));
