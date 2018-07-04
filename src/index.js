import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Orders from './Orders';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Orders />, document.getElementById('root'));
registerServiceWorker();
