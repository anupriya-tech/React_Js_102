
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Login(){
  const[user,setUser]=useState({name:'',password:'',status:true});
  
  const handleEvent=(event)=>{
    const{name,value}=event.target; 
   console.log({[name]:value}); 
    setUser({...user,[name]:value});
  }
    const handleEvent1=(event)=>{ 
      setUser({status:false});
      console.log(user.name);
      alert(`Welcome ${user.name} you are successfully loggedin!! Press Ok to Logout`); 
      event.preventDefault();
      if({status:false}){
        setUser({name:'',password:'',status:true});
      }

    }
  return(
    <div>
    <form onSubmit={handleEvent1}>  
    <label>Enter Username: </label>
    <input type="text" name="name" value={user.name} onChange={handleEvent} ></input>
    <label>Enter Password: </label>
    <input type="password" name="password" value={user.password} onChange={handleEvent}></input>
    <button>{user.status?'Login':'Logout'}</button>
    </form>
    </div>  
  )
}

ReactDOM.render(
  <Login/>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
