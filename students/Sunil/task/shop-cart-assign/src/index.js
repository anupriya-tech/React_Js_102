import React from 'react';
import ReactDOM from 'react-dom';
//import {Card,CardBody,CardImg,CardSubtitle,CardTitle,Button,CardText} from 'reactstrap';
import './index.css';

const items=[
  {id:1,brand:"Select", value:"Select"},
  {id:2,brand:"oppo", value:"oppo"},
  {id:3,brand:"vivo", value:"vivo" },
  {id:4,brand:"realme", value:"realme" },
  {id:5,brand:"OnePlus", value:"OnePlus" },
  {id:6,brand:"Samsung", value:"Samsung" },
  ];
  var arr=[];

class Shop extends React.Component{
  constructor(props) {
    super(props);
    this.state=this.getInit();
    console.log(this.state.Quantity);
    console.log('in constr');
    this.addQuantity=this.addQuantity.bind(this);
    this.clearQuantity=this.clearQuantity.bind(this);
    this.checkout=this.checkout.bind(this);
  }
  
   getInit=()=>(
    {mobile:'',Quantity:0});

  addQuantity(e){
    this.setState({mobile:e.target.value,Quantity:this.state.Quantity+1});  
    console.log(this.state.mobile);
    //arr.push(this.state.mobile);
    console.log(arr);
   // alert(`Model is: ${this.state.mobile} & Quantity is: ${this.state.Quantity}`);
   alert("items added");
  }

  clearQuantity(){
    
    this.setState(this.getInit());
    arr.length=0;
    console.log(this.state.mobile);
    alert('Cart cleared');
  }

  checkout(){
    //alert(`Model is: ${this.state.mobile} & Quantity is: ${this.state.Quantity}`); 
    //arr.push(this.state.mobile);
    alert(`Your cart contains ${arr.slice(1)}`);
  }

  render() { 
    var cartno;
    cartno=arr.push(this.state.mobile);
    return (  
   
      <div>
        <select onChange={this.addQuantity} >
          {items.map((option)=>( 
          <option key={option.id} value={option.value}>{option.brand}</option>)
          )}
        </select>
        <button onClick={this.clearQuantity}>Clear</button>
        <button onClick={this.checkout}>Checkout</button>
        <h3>total items added:{cartno-1}</h3>
        <h3>Cart Items:{arr.map((item)=><p>{item}</p>)}</h3> 
      </div>
        
    );
  }
}

ReactDOM.render(
  <Shop/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital