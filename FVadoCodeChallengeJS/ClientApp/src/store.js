import reduxThunk from 'redux-thunk';
import { state } from './reducers';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [
    reduxThunk,
];

export const store = createStore(
    state,
    applyMiddleware(...middlewares)
);