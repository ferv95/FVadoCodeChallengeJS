import * as React from 'react';

export class PhoneDetail extends React.Component{

    render = () => {
        const { phone, backHandler } = this.props;
        return (
            <div className="container phonedetailcontainer">
                <div className="row">
                    <div className="col-md-4 leftdiv">
                        <div className="row phonepic">
                            <img src={phone.ImgURL} alt={"Phone"} />
                        </div>
                        <div className="row price">
                            <p>{phone.Price}$</p>
                        </div>
                    </div>
                    <div className="col-md-8 rightdiv">
                        <div className="row phonebrand">
                            <p>
                                {phone.Brand}
                            </p>
                        </div>
                        <div className="row phonedetails">
                            <p>Model: {phone.Model}</p>
                            <p>Color: {phone.Color}</p>
                        </div>
                        <div className="row phonedescription">
                            <p>{phone.Description}</p>
                        </div>
                        <div className="row btndiv">
                            <button className="btn btn-primary btnBack" onClick={() => backHandler()}>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}