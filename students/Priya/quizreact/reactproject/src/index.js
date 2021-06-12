import React from 'react';
import ReactDOM from 'react-dom';
import imageOne from  "./image/OFFbulb.jpg";
import imageTwo from  "./image/ONbulb.jpg";
import './index.css';

class ToggleBothImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOnToggle:true}
    this.myHandler = this.myHandler.bind(this);
  }
  myHandler(){
    this.setState( state => ({
      isOnToggle : !state.isOnToggle,
    })

    );

    console.log("toggle Images");
  }

render(){
 
  return(
    <div onClick={this.myHandler}>
      {this.state.isOnToggle ?
      <img src={imageOne} alt=""/> :
      <img src={imageTwo} alt=""/>

      }
    
    </div>
  )
}



}




ReactDOM.render(
  <React.StrictMode>
  <ToggleBothImage />
  </React.StrictMode>,
  document.getElementById('root')
);

