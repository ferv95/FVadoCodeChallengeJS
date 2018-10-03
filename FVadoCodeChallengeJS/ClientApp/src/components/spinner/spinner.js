import * as React from "react";

export class Spinner extends React.Component {

    render = () => {
        const { isFetching } = this.props;

        if (isFetching) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/money/index.coin-flowing-loader.svg" alt="Spinner"/>
                </div>
            );
        } else {
            return null;
        }
    }
}
