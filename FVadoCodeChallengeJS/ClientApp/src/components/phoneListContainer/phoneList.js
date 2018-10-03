import * as React from 'react';
import { PhoneDetail } from '../phoneDetail/phoneDetail';
import { PhoneListItem } from '../phoneListItem/phoneListItem';
import * as shallowequal from 'shallowequal';

export class PhoneList extends React.Component {

    componentWillMount = () => {
        const { getPhones } = this.props;
        getPhones();
        this.setState({
            selectedPhone: '',
            currentScreen: 'list',
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { props } = this.props;
        const { state } = this.state;

        return !shallowequal(props, nextProps) || !shallowequal(state, nextState);

    }

    renderComponent = () => {
        const { currentScreen, selectedPhone } = this.state;
        const { phones } = this.props;
        if (currentScreen === 'list') {
            return (
                <div className="container phonelistcontainer">
                    <div className="row">
                        {
                            phones.map((phone) => {
                                return <PhoneListItem phone={phone} phoneSelectedHandler={this.phoneSelected} key={phone.ID} />
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <PhoneDetail phone={this.getPhoneByID(selectedPhone)} backHandler={this.backButtonHandler} />
            );
        }
    }

    phoneSelected = (phoneID) => {
        this.setState({
            currentScreen: 'detail',
            selectedPhone: phoneID,
        })
    }

    getPhoneByID = (phoneID) => {
        const { phones } = this.props;
        return phones.filter(x => x.ID === phoneID)[0];
    }

    backButtonHandler = () => {
        this.setState({
            currentScreen: 'list',
        });
    }

    render = () => {
        const { phones } = this.props;
        if (phones.length > 0) {
            return this.renderComponent();
        } else {
            return null;
        }
    }

}