import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';  

//Returns a stateful value, and a function to update it.

function MyComponentWithHook(){
  //this.state

  const[user,setUser]  = useState({name:'sai',age:20,City:Hyderabad,State:Telangana,Country:India});

  const updateUser = () => {
    setUser({name:"Ganesh",age:25,City:Mumbai,State:Maharashtra,Country:India});
  }
  return(
    <div>
    <p>My name is {user.name}</p> 
    <p>and my age is {user.age} years.</p>
    <p>and City is {user.City} years.</p>
    <p>and State is {user.State} years.</p>
    <p>and Country is {user.Country} years.</p>

    <label>
          Name:
          <input type="text" value={user.name} onChange={updateUser} />
    </label>
    <label>
          Age:
          <input type="text" value={user.age} onChange={updateUser} />
    </label>

    <label>
          City:
          <input type="text" value={user.City} onChange={updateUser} />
    </label>

    <label>
          State:
          <input type="text" value={user.State} onChange={updateUser} />
    </label>

    <label>
          Country:
          <input type="text" value={user.Country} onChange={updateUser} />
    </label>
    </div>
  );
}

ReactDOM.render(
  <MyComponentWithHook />
  ,document.getElementById("root") );