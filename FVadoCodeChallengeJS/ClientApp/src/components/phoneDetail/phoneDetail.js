import * as React from 'react';

export class PhoneDetail extends React.Component{

    render() {
        return (
            <div className="container phonedetailcontainer">
                <div className="row">
                    <div className="col-md-4 leftdiv">
                        <div className="row phonepic">
                            <img src={this.props.phone.ImgURL} alt={"Phone"} />
                        </div>
                        <div className="row price">
                            <p>{this.props.phone.Price}$</p>
                        </div>
                    </div>
                    <div className="col-md-8 rightdiv">
                        <div className="row phonebrand">
                            <p>
                                {this.props.phone.Brand}
                            </p>
                        </div>
                        <div className="row phonedetails">
                            <p>Model: {this.props.phone.Model}</p>
                            <p>Color: {this.props.phone.Color}</p>
                        </div>
                        <div className="row phonedescription">
                            <p>{this.props.phone.Description}</p>
                        </div>
                        <div className="row btndiv">
                            <button className="btn btn-primary btnBack" onClick={() => this.props.backHandler()}>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}