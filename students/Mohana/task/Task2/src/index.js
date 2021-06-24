import React from 'react';
import ReactDOM from 'react-dom';

class LogInOut extends React.Component{
  constructor(props){
    super(props);
    this.state = { username:'',
                    pwd:'',
               isLogin:false };
    this.handleUser = this.handleUser.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUser(event){
    this.setState({
      username:event.target.value
    });
  }

  handlePwd(event){
    this.setState({
      pwd:event.target.value
    });
  }


  handleSubmit(event){
    if( this.state.username === "" && this.state.pwd === ""){
      alert("Please Login");
    }else{
      if(!this.state.isLogin){
      alert ("You are Logged In Sucessfully.\n User Name:" + this.state.username + 
      "\n Password:" + this.state.pwd);
      this.setState({isLogin:true})
      event.preventDefault();
      }
      else{
        this.setState({username:""});
        this.setState({pwd:""});
        this.setState({isLogin:false})
        event.preventDefault();
      }
    }

  }

  render(){
    let btn;
      this.state.isLogin ? btn = "Logout" : btn = "Login"
      
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
            User Name:
            <input type="text" value={this.state.username} onChange={this.handleUser}></input>
        </label>       <br/>
        <label>
            Password:
            <input type="password" value={this.state.pwd} onChange={this.handlePwd}></input>
        </label>        <br/>
        <input type="submit" value={btn}></input>
      </form>
    );
  }
}

ReactDOM.render(
     <LogInOut />
  ,document.getElementById("root") 
  );