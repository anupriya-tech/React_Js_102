import './App.css';
import reactDom from 'react-dom';
import React, { useState } from 'react';

function MyLoginHook(){
  const [stateHook, setStateHook] = useState({su_userid: "", su_password: "", lo_userid: "", lo_password:"", su_flag: false, lo_flag: false});


  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setStateHook({...stateHook, [name]:value})
  }

  const handleSignup = (event) => {
    // event.preventDefault();

  alert("You are successfully signed up use the same credetials to login")
    setStateHook({...stateHook, su_flag: true})

  }


  const handleLogin = (e) => {

    if(stateHook.lo_userid === stateHook.su_userid && stateHook.lo_password === stateHook.su_password){
      
      /*setStateHook({...stateHook, su_flag:false})
      setStateHook({...stateHook, lo_flag:true})*/
      stateHook.su_flag = false;
      stateHook.lo_flag = true;
    } else{
      e.preventDefault();
      alert("Invalid Credentials!! Please enter valid login details.")
    }
  }


  const handleLogout = () => {

    stateHook.lo_userid = "";
    stateHook.lo_password = "";
    stateHook.lo_flag = false;
    stateHook.su_flag = true;

    alert("You are successfully logged out");
  }


  if (stateHook.su_flag) {
    return(
      <div className="AppContainer">
          <h3>Enter the Credentials to login</h3>
          <label>User Id: <input type='text' name="lo_userid" value={stateHook.lo_userid} onChange={handleFormChange} /></label><br/>
          <label>Password: <input type='password' name="lo_password" value={stateHook.lo_password} onChange={handleFormChange} /></label><br/>
          <div className="btn-container"><input type='button' value='Signin' onClick={handleLogin}/></div>
      </div>
    )
  }
  if(stateHook.lo_flag){
    return(
      <div className="AppContainer">
          <h3>Welcome {stateHook.lo_userid}</h3>
          <p>click on Logout to signout to login screen</p>
          <p className="btn-container"><input type="button" value="Logout" onClick={handleLogout} /></p>
      </div>
    )
  }
    return(
      <div className="AppContainer">
          <h3>Please Signup to see login Screen</h3>
          <label>User Id: <input type='text' name="su_userid" value={stateHook.su_userid} onChange={handleFormChange} /></label><br/>
          <label>Password: <input type='password' name="su_password" value={stateHook.su_password} onChange={handleFormChange} /></label><br/>
          <div className="btn-container"><input type='button' value='Signup' onClick={handleSignup}/></div>
      </div>
    )

}



export default MyLoginHook;