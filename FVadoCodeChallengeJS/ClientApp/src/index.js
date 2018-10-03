import './css/bootstrap-3.3.7-dist/css/bootstrap.css';
import './css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PhoneListContainer } from './components/phoneListContainer/phoneListContainer';
import { Layout } from './components/Layout/Layout';

const rootElement = document.getElementById('root');

const renderApp = () => {

    ReactDOM.render(
        <Provider store={store}>
            <Layout children={<PhoneListContainer />} />
        </Provider>,
        rootElement);

}

renderApp();