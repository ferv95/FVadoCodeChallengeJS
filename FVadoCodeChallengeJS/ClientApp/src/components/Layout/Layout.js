import * as React from 'react';
import { SpinnerContainer } from "../spinner/spinnerContainer";

export class Layout extends React.Component{
    render = () => {
        const { children } = this.props;
        return (
            <div className="container">
                <SpinnerContainer />
                {children}
            </div>
        )
    }
}