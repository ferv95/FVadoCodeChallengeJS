import { actionTypes } from "../common/actionTypes";

export const fetchReducer = (state = true, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES_COMPLETED:
            return handleFetchPhonesCompleted(state, action.payload);
        case actionTypes.FETCH_PHONES_START:
            return handleFetchPhonesStart(state, action.payload);
    }
    return state;
};

const handleFetchPhonesCompleted = (state, payload) => {
    return payload;
}

const handleFetchPhonesStart = (state, payload) => {
    return payload;
}