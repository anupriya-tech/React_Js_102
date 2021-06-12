import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

function bulb(props){
  // this.switch = props.power ? <img src="light-bulb-ON.png" /> | <img src="light-bulb-OFF.png" />;
  return (
    <div className="bulbContainer">
      <img src={props.powerSupply ? "light-bulb-ON.png" : "light-bulb-OFF.png"} />
    </div>
  );
}


class lightBulb extends React.Component{
  constructor(props){
    super(props);
    this.state = {power: false};
    this.handleSwitchPush = this.handleSwitchPush.bind(this);
  }

  handleSwitchPush(){
    this.setState(state => ({power: !this.state.power})); 
  }

  render(){
    return(
      <div className="AppContainer">
        {/* <bulb powerSupply={this.state.power} /> */}
        <div className="bulbContainer">
          <img src={this.state.power ? "light-bulb-ON.png" : "light-bulb-OFF.png"} />
        </div>
        <img src={this.state.power ? "switchON.png" : "switchOFF.png"} onClick={this.handleSwitchPush} />
      </div>
    )
  }
}

export default lightBulb;
