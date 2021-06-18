import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginLogoutWithHook(){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  return(<div>
    Enter username:<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
    Enter password:<input type="password" id="password" value={password} onChange={(f) => setPassword(f.target.value)}></input>
    <button onClick={() => alert("Username:"+username+" Password:"+password)}>Submit</button>
  </div>);
}

ReactDOM.render(
<LoginLogoutWithHook />,
  document.getElementById('root')
);