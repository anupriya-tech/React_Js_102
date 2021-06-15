import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
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
    alert(`once again please check your user name and password . \n
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
          <h1>User Login Form..</h1>
          <label>
            Username: 
            <input name='name' placeholder='Username' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <br /><br />
          <label>
            Password:
            <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
          </label><br /><br />
         <input type="submit" class="btn btn-primary" value="Login" /> 
         <input type="submit" class="btn btn-primary" value="Logout" />
        </div>
      
      </form>
    );
  }

}

ReactDOM.render(
  <React.StrictMode>
    
    <MyForm />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
