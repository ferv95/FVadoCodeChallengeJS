import { phoneAPI } from "../../api";
import { actionTypes } from "../../common/actionTypes";
import { startFetchAction, endFetchAction } from "../../common/actions/fetchActions"

export const loadPhonesAction = () => (dispatch) => {

    dispatch(startFetchAction());

    phoneAPI.getPhones().then((result) => {
        dispatch(loadPhonesCompleted(result));
    }).then(() => {
        dispatch(endFetchAction());
    });

    const loadPhonesCompleted = (result) => ({
        type: actionTypes.LOAD_PHONES,
        payload: result,
        meta: {
            httpEnd: true
        }
    });

};
