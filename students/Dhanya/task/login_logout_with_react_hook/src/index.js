import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginLogoutWithHook(){
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[submit, submitDetails] = useState(0);

  return(<div>
    Enter username:<input type="text" id="username"></input>
    Enter password:<input type="password" id="password"></input>
    <button onClick={() => submitDetails(alert("Username:"+username+" Password:"+password))}>Submit</button>
  </div>);
}

ReactDOM.render(
<LoginLogoutWithHook />,
  document.getElementById('root')
);