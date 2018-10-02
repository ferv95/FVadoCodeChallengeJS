import * as React from 'react';

export class PhoneListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-5 listphone" key={this.props.phone.ID} onClick={() => this.props.phoneSelectedHandler(this.props.phone.ID)}>
                <div id="leftdiv">
                    <div className="phonepic">
                        <img src={this.props.phone.ImgURL} alt={"Phone"}/>
                    </div>
                    <div className="price">
                        <p>{this.props.phone.Price}$</p>
                    </div>
                </div>
                <div className="rightdiv">
                    <h2>{this.props.phone.Brand}</h2>
                    <div className="phonelistdetails">
                        <p>Model: {this.props.phone.Model}</p>
                    </div>
                </div>
            </div>
        );
    }

}