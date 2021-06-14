import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LogFrom extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChangeform = this.handleChangeform.bind(this);
    this.handleLoginInform = this.handleLoginInform.bind(this);
    this.handleLoginOutform = this.handleLoginOutform.bind(this);
     }

     handleChangeform(event){
      this.setState({value: event.target.value});
    }
  
    handleLoginInform(event){
      alert('Are you sure you want to login in? ' + this.state.value);
      event.preventDefault();
    }

    handleLoginOutform(event){
      alert('Are you sure you want to log out? ' + this.state.value);
      event.preventDefault();
    }
 

render(){
   return(
    <form >
    <label>
    User Name 
    </label>
    <input type="email" name="Email" required></input>
    <label>
     Password
    </label>
    <input type="password" name="password" required></input>

    <button type="submit" name="login" onClick={this.handleLoginInform}>Login In </button>
    <button type="submit" name="logout" onClick={this.handleLoginOutform}>Login Out </button>
    </form>
   );
}
}

ReactDOM.render(
  <LogFrom />
  ,document.getElementById("root") );

  