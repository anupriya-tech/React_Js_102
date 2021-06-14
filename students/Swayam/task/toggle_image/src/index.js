
import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {loginForm: false};
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
  }

  render(){
    return (
      <div>
        <label>
          Username:
          <input type="text" value="this.username.state" onChange="this.username.state" />
        </label>
        <label>
          Password:
          <input type="text" value="this.password.state" onChange="this.password.state" />
        </label>
        <input type="submit" value="Login" />
      </div>
    );
  }

}

ReactDOM.render(
  <LoginForm />
  ,document.getElementById("root") );