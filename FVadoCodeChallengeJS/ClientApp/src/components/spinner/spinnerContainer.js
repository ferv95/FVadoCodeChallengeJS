import { Spinner } from "./spinner";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
});

export const SpinnerContainer = connect(
    mapStateToProps,
)(Spinner);
