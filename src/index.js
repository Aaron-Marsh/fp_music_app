import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import RouteList from './RouteList'
import Navigation from './Navigation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <RouteList />
      </BrowserRouter>
  </React.StrictMode>
);
