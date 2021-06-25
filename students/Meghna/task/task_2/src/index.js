import React from 'react';
import ReactDOM from 'react-dom';


class LoginComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      pwd:'',
      isLogin:false
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event){
    this.setState({
      username:event.target.value
    });
  }

  handlePwdChange(event){
    this.setState({
      pwd:event.target.value
    });
  }


  handleSubmit(event){
    if( this.state.username === "" && this.state.pwd === ""){
      alert("Please Do Login");
    }else{
      if(!this.state.isLogin){
      alert ("You are Logged In Sucessfully....\n Name:" + this.state.username + "\n Password:" + this.state.pwd);
      this.setState({isLogin:true})
      event.preventDefault();
      }else{
        this.setState({username:""});
        this.setState({pwd:""});
        this.setState({isLogin:false})
        event.preventDefault();
      }
    }
  }

  render(){
    let btn;
    {
      this.state.isLogin ? btn = "Logout" : btn = "Login"
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
            UserName:
            <input type="text" value={this.state.username} onChange={this.handleUserChange}></input>
        </label>
        <br></br>
        <label>
            Password:
            <input type="password" value={this.state.pwd} onChange={this.handlePwdChange}></input>
        </label>
        <br></br>
        <input type="submit" value={btn}></input>
      </form>
    );
  }
}

ReactDOM.render(
  <LoginComp />
  ,document.getElementById("root") );