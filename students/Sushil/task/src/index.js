import React, { useState } from "react";
import ReactDOM from "react-dom";

function LoginLogoutHooks() {
  const [userDetails, setUserDetails] = useState({
    user_name: "",
    password: "",
    flag: true,
  });

  const handleUpdateDetails = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    alert("You are logged in with User Name : " + userDetails.user_name);
    setUserDetails({ flag: false, user_name: userDetails.user_name });
    event.preventDefault();
  };

  const handleLogout = (event) => {
    alert("You are successfully logged out " + userDetails.user_name);
    setUserDetails({ flag: true });
    event.preventDefault();
  };

  // let button;
  // userDetails.flag ? (button = "Login") : (button = "Logout");

  if (userDetails.flag === true) {
    return (
      <div>
        <label>
          Name:
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            value={userDetails.user_name}
            onChange={handleUpdateDetails}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.pass}
            onChange={handleUpdateDetails}
          />
        </label>
        <input type="submit" value="LogIn" onClick={handleSubmit}></input>
      </div>
    );
  } else {
    return (
      <div>
        <input type="submit" value="Logout" onClick={handleLogout}></input>
        {/* <input type="submit" value={button} onClick={handleLogout}></input> */}
      </div>
    );
  }
}

ReactDOM.render(<LoginLogoutHooks />, document.getElementById("root"));