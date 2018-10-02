import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './reducers';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [
    reduxThunk,
    logger
];

export const store = createStore(
    state,
    applyMiddleware(...middlewares)
);