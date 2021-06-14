import React from 'react';
import ReactDOM from 'react-dom';
import "./login.css";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uname : '', upwd:''}
    this.handleUname = this.handleUname.bind(this);
    this.handleUpwd = this.handleUpwd.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleUname(event) {
    this.setState( { uname : event.target.value} );
  }
  handleUpwd(event){
    this.setState( { upwd : event.target.value }); 
  }
  handleSubmit(event){
    alert(`username : ${this.state.uname} 
    Password: ${this.state.upwd}`)
  }
  render() {
    return(
      <div class="login">
        <form onSubmit={ this.handleSubmit }>
          <div class="title">
          <label > Login Page </label >
          </div>
          <label>User Name </label>
          <input type="text" value= { this.state.uname} onChange={ this.handleUname } required/>
          <label>Password </label>
          <input type="password" value= { this.state.upwd} onChange={ this.handleUpwd } required/>
          < button >Submit </button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(
  <LoginPage /> ,
  document.getElementById("root")
);
