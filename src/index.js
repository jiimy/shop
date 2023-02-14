import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const express = require('express');
// const app = express();

// app.listen();

// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb+srv://rudwnok:ok9953@first.2owuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));
  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
