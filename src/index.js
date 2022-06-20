import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux'

import { store } from './store'
import RouteList from './RouteList'
import Navigation from './Navigation'

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Navigation />
                    <RouteList />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
