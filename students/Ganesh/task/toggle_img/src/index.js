import React from 'react';
import ReactDOM  from 'react-dom';

class MyToggleComp extends React.Component {
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
          <button onClick={this.myHandler}> OFF </button>
          <img src="images/bulbon.jpg" width="200" height="250" alt=""></img>
          </center>
        </div>
      )
    }
    else {
      return(
        <div>
          <center>
          <button onClick={this.myHandler}> OFF </button>
          <img src="images/bulboff.jpg" width="200" height="250" alt=""></img>
          </center>
        </div>
      )
    }
    
  }
  // 2nd way
  // render() {
  //   return(
  //     <div>
  //       <center>
  //       <button onClick={this.myHandler}> {this.state.isOn ? 'OFF' : 'ON'} </button>
  //       {
  //         this.state.isOn ? <img src="images/bulbon.jpg" width="200" height="250"></img> : 
  //         <img src="images/bulboff.jpg" width="200" height="250"></img>
  //       } 
  //      </center>
  //     </div>
  //   );
    
  // }
}

ReactDOM.render(
  <MyToggleComp/>, document.getElementById("root")
)