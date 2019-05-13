import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/container/App';

const renderApp = () => (
  render((
    <App />
  ), document.getElementById('root'))
);

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
