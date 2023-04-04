import React from 'react';
import App from './App';
import "./index.css";
import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <HashRouter basename='/egy-technologys'>
    <App />
   </HashRouter>
);
