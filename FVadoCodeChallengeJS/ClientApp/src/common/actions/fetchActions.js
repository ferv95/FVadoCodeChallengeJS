import { actionTypes } from "../actionTypes";

export const endFetchAction = () => ({
    type: actionTypes.FETCH_PHONES_COMPLETED,
    payload: false
});

export const startFetchAction = () => ({
    type: actionTypes.FETCH_PHONES_START,
    payload: true
});
