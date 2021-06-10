import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
  const element = (
    <div>
      <h1>Hello There</h1>
      <h2> It is {new Date().toLocaleString()}</h2>
    </div>
  );

  ReactDOM.render(element,document.getElementById("root") );

}

