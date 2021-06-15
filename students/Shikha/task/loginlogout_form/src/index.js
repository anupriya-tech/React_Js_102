import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {Username:'',
    password:''};
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }


  handlesubmit(event){
    const {name, password} = this.state;
    alert(`Are you sure you want to submit ? \n
    Name : ${name}
    Password : ${password}`);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({ [event.target.name] : event.target.value });
  }
  render(){
    return(
        
      <form onSubmit={this.handlesubmit}>
        <div className="loginlogout">
          <h1>Login Form</h1>
          <label>
            Username: 
            <input name='name' placeholder='Username' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <br /><br />
          <label>
            Password:
            <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
          </label><br /><br />
          <input type="submit" value="Login" /> <input type="submit" value="Logout" />
        </div>
      
      </form>
    );
  }

}

ReactDOM.render(
  <MyForm />
  ,document.getElementById("root") );