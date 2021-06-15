import React from "react";
import ReactDOM from "react-dom";

import lightOff from "./pic_bulboff.gif";
import lightOn from "./pic_bulbon.gif";

class ImgToggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOn:true};
    this.myHandler = this.myHandler.bind(this);
  }

  myHandler(){
    this.setState( state => ({      
      isOn: !state.isOn
    })
    );
    console.log("yes state is changed.");
  }

  render(){
    const isON = this.state.isOn;
    let light;
    let btn;

    if(isON){
      light = <img src={lightOff} alt="LIGHT_OFF" />
      btn = 'ON'
    }else{
      light = <img src={lightOn} alt="LIGHT_ON" />
      btn = 'OFF'
    }

    return(
      <div>
        {light}  
        <button onClick={this.myHandler}>{btn}</button>
      </div>
    );
  }
  
}

ReactDOM.render(
  <ImgToggle /> ,document.getElementById("root") 
  );