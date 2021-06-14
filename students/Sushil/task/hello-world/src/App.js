import React from 'react';
import './App.css';
import bulbOff from './img/bulb-off.png';
import bulbOn from './img/bulb-on.png';

class App extends React.Component {

  constructor(props) {
    super(props)
   this.state = {
    open: true
  }
}
  toggleImage = (e) => {
   
    this.setState(state => ({ open: !this.state.open }))
  }

  render() {
    // const imageName = this.getImageName();
    return (
      <div>
        <img style={{width: '20%'}} src={this.state.open ? bulbOn : bulbOff}  alt="toggle Images" /><br/>
        <button style={{backgroundColor: 'red', padding: '2%', color: 'white'}} onClick={this.toggleImage}>Click</button>
      </div>
    );
  }
}
// fvfvvv

export default App;
