import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handlesubmit(event){
    const {username, password} = this.state;
    alert('Username: ' + username + ' \nPassword: ' + password);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handlesubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <label>
          <input type="submit" value="Login" />
        </label>
      </form>
    );
  }

}

ReactDOM.render(
  <LoginForm />
  ,document.getElementById("root") );