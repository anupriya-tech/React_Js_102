import React from 'react';

class Form extends React.Component{
    constructor(props){
      super(props);
      this.state = {name:'',password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
    handleSubmit(event){
      const {name, password} = this.state;
      event.preventDefault();
      alert(`please check your submitted details...\n
        Name : ${name}
        Password : ${password}
      `);
    }
  
    handleChange(event){
      this.setState({ [event.target.name] : event.target.value });
    }
    
    render(){
      return(
        <form  onSubmit={this.handleSubmit}>
          <div>
          <h1>User Login Form..</h1>
            <label htmlFor='name'>Username: </label>
            <input name='name' placeholder='please enter name' value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
            <label htmlFor='password'>Password: </label>
            <input name='password' placeholder='please enter password' value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
            <button>login</button>    <button>logout</button>
            </div>
            </form>
      )
    }
  }

  export default Form;