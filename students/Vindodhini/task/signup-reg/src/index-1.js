import React from 'react';
import ReactDom from 'react-dom';
import reactimg from './images/reactimg.png';
import jsimg from './images/jsimg.png';

function ImageToggleOn(props){
  return <img src={reactimg} alt="no  1" />
}


function ImageToggleOff(props){
  return <img src={jsimg} alt="no  2" />
}


function OnButton(props){
  return(
      <button onClick={props.onClick}>On</button>
  );
}
function OffButton(props){
  return(
      <button onClick={props.onClick}>Off</button>
  );
}

function ImageToggle(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <ImageToggleOn />;
  }
  return <ImageToggleOff />;
}


class ImageToggleOnComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOn : false};
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
  }

  handleOnClick(){
    this.setState({isOn:true});
  }

  handleOffClick(){
    this.setState({isOn:false});
  }
  render(){
    const isOnBtn = this.state.isOn;
    let button;

    if(isOnBtn){
      button = <OffButton onClick={this.handleOffClick} />;
    }else{
      button = <OnButton onClick={this.handleOnClick} />;
    }

    return(
        <div>
          <ImageToggle isTrue={isOnBtn} />
          {button}
        </div>
    );
  }
}
ReactDom.render(
  <ImageToggleOnComp />
  ,document.getElementById("root")
);