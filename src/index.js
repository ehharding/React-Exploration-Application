/******************************************************************************************************************************************************************************
 * This file represents the main entrypoint for the React app. It is bootstrapped to render the UI when a user visits the page.
 *
 * React Docs - https://reactjs.org/docs/getting-started.html
 *****************************************************************************************************************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';

import REPORT_WEB_VITALS from './reportWebVitals';

import App from './App';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. Learn
// more: https://bit.ly/CRA-vitals
REPORT_WEB_VITALS();
