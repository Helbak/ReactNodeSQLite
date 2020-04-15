import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

export const init = () => {
    const root = document.getElementById('root');
const app = <div><App/></div>;
    ReactDOM.render(app, root);
};