import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyComponentWithHook(){
 
  const[user,setUser]  = useState({name:'Sai',age:20,city:Hyderabad,State:Telangana,Country:India});

  const updateUser = () => {
    setUser({name:'Ganesh',age:25,city:Mumbai,State:Maharashtra,Country:India});
  }

  return(
    <div>
    <p>My name is {user.name}</p> 
    <p>and my age is {user.age} years.</p>
    <p>City is {user.city}</p> 
    <p>State is {user.State}</p> 
    <p>Country is {user.Country}</p> 
    <label>
          Name:
          <input type="text" value={user.name} onChange={updateUser} />
    </label>
    <label>
          Age:
          <input type="text" value={user.age} onChange={updateUser} />
    </label>
    <label>
          Name:
          <input type="text" value={user.City} onChange={updateUser} />
    </label>
    <label>
          Name:
          <input type="text" value={user.State} onChange={updateUser} />
    </label>
    <label>
          Name:
          <input type="text" value={user.Country} onChange={updateUser} />
    </label>
    </div>
  );
}

ReactDOM.render(
  <MyComponentWithHook />
  ,document.getElementById("root") );