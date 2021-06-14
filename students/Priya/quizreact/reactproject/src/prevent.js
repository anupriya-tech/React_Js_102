import React from 'react';
import ReactDOM from 'react-dom';

function myPage(){
 function myHandler(e){
  e.preventDefault();
  console.log("yes it is clicked");
 }

 return(
     <div>
     <a href="https://www.google.com/" onClick={myHandler}> click me </a>
     </div>
 );

}


ReactDOM.render(
    <myPage/>
    ,document.getElementById("root"));


