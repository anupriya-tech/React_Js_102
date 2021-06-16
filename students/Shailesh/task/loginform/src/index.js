import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Loginform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameValue: '',
      emailValue: ''
    };
    this.handlerChangeName = this.handlerChangeName.bind(this);
    this.handlerChangeEmail = this.handlerChangeEmail.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerLogOut = this.handlerLogOut.bind(this);
  }

  handlerChangeName(event){
    this.setState({
      nameValue: event.target.value,
      
    });
  }
  handlerChangeEmail(event){
    this.setState({
      emailValue: event.target.value
    });
  }
  
  handlerSubmit(event){
    alert('User Name : ' + this.state.nameValue + ' , ' + 'Email Address : ' + this.state.emailValue) 
    event.preventDefault();
  }
  handlerLogOut(event){
   this.setState({
     nameValue : '',
     emailValue : ''
   })
  }

  render(){
    return(
      <div className='form-box'>
        <h4>Login Form</h4>
        <form onSubmit={this.handlerSubmit}>
          <div className='username'>
          <label>User Name  : </label>
          <input type='text' value={this.state.nameValue} onChange={this.handlerChangeName} />
          </div>
          <div className='emailadrs'>
          <label>Email Address : </label>
          <input type='text' value={this.state.emailValue} onChange={this.handlerChangeEmail} />
          </div> 
          <div className='btn-box'></div>
          <input type='submit' value='Login'  className='sbtn'/><br/><br/>
          <h6>If You Want to Logout Please Click Logout Button</h6>
          <input  type='button'  value='Logout' onClick={this.handlerLogOut} className='obtn' />
        </form>
      </div>
    );
  }

}

ReactDOM.render(
  <Loginform />,
  document.getElementById('root')
);

