import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { GrowProvider } from './context/GrowContext';
import './customStyle/customStyle.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <GrowProvider>
            <App />
        </GrowProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
