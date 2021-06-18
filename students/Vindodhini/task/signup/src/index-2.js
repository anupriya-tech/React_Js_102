import React from 'react';
import ReactDom from 'react-dom';
//import App from "./App";

const Formsub = ({user, onSignOut})=> {
    
    return (
      <div>
         <strong>{user.username}</strong>!
        <h2  onClick={onSignOut} >Sign out</h2>
      </div>
    )
  }
  
  class LoginForm extends React.Component {
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )
    }
  
  }
  
  
  class AppForm extends React.Component {
    
    constructor(props) {
      super(props)
      
      this.state = {
        user: null
      }
    }
    
   
    signIn(username, password) {
     
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      
      this.setState({user: null})
    }
    
    render() {
      
      return (
        <div>
         
          { 
            (this.state.user) ? 
              <Formsub 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
  }
  
  ReactDom
  .render(<div>
   
    <AppForm/> 
      <Formsub />
   
     
  </div>, document.getElementById('root'))
  
