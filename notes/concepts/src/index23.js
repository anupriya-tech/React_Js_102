import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Returns a stateful value, and a function to update it.

function MyComponentWithHook(){
  //this.state
  const[user,setUser]  = useState({name:'Raj',age:20});

  const handleUpdateUser = (event) => {
    //console.log(event.target.value);
    const {name,value} = event.target;

    console.log({[name]:value});
    //setUser({name:"Rajesh",age:25});
    setUser({ ...user, [name]:value});
  }

  return(
    <div>
    <p>My name is {user.name}</p> 
    <p>and my age is {user.age} years.</p>
    <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleUpdateUser} />
    </label>
    <label>
          Age:
          <input type="text" name="age" value={user.age} onChange={handleUpdateUser} />
    </label>
    </div>
  );
}

ReactDOM.render(
  <MyComponentWithHook />
  ,document.getElementById("root") );