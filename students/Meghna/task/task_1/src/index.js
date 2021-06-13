import React from 'react';
import ReactDOM from 'react-dom';
import bulbon from './bulbon.gif';
import bulboff from './bulboff.gif';


class ToggleComp extends React.Component{
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
    console.log("yes state is getting changed.");
  }

  render(){
    const isoned = this.state.isOn;
    let img;
    let btntxt;

    if(isoned){
      img = <img src={bulboff} alt="logo" />
      btntxt = 'ON'
    }else{
      img = <img src={bulbon} alt="logo" />
      btntxt = 'OFF'
    }

    return(
      <div>
        {img}  
        <button onClick={this.myHandler}>{btntxt}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleComp />
  ,document.getElementById("root") );