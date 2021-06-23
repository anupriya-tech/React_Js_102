import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Lifecycle of a component
//1. Initialization - constructor
//2. Mount- componentWillMount(), render(), componentDidMount()
//3. Update- componentWillReceiveProps(), setState() ,componentWillUpdate(), render(),componentDidUpdate()
//4. Unmount- componentWillUnmount()

class MyLifeCycleComponent extends React.Component{
  //Initialization
  constructor(props){
    super(props);
    this.state = {isOn:true};
    this.myHandler = this.myHandler.bind(this);
    console.log("hello from intitialization.")
  }

  myHandler(){
    this.setState( (state) => ({        
      isOn: !state.isOn     
    }));
    console.log("yes state is getting changed.");
  }

  componentWillReceiveProps(){
    console.log("hello from component recive props.")
  }

  //Mounting
  componentWillMount(){ //before rendering
    console.log("hello from component will mount.")
  }

  componentDidMount(){ //after rendering
    console.log("hello from component did mount.")
  }

  //updating

  componentWillUpdate(){
    console.log("hello from component will update.")
  }

  componentDidUpdate(){
    console.log("hello from component did update.")
  }

  componentWillUnmount(){
    alert("Selected item is removed from cart.")
    console.log("hello from component will unmount.")
  }


  render() { //gets called by ReactDOM
    console.log("hello from render",this.state.isOn)    
    return (
      <div>
        <h1>Hello  {this.props.name} There ,from LifecycleComponent {this.state.isOn}</h1>   
        <button onClick={this.myHandler}>{this.state.isOn ? 'ON':'OFF'}</button>
        <button onClick={this.props.onClick}>Go to Another Component</button>     
      </div>
    );
  }
}

function MyHello(props){
  return <h1>this is just plain component.</h1>
}

function YourHello(props){
  return <h1>this is lifcycle component.</h1>
}

function SayHello(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <MyHello />;
  }
  return <YourHello />;
}

function AnotherButton(props){
  return(
    <button onClick={props.onClick}>Go to Life Cycle Component</button>
  );
}

class ToggleComponent extends React.Component{
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

    {isLogged ?
      button = <AnotherButton onClick={this.handleLogoutClick} />
      :
      button = <MyLifeCycleComponent name = "rajesh" onClick={this.handleLoginClick} />
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
  <ToggleComponent />
  ,document.getElementById("root") );



/* ReactDOM.render(
  <MyLifeCycleComponent name="rajesh"/>
  ,document.getElementById("root") ); */