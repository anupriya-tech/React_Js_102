import React, { Component } from 'react';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state={
             username : '',
             password : ''
        }
        this.handleFormUser = this.handleFormUser.bind(this);
        this.handleFormPass = this.handleFormPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleFormUser(event) {
      this.setState({
           username : event.target.value
         
      });
      }
      handleFormPass(event) {
        this.setState({
           
             password : event.target.value
        });
        }
      
       handleSubmit(event) 
      {
          event.preventDefault();
          alert(`Form submitted', Username: ${this.state.username}, & Password: ${this.state.password}`)
      }
    
render() {


  return (
    <div className="wrapper">
      <h1>Login Page</h1>
      <div>
     <form onSubmit={this.handleSubmit}> 
      <div>
        Username<br />
        <input type="text" value={this.state.username} onChange={this.handleFormUser} />
      </div>
      <div>
        Password<br />
        <input type="password" value={this.state.password} onChange={this.handleFormPass} />
      </div>
     
      <input type="submit" value="submit"/><br />
      </form>
    </div>
    
    </div>
  );
}
}

export default App;