import App from '../App';
import store from '../store/index';
import { Provider } from 'react-redux';
import React from 'react';

const AppWrapper = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    )
}

export default AppWrapper;