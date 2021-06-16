import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Returns a stateful value, and a function to update it.

function MyComponentWithHook(){
  //this.state
  const[counter,setCounter]  = useState(0);
  const[age,setAge] = useState(20);

  return(
    <div>
    <p>Click me {counter} times.</p>
    <button onClick={ () => setCounter(counter+1)}>ClickMe</button>

    <p>Click me {age} years.</p>
    <button onClick={ () => setAge(age+1)}>ClickMe</button>
    </div>
  );
}

ReactDOM.render(
  <MyComponentWithHook />
  ,document.getElementById("root") );