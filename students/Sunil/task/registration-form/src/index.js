import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function UserForm(){
  const[user,setUser]=useState({name:'',status:true});
  const[address,setAddr]= useState({city:'',state:'',country:''}); 
  
  const handleEvent=(event)=>{
    const{name,value}=event.target; 
   console.log({[name]:value}); 
    setUser({...user,[name]:value});
    setAddr({...address,[name]:value});
  }

    const handleEvent1=(event)=>{ 
      setUser({status:false});
      console.log(user.name);
      alert(`Welcome ${user.name} You have successfully submitted!! Details are:
       CITY: ${address.city} 
       STATE: ${address.state} 
       COUNTRY: ${address.country} 
       Press Ok to Clear`); 
       event.preventDefault();
      setAddr({city:'',state:'',country:''});  
      //setUser({name:''});  
    }
  return(
    
    <div>
    <form onSubmit={handleEvent1}>  
    <label>Enter Name: </label>
    <input type="text" name="name" value={user.name} onChange={handleEvent} ></input>
    <label>Enter City: </label>
    <input type="text" name="city" value={address.city} onChange={handleEvent}></input>
    <label>Enter State: </label>
    <input type="text" name="state" value={address.state} onChange={handleEvent}></input>
    <label>Enter Country: </label>
    <input type="text" name="country" value={address.country} onChange={handleEvent}></input>
    <button>{user.status?'Submit':'Submitted'}</button>
    </form>
    </div>  
  )
}

ReactDOM.render(
  <UserForm/>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
