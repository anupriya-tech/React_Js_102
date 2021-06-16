import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function LoginWithHook(){
  const[user, setUser] = useState({username:'', password:''})

  //const handleInput=(un)=>{setUser(names)=>({...names,[un.target.name]:un.target.value})}
  const handleLogin=(login)=>{ login.preventDefault();
    alert("Successfully loggedIn")
   }
    const handlelogout=(logout)=>{logout.preventDefault();
    alert("Please login")
    }
       return(
         <div>
           <p><b>Login Page</b></p>
         <label> UserName : 
           <input type="text" value={user.username.value} ></input>
         </label><br></br>

          <label> Password   : 
          <input type="text" value={user.password.value} ></input>
        </label><br></br>
          <button onClick={handleLogin}>Login</button>
           <button onClick={handlelogout}>Logout</button>
      </div>
       )
     
  }
  ReactDOM.render(
    <LoginWithHook/>, document.getElementById('root')
  );
