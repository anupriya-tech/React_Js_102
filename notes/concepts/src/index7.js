import React from 'react';
import ReactDOM from 'react-dom';

function MyAction(){
  function myHandler(e){
    e.preventDefault();
    console.log("Yes it is clicked.");
  }

  return(
    <a href="https://www.google.com" onClick={myHandler}>Click Me</a>
  );

}

ReactDOM.render(
  <MyAction />
  ,document.getElementById("root") );