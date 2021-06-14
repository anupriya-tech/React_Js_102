import React from 'react';
import ReactDOM from 'react-dom';

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
    alert(`....The submitted details are....\n
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
          <label htmlFor='name'>Name</label>
          <input name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
          <label htmlFor='password'>Age</label>
          <input name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/><br></br><br></br>
          <button>Signin/ Signup</button>
      </form>
    )
  }
}
  
ReactDOM.render(<Form />, document.getElementById("root"));
