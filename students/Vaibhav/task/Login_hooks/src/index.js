import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MyLoginWithHook(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handelSubmit(event){
        alert('UserName: ' + username  +'' +''+    'Password: ' + password)
        event.preventDefault();
    }

    return (
      <form  onSubmit={handelSubmit} className="formStyle">
        <label className="labelStyle">User Name: 
          <input type='text' name='username' value={username} onChange={ (e) => setUsername(e.target.value) } className="inputStyle" />
        </label>
        <label className="labelStyle">Password : 
          <input type='password' name='password' value={password} onChange={ (e) => setPassword(e.target.value) }  className="inputStyle" />
        </label>
          <button type='submit' className="submitStyle">Login</button>
      </form>  
    );   

}

ReactDOM.render(
  <MyLoginWithHook />
  ,document.getElementById("root") );

