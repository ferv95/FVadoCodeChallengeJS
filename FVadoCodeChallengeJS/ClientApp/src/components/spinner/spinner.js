import * as React from "react";

export class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isFetching) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/money/index.coin-flowing-loader.svg" />
                </div>
            );
        } else {
            return null;
        }
    }

}