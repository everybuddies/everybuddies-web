import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import View from './view';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<View />, document.getElementById('root'));
registerServiceWorker();
