import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './BlubOn.JPG';
import img2 from './BlubOff.JPG';

// const img1 = require(`./BlubOn.JPG`);
// const img2 = require(`./BlubOff.JPG`);

function ImgOff(props){
  return <div> <img src={img1}  alt="blubOff" height="300" /> </div>
}

function ImgOn(props){
  return <div> <img src={img2}  alt="blubOn" height="300" /> </div>
}

function OnBtn(props){
  return(
    <button onClick={props.onClick}>ON</button>
  );
}

function OffButton(props){
  return(
    <button onClick={props.onClick}>OFF</button>
  );
}

function PutOnOff(props){
  const isTrue = props.isTrue;

  if(isTrue){
    return <ImgOff />;
  }
  return <ImgOn />;
}

class ToogleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {isbtnOn: false};
    this.handlePutOnClick = this.handlePutOnClick.bind(this);
    this.handlePutOffClick = this.handlePutOffClick.bind(this);
  }

  handlePutOnClick(){
    this.setState({isbtnOn: true});
  }

handlePutOffClick(){
    this.setState({isbtnOn :false});
  }

  render(){
    const isPutOn = this.state.isbtnOn;
    let button;

    if(isPutOn)
    button = <OffButton onClick={this.handlePutOffClick} /> 
    else
    button = <OnBtn onClick={this.handlePutOnClick} /> 
    

    return (
      <div>
        <PutOnOff isTrue={isPutOn} />
        {button}
      </div>
    );
  }

}

ReactDOM.render(
  <ToogleComponent />
  ,document.getElementById("root") );