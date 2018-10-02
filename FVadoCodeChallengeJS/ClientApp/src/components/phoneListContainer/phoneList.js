import * as React from 'react';
import { PhoneDetail } from '../phoneDetail/phoneDetail';
import { PhoneListItem } from '../phoneListItem/phoneListItem';
import * as shallowequal from 'shallowequal';

export class PhoneList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPhones();
        this.setState({
            selectedPhone: '',
            currentScreen: 'list',
        })
    }

    shouldComponentUpdate(nextProps, nextState) {

        return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);

    }

    renderComponent = () => {
        if (this.state.currentScreen === 'list') {
            return (
                <div className="container phonelistcontainer">
                    <div className="row">
                        {
                            this.props.phones.map((phone) => {
                                return <PhoneListItem phone={phone} phoneSelectedHandler={this.phoneSelected} key={phone.ID} />
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <PhoneDetail phone={this.getPhoneByID(this.state.selectedPhone)} backHandler={this.backButtonHandler} />
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
        return this.props.phones.filter(x => x.ID === phoneID)[0];
    }

    backButtonHandler = () => {
        this.setState({
            currentScreen: 'list',
        });
    }

    render() {

        if (this.props.phones.length > 0) {
            return this.renderComponent()
        } else {
            return null
        }
    }

}