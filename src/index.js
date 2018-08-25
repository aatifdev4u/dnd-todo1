import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lists from './Lists';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe((cardPosition) => {   
    ReactDOM.render(<Lists cardPosition={cardPosition} />, rootEl)
})