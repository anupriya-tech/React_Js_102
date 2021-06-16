import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Returns a stateful value, and a function to update it.

function MyComponentWithHook(){
  //this.state
  const[user,setUser]  = useState({name:'Raj',age:20});

  const updateUser = () => {
    setUser({name:"Rajesh",age:25});
  }

  return(
    <div>
    <p>My name is {user.name}</p> 
    <p>and my age is {user.age} years.</p>
    <label>
          Name:
          <input type="text" value={user.name} onChange={updateUser} />
    </label>
    <label>
          Age:
          <input type="text" value={user.age} onChange={updateUser} />
    </label>
    </div>
  );
}

ReactDOM.render(
  <MyComponentWithHook />
  ,document.getElementById("root") );