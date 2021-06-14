import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from './images/bulbonn.jpg';
import img2 from './images/bulboff.jpg';

function fun(status){
  if(status==='image1'){
    return img1;
  }
  else return img2;
}

class Imagetoggle extends React.Component{

      constructor(props){
        super(props);
        this.state={BulbOn:true};
        this.handlerImage=this.handlerImage.bind(this);
      }
    
      handlerImage(){
        this.setState(state=>({BulbOn:!state.BulbOn}));
      }

      getImage=()=>this.state.BulbOn?'image1':'image2'
      
  render(){
          return(
            <div>
                <img src={fun(this.getImage())} onClick={this.handlerImage} alt="Not found"/>
            </div>
        );
  }
}

ReactDOM.render(<Imagetoggle/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
