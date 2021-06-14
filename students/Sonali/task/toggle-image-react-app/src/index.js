import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
//function with ToggleOn option
function ToggleOn(props){
  return(
    <div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />
  
<button  onClick={props.onClick} type="button" class="btn btn-secondary">On</button>
    
    </div>
  );
}

//function with ToggleOff option
function ToggleOff(props){
  return(
    <div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" />
    
    <button onClick={props.onClick} type="button" class="btn btn-warning">Off</button>
    </div>
  );
}
//class of Bulb
class Bulb extends React.Component{
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
    this.state = {isToggleOn: false};
  }


  handleOnClick(){
    this.setState({isToggleOn: true});
  }

  handleOffClick(){
    this.setState({isToggleOn: false});
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    let button;
    if(isToggleOn){
      return button = <ToggleOff onClick={this.handleOffClick} />
    }else{
      return button = <ToggleOn onClick={this.handleOnClick} />
    }

    }
  }
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Bulb />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
