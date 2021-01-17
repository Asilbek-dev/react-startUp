import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "./components/todo.css";
import reportWebVitals from './reportWebVitals';
import "./components/FA/css/all.min.css";
import "antd/dist/antd.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
