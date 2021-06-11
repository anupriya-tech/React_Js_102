import React from 'react';
import ReactDOM from 'react-dom';

function MyHello(props){
  return <h1>hi from my hello.</h1>
}

function YourHello(props){
  return <h1>hi from your hello.</h1>
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>Logout</button>
  );
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }
  return <YourHello />;
}

class LoginComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick(){
    this.setState({isLoggedIn :false});
  }

  render(){
    const isLogged = this.state.isLoggedIn;
    let button;

    /* if(isLogged){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else{
      button = <LoginButton onClick={this.handleLoginClick} />;
    } */

    {isLogged ?
      button = <LogoutButton onClick={this.handleLogoutClick} />
      :
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <SayHello isTrue={isLogged} />
        {button}
      </div>
    );
  }

}

ReactDOM.render(
  <LoginComponent />
  ,document.getElementById("root") );