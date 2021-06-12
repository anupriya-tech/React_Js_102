import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
function imageOn(props){
  return (
  <div>
       <img src="https://static.dezeen.com/uploads/2016/01/light-bulb-dezeen.jpg" alt="bulbon" />
  </div>
  )
} 

function imageOff(props){
  return (
  <div> 
     <img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png" alt="bulboff" />
  </div>
  )
}
function btnOn(props){
  return (
    <button onClick={props.onClick}>BulbOn</button>
  )
}

function btnOff(props){
  return (
    <button onClick={props.onClick}>BulbOFF</button>
  )
}

function imgOnoff(props){
  const isTrue=props.isTrue;
  if(isTrue){
      return <imageOn/>;
  }
  return <imageOff/>;
}

class Bulbonoff extends React.Component{
  constructor(props){
    super(props);
     this.state={isbtnOn: false};
     this.handlebulbOnClick=this.handlebulbOnClick.bind(this);
     this.handlebulbOffClick=this.handlebulbOffClick.bind(this);
    
  }

  handlebulbOnClick(){
    this.setState({isbtnOn: true});
  }
  handlebulbOffClick(){
    this.setState({isbtnOn: false});
  }

  render(){
    const isbtnOn=this.state.isbtnOn;
    let button;
    if(isbtnOn){
    button=<btnOn onClick={this.handlebulbOnClick}/>;
    }else{
      button=<btnOff onClick={this.handlebulbOffClick}/>;
    }
    return(
      <div>
        <imgOnoff isTrue={isbtnOn}/>
        {button}
      </div>
    )
  }
}


ReactDOM.render(
  <Bulbonoff/>, document.getElementById("root"));

