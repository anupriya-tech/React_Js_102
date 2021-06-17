import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './login.css';

export default function LoginForm() {
  const [user ,setUser] = useState({uname:'', upwd:''});
  
  const handleUpdateUSer = (event) =>{
    const {name,value } = event.target;
    setUser({...user, [name]:value})
  }
    const handleSubmit = (event) =>{
      console.log(user);
      alert(`User Name : ${user.uname} 
      Password : ${user.upwd}`)
      event.preventDefault();
    }
  
return(
  <div class="login">
   
        <form  onSubmit={handleSubmit} >
          <div class="title">
          <label > Login Page </label >
          </div>
          <label>User Name </label>
          <input type="text" name="uname" value= { user.uname} onChange ={handleUpdateUSer} required/>
          <label>Password </label>
          <input type="password" name="upwd" value= { user.upwd} onChange ={handleUpdateUSer} required/>
          < button >Submit </button>
        </form>
      </div>
)

}
ReactDOM.render(
  <React.StrictMode>
    < LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);


