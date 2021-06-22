import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Lifecycle of a component
//1.Initialization

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

  //updateing


  render() { //gets called by ReactDOM
    console.log("hello from render",this.state.isOn)    
    return (
      <div>
        <h1>Hello {this.props.name} There {this.state.isOn}</h1>   
        <button onClick={this.myHandler}>{this.state.isOn ? 'ON':'OFF'}</button>     
      </div>
    );
  }
}



ReactDOM.render(
  <MyLifeCycleComponent name="rajesh"/>
  ,document.getElementById("root") );