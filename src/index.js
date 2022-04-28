import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from '../src/context/contextmain';

ReactDOM.render(
   <Router>
    <Provider>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
