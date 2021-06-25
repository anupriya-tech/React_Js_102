import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let products = [
    { pid:1, pname: "Shirt", price: 200},
    { pid:2, pname: "Pant", price: 300},
    { pid:3, pname: "Jeans", price: 400}
  ];

 class itemlist extends React.Component{
   constructor(props){
     super(props);
     this.state = { item: ""   
                  };
   }
   render(){
     return(
       <div>
         
       </div>
     );
   }
 }
  
class Items extends React.Component {
    constructor(props) {
      super(props);
      this.state = { qty: 1 };
      this.add = this.add.bind(this);
      this.subtract = this.subtract.bind(this);      
    }
  
    add() {
      this.setState({
        qty: this.state.qty + 1
      });
    }
  
    subtract() {
      this.setState({
        qty: this.state.qty - 1
      });
    }   
  
    render() {
      return (
        <div>
              <button onClick={this.add}> + </button>{this.state.qty}
              <button onClick={this.subtract} disabled={this.state.qty < 1}> - </button>
              {this.props.price}
        </div>
      );
    }
  }

ReactDOM.render(
  <Items />
  ,document.getElementById("root") 
  );  