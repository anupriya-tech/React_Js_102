import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';


class MyLogin extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        su_userid: "",
        su_password: "",
        lo_userid: "",
        lo_password:"",
        su_flag: false,
        lo_flag: false
      };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this.handleSignupChange = this.handleSignupChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);

    this.handleLogout = this.handleLogout.bind(this);

  }


  handleSignupChange(event){
    if(event.target.name === "su_userid"){
      this.setState(
        state => ({ su_userid: event.target.value }
        )
      );
    }else{
      this.setState(
        state => ({ su_password: event.target.value })
      );
    }
  }

  handleLoginChange(event){
    
    if(event.target.name === "userid"){
      this.setState(
        state => ({
          lo_userid: event.target.value
        })
      );
    }else{
      this.setState(
        state => ({
          lo_password: event.target.value
        })
      );
    }

  }


  handleSignupSubmit(event){
    event.preventDefault();

    alert("You are successfully signed up use the same credetials to login")
    this.setState(
      state => ({
        su_flag: true
      })
    );
  }

  handleLoginSubmit(event){
    

    if(this.state.lo_userid === this.state.su_userid && this.state.lo_password === this.state.su_password){
      this.setState(
        state => ({lo_flag: true, su_flag: false})
      );
    } else{
    event.preventDefault();
    alert("Invalid Credentials!! Please enter valid login details.")
    }
  }


handleLogout(){
  this.setState(
    state => ({
      lo_userid: "",
      lo_password: "",
      lo_flag: false,
      su_flag: true
    })
  );
  alert("You are successfully logged out");
}

  render(){
    if (this.state.su_flag) {
      return(
        <div className="AppContainer">
          <form className="LoginForm" onSubmit={this.handleLoginSubmit}>
            <h3>Enter the Credentials to login</h3>
          <label>User Id: <input type='text' name="userid" value={this.state.lo_userid} onChange={this.handleLoginChange} /></label><br/>
          <label>Password: <input type='password' name="password" value={this.state.lo_password} onChange={this.handleLoginChange} /></label><br/>
          <input type='submit' value='Signin' />
        </form>
        </div>
      )
    } else if(this.state.lo_flag){
      return(
        <div className="AppContainer">
            <h3>Welcome {this.state.lo_userid}</h3>
            <p>click on Logout to signout to login screen</p>
            <p><input type="button" value="Logout" onClick={this.handleLogout} /></p>
        </div>
      )
    }else{
      return(
        <div className="AppContainer">
          <form className="signupForm" onSubmit={this.handleSignupSubmit}>
            <h3>Please Signup to see login Screen</h3>
            <label>User Id: <input type='text' name="su_userid" value={this.state.su_userid} onChange={this.handleSignupChange} /></label><br/>
            <label>Password: <input type='password' name="su_password" value={this.state.su_password} onChange={this.handleSignupChange} /></label><br/>
            <input type='submit' value='Signup' />
          </form>
        </div>
      )
    }
    
  }
}

export default MyLogin;
