import * as React from 'react';

export class PhoneListItem extends React.Component {

    render = () => {
        const { phone, phoneSelectedHandler } = this.props;
        return (
            <div className="col-md-5 listphone" key={phone.ID} onClick={() => phoneSelectedHandler(phone.ID)}>
                <div id="leftdiv">
                    <div className="phonepic">
                        <img src={phone.ImgURL} alt={"Phone"}/>
                    </div>
                    <div className="price">
                        <p>{phone.Price}$</p>
                    </div>
                </div>
                <div className="rightdiv">
                    <h2>{phone.Brand}</h2>
                    <div className="phonelistdetails">
                        <p>Model: {phone.Model}</p>
                    </div>
                </div>
            </div>
        );
    }

}