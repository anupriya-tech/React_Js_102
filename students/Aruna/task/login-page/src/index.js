import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Login/Logout Page

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={value: " "}
    this.state={pwd: " "}
    this.handleUsername=this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleLoginBtn=this.handleLoginBtn.bind(this);
    this.handleLogoutBtn=this.handleLogoutBtn.bind(this);
  }
       handleUsername(user){
        this.setState({value: user.target.value});
       }
       handlePassword(pass){
        this.setState({pwd: pass.target.pwd});
       }
       handleLoginBtn(loginn){
            alert("Successfully logedin");
            loginn.preventdefault();
       }
       handleLogoutBtn(lgt){
         alert("Please Login");
         lgt.preventdefault();
       }

     render(){
       return(
         <form>
           <label>UserName : 
           <input type="username" value={this.state.value} onChange={this.handleUsername}/> </label>
           <br></br><br></br>
           <label>PassWord : 
           <input type="password" placeholder=" " pwd={this.state.pwd}  onChange={this.handlePassword}/> </label>
           <br></br><br></br>
           <button onClick={this.handleLoginBtn}>Login </button>
          
           <button onClick={this.handleLogoutBtn}>Logout</button>

         </form>
       )
     }
  }
  ReactDOM.render(
  <Login/>, document.getElementById("root")
  );
