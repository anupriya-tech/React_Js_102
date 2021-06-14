import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import img1 from './images/bulbOn.jpg';
import img2 from './images/bulboff.jpg'


class Bulbonoff extends React.Component {
  constructor(props) {
      super(props);
          this.state = { 
            isOn:false,
          };
          this.myHandler = this.myHandler.bind(this);
      }
      myHandler(){
      this.setState( state => ({
          isOn: !state.isOn,
      })
      );
      console.log('it is working handler');
  }   
  render(){
      return(
        <>
          <div className="img-box">
          <img src={this.state.isOn ? img1 : img2} alt="image"/>
          </div>
         
          <button onClick={this.myHandler} className='onoff-button' style={this.state.signcolor}> {this.state.isOn ? 'OFF' : 'ON' } </button>
          </>
      );
  }  

}
ReactDOM.render(
  <Bulbonoff />,document.getElementById('root')
);
