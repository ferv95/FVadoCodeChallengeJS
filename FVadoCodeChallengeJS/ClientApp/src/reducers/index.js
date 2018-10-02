import { combineReducers } from 'redux';
import { phonesReducer } from './phonesReducer';
import { fetchReducer } from './fetchReducer';

export class StateReducer {
    phones = [];
    isFetching = true;
}

export const state = combineReducers({
    phones: phonesReducer,
    isFetching: fetchReducer,
});