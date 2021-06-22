import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Lifecycle of a component
//1.Initialization

class MyLifeCycleComponent extends React.Component{
  //Initialization
  constructor(props){
    super(props);
    console.log("hello from intitialization.")
  }

  //Mounting

  componentWillMount(){ //before rendering
    console.log("hello from component will mount.")
  }

  componentDidMount(){ //after rendering
    console.log("hello from component did mount.")
  }

  render() { //gets called by ReactDOM
    console.log("hello from render")
    return (
      <div>
        <h1>Hello There</h1>        
      </div>
    );
  }
}

ReactDOM.render(
  <MyLifeCycleComponent />
  ,document.getElementById("root") );