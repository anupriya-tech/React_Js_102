import React from 'react';
import ReactDOM from 'react-dom';

class BulbOnOff extends React.Component{
  constructor(props){
    super(props);
    this.state = {bulbIsOn:true};
    this.changeImg = this.changeImg.bind(this);
  }

  changeImg(){
    this.setState(state => ({
        bulbIsOn: !state.bulbIsOn
    })
    );
  }

  render(){
    return (
      <img src={this.state.bulbIsOn ? 'https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg' : 'https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg'} onClick={this.changeImg} alt="light on/off" />
    );
  }
}

ReactDOM.render(
  <BulbOnOff/>
  ,document.getElementById("root") );
