import React from 'react';
import ReactDOM from 'react-dom';

const defaultUname = "india";
const defaultPass = "#india";

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {namevalue:''};
    this.state = {pwdvalue:''};
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleUserNameChange(event){
    this.setState({namevalue: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({pwdvalue: event.target.value});
  }

  handlesubmit(event){
    if(this.state.namevalue == defaultUname && this.state.pwdvalue == defaultPass)
    {
      alert('Welcome , ' + this.state.namevalue + '. You are logIn successfully !!!');
      event.preventDefault();
    }
    else
    {
      alert("Read Note and Try Again !!");
      event.preventDefault();
    }

  }

  render(){
    return(
          <form onSubmit={this.handlesubmit}>
            <div class="col-sm-4">
              <p>NOTE : Enter UserName: india  and  Password: #india</p>
              <div class="form-group">
                <label>UserName: </label>
                <input type="text" value={this.state.namevalue} onChange={this.handleUserNameChange} class="form-control" />
              </div>
              <div class="form-group">
                <label>Password: </label>
                <input type="password" value={this.state.pwdvalue} onChange={this.handlePasswordChange} class="form-control" />
              </div>
              <div class="form-group">
              <input type="submit" value="Submit" class="btn btn-primary"/>
              </div>
           </div>
         </form>
      );
  }
}

ReactDOM.render(
  <MyForm />
  ,document.getElementById("root") );

