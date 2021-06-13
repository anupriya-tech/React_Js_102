import React from 'react';
import ReactDOM  from 'react-dom';

class MyToggleComponent extends React.Component {
  constructor(props) {
    super(props);
   this.state = {isOn :true};
   this.myHandler=this.myHandler.bind(this);
  }
  myHandler() {
    this.setState(state => ({
      isOn : !state.isOn
      
    })
    );
    
  }
  render() {
    if (this.state.isOn) {
      return(
        <div>
          <center>
            <img src="img/pic_bulbon.gif" width="400" height="350" alt="ON" style = {{marginBottom: '20px'}}></img>
          </center>
          <center>
            <button onClick={this.myHandler} style = {{color:'#000', background:'rgb(255 155 54)', borderWidth: 5 , borderRadius: 15, paddingLeft: '20px', paddingRight: '20px'}}><strong> OFF </strong>  </button>
          </center>
        </div>
      )
    }
    else {
      return(
        <div>
          <center>
            <img src="img/pic_bulboff.gif" width="400" height="350" alt="OFF" style = {{marginBottom: '20px'}}></img>          
          </center>
          <center>
            <button onClick={this.myHandler} style = {{color:'#000', background:'rgb(255 155 54)', borderWidth: 5 , borderRadius: 15, paddingLeft: '20px',  paddingRight: '20px'}}><strong> ON </strong></button>
          </center>
        </div>
      )
    }
    
  }
}

ReactDOM.render(
  <MyToggleComponent/>, document.getElementById("root")
)