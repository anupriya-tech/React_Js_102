import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SignInWithHook(){
  
  const[user,setUser]  = useState({name:'', contact:0, city:'', state:'', country:''});

  const handleUpdateUser = (event) => {
    
    const {name, value} = event.target;

    //console.log({[name]:value});
    
    setUser({ ...user, [name]: value});
  }

  return(
    <div>
    {user.name !== '' ? <p>Name: {user.name}</p> : ''}
    {user.contact !== 0 ? <p>Contact Number:(+91) {user.contact}</p> : ''}
    {user.city !=='' && user.state !=='' && user.country !=='' ? <p>Address: {user.city}, {user.state}, {user.country}</p> : ''}
    <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleUpdateUser} />
    </label>
    <label>
          Contact:
          <input type="text" name="contact" value={user.contact} onChange={handleUpdateUser} />
    </label>
    <label>
          City:
          <input type="text" name="city" value={user.city} onChange={handleUpdateUser} />
    </label>
    <label>
          State:
          <input type="text" name="state" value={user.state} onChange={handleUpdateUser} />
    </label>
    <label>
          Country:
          <input type="text" name="country" value={user.country} onChange={handleUpdateUser} />
    </label>            
    </div>
  );
}

ReactDOM.render(
  <SignInWithHook />
  ,document.getElementById("root") );