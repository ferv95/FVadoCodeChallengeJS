import { loadPhonesAction } from "../actions/loadPhonesAction";
import { connect } from "react-redux";
import { PhoneList } from "./phoneList";

const mapStateToProps = (state) => ({
    phones: state.phones,
});

const mapDispatchToProps = (dispatch) => ({
    getPhones: () => dispatch(loadPhonesAction())
});

export const PhoneListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList);