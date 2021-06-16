import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MyComponentWithHook() {
  const [user, setUser] = useState({ name: '', pass: '', isLogin: false });
  const handleUpdateUser = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (event) => {
    if (user.name === "" && user.pass === "") {
      alert("..........Please Do Login.........");
    }
    else 
    {
      if (!user.isLogin) {
        alert("You are Logged In Sucessfully....\n Name:" + user.name + "\n Password:" + user.pass);
        setUser({ flag: true });
        event.preventDefault();
      }
      else {
        setUser({ name: user.name });
        setUser({ pass: user.pass });
        setUser({ flag: true });
        event.preventDefault();
      }
    }
  };

  let button;
  user.isLogin ? button = "Logout" : button = "Login"
  return (
    <div>
      <label>
        Name:
          <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleUpdateUser} />
      </label>
      <br></br>
      <label>
        Password:
          <input type="text" name="Pass" placeholder="Password" value={user.pass} onChange={handleUpdateUser} />
      </label>
      <br></br>
      <input type="submit" value={button} onClick={handleSubmit}></input>
    </div>
  );
}

ReactDOM.render(<MyComponentWithHook />, document.getElementById("root"));