import { actionTypes } from "../common/actionTypes";

export const phonesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOAD_PHONES:
            return handleLoadPhonesCompleted(state, action.payload);
        default:
            return state;
    }
};

const handleLoadPhonesCompleted = (state, payload) => {
    return payload;
}