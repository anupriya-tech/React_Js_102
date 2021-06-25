import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Prod from './component'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* eventhandler(data){
  console.log(data)
}


ReactDOM.render(
  <React.StrictMode>
    <Prod imgSrc="prodImg.jpeg" prodName="product 1" prodExcerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed libero quis arcu laoreet tempor." prodPrice="$ 150" cartQuantity="0" onChange={eventhandler} />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
