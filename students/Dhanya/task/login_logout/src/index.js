import React from 'react';
import ReactDOM from 'react-dom';

class LoginLogout extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:'', password:''};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleUsername(event){
    this.setState({value: event.target.username});
  }
  
  handlePassword(event){
    this.setState({value: event.target.password});
  }

  handlesubmit(event){
    alert('Username' + this.state.username + '\nPassword' + this.state.password);
    event.preventDefault();
  }

  render(){
    return(<form onSubmit={this.handlesubmit}>
      <label>
        Username:
        <input type="text" value={this.state.username} onChange={this.handleUsername} />
      </label>
      <label>
        Username:
        <input type="password" value={this.state.password} onChange={this.handlePassword} />
      </label>      
      <input type="submit" value="Submit" />
    </form>);
  }
}

ReactDOM.render(
  <LoginLogout />,
  document.getElementById('root')
);