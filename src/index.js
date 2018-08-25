import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lists from './Lists';

const rootEl = document.getElementById('root');

ReactDOM.render(<Lists cardPosition={'orange'} />, rootEl)
